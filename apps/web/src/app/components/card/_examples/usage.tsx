"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
  Button,
} from "@/registry/web/ui";

export const code = `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>عنوان کارت</CardTitle>
        <CardDescription>توضیحات کارت</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">...</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>محتوای کارت</p>
      </CardContent>
      <CardFooter>
        <Button>اقدام</Button>
      </CardFooter>
    </Card>
  );
}`;

export default function UsageExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>عنوان کارت</CardTitle>
        <CardDescription>توضیحات کارت</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            ...
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>محتوای کارت</p>
      </CardContent>
      <CardFooter>
        <Button>اقدام</Button>
      </CardFooter>
    </Card>
  );
}
