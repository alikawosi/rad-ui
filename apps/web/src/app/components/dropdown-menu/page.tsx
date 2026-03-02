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
import ShortcutsExample, {
  code as shortcutsCode,
} from "./_examples/shortcuts";
import IconsExample, { code as iconsCode } from "./_examples/icons";
import CheckboxesExample, {
  code as checkboxesCode,
} from "./_examples/checkboxes";
import CheckboxIconsExample, {
  code as checkboxIconsCode,
} from "./_examples/checkbox-icons";
import RadioGroupExample, {
  code as radioGroupCode,
} from "./_examples/radio-group";
import RadioIconsExample, {
  code as radioIconsCode,
} from "./_examples/radio-icons";
import DestructiveExample, {
  code as destructiveCode,
} from "./_examples/destructive";
import AvatarExample, { code as avatarCode } from "./_examples/avatar";
import ComplexExample, { code as complexCode } from "./_examples/complex";
import { code as usageCode } from "./_examples/usage";

const dropdownMenuProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    defaultValue: "undefined",
    description: "وضعیت باز/بسته بودن منو (کنترل‌شده)",
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

const dropdownMenuTriggerProps: PropDefinition[] = [
  {
    name: "asChild",
    type: "boolean",
    defaultValue: "false",
    description: "ترکیب با فرزند به عنوان trigger",
  },
];

const dropdownMenuContentProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "sideOffset",
    type: "number",
    defaultValue: "4",
    description: "فاصله از trigger (پیکسل)",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    defaultValue: '"center"',
    description: "تراز کردن نسبت به trigger",
  },
  {
    name: "side",
    type: '"top" | "right" | "bottom" | "left"',
    defaultValue: '"bottom"',
    description: "سمت نمایش منو",
  },
];

const dropdownMenuItemProps: PropDefinition[] = [
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
];

