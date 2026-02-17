"use client";

import { InstallCodeBlock } from "@/components/docs/code-block";
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
import SizesExample, { code as sizesCode } from "./_examples/sizes";
import WithActionExample, { code as actionCode } from "./_examples/with-action";
import WithImageExample, { code as imageCode } from "./_examples/with-image";
import LoginCardExample, { code as loginCode } from "./_examples/login-card";
import UsageExample, { code as usageCode } from "./_examples/usage";
import CustomStylingExample, {
  code as customStylingCode,
} from "./_examples/custom-styling";
import InteractiveCardExample, {
  code as hoverCardCode,
} from "./_examples/interactive-card";
import GridLayoutExample, {
  code as gridLayoutCode,
} from "./_examples/grid-layout";

const cardProps: PropDefinition[] = [
  {
    name: "size",
    type: '"default" | "sm"',
    defaultValue: '"default"',
    description: "اندازه کارت و فاصله‌گذاری داخلی",
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

export default function CardDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">کارت (Card)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت کارت برای گروه‌بندی محتوا و اقدامات مرتبط با پشتیبانی کامل
          از RTL و حالت تاریک
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add card" />
      </section>

      {/* Basic Example */}
      <ComponentExample
        title="نمونه پایه"
        titleEn="Basic Example"
        description="ساده‌ترین شکل استفاده از کامپوننت کارت با عنوان، توضیحات، محتوا و فوتر."
        code={basicCode}
      >
        <BasicExample />
      </ComponentExample>

      {/* Size Variants */}
      <ComponentExample
        title="اندازه‌ها"
        titleEn="Sizes"
        description={
          <>
            از پراپ{" "}
            <code className="text-sm bg-muted px-2 py-1 rounded">
              size="sm"
            </code>{" "}
            برای کارت‌های فشرده‌تر استفاده کنید.
          </>
        }
        code={sizesCode}
        previewCentered={false}
      >
        <SizesExample />
      </ComponentExample>

      {/* With CardAction */}
      <ComponentExample
        title="با اقدام"
        titleEn="With Action"
        description={
          <>
            از{" "}
            <code className="text-sm bg-muted px-2 py-1 rounded">
              CardAction
            </code>{" "}
            برای قرار دادن دکمه یا بج در گوشه هدر استفاده کنید.
          </>
        }
        code={actionCode}
      >
        <WithActionExample />
      </ComponentExample>

      {/* With Image */}
      <ComponentExample
        title="با تصویر"
        titleEn="With Image"
        description="تصویر را قبل از CardHeader قرار دهید تا کارت با تصویر ایجاد شود."
        code={imageCode}
      >
        <WithImageExample />
      </ComponentExample>

      {/* Login Card */}
      <ComponentExample
        title="کارت ورود"
        titleEn="Login Card"
        description="نمونه‌ای از استفاده کارت برای فرم ورود کاربر."
        code={loginCode}
      >
        <LoginCardExample />
      </ComponentExample>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Card"
          description="کامپوننت اصلی که به عنوان کانتینر برای محتوای کارت عمل می‌کند."
          props={cardProps}
        />
        <PropsTable
          title="CardHeader"
          description="برای عنوان، توضیحات و اقدام اختیاری استفاده می‌شود."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="CardTitle"
          description="برای عنوان کارت استفاده می‌شود. از تگ h3 استفاده می‌کند."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="CardDescription"
          description="برای متن کمکی زیر عنوان استفاده می‌شود."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="CardAction"
          description="محتوا را در گوشه بالای هدر قرار می‌دهد (مثلاً دکمه یا بج)."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="CardContent"
          description="برای بدنه اصلی کارت استفاده می‌شود."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="CardFooter"
          description="برای اقدامات و محتوای ثانویه در پایین کارت استفاده می‌شود."
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
              ساختار معنایی (Semantic Structure)
            </h3>
            <p>
              CardTitle از تگ{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">h3</code>{" "}
              استفاده می‌کند که برای خوانندگان صفحه سلسله‌مراتب مناسبی ایجاد
              می‌کند.
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
              کنتراست رنگ (Color Contrast)
            </h3>
            <p>
              تمام ترکیب‌های رنگی استانداردهای WCAG 2.1 AA را رعایت می‌کنند.
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
            <h3 className="font-semibold mb-3">ساختار کارت (Card Structure)</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">CardHeader:</strong> همیشه
                با عنوان شروع کنید تا کاربر بداند کارت درباره چیست
              </li>
              <li>
                <strong className="text-foreground">CardContent:</strong> محتوای
                اصلی را در این بخش قرار دهید
              </li>
              <li>
                <strong className="text-foreground">CardFooter:</strong> اقدامات
                مانند دکمه‌ها را در فوتر قرار دهید
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              انتخاب اندازه (Size Selection)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Default:</strong> برای
                کارت‌های اصلی با محتوای بیشتر
              </li>
              <li>
                <strong className="text-foreground">Small:</strong> برای کارت‌های
                فشرده در گرید یا سایدبار
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استفاده از CardAction</h3>
            <p className="text-muted-foreground">
              CardAction برای دکمه‌های منو (سه نقطه)، بج‌ها یا آیکون‌های وضعیت
              مناسب است. از قرار دادن چند دکمه در آن خودداری کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <ComponentExample
        title="نحوه استفاده"
        titleEn="Usage"
        description="نمونه کامل از نحوه ایمپورت و استفاده از کامپوننت کارت."
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
          title="استایل سفارشی"
          titleEn="Custom Styling"
          description="با استفاده از کلاس‌های Tailwind می‌توانید ظاهر کارت را سفارشی کنید."
          code={customStylingCode}
        >
          <CustomStylingExample />
        </SubExample>
        <SubExample
          title="کارت تعاملی"
          titleEn="Interactive Card"
          description="افزودن افکت‌های هاور برای کارت‌های قابل کلیک."
          code={hoverCardCode}
        >
          <InteractiveCardExample />
        </SubExample>
        <SubExample
          title="چیدمان گرید"
          titleEn="Grid Layout"
          description="نمایش چندین کارت در یک گرید ریسپانسیو."
          code={gridLayoutCode}
          previewCentered={false}
        >
          <GridLayoutExample />
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}