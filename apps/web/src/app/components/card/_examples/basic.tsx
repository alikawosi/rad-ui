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

export const code = `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BasicCard() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>عنوان کارت</CardTitle>
        <CardDescription>توضیحات کارت در اینجا نمایش داده می‌شود.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>محتوای اصلی کارت در این بخش قرار می‌گیرد.</p>
      </CardContent>
      <CardFooter>
        <Button>اقدام</Button>
      </CardFooter>
    </Card>
  );
}`;

export default function BasicExample() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>عنوان کارت</CardTitle>
        <CardDescription>
          توضیحات کارت در اینجا نمایش داده می‌شود.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>محتوای اصلی کارت در این بخش قرار می‌گیرد.</p>
      </CardContent>
      <CardFooter>
        <Button>اقدام</Button>
      </CardFooter>
    </Card>
  );
}
