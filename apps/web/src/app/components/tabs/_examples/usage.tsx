"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/web/ui";

export const code = `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

export default function TabsUsageExample() {
  return (
    <Tabs defaultValue="account" fullWidth>
      <TabsList>
        <TabsTrigger value="account">حساب کاربری</TabsTrigger>
        <TabsTrigger value="password">رمز عبور</TabsTrigger>
        <TabsTrigger value="billing">صورتحساب</TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <p>محتوای مرتبط با حساب کاربری.</p>
      </TabsContent>
      <TabsContent value="password">
        <p>فرم تغییر رمز عبور.</p>
      </TabsContent>
      <TabsContent value="billing">
        <p>لیست فاکتورها و اطلاعات صورتحساب.</p>
      </TabsContent>
    </Tabs>
  );
}
`;

export default function TabsUsageExample() {
  return (
    <Tabs defaultValue="account" fullWidth>
      <TabsList>
        <TabsTrigger value="account">حساب کاربری</TabsTrigger>
        <TabsTrigger value="password">رمز عبور</TabsTrigger>
        <TabsTrigger value="billing">صورتحساب</TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <p>محتوای مرتبط با حساب کاربری.</p>
      </TabsContent>
      <TabsContent value="password">
        <p>فرم تغییر رمز عبور.</p>
      </TabsContent>
      <TabsContent value="billing">
        <p>لیست فاکتورها و اطلاعات صورتحساب.</p>
      </TabsContent>
    </Tabs>
  );
}

