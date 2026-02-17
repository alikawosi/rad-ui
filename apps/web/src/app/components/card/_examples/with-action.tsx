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
import { MoreHorizontal } from "lucide-react";

export const code = `import { MoreHorizontal } from "lucide-react";

<Card className="max-w-md">
  <CardHeader>
    <CardTitle>تنظیمات حساب</CardTitle>
    <CardDescription>اطلاعات حساب کاربری خود را مدیریت کنید.</CardDescription>
    <CardAction>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>در این بخش می‌توانید نام، ایمیل و رمز عبور خود را تغییر دهید.</p>
  </CardContent>
  <CardFooter className="gap-2">
    <Button>ذخیره تغییرات</Button>
    <Button variant="outline">انصراف</Button>
  </CardFooter>
</Card>`;

export default function WithActionExample() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>تنظیمات حساب</CardTitle>
        <CardDescription>
          اطلاعات حساب کاربری خود را مدیریت کنید.
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          در این بخش می‌توانید نام، ایمیل و رمز عبور خود را تغییر دهید.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button>ذخیره تغییرات</Button>
        <Button variant="outline">انصراف</Button>
      </CardFooter>
    </Card>
  );
}
