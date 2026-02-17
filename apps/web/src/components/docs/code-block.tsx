"use client";

import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { cn } from "@/registry/web/lib/utils";

interface CopyButtonProps {
  code: string;
  className?: string;
}

function CopyButton({ code, className }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className={cn(
        "absolute top-3 right-3 z-10 p-2 rounded-md bg-background/80 hover:bg-background border border-border text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
      aria-label="Copy code"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
}

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

/**
 * Collapsible code block with syntax highlighting.
 * Used for example code that can be expanded/collapsed.
 */
export function CodeBlock({
  code,
  language = "tsx",
  className,
}: CodeBlockProps) {
  return (
    <details className={cn("mt-0", className)}>
      <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground py-3 border border-t-0 border-border rounded-b-lg px-4 bg-muted/50">
        مشاهده کد
      </summary>
      <div
        className="relative rounded-b-lg overflow-x-auto border border-t-0 border-border bg-muted"
        dir="ltr"
      >
        <CopyButton code={code} />
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          showLineNumbers
          customStyle={{
            margin: 0,
            borderRadius: 0,
            fontSize: "0.875rem",
            background: "transparent",
          }}
          codeTagProps={{ style: { background: "transparent" } }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </details>
  );
}

interface InstallCodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

/**
 * Simple code block for installation commands.
 * Non-collapsible, always visible.
 * Use language="bash" for syntax-highlighted shell commands.
 */
export function InstallCodeBlock({
  code,
  language,
  className,
}: InstallCodeBlockProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg overflow-x-auto border border-border bg-muted",
        !language && "p-6",
        className
      )}
      dir="ltr"
    >
      <CopyButton code={code} />
      {language ? (
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          showLineNumbers
          customStyle={{
            margin: 0,
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
            background: "transparent",
          }}
          codeTagProps={{ style: { background: "transparent" } }}
        >
          {code}
        </SyntaxHighlighter>
      ) : (
        <pre className="text-sm p-6">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}

interface InlineCodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

/**
 * Non-collapsible syntax-highlighted code block.
 * Used for Usage sections and Advanced Examples.
 */
export function InlineCodeBlock({
  code,
  language = "tsx",
  className,
}: InlineCodeBlockProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg overflow-x-auto border border-border bg-muted",
        className
      )}
      dir="ltr"
    >
      <CopyButton code={code} />
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        showLineNumbers
        customStyle={{
          margin: 0,
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          background: "transparent",
        }}
        codeTagProps={{ style: { background: "transparent" } }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export { CopyButton };
