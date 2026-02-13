import path from "node:path";
import fs from "fs-extra";
import * as p from "@clack/prompts";
import chalk from "chalk";

// ---------------------------------------------------------------------------
// Types matching registry.json schema
// ---------------------------------------------------------------------------

interface RegistryFile {
  path: string;
  type: string;
}

interface RegistryItemDef {
  name: string;
  type: string;
  description: string;
  platform: string;
  dependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
}

interface RegistryJson {
  name: string;
  homepage: string;
  registryDir: string;
  items: RegistryItemDef[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Parse a dependency string like "zod@^3.0.0" into name and version.
 * If no version, returns just the name.
 */
function parseDep(dep: string): { name: string; version?: string } {
  const atIndex = dep.lastIndexOf("@");
  if (atIndex > 0) {
    return {
      name: dep.slice(0, atIndex),
      version: dep.slice(atIndex + 1),
    };
  }
  return { name: dep };
}

/**
 * Derive the relative path from the registryDir.
 * e.g. registryDir="registry/web", path="registry/web/ui/button.tsx" -> "ui/button.tsx"
 */
function getRelativePath(registryDir: string, filePath: string): string {
  return filePath.replace(`${registryDir}/`, "");
}

// ---------------------------------------------------------------------------
// Build Command
// ---------------------------------------------------------------------------

export async function buildCommand(
  registryPath: string,
  opts: { output?: string; cwd?: string }
) {
  const cwd = opts.cwd ? path.resolve(opts.cwd) : process.cwd();
  const registryJsonPath = path.resolve(cwd, registryPath);
  const outputDir = path.resolve(cwd, opts.output ?? "./public/r");

  p.intro(chalk.bold("Build Rad UI Registry"));

  // Check registry.json exists
  if (!(await fs.pathExists(registryJsonPath))) {
    p.log.error(
      `Registry file not found: ${chalk.cyan(registryJsonPath)}`
    );
    p.log.info(
      `Create a ${chalk.cyan("registry.json")} file or specify a path: ${chalk.gray("rad-ui build ./path/to/registry.json")}`
    );
    process.exit(1);
  }

  const s = p.spinner();
  s.start("Reading registry.json...");

  // Read and parse registry.json
  const registry: RegistryJson = await fs.readJson(registryJsonPath);

  s.message(`Building ${registry.items.length} components...`);

  // Ensure output directory exists
  await fs.ensureDir(outputDir);

  // Read lib/utils.ts (shared across all components)
  const utilsPath = path.resolve(cwd, registry.registryDir, "lib", "utils.ts");
  const utilsContent = (await fs.pathExists(utilsPath))
    ? await fs.readFile(utilsPath, "utf-8")
    : null;

  let built = 0;
  const warnings: string[] = [];

  for (const item of registry.items) {
    // Read file contents
    const files = [];
    for (const file of item.files) {
      const filePath = path.resolve(cwd, file.path);
      if (!(await fs.pathExists(filePath))) {
        warnings.push(`${item.name}: ${file.path} not found, skipped`);
        continue;
      }
      const content = await fs.readFile(filePath, "utf-8");
      files.push({
        path: getRelativePath(registry.registryDir, file.path),
        type: file.type,
        content,
      });
    }

    // Extract dependency names (without versions) for the registry output
    const depNames = item.dependencies.map((d) => parseDep(d).name);

    const registryItem = {
      name: item.name,
      type: item.type,
      description: item.description,
      platform: item.platform,
      dependencies: depNames,
      registryDependencies: item.registryDependencies,
      files,
      utils: utilsContent
        ? { path: "lib/utils.ts", content: utilsContent }
        : undefined,
    };

    const outputPath = path.resolve(outputDir, `${item.name}.json`);
    await fs.writeFile(
      outputPath,
      JSON.stringify(registryItem, null, 2),
      "utf-8"
    );
    built++;
  }

  // Generate index.json manifest
  const index = registry.items.map((item) => ({
    name: item.name,
    description: item.description,
    platform: item.platform,
    dependencies: item.dependencies.map((d) => parseDep(d).name),
    registryDependencies: item.registryDependencies,
  }));

  const indexPath = path.resolve(outputDir, "index.json");
  await fs.writeFile(indexPath, JSON.stringify(index, null, 2), "utf-8");

  s.stop(`Built ${built} components + index.json`);

  // Show warnings if any
  if (warnings.length > 0) {
    for (const w of warnings) {
      p.log.warn(w);
    }
  }

  // Summary
  p.log.info(`Output: ${chalk.cyan(outputDir)}`);
  p.outro("Registry built successfully!");
}
