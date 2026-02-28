"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/web/ui";

export const code = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function BasicTabsExample() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">حساب کاربری</TabsTrigger>
        <TabsTrigger value="password">رمز عبور</TabsTrigger>
        <TabsTrigger value="billing">صورتحساب</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        محتوای مربوط به حساب کاربری
      </TabsContent>
      <TabsContent value="password">
        محتوای مربوط به تغییر رمز عبور
      </TabsContent>
      <TabsContent value="billing">
        محتوای مربوط به اطلاعات صورتحساب
      </TabsContent>
    </Tabs>
  );
}
`;

export default function BasicTabsExample() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">حساب کاربری</TabsTrigger>
        <TabsTrigger value="password">رمز عبور</TabsTrigger>
        <TabsTrigger value="billing">صورتحساب</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        محتوای مربوط به حساب کاربری
      </TabsContent>
      <TabsContent value="password">
        محتوای مربوط به تغییر رمز عبور
      </TabsContent>
      <TabsContent value="billing">
        محتوای مربوط به اطلاعات صورتحساب
      </TabsContent>
    </Tabs>
  );
}

