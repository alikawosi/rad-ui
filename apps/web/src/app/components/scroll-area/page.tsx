"use client";

import {
  CodeBlock,
  InstallCodeBlock,
  InlineCodeBlock,
} from "@/components/docs/code-block";
import { ScrollArea, ScrollBar, Separator, Badge } from "@/registry/web/ui";

const tags = Array.from({ length: 50 }).map((_, i) => `نسخه ${i + 1}`);

const codeExamples = {
  basic: `import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map((_, i) => \`نسخه \${i + 1}\`);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">برچسب‌ها</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`,
  horizontal: `import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const badges = [
  "جاوااسکریپت",
  "تایپ‌اسکریپت",
  "ری‌اکت",
  "نکست",
  "تیلویند",
  "نود",
  "پایتون",
  "گو",
];

export function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-72 rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-3 p-4">
        {badges.map((badge) => (
          <Badge key={badge} variant="secondary">
            {badge}
          </Badge>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}`,
  styledScrollbar: `import { ScrollArea } from "@/components/ui/scroll-area";

export function ScrollAreaStyled() {
  return (
    <ScrollArea
      className="h-72 w-48 rounded-md border"
      scrollbarThumbClassName="bg-primary hover:bg-primary/80"
    >
      <div className="p-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="mb-2 text-sm">
            آیتم شماره {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`,
  bothScrollbars: `import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function ScrollAreaBoth() {
  return (
    <ScrollArea className="h-72 w-72 rounded-md border">
      <div className="p-4 w-[500px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="mb-4">
            <p className="whitespace-nowrap">
              این یک متن طولانی است که نیاز به اسکرول افقی دارد - ردیف {i + 1}
            </p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}`,
  hiddenScrollbar: `import { ScrollArea } from "@/components/ui/scroll-area";

export function ScrollAreaHidden() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border" hideScrollbar>
      <div className="p-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="mb-2 text-sm">
            آیتم شماره {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`,
  customStyling: `import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function ScrollAreaCustom() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border bg-muted/50">
      <div className="p-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="mb-2 p-2 rounded bg-card border border-border"
          >
            آیتم شماره {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar className="bg-muted" />
    </ScrollArea>
  );
}`,
  usage: `import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function MyComponent() {
  return (
    <div>
      {/* Vertical Scroll */}
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        محتوای قابل اسکرول در اینجا قرار می‌گیرد
      </ScrollArea>

      {/* Horizontal Scroll */}
      <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
        <div className="flex w-max gap-4 p-4">
          {/* Horizontal content */}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Hidden Scrollbar */}
      <ScrollArea className="h-72 w-48 rounded-md border" hideScrollbar>
        {/* Content scrollable without visible scrollbar */}
      </ScrollArea>

      {/* Styled Scrollbar */}
      <ScrollArea
        className="h-72 w-48 rounded-md border"
        scrollbarThumbClassName="bg-primary"
      >
        {/* Content with custom scrollbar color */}
      </ScrollArea>
    </div>
  );
}`,
};

