"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/web/ui";

export const code = `<Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
  <CardHeader>
    <CardTitle>کارت سفارشی</CardTitle>
    <CardDescription>با گرادیان و حاشیه سفارشی</CardDescription>
  </CardHeader>
  <CardContent>
    <p>این کارت از استایل‌های سفارشی استفاده می‌کند.</p>
  </CardContent>
</Card>`;

export default function CustomStylingExample() {
  return (
    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 max-w-sm">
      <CardHeader>
        <CardTitle>کارت سفارشی</CardTitle>
        <CardDescription>با گرادیان و حاشیه سفارشی</CardDescription>
      </CardHeader>
      <CardContent>
        <p>این کارت از استایل‌های سفارشی استفاده می‌کند.</p>
      </CardContent>
    </Card>
  );
}
