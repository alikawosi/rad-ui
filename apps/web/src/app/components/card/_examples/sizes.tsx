"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@/registry/web/ui";

export const code = `<Card size="sm">
  <CardHeader>
    <CardTitle>کارت کوچک</CardTitle>
    <CardDescription>این کارت از اندازه کوچک استفاده می‌کند.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>فاصله‌گذاری کمتر برای فضای محدود</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">مشاهده</Button>
  </CardFooter>
</Card>`;

export default function SizesExample() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <p className="text-sm text-muted-foreground mb-3">پیش‌فرض (Default)</p>
        <Card>
          <CardHeader>
            <CardTitle>کارت پیش‌فرض</CardTitle>
            <CardDescription>
              این کارت از اندازه پیش‌فرض استفاده می‌کند.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              فاصله‌گذاری بیشتر برای خوانایی بهتر
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              مشاهده
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">کوچک (Small)</p>
        <Card size="sm">
          <CardHeader>
            <CardTitle>کارت کوچک</CardTitle>
            <CardDescription>
              این کارت از اندازه کوچک استفاده می‌کند.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              فاصله‌گذاری کمتر برای فضای محدود
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              مشاهده
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
