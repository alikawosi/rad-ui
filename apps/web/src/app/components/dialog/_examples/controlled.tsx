"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@/registry/web/ui";

export const code = `const [open, setOpen] = useState(false);

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button variant="outline">دیالوگ کنترل‌شده</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>دیالوگ کنترل‌شده</DialogTitle>
      <DialogDescription>
        این دیالوگ با استفاده از state کنترل می‌شود
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button onClick={() => setOpen(false)}>بستن با کد</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

export default function ControlledExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">دیالوگ کنترل‌شده</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>دیالوگ کنترل‌شده</DialogTitle>
            <DialogDescription>
              این دیالوگ با استفاده از state کنترل می‌شود
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>بستن با کد</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <p className="text-sm text-muted-foreground">
        وضعیت دیالوگ: {open ? "باز" : "بسته"}
      </p>
    </div>
  );
}
