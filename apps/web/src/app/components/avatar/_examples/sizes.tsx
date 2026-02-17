"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/web/ui";

export const code = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SizesExample() {
  return (
    <div className="flex items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">کوچک</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">متوسط</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">بزرگ</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">خیلی بزرگ</span>
      </div>
    </div>
  );
}
`;

export default function SizesExample() {
  return (
    <div className="flex items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">کوچک</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">متوسط</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">بزرگ</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">خیلی بزرگ</span>
      </div>
    </div>
  );
}
