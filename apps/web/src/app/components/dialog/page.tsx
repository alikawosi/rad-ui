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
import WithFormExample, { code as withFormCode } from "./_examples/with-form";
import CustomCloseExample, {
  code as customCloseCode,
} from "./_examples/custom-close";
import NoCloseButtonExample, {
  code as noCloseButtonCode,
} from "./_examples/no-close-button";
import ControlledExample, {
  code as controlledCode,
} from "./_examples/controlled";
import ScrollableExample, {
  code as scrollableCode,
} from "./_examples/scrollable";
import StickyFooterExample, {
  code as stickyFooterCode,
} from "./_examples/sticky-footer";
import UsageExample, { code as usageCode } from "./_examples/usage";
import { code as deleteConfirmationCode } from "./_examples/delete-confirmation";
import { code as preventCloseCode } from "./_examples/prevent-close";

const dialogProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    defaultValue: "undefined",
    description: "وضعیت باز/بسته بودن (کنترل‌شده)",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    defaultValue: "false",
    description: "وضعیت پیش‌فرض (غیرکنترل‌شده)",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر وضعیت",
  },
  {
    name: "modal",
    type: "boolean",
    defaultValue: "true",
    description: "حالت مودال (بلاک کردن تعامل با پس‌زمینه)",
  },
];

const dialogContentProps: PropDefinition[] = [
  {
    name: "showCloseButton",
    type: "boolean",
    defaultValue: "true",
    description: "نمایش دکمه بستن در گوشه بالا",
  },
  {
    name: "onEscapeKeyDown",
    type: "(event) => void",
    defaultValue: "undefined",
    description: "هندلر فشردن کلید Escape",
  },
  {
    name: "onPointerDownOutside",
    type: "(event) => void",
    defaultValue: "undefined",
    description: "هندلر کلیک خارج از دیالوگ",
  },
];

export default function DialogPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">دیالوگ (Dialog)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت دیالوگ برای نمایش محتوای مهم در یک پنجره مودال استفاده
          می‌شود که توجه کاربر را به خود جلب می‌کند
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add dialog"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از دیالوگ با عنوان و توضیحات"
          code={basicCode}
          className="mb-8"
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="با فرم"
          titleEn="With Form"
          description="دیالوگ با فرم ورودی برای ویرایش اطلاعات"
          code={withFormCode}
          className="mb-8"
        >
          <WithFormExample />
        </ComponentExample>

        <ComponentExample
          title="دکمه بستن سفارشی"
          titleEn="Custom Close Button"
          description="استفاده از DialogClose برای ایجاد دکمه بستن سفارشی در فوتر"
          code={customCloseCode}
          className="mb-8"
        >
          <CustomCloseExample />
        </ComponentExample>

        <ComponentExample
          title="بدون دکمه بستن"
          titleEn="No Close Button"
          description="مخفی کردن دکمه X در گوشه بالای دیالوگ با showCloseButton=false"
          code={noCloseButtonCode}
          className="mb-8"
        >
          <NoCloseButtonExample />
        </ComponentExample>

        <ComponentExample
          title="کنترل شده"
          titleEn="Controlled"
          description="کنترل وضعیت باز/بسته دیالوگ با استفاده از state"
          code={controlledCode}
          previewClassName="flex-col gap-4"
          className="mb-8"
        >
          <ControlledExample />
        </ComponentExample>

        <ComponentExample
          title="محتوای قابل اسکرول"
          titleEn="Scrollable Content"
          description="دیالوگ با محتوای طولانی که قابل اسکرول است"
          code={scrollableCode}
          className="mb-8"
        >
          <ScrollableExample />
        </ComponentExample>

        <ComponentExample
          title="فوتر ثابت"
          titleEn="Sticky Footer"
          description="دیالوگ با فوتر ثابت که همیشه قابل مشاهده است در حین اسکرول"
          code={stickyFooterCode}
          className="mb-8"
        >
          <StickyFooterExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable title="Dialog" props={dialogProps} />
        <PropsTable title="DialogContent" props={dialogContentProps} />
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
                - بستن دیالوگ
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت بین المان‌های قابل فوکوس داخل دیالوگ
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
              وقتی دیالوگ باز است، فوکوس در داخل آن محبوس می‌شود و کاربر
              نمی‌تواند با Tab به خارج از دیالوگ برود
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              بازگشت فوکوس (Focus Return)
            </h3>
            <p>
              پس از بستن دیالوگ، فوکوس به المانی که دیالوگ را باز کرده بود
              برمی‌گردد
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              نقش‌های ARIA
            </h3>
            <p>
              دیالوگ از{" "}
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
            <h3 className="font-semibold mb-3">عنوان واضح (Clear Title)</h3>
            <p className="text-muted-foreground">
              همیشه از DialogTitle استفاده کنید تا کاربران صفحه‌خوان بتوانند
              محتوای دیالوگ را درک کنند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              توضیحات کمکی (Description)
            </h3>
            <p className="text-muted-foreground">
              از DialogDescription برای توضیح هدف دیالوگ استفاده کنید، مخصوصاً
              برای اقدامات مخرب
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              دکمه‌های اقدام (Action Buttons)
            </h3>
            <p className="text-muted-foreground">
              دکمه‌های اصلی و ثانویه را در DialogFooter قرار دهید. دکمه انصراف
              همیشه باید وجود داشته باشد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              اندازه مناسب (Appropriate Size)
            </h3>
            <p className="text-muted-foreground">
              از className برای تنظیم عرض دیالوگ استفاده کنید. برای فرم‌های
              کوچک از sm:max-w-sm و برای محتوای بیشتر از sm:max-w-lg استفاده
              کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              محتوای طولانی (Long Content)
            </h3>
            <p className="text-muted-foreground">
              برای محتوای طولانی از یک div با max-h و overflow-y-auto استفاده
              کنید تا دیالوگ از صفحه خارج نشود
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
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              دیالوگ تایید حذف (Delete Confirmation)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              نمایش دیالوگ تایید قبل از انجام عملیات حذف
            </p>
            <InlineCodeBlock code={deleteConfirmationCode} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              جلوگیری از بسته شدن (Prevent Close)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              جلوگیری از بسته شدن دیالوگ با کلیک خارج یا کلید Escape
            </p>
            <InlineCodeBlock code={preventCloseCode} />
          </div>
        </div>
      </section>
    </div>
  );
}