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
import RatiosExample, { code as ratiosCode } from "./_examples/ratios";
import GridExample, { code as gridCode } from "./_examples/grid";

const aspectRatioProps: PropDefinition[] = [
  {
    name: "ratio",
    type: "number",
    defaultValue: "1",
    description: "نسبت ابعاد مورد نظر (مثلاً 16/9 یا 4/3)",
  },
  {
    name: "asChild",
    type: "boolean",
    defaultValue: "false",
    description: "رندر به عنوان فرزند و ترکیب props",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function AspectRatioPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">نسبت تصویر (Aspect Ratio)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش محتوا با حفظ نسبت ابعاد دلخواه.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add aspect-ratio"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="استفاده ساده با نسبت 16:9 برای تصاویر."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="نسبت‌های رایج"
          titleEn="Common Ratios"
          description="نسبت‌های پرکاربرد مانند 16:9، 4:3، 1:1 و ..."
          code={ratiosCode}
        >
          <RatiosExample />
        </ComponentExample>

        <ComponentExample
          title="گالری تصاویر"
          titleEn="Image Gallery"
          description="استفاده در گالری تصاویر برای یکسان‌سازی ابعاد."
          code={gridCode}
        >
          <GridExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="AspectRatio"
          description="پراپ‌های کامپوننت AspectRatio."
          props={aspectRatioProps}
        />
      </ApiReferenceSection>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">انتخاب نسبت مناسب</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>برای ویدیوها و اسلایدها: 16:9</li>
              <li>برای تصاویر کلاسیک: 4:3</li>
              <li>برای گالری و شبکه‌های تصویر: 1:1</li>
              <li>برای بنرها و هدرها: 21:9 یا 3:1</li>
              <li>برای استوری و محتوای موبایل: 9:16</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استفاده با Next.js Image</h3>
            <p className="text-muted-foreground">
              برای استفاده با کامپوننت Image از Next.js، حتماً از prop{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">fill</code>{" "}
              استفاده کنید و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                object-cover
              </code>{" "}
              یا{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                object-contain
              </code>{" "}
              را اعمال کنید.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
