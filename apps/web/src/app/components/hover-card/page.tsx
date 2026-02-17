"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/registry/web/ui";

const codeExamples = {
  basic: `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@radui</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-col gap-2">
          <div className="font-semibold">@radui</div>
          <p className="text-sm text-muted-foreground">
            کتابخانه کامپوننت RTL-first با تم‌های ایرانی
          </p>
          <div className="text-xs text-muted-foreground">
            عضویت: آذر ۱۴۰۳
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`,
  sides: `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const SIDES = ["top", "bottom", "left", "right"] as const;
const SIDE_LABELS: Record<(typeof SIDES)[number], string> = {
  top: "بالا",
  bottom: "پایین",
  left: "چپ",
  right: "راست",
};

export function HoverCardSides() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {SIDES.map((side) => (
        <HoverCard key={side} openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="outline">{SIDE_LABELS[side]}</Button>
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">کارت پیش نمایش</h4>
              <p className="text-sm text-muted-foreground">
                این کارت در سمت {SIDE_LABELS[side]} نمایش داده می‌شود
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}`,
  customDelay: `<HoverCard openDelay={200} closeDelay={300}>
  <HoverCardTrigger asChild>
    <Button variant="outline">هاور کنید</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <p>این کارت با تاخیر ۲۰۰ms باز و با تاخیر ۳۰۰ms بسته می‌شود</p>
  </HoverCardContent>
</HoverCard>`,
  withAvatar: `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function HoverCardWithAvatar() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@alikawosi</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold">علی کاوسی</h4>
            <p className="text-sm text-muted-foreground">
              توسعه‌دهنده فرانت‌اند
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>۱۲۳ دنبال‌کننده</span>
              <span>•</span>
              <span>۴۵ پروژه</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`,
  usage: `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">هاور کنید</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold">عنوان</h4>
          <p className="text-sm text-muted-foreground">
            توضیحات پیش‌نمایش در اینجا قرار می‌گیرد
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`,
  userProfile: `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export function UserProfileCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="h-auto p-0">
          @nextjs
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>NX</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              فریم‌ورک React – ساخته و نگهداری شده توسط @vercel
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="me-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                عضویت از آذر ۱۴۰۰
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`,
  productPreview: `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function ProductPreview() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer underline decoration-dotted">
          هدفون بی‌سیم
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex flex-col gap-3">
          <div className="aspect-video rounded-md bg-muted" />
          <div>
            <h4 className="font-semibold">هدفون بی‌سیم پرو</h4>
            <p className="text-sm text-muted-foreground">
              کیفیت صدای فوق‌العاده با نویز کنسلینگ فعال
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold">۲,۵۰۰,۰۰۰ تومان</span>
            <span className="text-xs text-green-600">موجود</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`,
};

function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <details className="mt-0">
      <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground py-3 border border-t-0 border-border rounded-b-lg px-4 bg-muted/50">
        مشاهده کد
      </summary>
      <div
        className="relative rounded-b-lg overflow-x-auto border border-t-0 border-border bg-muted"
        dir="ltr"
      >
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Copy code"
        >
          <Copy className="h-4 w-4" />
        </button>
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          showLineNumbers
          customStyle={{ margin: 0, borderRadius: 0, fontSize: "0.875rem", background: "transparent" }}
          codeTagProps={{ style: { background: "transparent" } }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </details>
  );
}

