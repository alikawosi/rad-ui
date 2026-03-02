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
import SubmenuExample, { code as submenuCode } from "./_examples/submenu";
import ShortcutsExample, { code as shortcutsCode } from "./_examples/shortcuts";
import IconsExample, { code as iconsCode } from "./_examples/icons";
import CheckboxExample, { code as checkboxCode } from "./_examples/checkbox";
import RadioExample, { code as radioCode } from "./_examples/radio";
import { code as usageCode } from "./_examples/usage";

const menubarProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "undefined",
    description: "مقدار منوی فعال (کنترل‌شده)",
  },
  {
    name: "defaultValue",
    type: "string",
    defaultValue: "undefined",
    description: "مقدار پیش‌فرض منوی فعال",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر منوی فعال",
  },
];

const menubarTriggerProps: PropDefinition[] = [
  {
    name: "asChild",
    type: "boolean",
    defaultValue: "false",
    description: "ترکیب با فرزند به عنوان trigger",
  },
];

const menubarContentProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    defaultValue: '"start"',
    description: "تراز کردن نسبت به trigger",
  },
  {
    name: "sideOffset",
    type: "number",
    defaultValue: "8",
    description: "فاصله از trigger (پیکسل)",
  },
];

const menubarItemProps: PropDefinition[] = [
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن آیتم",
  },
  {
    name: "onSelect",
    type: "(event: Event) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام انتخاب",
  },
  {
    name: "inset",
    type: "boolean",
    defaultValue: "false",
    description: "اضافه کردن padding برای تراز با آیتم‌های دارای آیکون",
  },
  {
    name: "variant",
    type: '"default" | "destructive"',
    defaultValue: '"default"',
    description: "نوع آیتم (destructive برای اقدامات حذف)",
  },
];

const menubarCheckboxItemProps: PropDefinition[] = [
  {
    name: "checked",
    type: "boolean | 'indeterminate'",
    defaultValue: "false",
    description: "وضعیت چک شده",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر وضعیت",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن آیتم",
  },
];

const menubarRadioGroupProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "undefined",
    description: "مقدار انتخاب شده",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر مقدار",
  },
];

const menubarRadioItemProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "-",
    description: "مقدار آیتم (الزامی)",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن آیتم",
  },
];

const menubarSubProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    defaultValue: "undefined",
    description: "وضعیت باز/بسته بودن زیرمنو (کنترل‌شده)",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    defaultValue: "false",
    description: "وضعیت پیش‌فرض زیرمنو",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر وضعیت زیرمنو",
  },
];

