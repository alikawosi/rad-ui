"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  Button,
  Input,
  Label,
} from "@/registry/web/ui";

export const code = `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">ویرایش پروفایل</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>ویرایش پروفایل</DialogTitle>
      <DialogDescription>
        تغییرات خود را اعمال کنید و دکمه ذخیره را بزنید
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name">نام</Label>
        <Input id="name" defaultValue="علی کاوسی" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username">نام کاربری</Label>
        <Input id="username" defaultValue="@alikawosi" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">انصراف</Button>
      </DialogClose>
      <Button type="submit">ذخیره تغییرات</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

export default function WithFormExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">ویرایش پروفایل</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>ویرایش پروفایل</DialogTitle>
          <DialogDescription>
            تغییرات خود را اعمال کنید و دکمه ذخیره را بزنید
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-start">
              نام
            </Label>
            <Input
              id="name"
              defaultValue="علی کاوسی"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-start">
              نام کاربری
            </Label>
            <Input
              id="username"
              defaultValue="@alikawosi"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">انصراف</Button>
          </DialogClose>
          <Button type="submit">ذخیره تغییرات</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
