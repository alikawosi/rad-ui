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

export default function FullWidthTabsExample() {
  return (
    <Tabs defaultValue="overview" fullWidth>
      <TabsList>
        <TabsTrigger value="overview">نمای کلی</TabsTrigger>
        <TabsTrigger value="analytics">آنالیتیکس</TabsTrigger>
        <TabsTrigger value="settings">تنظیمات</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">محتوای نمای کلی</TabsContent>
      <TabsContent value="analytics">محتوای آنالیتیکس</TabsContent>
      <TabsContent value="settings">محتوای تنظیمات</TabsContent>
    </Tabs>
  );
}
`;

export default function FullWidthTabsExample() {
  return (
    <Tabs defaultValue="overview" fullWidth>
      <TabsList>
        <TabsTrigger value="overview">نمای کلی</TabsTrigger>
        <TabsTrigger value="analytics">آنالیتیکس</TabsTrigger>
        <TabsTrigger value="settings">تنظیمات</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">محتوای نمای کلی</TabsContent>
      <TabsContent value="analytics">محتوای آنالیتیکس</TabsContent>
      <TabsContent value="settings">محتوای تنظیمات</TabsContent>
    </Tabs>
  );
}

