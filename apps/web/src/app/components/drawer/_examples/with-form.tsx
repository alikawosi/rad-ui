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
  Input,
  Label,
} from "@/registry/web/ui";

export const code = `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">ویرایش پروفایل</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>ویرایش پروفایل</DrawerTitle>
        <DrawerDescription>
          تغییرات خود را اعمال کنید و دکمه ذخیره را بزنید
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">نام</Label>
          <Input id="name" defaultValue="علی کاوسی" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">ایمیل</Label>
          <Input id="email" type="email" defaultValue="ali@example.com" />
        </div>
      </div>
      <DrawerFooter>
        <Button>ذخیره تغییرات</Button>
        <DrawerClose asChild>
          <Button variant="outline">انصراف</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`;

export default function WithFormExample() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">ویرایش پروفایل</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>ویرایش پروفایل</DrawerTitle>
            <DrawerDescription>
              تغییرات خود را اعمال کنید و دکمه ذخیره را بزنید
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="drawer-name">نام</Label>
              <Input id="drawer-name" defaultValue="علی کاوسی" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="drawer-email">ایمیل</Label>
              <Input
                id="drawer-email"
                type="email"
                defaultValue="ali@example.com"
              />
            </div>
          </div>
          <DrawerFooter>
            <Button>ذخیره تغییرات</Button>
            <DrawerClose asChild>
              <Button variant="outline">انصراف</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
