"use client";

import { Separator } from "@/registry/web/ui";

export const code = `import { Separator } from "@/components/ui/separator";

export default function BreadcrumbExample() {
  return (
    <div className="flex items-center space-x-2 space-x-reverse text-sm">
      <span className="text-primary">خانه</span>
      <Separator orientation="vertical" className="h-4" />
      <span className="text-primary">کامپوننت‌ها</span>
      <Separator orientation="vertical" className="h-4" />
      <span className="text-muted-foreground">جداکننده</span>
    </div>
  );
}
`;

export default function BreadcrumbExample() {
  return (
    <div className="flex items-center space-x-2 space-x-reverse text-sm">
      <span className="text-primary">خانه</span>
      <Separator orientation="vertical" className="h-4" />
      <span className="text-primary">کامپوننت‌ها</span>
      <Separator orientation="vertical" className="h-4" />
      <span className="text-muted-foreground">جداکننده</span>
    </div>
  );
}
