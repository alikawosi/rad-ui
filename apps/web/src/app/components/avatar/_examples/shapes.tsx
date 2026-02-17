"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/web/ui";

export const code = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ShapesExample() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">دایره‌ای</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar className="rounded-lg">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">گرد</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar className="rounded-sm">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">مربع</span>
      </div>
    </div>
  );
}
`;

export default function ShapesExample() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">دایره‌ای</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar className="rounded-lg">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">گرد</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar className="rounded-sm">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">مربع</span>
      </div>
    </div>
  );
}
