"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/web/ui";

export const code = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BasicExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">امیررضا محمدی</p>
        <p className="text-sm text-muted-foreground">برنامه نویس</p>
      </div>
    </div>
  );
}
`;

export default function BasicExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">امیررضا محمدی</p>
        <p className="text-sm text-muted-foreground">برنامه نویس</p>
      </div>
    </div>
  );
}
