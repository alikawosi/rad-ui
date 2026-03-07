"use client";

import {
  InstallCodeBlock,
  InlineCodeBlock,
} from "@/components/docs/code-block";
import { ComponentExample } from "@/components/docs/component-example";
import {
  ApiReferenceSection,
  PropsTable,
  type PropDefinition,
} from "@/components/docs/props-table";
import BasicExample, { code as basicCode } from "./_examples/basic";
import DestructiveExample, {
  code as destructiveCode,
} from "./_examples/destructive";
import SmallExample, { code as smallCode } from "./_examples/small";
import { code as usageCode } from "./_examples/usage";

const alertDialogRootProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    defaultValue: "undefined",
    description: "وضعیت باز/بسته بودن (کنترل‌شده)",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    defaultValue: "false",
    description: "وضعیت پیش‌فرض (غیرکنترل‌شده)",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر وضعیت",
  },
];

const alertDialogContentProps: PropDefinition[] = [
  {
    name: "size",
    type: '"default" | "sm"',
    defaultValue: '"default"',
    description: "اندازه دیالوگ (پیش‌فرض یا کوچک)",
  },
  {
    name: "onEscapeKeyDown",
    type: "(event: KeyboardEvent) => void",
    defaultValue: "undefined",
    description: "هندلر فشردن کلید Escape",
  },
];

export default function AlertDialogPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          دیالوگ هشدار (Alert Dialog)
        </h1>
        <p className="text-lg text-muted-foreground">
          دیالوگ مودالی که کاربر را با محتوای مهم متوقف می‌کند و انتظار پاسخ
          دارد. برای تأیید عملیات‌های حساس مانند حذف مناسب است.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add alert-dialog"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="نمونه پایه"
          titleEn="Basic"
          description="دیالوگ هشدار ساده با عنوان، توضیحات و دکمه‌های انصراف و ادامه"
          code={basicCode}
          className="mb-8"
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="اندازه کوچک"
          titleEn="Small"
          description='استفاده از prop مقدار size="sm" برای دیالوگ کوچک‌تر'
          code={smallCode}
          className="mb-8"
        >
          <SmallExample />
        </ComponentExample>

        <ComponentExample
          title="عملیات مخرب"
          titleEn="Destructive"
          description="استفاده از variant مخرب برای دکمه اقدام در عملیات‌های حذف"
          code={destructiveCode}
          className="mb-8"
        >
          <DestructiveExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable title="AlertDialog" props={alertDialogRootProps} />
        <PropsTable
          title="AlertDialogContent"
          props={alertDialogContentProps}
        />
      </ApiReferenceSection>

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              کیبورد (Keyboard)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Escape
                </code>{" "}
                - بستن دیالوگ و بازگشت فوکوس به تریگر
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت بین المان‌های قابل فوکوس داخل دیالوگ
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Shift + Tab
                </code>{" "}
                - حرکت به عقب بین المان‌ها
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              الگوی ARIA
            </h3>
            <p>
              این کامپوننت از الگوی{" "}
              <a
                href="https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                Alert and Message Dialogs
              </a>{" "}
              پیروی می‌کند. عنوان و توضیحات برای اعلان به صفحه‌خوان استفاده
              می‌شوند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              تله فوکوس (Focus Trap)
            </h3>
            <p>
              وقتی دیالوگ باز است، فوکوس در داخل آن محبوس می‌شود تا کاربر
              حتماً یکی از اقدامات را انتخاب کند.
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">
              استفاده برای تأیید (Use for Confirmation)
            </h3>
            <p className="text-muted-foreground">
              دیالوگ هشدار برای عملیات‌هایی که نیاز به تأیید صریح کاربر دارند
              طراحی شده است (مثل حذف، خروج بدون ذخیره). برای محتوای اطلاع‌رسانی
              از Dialog استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              عنوان و توضیح روشن (Clear Title & Description)
            </h3>
            <p className="text-muted-foreground">
              از AlertDialogTitle و AlertDialogDescription استفاده کنید تا
              کاربر دقیقاً بداند چه عملیاتی در حال تأیید است و عواقب آن چیست.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تمایز دکمه انصراف و اقدام (Distinguish Cancel vs Action)
            </h3>
            <p className="text-muted-foreground">
              دکمه انصراف (AlertDialogCancel) معمولاً با variant=&quot;outline&quot;
              و دکمه اقدام اصلی با variant پیش‌فرض یا &quot;destructive&quot; برای
              عملیات‌های مخرب نمایش داده می‌شود.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <InlineCodeBlock code={usageCode} />
      </section>
    </div>
  );
}
