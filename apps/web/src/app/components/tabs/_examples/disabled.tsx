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

export default function DisabledTabsExample() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">حساب کاربری</TabsTrigger>
        <TabsTrigger value="password" disabled>
          رمز عبور (غیرفعال)
        </TabsTrigger>
        <TabsTrigger value="billing">صورتحساب</TabsTrigger>
      </TabsList>
      <TabsContent value="account">محتوای حساب کاربری</TabsContent>
      <TabsContent value="password">این تب غیرفعال است</TabsContent>
      <TabsContent value="billing">محتوای صورتحساب</TabsContent>
    </Tabs>
  );
}
`;

export default function DisabledTabsExample() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">حساب کاربری</TabsTrigger>
        <TabsTrigger value="password" disabled>
          رمز عبور (غیرفعال)
        </TabsTrigger>
        <TabsTrigger value="billing">صورتحساب</TabsTrigger>
      </TabsList>
      <TabsContent value="account">محتوای حساب کاربری</TabsContent>
      <TabsContent value="password">این تب غیرفعال است</TabsContent>
      <TabsContent value="billing">محتوای صورتحساب</TabsContent>
    </Tabs>
  );
}

