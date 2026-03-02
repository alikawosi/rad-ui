"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/registry/web/ui";

export const code = `import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function SubmenuExample() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>فایل</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>اشتراک</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>لینک ایمیل</MenubarItem>
              <MenubarItem>پیام‌ها</MenubarItem>
              <MenubarItem>یادداشت‌ها</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            چاپ... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>ویرایش</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            تراجع <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            انجام مجدد <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>جستجو</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>جستجو در وب</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>برش</MenubarItem>
          <MenubarItem>کپی</MenubarItem>
          <MenubarItem>چسباندن</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`;

export default function SubmenuExample() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>فایل</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>اشتراک</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>لینک ایمیل</MenubarItem>
              <MenubarItem>پیام‌ها</MenubarItem>
              <MenubarItem>یادداشت‌ها</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            چاپ... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>ویرایش</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            تراجع <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            انجام مجدد <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>جستجو</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>جستجو در وب</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>برش</MenubarItem>
          <MenubarItem>کپی</MenubarItem>
          <MenubarItem>چسباندن</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
