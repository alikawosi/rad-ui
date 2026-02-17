"use client";

import { AspectRatio } from "@/registry/web/ui";

export const code = `import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function RatiosExample() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <div className="w-full">
        <p className="mb-2 text-sm font-medium">16:9 (Widescreen)</p>
        <AspectRatio ratio={16 / 9}>
          <div className="flex items-center justify-center h-full rounded-md bg-muted text-muted-foreground">
            16:9
          </div>
        </AspectRatio>
      </div>
      <div className="w-full">
        <p className="mb-2 text-sm font-medium">4:3 (Standard)</p>
        <AspectRatio ratio={4 / 3}>
          <div className="flex items-center justify-center h-full rounded-md bg-muted text-muted-foreground">
            4:3
          </div>
        </AspectRatio>
      </div>
      <div className="w-full">
        <p className="mb-2 text-sm font-medium">1:1 (Square)</p>
        <AspectRatio ratio={1}>
          <div className="flex items-center justify-center h-full rounded-md bg-muted text-muted-foreground">
            1:1
          </div>
        </AspectRatio>
      </div>
      <div className="w-full">
        <p className="mb-2 text-sm font-medium">21:9 (Ultrawide)</p>
        <AspectRatio ratio={21 / 9}>
          <div className="flex items-center justify-center h-full rounded-md bg-muted text-muted-foreground">
            21:9
          </div>
        </AspectRatio>
      </div>
      <div className="w-full">
        <p className="mb-2 text-sm font-medium">9:16 (Portrait)</p>
        <div className="w-[120px]">
          <AspectRatio ratio={9 / 16}>
            <div className="flex items-center justify-center h-full rounded-md bg-muted text-muted-foreground">
              9:16
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  );
}
`;

export default function RatiosExample() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <div className="w-full">
        <p className="mb-2 text-sm font-medium">16:9 (Widescreen)</p>
        <AspectRatio ratio={16 / 9}>
          <div className="flex items-center justify-center h-full rounded-md bg-muted text-muted-foreground">
            16:9
          </div>
        </AspectRatio>
      </div>
      <div className="w-full">
        <p className="mb-2 text-sm font-medium">4:3 (Standard)</p>
        <AspectRatio ratio={4 / 3}>
          <div className="flex items-center justify-center h-full rounded-md bg-muted text-muted-foreground">
            4:3
          </div>
        </AspectRatio>
      </div>
      <div className="w-full">
        <p className="mb-2 text-sm font-medium">1:1 (Square)</p>
        <AspectRatio ratio={1}>
          <div className="flex items-center justify-center h-full rounded-md bg-muted text-muted-foreground">
            1:1
          </div>
        </AspectRatio>
      </div>
      <div className="w-full">
        <p className="mb-2 text-sm font-medium">21:9 (Ultrawide)</p>
        <AspectRatio ratio={21 / 9}>
          <div className="flex items-center justify-center h-full rounded-md bg-muted text-muted-foreground">
            21:9
          </div>
        </AspectRatio>
      </div>
      <div className="w-full">
        <p className="mb-2 text-sm font-medium">9:16 (Portrait)</p>
        <div className="w-[120px]">
          <AspectRatio ratio={9 / 16}>
            <div className="flex items-center justify-center h-full rounded-md bg-muted text-muted-foreground">
              9:16
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  );
}
