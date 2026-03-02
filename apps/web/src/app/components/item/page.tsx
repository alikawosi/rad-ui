"use client"

import {
  InstallCodeBlock,
  InlineCodeBlock,
} from "@/components/docs/code-block"
import {
  ComponentExample,
  ComponentExampleGroup,
  SubExample,
} from "@/components/docs/component-example"
import {
  ApiReferenceSection,
  PropsTable,
  type PropDefinition,
} from "@/components/docs/props-table"
import BasicExample, { code as basicCode } from "./_examples/basic"
import VariantsExample, { code as variantsCode } from "./_examples/variants"
import SizesExample, { code as sizesCode } from "./_examples/sizes"
import ActionsExample, { code as actionsCode } from "./_examples/actions"
import MediaExample, { code as mediaCode } from "./_examples/media"
import GroupExample, { code as groupCode } from "./_examples/group"
import UsageExample, { code as usageCode } from "./_examples/usage"

const itemProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"default" | "outline" | "muted" | "ghost"',
    defaultValue: '"default"',
    description: "سبک ظاهری آیتم",
  },
  {
    name: "size",
    type: '"default" | "sm" | "xs"',
    defaultValue: '"default"',
    description: "اندازه آیتم",
  },
  {
    name: "asChild",
    type: "boolean",
    defaultValue: "false",
    description: "تغییر عنصر ریشه به فرزند مستقیم (برای لینک‌ها و غیره)",
  },
]

const itemMediaProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"default" | "icon" | "image" | "avatar"',
    defaultValue: '"default"',
    description: "نوع رسانه (برای تنظیم استایل مناسب)",
  },
]

export default function ItemPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">آیتم (Item)</h1>
        <p className="text-lg text-muted-foreground">
          یک کامپوننت همه‌کاره برای نمایش محتوا شامل تصویر، عنوان، توضیحات و
          اقدامات.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add item"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از آیتم."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="انواع"
          titleEn="Variants"
          description="آیتم‌ها در انواع مختلف برای کاربردهای متفاوت."
          code={variantsCode}
        >
          <VariantsExample />
        </ComponentExample>

        <ComponentExample
          title="اندازه‌ها"
          titleEn="Sizes"
          description="کنترل فاصله داخلی آیتم‌ها با پراپ size."
          code={sizesCode}
        >
          <SizesExample />
        </ComponentExample>

        <ComponentExample
          title="با اقدامات"
          titleEn="With Actions"
          description="استفاده از ItemActions برای قرار دادن دکمه‌ها."
          code={actionsCode}
        >
          <ActionsExample />
        </ComponentExample>

        <ComponentExample
          title="انواع رسانه"
          titleEn="Media Types"
          description="استایل‌دهی متفاوت برای آیکون، تصویر و آواتار."
          code={mediaCode}
        >
          <MediaExample />
        </ComponentExample>

        <ComponentExample
          title="گروه‌بندی"
          titleEn="Grouping"
          description="استفاده از ItemGroup و ItemSeparator برای لیست آیتم‌ها."
          code={groupCode}
        >
          <GroupExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Item"
          description="پراپ‌های کامپوننت Item."
          props={itemProps}
        />
        <PropsTable
          title="ItemMedia"
          description="پراپ‌های کامپوننت ItemMedia."
          props={itemMediaProps}
        />
      </ApiReferenceSection>

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            این کامپوننت از المان‌های معنایی HTML (مانند <code>div</code>،{" "}
            <code>h3</code>، <code>p</code>) استفاده می‌کند و با صفحه‌خوان‌ها
            سازگار است.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              اگر از <code>asChild</code> برای لینک دادن استفاده می‌کنید، فوکوس
              و تعاملات کیبورد به درستی مدیریت می‌شوند.
            </li>
          </ul>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>
            از <strong>ItemTitle</strong> برای عنوان اصلی و کوتاه استفاده کنید.
          </li>
          <li>
            از <strong>ItemDescription</strong> برای توضیحات مکمل استفاده کنید.
          </li>
          <li>
            برای لیست‌های طولانی از <strong>ItemGroup</strong> استفاده کنید تا
            فاصله‌گذاری و جداکننده‌ها به درستی اعمال شوند.
          </li>
          <li>
            در حالت RTL، چیدمان به طور خودکار تنظیم می‌شود (تصویر در راست،
            اقدامات در چپ).
          </li>
        </ul>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <InlineCodeBlock code={usageCode} />
      </section>
    </div>
  )
}
