"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/web/ui";

export const code = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileCardExample() {
  return (
    <div className="p-6 rounded-lg border border-border max-w-sm">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h4 className="font-semibold">امیررضا محمدی</h4>
          <p className="text-sm text-muted-foreground">
            توسعه‌دهنده فرانت‌اند
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            تهران، ایران
          </p>
        </div>
      </div>
    </div>
  );
}
`;

export default function ProfileCardExample() {
  return (
    <div className="p-6 rounded-lg border border-border max-w-sm">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h4 className="font-semibold">امیررضا محمدی</h4>
          <p className="text-sm text-muted-foreground">
            توسعه‌دهنده فرانت‌اند
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            تهران، ایران
          </p>
        </div>
      </div>
    </div>
  );
}