export default function MenubarPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">نوار منو (Menubar)</h1>
        <p className="text-lg text-muted-foreground">
          نوار منوی افقی با چند منوی کشویی برای رابط کاربری شبیه برنامه‌های
          دسکتاپ
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add menubar"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic"
          description="نوار منوی ساده با چند منوی کشویی"
          code={basicCode}
          className="mb-8"
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="زیرمنو"
          titleEn="Submenu"
          description="استفاده از MenubarSub برای ایجاد زیرمنوهای تودرتو"
          code={submenuCode}
          className="mb-8"
        >
          <SubmenuExample />
        </ComponentExample>

        <ComponentExample
          title="کلیدهای میانبر"
          titleEn="Shortcuts"
          description="اضافه کردن MenubarShortcut برای نمایش راهنمای کیبورد"
          code={shortcutsCode}
          className="mb-8"
        >
          <ShortcutsExample />
        </ComponentExample>

        <ComponentExample
          title="آیکون‌ها"
          titleEn="Icons"
          description="ترکیب آیکون‌ها با variant مخرب برای اقدامات حذف"
          code={iconsCode}
          className="mb-8"
        >
          <IconsExample />
        </ComponentExample>

        <ComponentExample
          title="چک‌باکس‌ها"
          titleEn="Checkboxes"
          description="استفاده از MenubarCheckboxItem برای گزینه‌های قابل تغییر"
          code={checkboxCode}
          className="mb-8"
        >
          <CheckboxExample />
        </ComponentExample>

        <ComponentExample
          title="گروه رادیویی"
          titleEn="Radio Group"
          description="استفاده از MenubarRadioGroup برای انتخاب‌های انحصاری"
          code={radioCode}
          className="mb-8"
        >
          <RadioExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Menubar"
          description="کامپوننت اصلی نوار منو"
          props={menubarProps}
        />
        <PropsTable
          title="MenubarTrigger"
          description="دکمه‌ای که منو را باز و بسته می‌کند"
          props={menubarTriggerProps}
        />
        <PropsTable
          title="MenubarContent"
          description="محتوای منو که هنگام باز شدن نمایش داده می‌شود"
          props={menubarContentProps}
        />
        <PropsTable
          title="MenubarItem"
          description="آیتم قابل انتخاب در منو"
          props={menubarItemProps}
        />
        <PropsTable
          title="MenubarCheckboxItem"
          description="آیتمی که می‌تواند چک شود"
          props={menubarCheckboxItemProps}
        />
        <PropsTable
          title="MenubarRadioGroup"
          description="گروهی از آیتم‌های رادیویی"
          props={menubarRadioGroupProps}
        />
        <PropsTable
          title="MenubarRadioItem"
          description="آیتم رادیویی در گروه"
          props={menubarRadioItemProps}
        />
        <PropsTable
          title="MenubarSub"
          description="زیرمنو تودرتو"
          props={menubarSubProps}
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
                  Space
                </code>{" "}
                یا{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                - باز کردن منو یا فعال کردن آیتم
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Down
                </code>{" "}
                - حرکت به آیتم بعدی
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Up
                </code>{" "}
                - حرکت به آیتم قبلی
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Right
                </code>{" "}
                /{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Left
                </code>{" "}
                - باز یا بستن زیرمنو
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Esc</code>{" "}
                - بستن منو
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              فوکوس (Focus)
            </h3>
            <p>
              نوار منو دارای مدیریت فوکوس کامل است و می‌توان با کیبورد بین
              منوها و آیتم‌ها حرکت کرد. فوکوس به صورت خودکار به اولین آیتم منتقل
              می‌شود
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              ARIA (Roles & Attributes)
            </h3>
            <p>
              کامپوننت از الگوی Menu Bar WAI-ARIA پیروی می‌کند و از roving
              tabindex برای مدیریت حرکت فوکوس استفاده می‌کند
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
            <h3 className="font-semibold mb-3">گروه‌بندی آیتم‌ها</h3>
            <p className="text-muted-foreground">
              از MenubarGroup و MenubarSeparator برای سازماندهی آیتم‌های مرتبط
              استفاده کنید. این کار باعث می‌شود کاربران راحت‌تر بتوانند گزینه
              مورد نظر خود را پیدا کنند.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استفاده از آیکون‌ها</h3>
            <p className="text-muted-foreground">
              آیکون‌ها به کاربران کمک می‌کنند تا سریع‌تر گزینه‌ها را شناسایی
              کنند. همیشه آیکون را قبل از متن قرار دهید و از کلاس me-2 برای
              فاصله‌گذاری استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">اقدامات مخرب</h3>
            <p className="text-muted-foreground">
              برای اقدامات برگشت‌ناپذیر مانند حذف، از variant="destructive"
              استفاده کنید و آن‌ها را در انتهای منو قرار دهید. همچنین می‌توانید
              یک جداکننده قبل از آن‌ها اضافه کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">کلیدهای میانبر</h3>
            <p className="text-muted-foreground">
              از MenubarShortcut برای نمایش کلیدهای میانبر استفاده کنید. این
              کار به کاربران پیشرفته کمک می‌کند تا سریع‌تر با برنامه شما کار
              کنند.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">زیرمنوها</h3>
            <p className="text-muted-foreground">
              از زیرمنوها برای سازماندهی گزینه‌های مرتبط استفاده کنید، اما از
              تودرتو شدن بیش از حد آن‌ها خودداری کنید. معمولاً یک یا دو سطح
              زیرمنو کافی است.
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
