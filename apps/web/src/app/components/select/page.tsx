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
import GroupsExample, { code as groupsCode } from "./_examples/groups";
import ScrollableExample, {
  code as scrollableCode,
} from "./_examples/scrollable";
import DisabledExample, { code as disabledCode } from "./_examples/disabled";
import InvalidExample, { code as invalidCode } from "./_examples/invalid";
import ControlledExample, {
  code as controlledCode,
} from "./_examples/controlled";
import FormExample, { code as formCode } from "./_examples/with-form";
import { code as usageCode } from "./_examples/usage";

const selectProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "undefined",
    description: "مقدار انتخاب شده (کنترل‌شده)",
  },
  {
    name: "defaultValue",
    type: "string",
    defaultValue: "undefined",
    description: "مقدار پیش‌فرض (غیرکنترل‌شده)",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر مقدار",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن انتخابگر",
  },
  {
    name: "name",
    type: "string",
    defaultValue: "undefined",
    description: "نام فیلد برای ارسال فرم",
  },
  {
    name: "required",
    type: "boolean",
    defaultValue: "false",
    description: "الزامی بودن فیلد",
  },
  {
    name: "dir",
    type: '"ltr" | "rtl"',
    defaultValue: '"rtl"',
    description: "جهت متن",
  },
];

const selectTriggerProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "aria-invalid",
    type: "boolean",
    defaultValue: "false",
    description: "نشان دادن حالت نامعتبر",
  },
];

const selectContentProps: PropDefinition[] = [
  {
    name: "position",
    type: '"item-aligned" | "popper"',
    defaultValue: '"popper"',
    description: "نحوه قرارگیری محتوا نسبت به trigger",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "sideOffset",
    type: "number",
    defaultValue: "4",
    description: "فاصله از trigger (پیکسل)",
  },
];

const selectItemProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "-",
    description: "مقدار آیتم (الزامی)",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن آیتم",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function SelectPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">انتخابگر (Select)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش لیست گزینه‌ها برای انتخاب کاربر با پشتیبانی کامل از RTL و
          دسترسی‌پذیری
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add select"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از انتخابگر با لیست میوه‌ها"
          code={basicCode}
          className="mb-8"
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="گروه‌بندی"
          titleEn="Groups"
          description="استفاده از SelectGroup و SelectLabel برای سازماندهی آیتم‌ها"
          code={groupsCode}
          className="mb-8"
        >
          <GroupsExample />
        </ComponentExample>

        <ComponentExample
          title="قابل اسکرول"
          titleEn="Scrollable"
          description="انتخابگر با آیتم‌های زیاد که قابل اسکرول است"
          code={scrollableCode}
          className="mb-8"
        >
          <ScrollableExample />
        </ComponentExample>

        <ComponentExample
          title="غیرفعال"
          titleEn="Disabled"
          description="غیرفعال کردن کل انتخابگر یا آیتم‌های خاص"
          code={disabledCode}
          className="mb-8"
        >
          <DisabledExample />
        </ComponentExample>

        <ComponentExample
          title="نامعتبر"
          titleEn="Invalid"
          description="نمایش حالت خطا با استفاده از Field و aria-invalid"
          code={invalidCode}
          className="mb-8"
        >
          <InvalidExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Select"
          description="کامپوننت اصلی انتخابگر"
          props={selectProps}
        />
        <PropsTable
          title="SelectTrigger"
          description="دکمه باز کردن منوی انتخاب"
          props={selectTriggerProps}
        />
        <PropsTable
          title="SelectContent"
          description="محتوای منوی انتخاب"
          props={selectContentProps}
        />
        <PropsTable
          title="SelectItem"
          description="آیتم قابل انتخاب"
          props={selectItemProps}
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
                - باز کردن منو یا انتخاب آیتم
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Down
                </code>{" "}
                - حرکت به آیتم بعدی
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Up
                </code>{" "}
                - حرکت به آیتم قبلی
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Escape
                </code>{" "}
                - بستن منو
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - بستن منو و حرکت به فیلد بعدی
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              فوکوس (Focus)
            </h3>
            <p>
              انتخابگر دارای حلقه فوکوس واضح است و می‌توان با کیبورد به راحتی
              در آیتم‌ها حرکت کرد
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              برچسب‌گذاری (Labeling)
            </h3>
            <p>
              همیشه از FieldLabel برای برچسب‌گذاری انتخابگر استفاده کنید تا
              کاربران صفحه‌خوان بتوانند هدف آن را درک کنند
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
              انتخاب بین Select و NativeSelect
            </h3>
            <p className="text-muted-foreground">
              از Select برای تجربه کاربری بهتر و کنترل بیشتر استفاده کنید. از
              NativeSelect برای فرم‌های ساده یا زمانی که نیاز به سازگاری کامل با
              مرورگرهای قدیمی دارید استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گروه‌بندی آیتم‌ها (Grouping)</h3>
            <p className="text-muted-foreground">
              برای لیست‌های بلند، از SelectGroup و SelectLabel برای
              سازماندهی آیتم‌ها استفاده کنید. این کار باعث می‌شود کاربران
              راحت‌تر بتوانند گزینه مورد نظر خود را پیدا کنند.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              متن راهنما (Placeholder Text)
            </h3>
            <p className="text-muted-foreground">
              از متن راهنمای واضح و مفید استفاده کنید. به جای &quot;انتخاب
              کنید&quot; از متن‌هایی مانند &quot;یک کشور انتخاب کنید&quot; یا
              &quot;نوع محصول را انتخاب کنید&quot; استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">عرض مناسب (Width)</h3>
            <p className="text-muted-foreground">
              عرض انتخابگر را به اندازه‌ای تنظیم کنید که طولانی‌ترین گزینه
              به راحتی قابل مشاهده باشد. از کلاس‌های w-full یا max-w-* استفاده
              کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              اعتبارسنجی (Validation)
            </h3>
            <p className="text-muted-foreground">
              برای نمایش خطاهای اعتبارسنجی، از Field با data-invalid و
              aria-invalid استفاده کنید. همیشه پیام خطای واضح و مفید نمایش
              دهید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              حالت کنترل‌شده (Controlled)
            </h3>
            <p className="text-muted-foreground">
              برای فرم‌های پیچیده، از حالت کنترل‌شده با value و onValueChange
              استفاده کنید تا بتوانید مقدار انتخابگر را مدیریت کنید.
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
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های پیشرفته (Advanced Examples)
        </h2>

        <ComponentExample
          title="حالت کنترل‌شده"
          titleEn="Controlled"
          description="کنترل مقدار انتخابگر با استفاده از state"
          code={controlledCode}
          className="mb-8"
        >
          <ControlledExample />
        </ComponentExample>

        <ComponentExample
          title="با فرم"
          titleEn="With Form"
          description="استفاده از انتخابگر در فرم با اعتبارسنجی"
          code={formCode}
          className="mb-8"
        >
          <FormExample />
        </ComponentExample>
      </section>
    </div>
  );
}
