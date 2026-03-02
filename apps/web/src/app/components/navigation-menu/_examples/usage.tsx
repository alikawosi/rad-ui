export const code = `import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>شروع</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96 p-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/docs"
                    className="block rounded-md p-3 hover:bg-accent"
                  >
                    <span className="font-medium">مقدمه</span>
                    <p className="text-muted-foreground text-sm">
                      کامپوننت‌های قابل استفاده مجدد
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">مستندات</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`;
