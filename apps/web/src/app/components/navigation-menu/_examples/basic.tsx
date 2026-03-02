"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/web/ui";

export const code = `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function BasicExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>شروع</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96 p-4">
              <li className="mb-2">
                <div className="text-sm font-medium">مقدمه</div>
                <div className="text-muted-foreground text-xs">
                  کامپوننت‌های قابل استفاده مجدد با Tailwind CSS
                </div>
              </li>
              <li className="mb-2">
                <div className="text-sm font-medium">نصب</div>
                <div className="text-muted-foreground text-xs">
                  نحوه نصب وابستگی‌ها و ساختاردهی اپلیکیشن
                </div>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>کامپوننت‌ها</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-4 md:grid-cols-2">
              <li>
                <div className="text-sm font-medium">دکمه</div>
                <div className="text-muted-foreground text-xs">
                  دکمه با انواع و اندازه‌های مختلف
                </div>
              </li>
              <li>
                <div className="text-sm font-medium">ورودی</div>
                <div className="text-muted-foreground text-xs">
                  فیلد ورودی متن
                </div>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`;

export default function BasicExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>شروع</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96 p-4">
              <li className="mb-2">
                <div className="text-sm font-medium">مقدمه</div>
                <div className="text-muted-foreground text-xs">
                  کامپوننت‌های قابل استفاده مجدد با Tailwind CSS
                </div>
              </li>
              <li className="mb-2">
                <div className="text-sm font-medium">نصب</div>
                <div className="text-muted-foreground text-xs">
                  نحوه نصب وابستگی‌ها و ساختاردهی اپلیکیشن
                </div>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>کامپوننت‌ها</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-4 md:grid-cols-2">
              <li>
                <div className="text-sm font-medium">دکمه</div>
                <div className="text-muted-foreground text-xs">
                  دکمه با انواع و اندازه‌های مختلف
                </div>
              </li>
              <li>
                <div className="text-sm font-medium">ورودی</div>
                <div className="text-muted-foreground text-xs">
                  فیلد ورودی متن
                </div>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
