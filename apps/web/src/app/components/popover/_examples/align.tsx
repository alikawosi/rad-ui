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

export default function AlignPopover() {
  return (
    <div className="flex flex-wrap gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">شروع</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>تراز شروع</PopoverTitle>
            <PopoverDescription>
              محتوا از سمت شروع تراز شده است.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">مرکز</Button>
        </PopoverTrigger>
        <PopoverContent align="center">
          <PopoverHeader>
            <PopoverTitle>تراز مرکز</PopoverTitle>
            <PopoverDescription>
              محتوا در مرکز تراز شده است.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">پایان</Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <PopoverHeader>
            <PopoverTitle>تراز پایان</PopoverTitle>
            <PopoverDescription>
              محتوا از سمت پایان تراز شده است.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  );
}`;

export default function AlignExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">شروع</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>تراز شروع</PopoverTitle>
            <PopoverDescription>
              محتوا از سمت شروع تراز شده است.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">مرکز</Button>
        </PopoverTrigger>
        <PopoverContent align="center">
          <PopoverHeader>
            <PopoverTitle>تراز مرکز</PopoverTitle>
            <PopoverDescription>
              محتوا در مرکز تراز شده است.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">پایان</Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <PopoverHeader>
            <PopoverTitle>تراز پایان</PopoverTitle>
            <PopoverDescription>
              محتوا از سمت پایان تراز شده است.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  );
}
