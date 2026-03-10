"use client";

import { useState, useEffect } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  Button,
} from "@/registry/web/ui";

export const code = `"use client";

import { useState, useEffect } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  Button,
} from "@/components/ui/command";

export default function DialogExample() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        باز کردن منو (⌘K)
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="جستجو برای دستور..." />
        <CommandList>
          <CommandEmpty>نتیجه‌ای یافت نشد.</CommandEmpty>
          <CommandGroup heading="پیشنهادات">
            <CommandItem>
              تقویم
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              صورتحساب
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              تنظیمات
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="تنظیمات">
            <CommandItem>پروفایل</CommandItem>
            <CommandItem>صورتحساب</CommandItem>
            <CommandItem>تنظیمات</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
`;

export default function DialogExample() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        باز کردن منو (⌘K)
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="جستجو برای دستور..." />
        <CommandList>
          <CommandEmpty>نتیجه‌ای یافت نشد.</CommandEmpty>
          <CommandGroup heading="پیشنهادات">
            <CommandItem>
              تقویم
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              صورتحساب
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              تنظیمات
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="تنظیمات">
            <CommandItem>پروفایل</CommandItem>
            <CommandItem>صورتحساب</CommandItem>
            <CommandItem>تنظیمات</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
