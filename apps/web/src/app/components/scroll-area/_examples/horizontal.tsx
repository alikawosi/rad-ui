"use client";

import { ScrollArea, ScrollBar } from "@/registry/web/ui";
import { Badge } from "@/registry/web/ui";

export const code = `import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const badges = [
  "جاوااسکریپت",
  "تایپ‌اسکریپت",
  "ری‌اکت",
  "نکست",
  "تیلویند",
  "نود",
  "پایتون",
  "گو",
];

export default function HorizontalExample() {
  return (
    <ScrollArea className="w-72 rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-3 p-4">
        {badges.map((badge) => (
          <Badge key={badge} variant="secondary">
            {badge}
          </Badge>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
`;

const badges = [
  "جاوااسکریپت",
  "تایپ‌اسکریپت",
  "ری‌اکت",
  "نکست",
  "تیلویند",
  "نود",
  "پایتون",
  "گو",
];

export default function HorizontalExample() {
  return (
    <ScrollArea className="w-72 rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-3 p-4">
        {badges.map((badge) => (
          <Badge key={badge} variant="secondary">
            {badge}
          </Badge>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
