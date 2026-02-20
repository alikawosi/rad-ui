"use client";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  Button,
} from "@/registry/web/ui";

export const code = `import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function BasicPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">باز کردن پاپ‌اور</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>عنوان</PopoverTitle>
          <PopoverDescription>
            متن توضیحات در اینجا نمایش داده می‌شود.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}`;

export default function BasicExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">باز کردن پاپ‌اور</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>عنوان</PopoverTitle>
          <PopoverDescription>
            متن توضیحات در اینجا نمایش داده می‌شود.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}
