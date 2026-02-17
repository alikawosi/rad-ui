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
import HorizontalExample, { code as horizontalCode } from "./_examples/horizontal";
import StyledExample, { code as styledCode } from "./_examples/styled";
import BothScrollbarsExample, { code as bothCode } from "./_examples/both";
import HiddenScrollbarExample, { code as hiddenCode } from "./_examples/hidden";
import CustomContainerExample, { code as customContainerCode } from "./_examples/custom-container";

const scrollAreaProps: PropDefinition[] = [
  {
    name: "type",
    type: '"auto" | "always" | "scroll" | "hover"',
    defaultValue: '"hover"',
    description: "نحوه نمایش نوار اسکرول",
  },
  {
    name: "scrollHideDelay",
    type: "number",
    defaultValue: "600",
    description: "تاخیر مخفی شدن نوار اسکرول (میلی‌ثانیه)",
  },
  {
    name: "dir",
    type: '"ltr" | "rtl"',
    defaultValue: '"rtl"',
    description: "جهت متن (پیش‌فرض RTL)",
  },
  {
    name: "hideScrollbar",
    type: "boolean",
    defaultValue: "false",
    description: "مخفی کردن نوار اسکرول با حفظ قابلیت اسکرول",
  },
  {
    name: "scrollbarThumbClassName",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS برای سفارشی‌سازی رنگ دستگیره نوار اسکرول",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS اضافی",
  },
];

const scrollBarProps: PropDefinition[] = [
  {
    name: "orientation",
    type: '"vertical" | "horizontal"',
    defaultValue: '"vertical"',
    description: "جهت نوار اسکرول",
  },
  {
    name: "forceMount",
    type: "boolean",
    defaultValue: "undefined",
    description: "نمایش اجباری حتی وقتی محتوا نیاز به اسکرول ندارد",
  },
  {
    name: "thumbClassName",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS برای دستگیره نوار اسکرول",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS اضافی برای track نوار اسکرول",
  },
];

export default function ScrollAreaPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">ناحیه اسکرول (Scroll Area)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت ناحیه اسکرول برای ایجاد نوار اسکرول سفارشی با ظاهر یکسان در
          تمام مرورگرها استفاده می‌شود. این کامپوننت رفتار اسکرول بومی مرورگر را
          حفظ می‌کند.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add scroll-area"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="پیش‌فرض"
          titleEn="Default"
          description="نمایش لیست عمودی با نوار اسکرول سفارشی."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="افقی"
          titleEn="Horizontal"
          description="اسکرول افقی با استفاده از ScrollBar با orientation='horizontal'."
          code={horizontalCode}
        >
          <HorizontalExample />
        </ComponentExample>

        <ComponentExample
          title="نوار اسکرول سفارشی"
          titleEn="Styled Scrollbar"
          description="سفارشی‌سازی رنگ دستگیره نوار اسکرول."
          code={styledCode}
        >
          <StyledExample />
        </ComponentExample>

        <ComponentExample
          title="اسکرول دوطرفه"
          titleEn="Both Scrollbars"
          description="محتوایی که هم به اسکرول عمودی و هم افقی نیاز دارد."
          code={bothCode}
        >
          <BothScrollbarsExample />
        </ComponentExample>

        <ComponentExample
          title="بدون نوار اسکرول"
          titleEn="Hidden Scrollbar"
          description="مخفی کردن نوار اسکرول با حفظ قابلیت اسکرول."
          code={hiddenCode}
        >
          <HiddenScrollbarExample />
        </ComponentExample>
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="ناحیه اسکرول با پس‌زمینه"
          titleEn="Custom Container"
          description="سفارشی‌سازی ظاهر ناحیه اسکرول و آیتم‌های داخلی."
          code={customContainerCode}
        >
          <CustomContainerExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="ScrollArea"
          description="پراپ‌های کامپوننت ScrollArea."
          props={scrollAreaProps}
        />
        <PropsTable
          title="ScrollBar"
          description="پراپ‌های کامپوننت ScrollBar."
          props={scrollBarProps}
        />
      </ApiReferenceSection>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">تعیین ارتفاع ثابت (Fixed Height)</h3>
            <p className="text-muted-foreground">
              برای فعال شدن اسکرول عمودی، حتماً یک ارتفاع ثابت (مثل h-72 یا
              h-[300px]) روی ScrollArea تنظیم کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">اسکرول افقی (Horizontal Scroll)</h3>
            <p className="text-muted-foreground">
              برای اسکرول افقی، از whitespace-nowrap روی container و ScrollBar با
              orientation=&quot;horizontal&quot; استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">پشتیبانی RTL</h3>
            <p className="text-muted-foreground">
              برای زبان‌های راست به چپ، prop dir=&quot;rtl&quot; را روی ScrollArea تنظیم
              کنید تا نوار اسکرول در سمت صحیح نمایش داده شود
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
