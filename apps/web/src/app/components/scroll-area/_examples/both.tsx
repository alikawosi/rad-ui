"use client";

import { ScrollArea, ScrollBar } from "@/registry/web/ui";

export const code = `import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function BothScrollbarsExample() {
  return (
    <ScrollArea className="h-72 w-72 rounded-md border">
      <div className="p-4 w-[500px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="mb-4">
            <p className="whitespace-nowrap">
              این یک متن طولانی است که نیاز به اسکرول افقی دارد - ردیف {i + 1}
            </p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
`;

export default function BothScrollbarsExample() {
  return (
    <ScrollArea className="h-72 w-72 rounded-md border">
      <div className="p-4 w-[500px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="mb-4">
            <p className="whitespace-nowrap">
              این یک متن طولانی است که نیاز به اسکرول افقی دارد - ردیف {i + 1}
            </p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
