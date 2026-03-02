"use client";

import * as React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/registry/web/ui";

export const code = `"use client";

import * as React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function RadioExample() {
  const [user, setUser] = React.useState("benoit");
  const [theme, setTheme] = React.useState("system");

  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>پروفایل‌ها</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={user} onValueChange={setUser}>
            <MenubarRadioItem value="andy">اندی</MenubarRadioItem>
            <MenubarRadioItem value="benoit">بنوا</MenubarRadioItem>
            <MenubarRadioItem value="luis">لوئیس</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>ویرایش...</MenubarItem>
          <MenubarItem inset>افزودن پروفایل...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>تم</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={theme} onValueChange={setTheme}>
            <MenubarRadioItem value="light">روشن</MenubarRadioItem>
            <MenubarRadioItem value="dark">تاریک</MenubarRadioItem>
            <MenubarRadioItem value="system">سیستم</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`;

export default function RadioExample() {
  const [user, setUser] = React.useState("benoit");
  const [theme, setTheme] = React.useState("system");

  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>پروفایل‌ها</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={user} onValueChange={setUser}>
            <MenubarRadioItem value="andy">اندی</MenubarRadioItem>
            <MenubarRadioItem value="benoit">بنوا</MenubarRadioItem>
            <MenubarRadioItem value="luis">لوئیس</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>ویرایش...</MenubarItem>
          <MenubarItem inset>افزودن پروفایل...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>تم</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={theme} onValueChange={setTheme}>
            <MenubarRadioItem value="light">روشن</MenubarRadioItem>
            <MenubarRadioItem value="dark">تاریک</MenubarRadioItem>
            <MenubarRadioItem value="system">سیستم</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
