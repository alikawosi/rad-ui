"use client";

import * as React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  cn,
} from "@/registry/web/ui";
import { useMediaQuery } from "@/hooks/use-media-query";

function ProfileForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)} {...props}>
      <div className="grid gap-3">
        <Label htmlFor="resp-email">ایمیل</Label>
        <Input type="email" id="resp-email" defaultValue="ali@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="resp-username">نام کاربری</Label>
        <Input id="resp-username" defaultValue="@alikawosi" />
      </div>
      <Button type="submit">ذخیره تغییرات</Button>
    </form>
  );
}

export const code = `import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

export function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">ویرایش پروفایل</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>ویرایش پروفایل</DialogTitle>
            <DialogDescription>
              تغییرات خود را اعمال کنید. پس از اتمام روی ذخیره کلیک کنید.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">ویرایش پروفایل</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-start">
          <DrawerTitle>ویرایش پروفایل</DrawerTitle>
          <DrawerDescription>
            تغییرات خود را اعمال کنید. پس از اتمام روی ذخیره کلیک کنید.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">انصراف</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`;

export default function ResponsiveDialogExample() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">ویرایش پروفایل</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>ویرایش پروفایل</DialogTitle>
            <DialogDescription>
              تغییرات خود را اعمال کنید. پس از اتمام روی ذخیره کلیک کنید.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">ویرایش پروفایل</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="text-start">
            <DrawerTitle>ویرایش پروفایل</DrawerTitle>
            <DrawerDescription>
              تغییرات خود را اعمال کنید. پس از اتمام روی ذخیره کلیک کنید.
            </DrawerDescription>
          </DrawerHeader>
          <ProfileForm className="px-4" />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">انصراف</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
