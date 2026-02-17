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
} from "@/registry/web/ui";

export const code = `<DialogContent showCloseButton={false}>
  <DialogHeader>
    <DialogTitle>بدون دکمه بستن</DialogTitle>
    <DialogDescription>
      این دیالوگ دکمه X در گوشه بالا ندارد
    </DialogDescription>
  </DialogHeader>
  <DialogFooter>
    <DialogClose asChild>
      <Button variant="outline">بستن</Button>
    </DialogClose>
  </DialogFooter>
</DialogContent>`;

export default function NoCloseButtonExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">بدون دکمه X</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>بدون دکمه بستن</DialogTitle>
          <DialogDescription>
            این دیالوگ دکمه X در گوشه بالا ندارد. برای بستن از دکمه پایین
            استفاده کنید
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">بستن</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
