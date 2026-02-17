"use client";

import { ScrollArea, ScrollBar } from "@/registry/web/ui";

export const code = `import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function CustomContainerExample() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border bg-muted/50">
      <div className="p-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="mb-2 p-2 rounded bg-card border border-border"
          >
            آیتم شماره {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar className="bg-muted" />
    </ScrollArea>
  );
}
`;

export default function CustomContainerExample() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border bg-muted/50">
      <div className="p-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="mb-2 p-2 rounded bg-card border border-border"
          >
            آیتم شماره {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar className="bg-muted" />
    </ScrollArea>
  );
}
