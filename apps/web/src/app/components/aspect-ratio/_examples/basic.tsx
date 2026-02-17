"use client";

import { AspectRatio } from "@/registry/web/ui";
import Image from "next/image";

export const code = `import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function BasicExample() {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  );
}
`;

export default function BasicExample() {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  );
}
