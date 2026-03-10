"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/web/ui";

export const code = `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export default function BasicExample() {
  return (
    <Command className="max-w-sm rounded-lg border">
      <CommandInput placeholder="جستجو یا تایپ دستور..." />
      <CommandList>
        <CommandEmpty>نتیجه‌ای یافت نشد.</CommandEmpty>
        <CommandGroup heading="پیشنهادات">
          <CommandItem>تقویم</CommandItem>
          <CommandItem>جستجوی ایموجی</CommandItem>
          <CommandItem>ماشین‌حساب</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="تنظیمات">
          <CommandItem>پروفایل</CommandItem>
          <CommandItem>صورتحساب</CommandItem>
          <CommandItem>تنظیمات</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
`;

export default function BasicExample() {
  return (
    <Command className="max-w-sm rounded-lg border">
      <CommandInput placeholder="جستجو یا تایپ دستور..." />
      <CommandList>
        <CommandEmpty>نتیجه‌ای یافت نشد.</CommandEmpty>
        <CommandGroup heading="پیشنهادات">
          <CommandItem>تقویم</CommandItem>
          <CommandItem>جستجوی ایموجی</CommandItem>
          <CommandItem>ماشین‌حساب</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="تنظیمات">
          <CommandItem>پروفایل</CommandItem>
          <CommandItem>صورتحساب</CommandItem>
          <CommandItem>تنظیمات</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
