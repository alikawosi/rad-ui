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
import WithLinksExample, { code as withLinksCode } from "./_examples/with-links";
import { code as usageCode } from "./_examples/usage";

const navigationMenuProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "undefined",
    description: "مقدار آیتم فعال (کنترل‌شده)",
  },
  {
    name: "defaultValue",
    type: "string",
    defaultValue: "undefined",
    description: "مقدار پیش‌فرض آیتم فعال",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر آیتم فعال",
  },
  {
    name: "dir",
    type: '"ltr" | "rtl"',
    defaultValue: '"rtl"',
    description: "جهت متن برای پشتیبانی RTL",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
    description: "جهت منوی ناوبری",
  },
];

const navigationMenuTriggerProps: PropDefinition[] = [
  {
    name: "asChild",
    type: "boolean",
    defaultValue: "false",
    description: "ترکیب با فرزند به عنوان trigger",
  },
];

const navigationMenuContentProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "dir",
    type: '"ltr" | "rtl"',
    defaultValue: '"rtl"',
    description: "جهت متن محتوا",
  },
  {
    name: "forceMount",
    type: "boolean",
    defaultValue: "undefined",
    description: "اجبار رندر برای کنترل انیمیشن",
  },
];

const navigationMenuLinkProps: PropDefinition[] = [
  {
    name: "asChild",
    type: "boolean",
    defaultValue: "false",
    description: "ترکیب با Link یا تگ a برای مسیریابی",
  },
  {
    name: "active",
    type: "boolean",
    defaultValue: "false",
    description: "وضعیت فعال بودن لینک",
  },
  {
    name: "onSelect",
    type: "(event: Event) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام انتخاب",
  },
];

export default function NavigationMenuPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">منوی ناوبری (Navigation Menu)</h1>
        <p className="text-lg text-muted-foreground">
          مجموعه‌ای از لینک‌ها برای ناوبری وب‌سایت با محتوای کشویی و پشتیبانی
          کامل از RTL
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add navigation-menu"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic"
          description="منوی ناوبری ساده با trigger و محتوای کشویی"
          code={basicCode}
          className="mb-8"
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="لینک‌ها"
          titleEn="With Links"
          description="استفاده از NavigationMenuLink با asChild برای ترکیب با Next.js Link"
          code={withLinksCode}
          className="mb-8"
        >
          <WithLinksExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="NavigationMenu"
          description="کامپوننت اصلی منوی ناوبری"
          props={navigationMenuProps}
        />
        <PropsTable
          title="NavigationMenuTrigger"
          description="دکمه‌ای که محتوا را باز و بسته می‌کند"
          props={navigationMenuTriggerProps}
        />
        <PropsTable
          title="NavigationMenuContent"
          description="محتوای کشویی که هنگام باز شدن نمایش داده می‌شود"
          props={navigationMenuContentProps}
        />
        <PropsTable
          title="NavigationMenuLink"
          description="لینک ناوبری با پشتیبانی asChild"
          props={navigationMenuLinkProps}
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
                  Space
                </code>{" "}
                یا{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                - باز کردن محتوا
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Down
                </code>{" "}
                /{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Up
                </code>{" "}
                - حرکت بین آیتم‌ها
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Right
                </code>{" "}
                /{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Left
                </code>{" "}
                - حرکت به trigger بعدی/قبلی
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Esc</code>{" "}
                - بستن منو
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              نقش ARIA (ARIA Roles)
            </h3>
            <p>
              منوی ناوبری از نقش navigation پیروی می‌کند و برای ناوبری وب‌سایت
              طراحی شده است، نه منوی دستورات اپلیکیشن
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
            <h3 className="font-semibold mb-3">استفاده از NavigationMenuLink</h3>
            <p className="text-muted-foreground">
              برای تمام لینک‌های ناوبری از NavigationMenuLink استفاده کنید و با
              asChild آن را با Next.js Link یا تگ a ترکیب کنید تا دسترسی‌پذیری
              و تعاملات کیبورد حفظ شود
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">تفاوت با Menubar</h3>
            <p className="text-muted-foreground">
              منوی ناوبری برای ناوبری وب‌سایت (لینک‌ها) طراحی شده است. Menubar
              برای منوهای دستورات اپلیکیشن (مانند فایل، ویرایش) مناسب است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">پشتیبانی RTL</h3>
            <p className="text-muted-foreground">
              کامپوننت به صورت پیش‌فرض با dir="rtl" کار می‌کند. برای LTR می‌توانید
              dir="ltr" را به NavigationMenu پاس دهید
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