const dropdownMenuCheckboxItemProps: PropDefinition[] = [
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

const dropdownMenuRadioGroupProps: PropDefinition[] = [
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

const dropdownMenuRadioItemProps: PropDefinition[] = [
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

const dropdownMenuLabelProps: PropDefinition[] = [
  {
    name: "inset",
    type: "boolean",
    defaultValue: "false",
    description: "اضافه کردن padding برای تراز با آیتم‌های دارای آیکون",
  },
];

const dropdownMenuSubProps: PropDefinition[] = [
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

export default function DropdownMenuPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">منوی کشویی (Dropdown Menu)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش منو برای کاربر شامل مجموعه‌ای از اقدامات یا عملکردها که با کلیک
          روی دکمه فعال می‌شود
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add dropdown-menu"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic"
          description="منوی ساده با گروه‌بندی و جداکننده"
          code={basicCode}
          className="mb-8"
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="زیرمنو"
          titleEn="Submenu"
          description="استفاده از DropdownMenuSub برای ایجاد زیرمنوهای تودرتو"
          code={submenuCode}
          className="mb-8"
        >
          <SubmenuExample />
        </ComponentExample>

        <ComponentExample
          title="کلیدهای میانبر"
          titleEn="Shortcuts"
          description="اضافه کردن DropdownMenuShortcut برای نمایش راهنمای کیبورد"
          code={shortcutsCode}
          className="mb-8"
        >
          <ShortcutsExample />
        </ComponentExample>

        <ComponentExample
          title="آیکون‌ها"
          titleEn="Icons"
          description="ترکیب آیکون‌ها با برچسب‌ها برای اسکن سریع"
          code={iconsCode}
          className="mb-8"
        >
          <IconsExample />
        </ComponentExample>

        <ComponentExample
          title="چک‌باکس‌ها"
          titleEn="Checkboxes"
          description="استفاده از DropdownMenuCheckboxItem برای گزینه‌های قابل تغییر"
          code={checkboxesCode}
          className="mb-8"
        >
          <CheckboxesExample />
        </ComponentExample>

        <ComponentExample
          title="چک‌باکس با آیکون"
          titleEn="Checkbox Icons"
          description="اضافه کردن آیکون به آیتم‌های checkbox"
          code={checkboxIconsCode}
          className="mb-8"
        >
          <CheckboxIconsExample />
        </ComponentExample>

        <ComponentExample
          title="گروه رادیویی"
          titleEn="Radio Group"
          description="استفاده از DropdownMenuRadioGroup برای انتخاب‌های انحصاری"
          code={radioGroupCode}
          className="mb-8"
        >
          <RadioGroupExample />
        </ComponentExample>

        <ComponentExample
          title="رادیو با آیکون"
          titleEn="Radio Icons"
          description="نمایش گزینه‌های رادیویی با آیکون"
          code={radioIconsCode}
          className="mb-8"
        >
          <RadioIconsExample />
        </ComponentExample>

        <ComponentExample
          title="اقدام مخرب"
          titleEn="Destructive"
          description="استفاده از رنگ destructive برای اقدامات برگشت‌ناپذیر"
          code={destructiveCode}
          className="mb-8"
        >
          <DestructiveExample />
        </ComponentExample>

        <ComponentExample
          title="آواتار"
          titleEn="Avatar"
          description="منوی تعویض حساب کاربری با آواتار"
          code={avatarCode}
          className="mb-8"
        >
          <AvatarExample />
        </ComponentExample>

        <ComponentExample
          title="پیچیده"
          titleEn="Complex"
          description="مثال پیچیده با ترکیب گروه‌ها، آیکون‌ها و زیرمنوها"
          code={complexCode}
          className="mb-8"
        >
          <ComplexExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="DropdownMenu"
          description="کامپوننت اصلی منوی کشویی"
          props={dropdownMenuProps}
        />
        <PropsTable
          title="DropdownMenuTrigger"
          description="دکمه‌ای که منو را باز و بسته می‌کند"
          props={dropdownMenuTriggerProps}
        />
        <PropsTable
          title="DropdownMenuContent"
          description="محتوای منو که هنگام باز شدن نمایش داده می‌شود"
          props={dropdownMenuContentProps}
        />
        <PropsTable
          title="DropdownMenuItem"
          description="آیتم قابل انتخاب در منو"
          props={dropdownMenuItemProps}
        />
        <PropsTable
          title="DropdownMenuCheckboxItem"
          description="آیتمی که می‌تواند چک شود"
          props={dropdownMenuCheckboxItemProps}
        />
        <PropsTable
          title="DropdownMenuRadioGroup"
          description="گروهی از آیتم‌های رادیویی"
          props={dropdownMenuRadioGroupProps}
        />
        <PropsTable
          title="DropdownMenuRadioItem"
          description="آیتم رادیویی در گروه"
          props={dropdownMenuRadioItemProps}
        />
        <PropsTable
          title="DropdownMenuLabel"
          description="برچسب برای گروه‌بندی آیتم‌ها"
          props={dropdownMenuLabelProps}
        />
        <PropsTable
          title="DropdownMenuSub"
          description="زیرمنو تودرتو"
          props={dropdownMenuSubProps}
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
              منو دارای مدیریت فوکوس کامل است و می‌توان با کیبورد به راحتی در
              آیتم‌ها حرکت کرد. فوکوس به صورت خودکار به اولین آیتم منتقل می‌شود
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              ARIA (Roles & Attributes)
            </h3>
            <p>
              کامپوننت از الگوی Menu Button WAI-ARIA پیروی می‌کند و از roving
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
              از DropdownMenuGroup و DropdownMenuLabel برای سازماندهی آیتم‌های
              مرتبط استفاده کنید. این کار باعث می‌شود کاربران راحت‌تر بتوانند
              گزینه مورد نظر خود را پیدا کنند.
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
              برای اقدامات برگشت‌ناپذیر مانند حذف، از رنگ destructive استفاده
              کنید و آن‌ها را در انتهای منو قرار دهید. همچنین می‌توانید یک
              جداکننده قبل از آن‌ها اضافه کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">کلیدهای میانبر</h3>
            <p className="text-muted-foreground">
              از DropdownMenuShortcut برای نمایش کلیدهای میانبر استفاده کنید.
              این کار به کاربران پیشرفته کمک می‌کند تا سریع‌تر با برنامه شما
              کار کنند.
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
          <div>
            <h3 className="font-semibold mb-3">تعداد آیتم‌ها</h3>
            <p className="text-muted-foreground">
              سعی کنید تعداد آیتم‌های منو را محدود نگه دارید. اگر منوی شما بیش
              از ۱۰-۱۲ آیتم دارد، به گروه‌بندی بهتر یا استفاده از زیرمنوها فکر
              کنید.
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
