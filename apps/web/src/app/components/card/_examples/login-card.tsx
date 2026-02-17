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

export const code = `<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>ورود به حساب</CardTitle>
    <CardDescription>
      ایمیل خود را وارد کنید تا وارد حساب کاربری شوید.
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <label className="text-sm font-medium">ایمیل</label>
      <input
        type="email"
        placeholder="example@email.com"
        className="w-full px-3 py-2 border border-border rounded-md"
        dir="ltr"
      />
    </div>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">رمز عبور</label>
        <a href="#" className="text-sm text-primary hover:underline">
          فراموشی رمز عبور؟
        </a>
      </div>
      <input
        type="password"
        className="w-full px-3 py-2 border border-border rounded-md"
        dir="ltr"
      />
    </div>
  </CardContent>
  <CardFooter className="flex-col gap-4">
    <Button className="w-full">ورود</Button>
    <p className="text-sm text-muted-foreground text-center">
      حساب ندارید؟{" "}
      <a href="#" className="text-primary hover:underline">
        ثبت‌نام کنید
      </a>
    </p>
  </CardFooter>
</Card>`;

export default function LoginCardExample() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>ورود به حساب</CardTitle>
        <CardDescription>
          ایمیل خود را وارد کنید تا وارد حساب کاربری شوید.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">ایمیل</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
            dir="ltr"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">رمز عبور</label>
            <a
              href="#"
              className="text-sm text-primary hover:underline"
            >
              فراموشی رمز عبور؟
            </a>
          </div>
          <input
            type="password"
            className="w-full px-3 py-2 border border-border rounded-md bg-background"
            dir="ltr"
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button className="w-full">ورود</Button>
        <p className="text-sm text-muted-foreground text-center">
          حساب ندارید؟{" "}
          <a href="#" className="text-primary hover:underline">
            ثبت‌نام کنید
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
