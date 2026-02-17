"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/web/ui";

export const code = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CommentsExample() {
  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>رض</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-sm">رضا احمدی</span>
            <span className="text-xs text-muted-foreground">
              ۲ ساعت پیش
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            این کامپوننت عالی است! ممنون از این کتابخانه فوق‌العاده
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary text-primary-foreground">
            سم
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-sm">سمیرا مرادی</span>
            <span className="text-xs text-muted-foreground">
              ۱ روز پیش
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            پشتیبانی از RTL عالی کار کرده 👏
          </p>
        </div>
      </div>
    </div>
  );
}
`;

export default function CommentsExample() {
  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>رض</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-sm">رضا احمدی</span>
            <span className="text-xs text-muted-foreground">
              ۲ ساعت پیش
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            این کامپوننت عالی است! ممنون از این کتابخانه فوق‌العاده
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary text-primary-foreground">
            سم
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-sm">سمیرا مرادی</span>
            <span className="text-xs text-muted-foreground">
              ۱ روز پیش
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            پشتیبانی از RTL عالی کار کرده 👏
          </p>
        </div>
      </div>
    </div>
  );
}
