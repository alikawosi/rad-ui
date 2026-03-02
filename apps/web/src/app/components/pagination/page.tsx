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
import SimpleExample, { code as simpleCode } from "./_examples/simple";
import IconsOnlyExample, {
  code as iconsOnlyCode,
} from "./_examples/icons-only";
import { code as usageCode } from "./_examples/usage";

const paginationProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "dir",
    type: '"ltr" | "rtl"',
    defaultValue: "undefined",
    description: "جهت متن برای RTL",
  },
];

const paginationLinkProps: PropDefinition[] = [
  {
    name: "href",
    type: "string",
    defaultValue: "-",
    description: "آدرس لینک صفحه",
  },
  {
    name: "isActive",
    type: "boolean",
    defaultValue: "false",
    description: "نمایش صفحه فعلی",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "اندازه دکمه",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

const paginationPreviousProps: PropDefinition[] = [
  {
    name: "text",
    type: "string",
    defaultValue: '"قبلی"',
    description: "متن دکمه قبلی (برای i18n)",
  },
  {
    name: "href",
    type: "string",
    defaultValue: "-",
    description: "آدرس صفحه قبلی",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "اندازه دکمه",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

const paginationNextProps: PropDefinition[] = [
  {
    name: "text",
    type: "string",
    defaultValue: '"بعدی"',
    description: "متن دکمه بعدی (برای i18n)",
  },
  {
    name: "href",
    type: "string",
    defaultValue: "-",
    description: "آدرس صفحه بعدی",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "اندازه دکمه",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function PaginationPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">صفحه‌بندی (Pagination)</h1>
        <p className="text-lg text-muted-foreground">
          ناوبری بین صفحات با دکمه‌های قبلی، بعدی و شماره صفحه با پشتیبانی کامل
          از RTL
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add pagination"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="صفحه‌بندی کامل با دکمه‌های قبلی، بعدی، شماره صفحات و بیضی"
          code={basicCode}
          className="mb-8"
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="ساده"
          titleEn="Simple"
          description="فقط شماره صفحات بدون دکمه‌های قبلی و بعدی"
          code={simpleCode}
          className="mb-8"
        >
          <SimpleExample />
        </ComponentExample>

        <ComponentExample
          title="فقط آیکون"
          titleEn="Icons Only"
          description="فقط دکمه‌های قبلی و بعدی — مناسب برای جداول داده با انتخاب تعداد در هر صفحه"
          code={iconsOnlyCode}
          className="mb-8"
        >
          <IconsOnlyExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Pagination"
          description="کامپوننت اصلی صفحه‌بندی"
          props={paginationProps}
        />
        <PropsTable
          title="PaginationLink"
          description="لینک شماره صفحه"
          props={paginationLinkProps}
        />
        <PropsTable
          title="PaginationPrevious"
          description="دکمه صفحه قبلی"
          props={paginationPreviousProps}
        />
        <PropsTable
          title="PaginationNext"
          description="دکمه صفحه بعدی"
          props={paginationNextProps}
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
              نقش و برچسب (Role & Labeling)
            </h3>
            <p>
              کامپوننت از عنصر <code className="text-sm bg-muted px-2 py-1 rounded">nav</code> با{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">role="navigation"</code> و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">aria-label</code> استفاده می‌کند. دکمه‌های قبلی و
              بعدی دارای aria-label مناسب هستند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              صفحه فعلی (Current Page)
            </h3>
            <p>
              برای صفحه فعلی از <code className="text-sm bg-muted px-2 py-1 rounded">aria-current="page"</code> استفاده
              می‌شود تا صفحه‌خوان‌ها بتوانند موقعیت کاربر را تشخیص دهند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              کیبورد (Keyboard)
            </h3>
            <p>
              تمام لینک‌ها با Tab قابل دسترسی هستند و با Enter فعال می‌شوند.
              حلقه فوکوس واضح برای ناوبری با کیبورد وجود دارد.
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
            <h3 className="font-semibold mb-3">لینک‌های معنادار (Meaningful Links)</h3>
            <p className="text-muted-foreground">
              همیشه از href معتبر برای هر صفحه استفاده کنید تا کاربران بتوانند
              لینک را باز کنند یا ذخیره کنند. از # برای صفحات غیرفعال استفاده
              نکنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">بیضی (Ellipsis)</h3>
            <p className="text-muted-foreground">
              برای لیست‌های طولانی از PaginationEllipsis استفاده کنید تا
              تعداد صفحات نمایش داده شده محدود شود و رابط کاربری تمیز بماند.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">بین‌المللی‌سازی (i18n)</h3>
            <p className="text-muted-foreground">
              از propهای text در PaginationPrevious و PaginationNext برای
              ترجمه متن دکمه‌ها استفاده کنید. مقادیر پیش‌فرض به فارسی هستند.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">جداول داده (Data Tables)</h3>
            <p className="text-muted-foreground">
              برای جداول با تعداد زیاد ردیف، از ترکیب Pagination با Select برای
              انتخاب تعداد در هر صفحه استفاده کنید (مثال فقط آیکون).
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
