"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/web/ui";

export const code = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function FallbackExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://invalid-url.com/image.jpg" />
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid-url.com/image.jpg" />
        <AvatarFallback className="bg-primary text-primary-foreground">
          رض
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid-url.com/image.jpg" />
        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
          AB
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
`;

export default function FallbackExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://invalid-url.com/image.jpg" />
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid-url.com/image.jpg" />
        <AvatarFallback className="bg-primary text-primary-foreground">
          رض
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid-url.com/image.jpg" />
        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
          AB
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