export default function ScrollAreaPage() {
  const badges = [
    "جاوااسکریپت",
    "تایپ‌اسکریپت",
    "ری‌اکت",
    "نکست",
    "تیلویند",
    "نود",
    "پایتون",
    "گو",
  ];


  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">ناحیه اسکرول (Scroll Area)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت ناحیه اسکرول برای ایجاد نوار اسکرول سفارشی با ظاهر یکسان در
          تمام مرورگرها استفاده می‌شود. این کامپوننت رفتار اسکرول بومی مرورگر را
          حفظ می‌کند
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

      {/* Component-specific demos */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        {/* Default */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            پیش‌فرض (Default)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            نمایش لیست عمودی با نوار اسکرول سفارشی
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <ScrollArea className="h-72 w-48 rounded-md border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">برچسب‌ها</h4>
                {tags.map((tag) => (
                  <div key={tag}>
                    <div className="text-sm">{tag}</div>
                    <Separator className="my-2" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <CodeBlock code={codeExamples.basic} />
        </div>

        {/* Horizontal */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">افقی (Horizontal)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            اسکرول افقی با استفاده از ScrollBar با orientation=&quot;horizontal&quot;
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <ScrollArea className="w-72 rounded-md border whitespace-nowrap">
              <div className="flex w-max gap-3 p-4">
                {badges.map((badge) => (
                  <Badge key={badge} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <CodeBlock code={codeExamples.horizontal} />
        </div>

        {/* Styled Scrollbar */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            نوار اسکرول سفارشی (Styled Scrollbar)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            سفارشی‌سازی رنگ دستگیره نوار اسکرول با scrollbarThumbClassName
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <ScrollArea
              className="h-72 w-48 rounded-md border"
              scrollbarThumbClassName="bg-primary hover:bg-primary/80"
            >
              <div className="p-4">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="mb-2 text-sm">
                    آیتم شماره {i + 1}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <CodeBlock code={codeExamples.styledScrollbar} />
        </div>

        {/* Both Scrollbars */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            اسکرول دوطرفه (Both Scrollbars)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            محتوایی که هم به اسکرول عمودی و هم افقی نیاز دارد
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <ScrollArea className="h-72 w-72 rounded-md border">
              <div className="p-4 w-[500px]">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="mb-4">
                    <p className="whitespace-nowrap">
                      این یک متن طولانی است که نیاز به اسکرول افقی دارد - ردیف {i + 1}
                    </p>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>

          <CodeBlock code={codeExamples.bothScrollbars} />
        </div>

        {/* Hidden Scrollbar */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            بدون نوار اسکرول (Hidden Scrollbar)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            مخفی کردن نوار اسکرول با حفظ قابلیت اسکرول با استفاده از hideScrollbar
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <ScrollArea className="h-72 w-48 rounded-md border" hideScrollbar>
              <div className="p-4">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="mb-2 text-sm">
                    آیتم شماره {i + 1}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <CodeBlock code={codeExamples.hiddenScrollbar} />
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>

        {/* ScrollArea */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">ScrollArea</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-start p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-start p-4 font-semibold">نوع (Type)</th>
                  <th className="text-start p-4 font-semibold">
                    پیش‌فرض (Default)
                  </th>
                  <th className="text-start p-4 font-semibold">
                    توضیحات (Description)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>type</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;auto&quot; | &quot;always&quot; | &quot;scroll&quot; | &quot;hover&quot;</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;hover&quot;</code>
                  </td>
                  <td className="p-4">نحوه نمایش نوار اسکرول</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>scrollHideDelay</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>number</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>600</code>
                  </td>
                  <td className="p-4">تاخیر مخفی شدن نوار اسکرول (میلی‌ثانیه)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>dir</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;ltr&quot; | &quot;rtl&quot;</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;rtl&quot;</code>
                  </td>
                  <td className="p-4">جهت متن (پیش‌فرض RTL، برای LTR باید مشخص شود)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>hideScrollbar</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>false</code>
                  </td>
                  <td className="p-4">مخفی کردن نوار اسکرول با حفظ قابلیت اسکرول</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>scrollbarThumbClassName</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>string</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">کلاس‌های CSS برای سفارشی‌سازی رنگ دستگیره نوار اسکرول</td>
                </tr>
                <tr>
                  <td className="p-4" dir="ltr">
                    <code>className</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>string</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">کلاس‌های CSS اضافی</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ScrollBar */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">ScrollBar</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-start p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-start p-4 font-semibold">نوع (Type)</th>
                  <th className="text-start p-4 font-semibold">
                    پیش‌فرض (Default)
                  </th>
                  <th className="text-start p-4 font-semibold">
                    توضیحات (Description)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>orientation</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;vertical&quot; | &quot;horizontal&quot;</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;vertical&quot;</code>
                  </td>
                  <td className="p-4">جهت نوار اسکرول</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>forceMount</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">نمایش اجباری حتی وقتی محتوا نیاز به اسکرول ندارد</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>thumbClassName</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>string</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">کلاس‌های CSS برای دستگیره نوار اسکرول</td>
                </tr>
                <tr>
                  <td className="p-4" dir="ltr">
                    <code>className</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>string</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">کلاس‌های CSS اضافی برای track نوار اسکرول</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              اسکرول با کیبورد (Keyboard Scrolling)
            </h3>
            <p>
              اسکرول با کیبورد به صورت پیش‌فرض پشتیبانی می‌شود زیرا این کامپوننت
              از رفتار اسکرول بومی مرورگر استفاده می‌کند
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              تعامل لمسی (Touch Interaction)
            </h3>
            <p>
              در دستگاه‌های لمسی، کاربران می‌توانند با کشیدن انگشت محتوا را
              اسکرول کنند. این رفتار بومی حفظ شده است
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              نوار اسکرول سفارشی (Custom Scrollbar)
            </h3>
            <p>
              نوار اسکرول سفارشی روی محتوا قرار می‌گیرد و فضایی اشغال نمی‌کند.
              این باعث می‌شود چیدمان در همه مرورگرها یکسان باشد
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
          <div>
            <h3 className="font-semibold mb-3">استفاده از اسکرول بومی</h3>
            <p className="text-muted-foreground">
              در بیشتر موارد، اسکرول بومی مرورگر کافی است. از ScrollArea فقط وقتی
              استفاده کنید که نیاز به ظاهر یکسان نوار اسکرول در همه مرورگرها دارید
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <InlineCodeBlock code={codeExamples.usage} />
      </section>

      {/* Advanced Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های پیشرفته (Advanced Examples)
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              ناحیه اسکرول با پس‌زمینه (Custom Container)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              سفارشی‌سازی ظاهر ناحیه اسکرول و آیتم‌های داخلی با کلاس‌های Tailwind
            </p>

            <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
              <ScrollArea className="h-72 w-48 rounded-md border bg-muted/50">
                <div className="p-4">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="mb-2 p-2 rounded bg-card border border-border"
                    >
                      آیتم شماره {i + 1}
                    </div>
                  ))}
                </div>
                <ScrollBar className="bg-muted" />
              </ScrollArea>
            </div>

            <CodeBlock code={codeExamples.customStyling} />
          </div>
        </div>
      </section>
    </div>
  );
}
