"use client";

import { Separator } from "@/registry/web/ui";

export const code = `import { Separator } from "@/components/ui/separator";

export default function NavExample() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm">
      <a href="#" className="hover:text-primary transition-colors">
        حریم خصوصی
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="hover:text-primary transition-colors">
        شرایط استفاده
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="hover:text-primary transition-colors">
        تماس با ما
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="hover:text-primary transition-colors">
        پشتیبانی
      </a>
    </div>
  );
}
`;

export default function NavExample() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm">
      <a href="#" className="hover:text-primary transition-colors">
        حریم خصوصی
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="hover:text-primary transition-colors">
        شرایط استفاده
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="hover:text-primary transition-colors">
        تماس با ما
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="hover:text-primary transition-colors">
        پشتیبانی
      </a>
    </div>
  );
}
