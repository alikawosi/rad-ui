"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
} from "@/registry/web/ui";

export const code = `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">باز کردن کشو</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>عنوان کشو</DrawerTitle>
            <DrawerDescription>
              این یک توضیح کوتاه درباره محتوای کشو است
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>محتوای اصلی کشو در اینجا قرار می‌گیرد</p>
          </div>
          <DrawerFooter>
            <Button>تایید</Button>
            <DrawerClose asChild>
              <Button variant="outline">انصراف</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}`;

export default function BasicExample() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">باز کردن کشو</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>عنوان کشو</DrawerTitle>
            <DrawerDescription>
              این یک توضیح کوتاه درباره محتوای کشو است
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-muted-foreground">
              محتوای اصلی کشو در اینجا قرار می‌گیرد
            </p>
          </div>
          <DrawerFooter>
            <Button>تایید</Button>
            <DrawerClose asChild>
              <Button variant="outline">انصراف</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
