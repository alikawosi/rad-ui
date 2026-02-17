"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
} from "@/registry/web/ui";

export const code = `const [open, setOpen] = useState(false);

<Drawer open={open} onOpenChange={setOpen}>
  <DrawerTrigger asChild>
    <Button variant="outline">کشو کنترل‌شده</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>کشو کنترل‌شده</DrawerTitle>
      <DrawerDescription>
        این کشو با استفاده از state کنترل می‌شود
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button onClick={() => setOpen(false)}>بستن با کد</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`;

export default function ControlledExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">کشو کنترل‌شده</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>کشو کنترل‌شده</DrawerTitle>
              <DrawerDescription>
                این کشو با استفاده از state کنترل می‌شود
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button onClick={() => setOpen(false)}>بستن با کد</Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      <p className="text-sm text-muted-foreground">
        وضعیت کشو: {open ? "باز" : "بسته"}
      </p>
    </div>
  );
}
