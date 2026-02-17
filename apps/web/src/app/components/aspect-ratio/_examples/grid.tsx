"use client";

import { AspectRatio } from "@/registry/web/ui";
import Image from "next/image";

export const code = `import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function GridExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <AspectRatio ratio={1}>
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&dpr=2&q=80"
          alt="Photo 1"
          fill
          className="rounded-lg object-cover"
        />
      </AspectRatio>
      <AspectRatio ratio={1}>
        <Image
          src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?w=400&dpr=2&q=80"
          alt="Photo 2"
          fill
          className="rounded-lg object-cover"
        />
      </AspectRatio>
      <AspectRatio ratio={1}>
        <Image
          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&dpr=2&q=80"
          alt="Photo 3"
          fill
          className="rounded-lg object-cover"
        />
      </AspectRatio>
    </div>
  );
}
`;

export default function GridExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <AspectRatio ratio={1}>
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&dpr=2&q=80"
          alt="Photo 1"
          fill
          className="rounded-lg object-cover"
        />
      </AspectRatio>
      <AspectRatio ratio={1}>
        <Image
          src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?w=400&dpr=2&q=80"
          alt="Photo 2"
          fill
          className="rounded-lg object-cover"
        />
      </AspectRatio>
      <AspectRatio ratio={1}>
        <Image
          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&dpr=2&q=80"
          alt="Photo 3"
          fill
          className="rounded-lg object-cover"
        />
      </AspectRatio>
    </div>
  );
}
