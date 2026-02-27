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
import BasicTabsExample, { code as basicCode } from "./_examples/basic";
import TabsWithIconsExample, { code as withIconsCode } from "./_examples/with-icon";
import FullWidthTabsExample, { code as fullWidthCode } from "./_examples/full-width";
import DisabledTabsExample, { code as disabledCode } from "./_examples/disabled";
import TabsUsageExample, { code as usageCode } from "./_examples/usage";

const tabsProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "undefined",
    description: "مقدار کنترل‌شده تب فعال.",
  },
  {
    name: "defaultValue",
    type: "string",
    defaultValue: "undefined",
    description: "مقدار پیش‌فرض تب فعال (غیرکنترل‌شده).",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر تب فعال.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن تمام تب‌ها و جلوگیری از تغییر.",
  },
  {
    name: "variant",
    type: '"underline" | "pill"',
    defaultValue: '"underline"',
    description: "نوع ظاهری تب‌ها (خط زیرین یا قرصی).",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "اندازه تب‌ها و تایپوگرافی آن‌ها.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    defaultValue: "false",
    description: "در صورت فعال بودن، تب‌ها عرض در دسترس را به صورت مساوی پر می‌کنند.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای روت کامپوننت.",
  },
];

const tabsListProps: PropDefinition[] = [
  {
    name: "justify",
    type: '"start" | "center" | "between"',
    defaultValue: '"start"',
    description: "چیدمان افقی تب‌ها در لیست.",
  },
  {
    name: "variant",
    type: '"underline" | "pill"',
    defaultValue: '"underline"',
    description: "نوع ظاهری لیست تب‌ها. مقدار پیش‌فرض را از Tabs به ارث می‌برد.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "اندازه تب‌ها. مقدار پیش‌فرض را از Tabs به ارث می‌برد.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    defaultValue: "false",
    description: "در صورت فعال بودن، لیست تب‌ها تمام عرض را می‌گیرد.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی.",
  },
];

const tabsTriggerProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "-",
    description: "شناسه یکتای تب که باید با TabsContent متناظر باشد.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن این تب و جلوگیری از انتخاب آن.",
  },
  {
    name: "variant",
    type: '"underline" | "pill"',
    defaultValue: '"underline"',
    description: "نوع ظاهری این تب. مقدار پیش‌فرض را از Tabs به ارث می‌برد.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "اندازه این تب. مقدار پیش‌فرض را از Tabs به ارث می‌برد.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    defaultValue: "false",
    description: "در صورت فعال بودن، این تب عرض در دسترس را پر می‌کند.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی.",
  },
];

const tabsContentProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "-",
    description: "شناسه تب که محتوای این پنل را به Trigger متناظر متصل می‌کند.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی.",
  },
];

export default function TabsPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">تب‌ها (Tabs)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت تب برای جابه‌جایی بین نماهای مرتبط در یک فضا، با پشتیبانی
          کامل از RTL و حالت افقی.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add tabs"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="نمونه پایه"
          titleEn="Basic Example"
          description="ساده‌ترین حالت استفاده از تب‌ها برای جابه‌جایی بین چند بخش مرتبط."
          code={basicCode}
        >
          <BasicTabsExample />
        </ComponentExample>

        <ComponentExample
          title="با آیکون"
          titleEn="With Icons"
          description="استفاده از آیکون در کنار متن تب‌ها. در RTL از کلاس‌های ms/me برای فاصله استفاده کنید."
          code={withIconsCode}
        >
          <TabsWithIconsExample />
        </ComponentExample>

        <ComponentExample
          title="پر کردن عرض (Full Width)"
          titleEn="Full Width"
          description="تب‌هایی که عرض در دسترس را به صورت مساوی بین خود تقسیم می‌کنند."
          code={fullWidthCode}
        >
          <FullWidthTabsExample />
        </ComponentExample>

        <ComponentExample
          title="حالت غیرفعال"
          titleEn="Disabled State"
          description="غیرفعال کردن یک تب خاص برای جلوگیری از دسترسی موقت."
          code={disabledCode}
        >
          <DisabledTabsExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Tabs"
          description="کامپوننت ریشه که وضعیت انتخاب تب‌ها را مدیریت می‌کند."
          props={tabsProps}
        />
        <PropsTable
          title="TabsList"
          description="لیست افقی تب‌ها که به عنوان نوار ناوبری عمل می‌کند."
          props={tabsListProps}
        />
        <PropsTable
          title="TabsTrigger"
          description="دکمه‌ای که برای فعال کردن یک تب خاص استفاده می‌شود."
          props={tabsTriggerProps}
        />
        <PropsTable
          title="TabsContent"
          description="پنل محتوایی که متناظر با هر تب نمایش داده می‌شود."
          props={tabsContentProps}
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
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - ورود به نوار تب‌ها یا خروج از آن.
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  ArrowRight
                </code>{" "}
                و{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  ArrowLeft
                </code>{" "}
                - جابه‌جایی بین تب‌های مجاور در نوار افقی.
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Home
                </code>{" "}
                - رفتن به اولین تب.
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">End</code>{" "}
                - رفتن به آخرین تب.
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              نقش‌های ARIA (ARIA Roles)
            </h3>
            <p>
              نوار تب‌ها از نقش{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                tablist
              </code>{" "}
              و هر تب از نقش{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">tab</code>{" "}
              استفاده می‌کند. محتوای هر تب نیز با{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                tabpanel
              </code>{" "}
              مشخص می‌شود.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              مدیریت فوکوس (Focus Management)
            </h3>
            <p>
              فوکوس فقط روی تب فعال قرار می‌گیرد و با کلیدهای جهت‌دار بین تب‌ها
              جابه‌جا می‌شود. تب‌های غیرفعال از فوکوس و انتخاب جلوگیری می‌کنند.
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
              چه زمانی از تب‌ها استفاده کنیم؟
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                زمانی که چند نما یا دسته‌بندی مرتبط دارید که باید در یک صفحه
                واحد نمایش داده شوند.
              </li>
              <li>
                برای جابه‌جایی بین تنظیمات، جزئیات پروفایل یا نماهای تحلیل
                مختلف.
              </li>
              <li>
                اگر محتوای هر بخش کاملاً مستقل است، از چند صفحه جداگانه به جای
                تب استفاده کنید.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              برچسب‌ها و آیکون‌ها در RTL
            </h3>
            <p className="text-muted-foreground">
              متن تب‌ها را کوتاه و روشن نگه دارید. برای قرار دادن آیکون در سمت
              راست متن در RTL از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">ms-2</code>{" "}
              و برای سمت چپ از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">me-2</code>{" "}
              استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">تعداد تب‌ها</h3>
            <p className="text-muted-foreground">
              از بیش از ۵–۷ تب در یک نوار خودداری کنید. برای تعداد بیشتر، از
              منوها یا ناوبری‌های تو در تو استفاده کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          نحوه استفاده (Usage)
        </h2>
        <InlineCodeBlock code={usageCode} />
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="تب‌ها داخل کارت"
          titleEn="Tabs in Card"
          description="استفاده از تب‌ها درون یک کارت برای ساخت فرم‌ها و داشبوردهای پیچیده."
          code={`import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TabsInCardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>تنظیمات حساب</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">پروفایل</TabsTrigger>
            <TabsTrigger value="security">امنیت</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            {/* محتوای پروفایل */}
          </TabsContent>
          <TabsContent value="security">
            {/* محتوای امنیت */}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}`}
        >
          <TabsUsageExample />
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}

