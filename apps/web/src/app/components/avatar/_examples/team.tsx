"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/web/ui";

export const code = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamExample() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">امیررضا محمدی</p>
            <p className="text-xs text-muted-foreground">مدیر تیم</p>
          </div>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
          فعال
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-purple-500 text-white">
              رض
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">رضا کریمی</p>
            <p className="text-xs text-muted-foreground">
              توسعه‌دهنده
            </p>
          </div>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
          آفلاین
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-pink-500 text-white">
              سر
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">سارا احمدی</p>
            <p className="text-xs text-muted-foreground">
              طراح UI/UX
            </p>
          </div>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
          فعال
        </span>
      </div>
    </div>
  );
}
`;

export default function TeamExample() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">امیررضا محمدی</p>
            <p className="text-xs text-muted-foreground">مدیر تیم</p>
          </div>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
          فعال
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-purple-500 text-white">
              رض
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">رضا کریمی</p>
            <p className="text-xs text-muted-foreground">
              توسعه‌دهنده
            </p>
          </div>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
          آفلاین
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-pink-500 text-white">
              سر
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">سارا احمدی</p>
            <p className="text-xs text-muted-foreground">
              طراح UI/UX
            </p>
          </div>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
          فعال
        </span>
      </div>
    </div>
  );
}
