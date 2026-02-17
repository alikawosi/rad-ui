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
import VerticalExample, { code as verticalCode } from "./_examples/vertical";
import CardExample, { code as cardCode } from "./_examples/card";
import BreadcrumbExample, { code as breadcrumbCode } from "./_examples/breadcrumb";
import NavExample, { code as navCode } from "./_examples/nav";
import CustomStyleExample, { code as customStyleCode } from "./_examples/custom-style";

const separatorProps: PropDefinition[] = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
    description: "جهت قرارگیری جداکننده",
  },
  {
    name: "decorative",
    type: "boolean",
    defaultValue: "true",
    description: "آیا جداکننده صرفاً تزئینی است (بدون معنای معنایی)",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function SeparatorPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">جداکننده (Separator)</h1>
        <p className="text-lg text-muted-foreground">
          جداکننده برای تفکیک بصری یا معنایی محتوا استفاده می‌شود.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add separator" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="استفاده ساده برای جدا کردن بخش‌های متن."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="جداکننده افقی"
          titleEn="Horizontal"
          description="حالت پیش‌فرض، برای جدا کردن بخش‌های عمودی محتوا."
          code={horizontalCode}
        >
          <HorizontalExample />
        </ComponentExample>

        <ComponentExample
          title="جداکننده عمودی"
          titleEn="Vertical"
          description="برای جدا کردن آیتم‌های افقی مثل منوها و لیست‌ها."
          code={verticalCode}
        >
          <VerticalExample />
        </ComponentExample>

        <ComponentExample
          title="با استایل سفارشی"
          titleEn="Custom Style"
          description="تغییر رنگ و ضخامت جداکننده."
          code={customStyleCode}
        >
          <CustomStyleExample />
        </ComponentExample>
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های کاربردی"
        titleEn="Practical Examples"
      >
        <SubExample
          title="کارت با بخش‌های مختلف"
          titleEn="Card with Sections"
          description="استفاده در کارت برای سازماندهی اطلاعات."
          code={cardCode}
        >
          <CardExample />
        </SubExample>

        <SubExample
          title="مسیر صفحه"
          titleEn="Breadcrumb"
          description="استفاده به عنوان جداکننده در breadcrumb."
          code={breadcrumbCode}
        >
          <BreadcrumbExample />
        </SubExample>

        <SubExample
          title="لینک‌های فوتر"
          titleEn="Footer Links"
          description="جدا کردن لینک‌های فوتر."
          code={navCode}
        >
          <NavExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Separator"
          description="پراپ‌های کامپوننت Separator."
          props={separatorProps}
        />
      </ApiReferenceSection>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">کی از جداکننده استفاده کنیم؟</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>برای جدا کردن بخش‌های مختلف محتوا</li>
              <li>در منوها برای جدا کردن آیتم‌های مختلف</li>
              <li>در کارت‌ها برای سازماندهی اطلاعات</li>
              <li>در فوترها و هدرها برای تفکیک لینک‌ها</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">فاصله‌گذاری (Spacing)</h3>
            <p className="text-muted-foreground">
              از کلاس‌های{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">my-4</code> یا{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">my-6</code> برای
              افقی و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">mx-4</code> برای
              عمودی استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استایل سفارشی (Custom Styling)</h3>
            <p className="text-muted-foreground">
              می‌توانید با <code className="text-sm bg-muted px-2 py-1 rounded">className</code>{" "}
              رنگ، ضخامت و سایر ویژگی‌ها را تغییر دهید
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
