"use client";

import { Button } from "@/registry/web/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/web/ui";
import { User, CreditCard, Settings, LogOut } from "lucide-react";

export const code = `import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, CreditCard, Settings, LogOut } from "lucide-react";

export default function IconsExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">باز کردن</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <User className="me-2 h-4 w-4" />
          <span>پروفایل</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="me-2 h-4 w-4" />
          <span>صورتحساب</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="me-2 h-4 w-4" />
          <span>تنظیمات</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="me-2 h-4 w-4" />
          <span>خروج</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export default function IconsExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">باز کردن</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <User className="me-2 h-4 w-4" />
          <span>پروفایل</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="me-2 h-4 w-4" />
          <span>صورتحساب</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="me-2 h-4 w-4" />
          <span>تنظیمات</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="me-2 h-4 w-4" />
          <span>خروج</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
