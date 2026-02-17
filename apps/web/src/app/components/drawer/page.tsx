"use client";

import {
  InstallCodeBlock,
  InlineCodeBlock,
} from "@/components/docs/code-block";
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
import DirectionsExample, {
  code as directionsCode,
} from "./_examples/directions";
import WithFormExample, { code as withFormCode } from "./_examples/with-form";
import ScrollableExample, {
  code as scrollableCode,
} from "./_examples/scrollable";
import ControlledExample, {
  code as controlledCode,
} from "./_examples/controlled";
import ResponsiveDialogExample, {
  code as responsiveDialogCode,
} from "./_examples/responsive-dialog";
import NestedExample, { code as nestedCode } from "./_examples/nested";
import { code as usageCode } from "./_examples/usage";

const drawerProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    defaultValue: "undefined",
    description: "وضعیت باز/بسته بودن (کنترل‌شده)",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر وضعیت",
  },
  {
    name: "direction",
    type: '"top" | "right" | "bottom" | "left"',
    defaultValue: '"bottom"',
    description: "جهت باز شدن کشو",
  },
  {
    name: "shouldScaleBackground",
    type: "boolean",
    defaultValue: "true",
    description: "کوچک شدن پس‌زمینه هنگام باز شدن",
  },
  {
    name: "modal",
    type: "boolean",
    defaultValue: "true",
    description: "حالت مودال (بلاک کردن تعامل با پس‌زمینه)",
  },
];

const drawerContentProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS اضافی",
  },
  {
    name: "children",
    type: "React.ReactNode",
    defaultValue: "undefined",
    description: "محتوای کشو",
  },
];

export default function DrawerPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">کشو (Drawer)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت کشو برای نمایش پنل‌های کشویی از لبه‌های صفحه استفاده
          می‌شود. این کامپوننت برای موبایل بهینه شده و از حرکات لمسی پشتیبانی
          می‌کند.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add drawer"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از کشو که از پایین صفحه باز می‌شود"
          code={basicCode}
          className="mb-8"
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="جهت‌ها"
          titleEn="Directions"
          description="کشو می‌تواند از چهار جهت باز شود: بالا، راست، پایین و چپ"
          code={directionsCode}
          className="mb-8"
          previewClassName="flex-wrap gap-2"
        >
          <DirectionsExample />
        </ComponentExample>

        <ComponentExample
          title="با فرم"
          titleEn="With Form"
          description="کشو با فرم ورودی برای ویرایش اطلاعات"
          code={withFormCode}
          className="mb-8"
        >
          <WithFormExample />
        </ComponentExample>

        <ComponentExample
          title="محتوای قابل اسکرول"
          titleEn="Scrollable Content"
          description="کشو با محتوای طولانی که قابل اسکرول است"
          code={scrollableCode}
          className="mb-8"
        >
          <ScrollableExample />
        </ComponentExample>

        <ComponentExample
          title="کنترل شده"
          titleEn="Controlled"
          description="کنترل وضعیت باز/بسته کشو با استفاده از state"
          code={controlledCode}
          className="mb-8"
          previewClassName="flex-col gap-4"
        >
          <ControlledExample />
        </ComponentExample>

        <ComponentExample
          title="دیالوگ واکنش‌گرا"
          titleEn="Responsive Dialog"
          description="ترکیب Dialog و Drawer برای ساخت یک دیالوگ واکنش‌گرا. در دسکتاپ Dialog و در موبایل Drawer نمایش داده می‌شود."
          code={responsiveDialogCode}
          className="mb-8"
        >
          <ResponsiveDialogExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable title="Drawer" props={drawerProps} />
        <PropsTable title="DrawerContent" props={drawerContentProps} />
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
                - بستن کشو
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت بین المان‌های قابل فوکوس داخل کشو
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
              تله فوکوس (Focus Trap)
            </h3>
            <p>
              وقتی کشو باز است، فوکوس در داخل آن محبوس می‌شود و کاربر
              نمی‌تواند با Tab به خارج از کشو برود
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پشتیبانی از لمس (Touch Support)
            </h3>
            <p>
              کشو از حرکات لمسی پشتیبانی می‌کند. کاربران می‌توانند با کشیدن
              انگشت کشو را ببندند
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              نقش‌های ARIA
            </h3>
            <p>
              کشو از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                role=&quot;dialog&quot;
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-modal=&quot;true&quot;
              </code>{" "}
              استفاده می‌کند
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
              استفاده در موبایل (Mobile First)
            </h3>
            <p className="text-muted-foreground">
              کشو برای تجربه موبایل بهینه شده است. برای دسکتاپ می‌توانید از
              Dialog استفاده کنید و بر اساس سایز صفحه بین آن‌ها سوییچ کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              جهت مناسب (Appropriate Direction)
            </h3>
            <p className="text-muted-foreground">
              کشو از پایین برای اقدامات سریع و منوها مناسب است. کشو از کنار
              برای پنل‌های ناوبری و فیلترها بهتر است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">عنوان واضح (Clear Title)</h3>
            <p className="text-muted-foreground">
              همیشه از DrawerTitle استفاده کنید تا کاربران صفحه‌خوان بتوانند
              محتوای کشو را درک کنند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              دکمه‌های اقدام (Action Buttons)
            </h3>
            <p className="text-muted-foreground">
              دکمه‌های اصلی و ثانویه را در DrawerFooter قرار دهید. دکمه انصراف
              همیشه باید وجود داشته باشد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              محتوای طولانی (Long Content)
            </h3>
            <p className="text-muted-foreground">
              برای محتوای طولانی از overflow-y-auto استفاده کنید. فوتر همیشه
              باید قابل مشاهده باقی بماند
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <InlineCodeBlock code={usageCode} />
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="کشو تودرتو"
          titleEn="Nested Drawer"
          description="باز کردن یک کشو از داخل کشوی دیگر"
          code={nestedCode}
        >
          <NestedExample />
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
