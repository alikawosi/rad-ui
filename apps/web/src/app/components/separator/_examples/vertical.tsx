"use client";

import { Separator } from "@/registry/web/ui";

export const code = `import { Separator } from "@/components/ui/separator";

export default function VerticalExample() {
  return (
    <div className="flex h-5 items-center space-x-4 space-x-reverse text-sm">
      <div>خانه</div>
      <Separator orientation="vertical" />
      <div>درباره ما</div>
      <Separator orientation="vertical" />
      <div>تماس</div>
      <Separator orientation="vertical" />
      <div>بلاگ</div>
    </div>
  );
}
`;

export default function VerticalExample() {
  return (
    <div className="flex h-5 items-center space-x-4 space-x-reverse text-sm">
      <div>خانه</div>
      <Separator orientation="vertical" />
      <div>درباره ما</div>
      <Separator orientation="vertical" />
      <div>تماس</div>
      <Separator orientation="vertical" />
      <div>بلاگ</div>
    </div>
  );
}