export default function HoverCardPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">کارت پیش نمایش (Hover Card)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت کارت پیش نمایش برای نمایش اطلاعات تکمیلی هنگام هاور روی یک
          لینک یا المان استفاده می‌شود
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div
          className="relative rounded-lg overflow-x-auto border border-border bg-muted"
          dir="ltr"
        >
          <button
            onClick={() =>
              navigator.clipboard.writeText("npx @quark-lab/rad-ui add hover-card")
            }
            className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
            aria-label="Copy code"
          >
            <Copy className="h-4 w-4" />
          </button>
          <SyntaxHighlighter
            language="bash"
            style={oneLight}
            showLineNumbers
            customStyle={{ margin: 0, borderRadius: "0.5rem", fontSize: "0.875rem", background: "transparent" }}
            codeTagProps={{ style: { background: "transparent" } }}
          >
            npx @quark-lab/rad-ui add hover-card
          </SyntaxHighlighter>
        </div>
      </section>

      {/* Component-specific demos */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        {/* Basic Usage */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            استفاده پایه (Basic Usage)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            ساده‌ترین حالت استفاده از کارت پیش نمایش با یک لینک به عنوان تریگر
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">@radui</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex flex-col gap-2">
                  <div className="font-semibold">@radui</div>
                  <p className="text-sm text-muted-foreground">
                    کتابخانه کامپوننت RTL-first با تم‌های ایرانی
                  </p>
                  <div className="text-xs text-muted-foreground">
                    عضویت: آذر ۱۴۰۳
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          <CodeBlock code={codeExamples.basic} />
        </div>

        {/* Sides */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            جهت‌های مختلف (Sides)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            استفاده از پراپ side برای تعیین جهت نمایش کارت
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <div className="flex flex-wrap justify-center gap-2">
              {(["top", "bottom", "left", "right"] as const).map((side) => {
                const sideLabels: Record<string, string> = {
                  top: "بالا",
                  bottom: "پایین",
                  left: "چپ",
                  right: "راست",
                };
                return (
                  <HoverCard key={side} openDelay={100} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <Button variant="outline">
                        {sideLabels[side]}
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent side={side}>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-medium">کارت پیش نمایش</h4>
                        <p className="text-sm text-muted-foreground">
                          این کارت در سمت {sideLabels[side]} نمایش داده می‌شود
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                );
              })}
            </div>
          </div>

          <CodeBlock code={codeExamples.sides} />
        </div>

        {/* Custom Delay */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            تاخیر سفارشی (Custom Delay)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            تنظیم تاخیر باز و بسته شدن کارت با openDelay و closeDelay
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <HoverCard openDelay={200} closeDelay={300}>
              <HoverCardTrigger asChild>
                <Button variant="outline">هاور کنید</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <p>این کارت با تاخیر ۲۰۰ms باز و با تاخیر ۳۰۰ms بسته می‌شود</p>
              </HoverCardContent>
            </HoverCard>
          </div>

          <CodeBlock code={codeExamples.customDelay} />
        </div>

        {/* With Avatar */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            با آواتار (With Avatar)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            نمایش پروفایل کاربر با آواتار در کارت پیش نمایش
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">@alikawosi</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-semibold">علی کاوسی</h4>
                    <p className="text-sm text-muted-foreground">
                      توسعه‌دهنده فرانت‌اند
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>۱۲۳ دنبال‌کننده</span>
                      <span>•</span>
                      <span>۴۵ پروژه</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          <CodeBlock code={codeExamples.withAvatar} />
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>

        {/* HoverCard */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">HoverCard</h3>
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
                    <code>open</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">وضعیت باز/بسته بودن (کنترل‌شده)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>defaultOpen</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>false</code>
                  </td>
                  <td className="p-4">وضعیت پیش‌فرض (غیرکنترل‌شده)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>onOpenChange</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>(open: boolean) =&gt; void</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">تابع فراخوانی هنگام تغییر وضعیت</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>openDelay</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>number</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>700</code>
                  </td>
                  <td className="p-4">تاخیر باز شدن به میلی‌ثانیه</td>
                </tr>
                <tr>
                  <td className="p-4" dir="ltr">
                    <code>closeDelay</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>number</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>300</code>
                  </td>
                  <td className="p-4">تاخیر بسته شدن به میلی‌ثانیه</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* HoverCardContent */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">HoverCardContent</h3>
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
                    <code>side</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;top&quot; | &quot;bottom&quot; | &quot;left&quot; | &quot;right&quot;</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;bottom&quot;</code>
                  </td>
                  <td className="p-4">جهت نمایش کارت نسبت به تریگر</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>sideOffset</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>number</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>4</code>
                  </td>
                  <td className="p-4">فاصله از تریگر به پیکسل</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>align</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;start&quot; | &quot;center&quot; | &quot;end&quot;</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;center&quot;</code>
                  </td>
                  <td className="p-4">تراز کارت نسبت به تریگر</td>
                </tr>
                <tr>
                  <td className="p-4" dir="ltr">
                    <code>alignOffset</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>number</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>0</code>
                  </td>
                  <td className="p-4">آفست تراز به پیکسل</td>
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
              رفتار هاور (Hover Behavior)
            </h3>
            <p>
              این کامپوننت فقط با هاور ماوس فعال می‌شود و برای کاربران صفحه‌لمسی
              یا کیبورد قابل دسترس نیست. از این کامپوننت برای اطلاعات ضروری
              استفاده نکنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              تاخیر پیش‌فرض (Default Delay)
            </h3>
            <p>
              تاخیر پیش‌فرض ۷۰۰ms برای باز شدن به کاربران اجازه می‌دهد بدون
              فعال‌سازی ناخواسته از روی المان‌ها عبور کنند
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              محدودیت‌ها (Limitations)
            </h3>
            <p>
              این کامپوننت جایگزین Tooltip نیست. برای اطلاعات کوتاه و ضروری که
              باید با کیبورد هم قابل دسترس باشد، از Tooltip استفاده کنید
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
              اطلاعات تکمیلی (Supplementary Info)
            </h3>
            <p className="text-muted-foreground">
              از HoverCard برای نمایش اطلاعات تکمیلی و غیرضروری استفاده کنید.
              اطلاعات نمایش داده شده نباید برای تکمیل یک تسک حیاتی باشد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">پیش‌نمایش محتوا (Preview)</h3>
            <p className="text-muted-foreground">
              این کامپوننت برای پیش‌نمایش محتوای پشت یک لینک مناسب است، مثل
              پروفایل کاربر، جزئیات محصول، یا خلاصه مقاله
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">تعامل با ماوس (Mouse Only)</h3>
            <p className="text-muted-foreground">
              به یاد داشته باشید که این کامپوننت فقط با ماوس کار می‌کند. برای
              دستگاه‌های لمسی، محتوای کارت باید از طریق کلیک روی لینک قابل دسترس
              باشد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">تاخیر مناسب (Proper Delay)</h3>
            <p className="text-muted-foreground">
              تاخیر پیش‌فرض را خیلی کم نکنید تا کاربران هنگام عبور از روی
              المان‌ها با پاپ‌آپ‌های ناخواسته مواجه نشوند
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <div
          className="relative rounded-lg overflow-x-auto border border-border bg-muted"
          dir="ltr"
        >
          <button
            onClick={() => navigator.clipboard.writeText(codeExamples.usage)}
            className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
            aria-label="Copy code"
          >
            <Copy className="h-4 w-4" />
          </button>
          <SyntaxHighlighter
            language="tsx"
            style={oneLight}
            showLineNumbers
            customStyle={{ margin: 0, borderRadius: "0.5rem", fontSize: "0.875rem", background: "transparent" }}
            codeTagProps={{ style: { background: "transparent" } }}
          >
            {codeExamples.usage}
          </SyntaxHighlighter>
        </div>
      </section>

      {/* Advanced Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های پیشرفته (Advanced Examples)
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              کارت پروفایل کاربر (User Profile Card)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              نمایش اطلاعات کامل پروفایل کاربر با آواتار و تاریخ عضویت
            </p>
            <div
              className="relative rounded-lg overflow-x-auto border border-border bg-muted"
              dir="ltr"
            >
              <button
                onClick={() =>
                  navigator.clipboard.writeText(codeExamples.userProfile)
                }
                className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
                aria-label="Copy code"
              >
                <Copy className="h-4 w-4" />
              </button>
              <SyntaxHighlighter
                language="tsx"
                style={oneLight}
                showLineNumbers
                customStyle={{ margin: 0, borderRadius: "0.5rem", fontSize: "0.875rem", background: "transparent" }}
                codeTagProps={{ style: { background: "transparent" } }}
              >
                {codeExamples.userProfile}
              </SyntaxHighlighter>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              پیش‌نمایش محصول (Product Preview)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              نمایش پیش‌نمایش محصول با تصویر، عنوان و قیمت
            </p>
            <div
              className="relative rounded-lg overflow-x-auto border border-border bg-muted"
              dir="ltr"
            >
              <button
                onClick={() =>
                  navigator.clipboard.writeText(codeExamples.productPreview)
                }
                className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
                aria-label="Copy code"
              >
                <Copy className="h-4 w-4" />
              </button>
              <SyntaxHighlighter
                language="tsx"
                style={oneLight}
                showLineNumbers
                customStyle={{ margin: 0, borderRadius: "0.5rem", fontSize: "0.875rem", background: "transparent" }}
                codeTagProps={{ style: { background: "transparent" } }}
              >
                {codeExamples.productPreview}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
