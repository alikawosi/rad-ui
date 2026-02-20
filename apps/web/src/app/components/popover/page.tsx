"use client";

import { InstallCodeBlock } from "@/components/docs/code-block";
import { InlineCodeBlock } from "@/components/docs/code-block";
import {
  ComponentExample,
  ComponentExampleGroup,
  SubExample,
} from "@/components/docs/component-example";
import {
  ApiReferenceSection,
  PropsTable,
  type PropDefinition,
} from "@/components/docs/props-table";
import BasicExample, { code as basicCode } from "./_examples/basic";
import AlignExample, { code as alignCode } from "./_examples/align";
import WithFormExample, { code as withFormCode } from "./_examples/with-form";
import UsageExample, { code as usageCode } from "./_examples/usage";

const popoverProps: PropDefinition[] = [
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
  {
    name: "modal",
    type: "boolean",
    defaultValue: "true",
    description: "آیا پاپ‌اور به صورت مودال نمایش داده شود",
  },
];

const popoverContentProps: PropDefinition[] = [
  {
    name: "side",
    type: '"top" | "bottom" | "left" | "right"',
    defaultValue: '"bottom"',
    description: "جهت نمایش پاپ‌اور نسبت به تریگر",
  },
  {
    name: "sideOffset",
    type: "number",
    defaultValue: "4",
    description: "فاصله از تریگر به پیکسل",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    defaultValue: '"center"',
    description: "تراز پاپ‌اور نسبت به تریگر",
  },
  {
    name: "alignOffset",
    type: "number",
    defaultValue: "0",
    description: "آفست تراز به پیکسل",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const sharedClassNameProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function PopoverPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">پاپ‌اور (Popover)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش محتوای غنی در یک پورتال که با کلیک روی یک دکمه فعال می‌شود.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add popover" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic"
          description="یک پاپ‌اور ساده با هدر، عنوان و توضیحات."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="تراز"
          titleEn="Align"
          description="استفاده از پراپ align در PopoverContent برای کنترل تراز افقی."
          code={alignCode}
        >
          <AlignExample />
        </ComponentExample>

        <ComponentExample
          title="با فرم"
          titleEn="With Form"
          description="یک پاپ‌اور با فیلدهای فرم در داخل."
          code={withFormCode}
        >
          <WithFormExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Popover"
          description="کامپوننت اصلی که به عنوان کانتینر برای پاپ‌اور عمل می‌کند."
          props={popoverProps}
        />
        <PropsTable
          title="PopoverTrigger"
          description="عنصری که پاپ‌اور را فعال می‌کند. معمولاً یک دکمه است."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="PopoverContent"
          description="محتوای پاپ‌اور که نمایش داده می‌شود."
          props={popoverContentProps}
        />
        <PropsTable
          title="PopoverHeader"
          description="برای گروه‌بندی عنوان و توضیحات استفاده می‌شود."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="PopoverTitle"
          description="برای نمایش عنوان پاپ‌اور استفاده می‌شود."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="PopoverDescription"
          description="برای نمایش توضیحات پاپ‌اور استفاده می‌شود."
          props={sharedClassNameProps}
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
              پشتیبانی از صفحه‌خوان (Screen Reader Support)
            </h3>
            <p>
              PopoverTitle و PopoverDescription به صورت خودکار با صفحه‌خوان‌ها
              ارتباط برقرار می‌کنند و محتوای پاپ‌اور را به کاربران نابینا
              اعلام می‌کنند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پشتیبانی از RTL
            </h3>
            <p>
              تمام کامپوننت‌ها از ویژگی‌های منطقی CSS استفاده می‌کنند و در هر
              دو جهت RTL و LTR به درستی کار می‌کنند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              مدیریت فوکوس (Focus Management)
            </h3>
            <p>
              هنگام باز شدن پاپ‌اور، فوکوس به محتوای آن منتقل می‌شود و با بسته
              شدن، به تریگر برمی‌گردد.
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
              ساختار پاپ‌اور (Popover Structure)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">PopoverTrigger:</strong>{" "}
                همیشه از <code className="text-sm bg-muted px-2 py-1 rounded">asChild</code>{" "}
                برای ترکیب با دکمه‌ها استفاده کنید
              </li>
              <li>
                <strong className="text-foreground">PopoverHeader:</strong>{" "}
                برای گروه‌بندی عنوان و توضیحات استفاده کنید
              </li>
              <li>
                <strong className="text-foreground">PopoverContent:</strong>{" "}
                محتوای اصلی را در این بخش قرار دهید
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">تراز و موقعیت</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">align:</strong> برای کنترل
                تراز افقی استفاده کنید (start, center, end)
              </li>
              <li>
                <strong className="text-foreground">side:</strong> برای تعیین
                جهت نمایش استفاده کنید (top, bottom, left, right)
              </li>
              <li>
                <strong className="text-foreground">sideOffset:</strong> برای
                تنظیم فاصله از تریگر استفاده کنید
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استفاده با فرم‌ها</h3>
            <p className="text-muted-foreground">
              پاپ‌اور برای نمایش فرم‌های کوچک، منوهای عملیات یا اطلاعات
              تکمیلی مناسب است. از آن برای محتوای تعاملی که نیاز به ورودی
              کاربر دارد استفاده کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <ComponentExample
        title="نحوه استفاده"
        titleEn="Usage"
        description="نمونه کامل از نحوه ایمپورت و استفاده از کامپوننت پاپ‌اور."
        code={usageCode}
      >
        <UsageExample />
      </ComponentExample>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="تراز"
          titleEn="Align"
          description="استفاده از پراپ align برای کنترل تراز افقی پاپ‌اور."
          code={alignCode}
        >
          <AlignExample />
        </SubExample>
        <SubExample
          title="با فرم"
          titleEn="With Form"
          description="استفاده از پاپ‌اور برای نمایش فرم‌های کوچک."
          code={withFormCode}
        >
          <WithFormExample />
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
