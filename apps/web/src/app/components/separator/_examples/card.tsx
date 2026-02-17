"use client";

import { Separator } from "@/registry/web/ui";

export const code = `import { Separator } from "@/components/ui/separator";

export default function CardExample() {
  return (
    <div className="p-6 rounded-lg border border-border max-w-md">
      <div className="space-y-1">
        <h4 className="font-medium">اطلاعات حساب</h4>
        <p className="text-sm text-muted-foreground">
          نام کاربری: user@example.com
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-1">
        <h4 className="font-medium">اشتراک</h4>
        <p className="text-sm text-muted-foreground">
          پلن فعلی: حرفه‌ای
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-1">
        <h4 className="font-medium">پرداخت</h4>
        <p className="text-sm text-muted-foreground">
          روش پرداخت: کارت اعتباری
        </p>
      </div>
    </div>
  );
}
`;

export default function CardExample() {
  return (
    <div className="p-6 rounded-lg border border-border max-w-md">
      <div className="space-y-1">
        <h4 className="font-medium">اطلاعات حساب</h4>
        <p className="text-sm text-muted-foreground">
          نام کاربری: user@example.com
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-1">
        <h4 className="font-medium">اشتراک</h4>
        <p className="text-sm text-muted-foreground">
          پلن فعلی: حرفه‌ای
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-1">
        <h4 className="font-medium">پرداخت</h4>
        <p className="text-sm text-muted-foreground">
          روش پرداخت: کارت اعتباری
        </p>
      </div>
    </div>
  );
}
