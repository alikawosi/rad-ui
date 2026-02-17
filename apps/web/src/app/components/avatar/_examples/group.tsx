"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/web/ui";

export const code = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function GroupExample() {
  return (
    <div className="flex -space-x-4 space-x-reverse">
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://invalid-url.com/image.jpg" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-primary text-primary-foreground">
          +5
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
`;

export default function GroupExample() {
  return (
    <div className="flex -space-x-4 space-x-reverse">
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://invalid-url.com/image.jpg" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-primary text-primary-foreground">
          +5
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
