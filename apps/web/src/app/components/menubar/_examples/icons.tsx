"use client";

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/registry/web/ui";
import {
  FileIcon,
  FolderIcon,
  HelpCircleIcon,
  SaveIcon,
  SettingsIcon,
  TrashIcon,
} from "lucide-react";

export const code = `import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  FileIcon,
  FolderIcon,
  HelpCircleIcon,
  SaveIcon,
  SettingsIcon,
  TrashIcon,
} from "lucide-react";

export default function IconsExample() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>فایل</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileIcon className="me-2 h-4 w-4" />
            فایل جدید <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <FolderIcon className="me-2 h-4 w-4" />
            باز کردن پوشه
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <SaveIcon className="me-2 h-4 w-4" />
            ذخیره <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>بیشتر</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              <SettingsIcon className="me-2 h-4 w-4" />
              تنظیمات
            </MenubarItem>
            <MenubarItem>
              <HelpCircleIcon className="me-2 h-4 w-4" />
              راهنما
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">
              <TrashIcon className="me-2 h-4 w-4" />
              حذف
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`;

export default function IconsExample() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>فایل</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileIcon className="me-2 h-4 w-4" />
            فایل جدید <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <FolderIcon className="me-2 h-4 w-4" />
            باز کردن پوشه
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <SaveIcon className="me-2 h-4 w-4" />
            ذخیره <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>بیشتر</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              <SettingsIcon className="me-2 h-4 w-4" />
              تنظیمات
            </MenubarItem>
            <MenubarItem>
              <HelpCircleIcon className="me-2 h-4 w-4" />
              راهنما
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">
              <TrashIcon className="me-2 h-4 w-4" />
              حذف
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
