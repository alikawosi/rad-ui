"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/web/ui";
import { User, Lock, CreditCard } from "lucide-react";

export const code = `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { User, Lock, CreditCard } from "lucide-react";

export default function TabsWithIconsExample() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">
          <User className="h-4 w-4 ms-2" />
          حساب کاربری
        </TabsTrigger>
        <TabsTrigger value="password">
          <Lock className="h-4 w-4 ms-2" />
          رمز عبور
        </TabsTrigger>
        <TabsTrigger value="billing">
          <CreditCard className="h-4 w-4 ms-2" />
          صورتحساب
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">محتوای حساب کاربری</TabsContent>
      <TabsContent value="password">محتوای تنظیمات رمز عبور</TabsContent>
      <TabsContent value="billing">محتوای صورتحساب</TabsContent>
    </Tabs>
  );
}
`;

export default function TabsWithIconsExample() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">
          <User className="h-4 w-4 ms-2" />
          حساب کاربری
        </TabsTrigger>
        <TabsTrigger value="password">
          <Lock className="h-4 w-4 ms-2" />
          رمز عبور
        </TabsTrigger>
        <TabsTrigger value="billing">
          <CreditCard className="h-4 w-4 ms-2" />
          صورتحساب
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">محتوای حساب کاربری</TabsContent>
      <TabsContent value="password">محتوای تنظیمات رمز عبور</TabsContent>
      <TabsContent value="billing">محتوای صورتحساب</TabsContent>
    </Tabs>
  );
}

