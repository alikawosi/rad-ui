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
import DialogExample, { code as dialogCode } from "./_examples/dialog";
import { code as usageCode } from "./_examples/usage";

const commandProps: PropDefinition[] = [
  {
    name: "label",
    type: "string",
    defaultValue: "undefined",
    description: "برچسب دسترسی‌پذیر برای منوی دستور (مخفی)",
  },
  {
    name: "shouldFilter",
    type: "boolean",
    defaultValue: "true",
    description: "فعال/غیرفعال کردن فیلتر خودکار بر اساس جستجو",
  },
  {
    name: "filter",
    type: "(value: string, search: string, keywords?: string[]) => number",
    defaultValue: "defaultFilter",
    description: "تابع فیلتر سفارشی برای تطبیق آیتم‌ها با جستجو",
  },
  {
    name: "loop",
    type: "boolean",
    defaultValue: "false",
    description: "حلقه‌زدن در ناوبری با کلیدهای جهت‌دار",
  },
  {
    name: "value",
    type: "string",
    defaultValue: "undefined",
    description: "مقدار آیتم انتخاب‌شده (کنترل‌شده)",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    defaultValue: "undefined",
    description: "فراخوانی هنگام تغییر آیتم انتخاب‌شده",
  },
];

const commandDialogProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    defaultValue: "undefined",
    description: "وضعیت باز/بسته بودن دیالوگ",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "undefined",
    description: "فراخوانی هنگام تغییر وضعیت دیالوگ",
  },
];

export default function CommandPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">دستور (Command)</h1>
        <p className="text-lg text-muted-foreground">
          منوی دستور برای جستجو و اقدامات سریع. بر پایه کتابخانه cmdk ساخته شده
          است.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add command"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic"
          description="منوی دستور ساده با گروه‌ها و جداکننده"
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="پالت دستور (Command Palette)"
          titleEn="Command Palette"
          description="منوی دستور در دیالوگ با میانبر ⌘K و نمایش کلیدهای میانبر"
          code={dialogCode}
        >
          <DialogExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Command"
          description="پراپ‌های کامپوننت Command."
          props={commandProps}
        />
        <PropsTable
          title="CommandDialog"
          description="پراپ‌های CommandDialog (open, onOpenChange)."
          props={commandDialogProps}
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
                  ArrowDown
                </code>{" "}
                /{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">Ctrl+N</code>{" "}
                - حرکت به آیتم بعدی
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  ArrowUp
                </code>{" "}
                /{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">Ctrl+P</code>{" "}
                - حرکت به آیتم قبلی
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                - انتخاب آیتم
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Escape
                </code>{" "}
                - بستن (در CommandDialog)
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              نقش‌های ARIA
            </h3>
            <p>
              از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                role=&quot;combobox&quot;
              </code>{" "}
              برای ورودی و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                role=&quot;listbox&quot;
              </code>{" "}
              برای لیست استفاده می‌شود
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
            <h3 className="font-semibold mb-3">گروه‌بندی (Grouping)</h3>
            <p className="text-muted-foreground">
              از CommandGroup و CommandSeparator برای سازماندهی دستورات استفاده
              کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">مقدار آیتم (Item Value)</h3>
            <p className="text-muted-foreground">
              برای آیتم‌های پویا حتماً prop value را تنظیم کنید تا جستجو درست
              کار کند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">میانبر صفحه‌کلید</h3>
            <p className="text-muted-foreground">
              برای Command Palette از ⌘K یا Ctrl+K استفاده کنید و با
              useEffect آن را پیاده‌سازی کنید
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <InlineCodeBlock code={usageCode} />
      </section>
    </div>
  );
}
