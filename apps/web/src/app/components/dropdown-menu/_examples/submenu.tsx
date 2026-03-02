"use client";

import { Button } from "@/registry/web/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/web/ui";

export const code = `import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SubmenuExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">باز کردن</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>پروفایل</DropdownMenuItem>
        <DropdownMenuItem>صورتحساب</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>زیرمنو</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>آیتم زیرمنو ۱</DropdownMenuItem>
            <DropdownMenuItem>آیتم زیرمنو ۲</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>تنظیمات</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export default function SubmenuExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">باز کردن</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>پروفایل</DropdownMenuItem>
        <DropdownMenuItem>صورتحساب</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>زیرمنو</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>آیتم زیرمنو ۱</DropdownMenuItem>
            <DropdownMenuItem>آیتم زیرمنو ۲</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>تنظیمات</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
