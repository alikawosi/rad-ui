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

export default function Example() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>فایل</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              تب جدید <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>پنجره جدید</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>اشتراک</MenubarItem>
            <MenubarItem>چاپ</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>ویرایش</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>پروفایل</MenubarItem>
            <MenubarItem>صورتحساب</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>تیم</MenubarItem>
            <MenubarItem>تنظیمات</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`;

export default function UsageExample() {
  return null;
}
