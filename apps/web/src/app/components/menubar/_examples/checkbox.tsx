"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/registry/web/ui";

export const code = `import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function CheckboxExample() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>نمایش</MenubarTrigger>
        <MenubarContent className="w-64">
          <MenubarCheckboxItem>همیشه نمایش نوار نشانک‌ها</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            همیشه نمایش آدرس کامل
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            بارگذاری مجدد <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            بارگذاری اجباری <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>قالب</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>خط خورده</MenubarCheckboxItem>
          <MenubarCheckboxItem>کد</MenubarCheckboxItem>
          <MenubarCheckboxItem>بالانویس</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`;

export default function CheckboxExample() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>نمایش</MenubarTrigger>
        <MenubarContent className="w-64">
          <MenubarCheckboxItem>همیشه نمایش نوار نشانک‌ها</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            همیشه نمایش آدرس کامل
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            بارگذاری مجدد <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            بارگذاری اجباری <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>قالب</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>خط خورده</MenubarCheckboxItem>
          <MenubarCheckboxItem>کد</MenubarCheckboxItem>
          <MenubarCheckboxItem>بالانویس</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
