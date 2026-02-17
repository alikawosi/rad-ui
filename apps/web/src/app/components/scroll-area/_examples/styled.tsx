"use client";

import { ScrollArea } from "@/registry/web/ui";

export const code = `import { ScrollArea } from "@/components/ui/scroll-area";

export default function StyledExample() {
  return (
    <ScrollArea
      className="h-72 w-48 rounded-md border"
      scrollbarThumbClassName="bg-primary hover:bg-primary/80"
    >
      <div className="p-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="mb-2 text-sm">
            آیتم شماره {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
`;

export default function StyledExample() {
  return (
    <ScrollArea
      className="h-72 w-48 rounded-md border"
      scrollbarThumbClassName="bg-primary hover:bg-primary/80"
    >
      <div className="p-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="mb-2 text-sm">
            آیتم شماره {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
