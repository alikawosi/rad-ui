"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/web/ui";

export const code = `<Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
  <CardHeader>
    <CardTitle>کارت تعاملی</CardTitle>
    <CardDescription>موس را روی کارت ببرید</CardDescription>
  </CardHeader>
  <CardContent>
    <p>این کارت هنگام هاور افکت‌های زیبایی دارد.</p>
  </CardContent>
</Card>`;

export default function InteractiveCardExample() {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer max-w-sm">
      <CardHeader>
        <CardTitle>کارت تعاملی</CardTitle>
        <CardDescription>موس را روی کارت ببرید</CardDescription>
      </CardHeader>
      <CardContent>
        <p>این کارت هنگام هاور افکت‌های زیبایی دارد.</p>
      </CardContent>
    </Card>
  );
}
