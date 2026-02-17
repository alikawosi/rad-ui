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
import BasicExample, { code as basicCode } from "./_examples/basic";
import VariantsExample, { code as variantsCode } from "./_examples/variants";
import WithIconsExample, { code as withIconsCode } from "./_examples/with-icons";
import CustomColorsExample, { code as customColorsCode } from "./_examples/custom-colors";
import StatusExample, { code as statusCode } from "./_examples/status";
import NotificationExample, { code as notificationCode } from "./_examples/notification";
import ProductCardExample, { code as productCardCode } from "./_examples/product-card";
import UserListExample, { code as userListCode } from "./_examples/user-list";

const badgeProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"default" | "secondary" | "destructive" | "outline"',
    defaultValue: '"default"',
    description: "نوع نمایشی Badge",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "children",
    type: "ReactNode",
    defaultValue: "undefined",
    description: "محتوای Badge (متن یا آیکون)",
  },
];

export default function BadgePage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">نشان (Badge)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش برچسب، وضعیت، یا دسته‌بندی.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add badge" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="استفاده ساده از Badge برای نمایش برچسب."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="انواع"
          titleEn="Variants"
          description="انواع مختلف Badge برای موارد مختلف (Default, Secondary, Destructive, Outline)."
          code={variantsCode}
        >
          <VariantsExample />
        </ComponentExample>

        <ComponentExample
          title="با آیکون"
          titleEn="With Icons"
          description="ترکیب Badge با آیکون برای نمایش وضعیت."
          code={withIconsCode}
        >
          <WithIconsExample />
        </ComponentExample>

        <ComponentExample
          title="رنگ‌های سفارشی"
          titleEn="Custom Colors"
          description="استفاده از کلاس‌های Tailwind برای تغییر رنگ Badge."
          code={customColorsCode}
        >
          <CustomColorsExample />
        </ComponentExample>
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های کاربردی"
        titleEn="Practical Examples"
      >
        <SubExample
          title="نشان‌های وضعیت"
          titleEn="Status Badges"
          description="نمایش وضعیت سفارش با آیکون‌های مرتبط."
          code={statusCode}
        >
          <StatusExample />
        </SubExample>

        <SubExample
          title="نشان‌های اعلان"
          titleEn="Notification Badges"
          description="استفاده از Badge برای نمایش تعداد اعلان‌ها."
          code={notificationCode}
        >
          <NotificationExample />
        </SubExample>

        <SubExample
          title="برچسب‌های محصول"
          titleEn="Product Tags"
          description="استفاده در کارت محصول برای نمایش ویژگی‌ها."
          code={productCardCode}
        >
          <ProductCardExample />
        </SubExample>

        <SubExample
          title="نشان‌های کاربری"
          titleEn="User Badges"
          description="نمایش نقش یا وضعیت کاربر در لیست."
          code={userListCode}
        >
          <UserListExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Badge"
          description="پراپ‌های کامپوننت Badge."
          props={badgeProps}
        />
      </ApiReferenceSection>

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">محتوای واضح</h3>
            <p>
              متن داخل Badge باید واضح و قابل فهم باشد. از مخفف‌های نامفهوم
              خودداری کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">کنتراست رنگ</h3>
            <p>
              مطمئن شوید که رنگ متن و پس‌زمینه کنتراست کافی دارند (نسبت حداقل
              4.5:1)
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              معنای رنگی
            </h3>
            <p>
              فقط به رنگ برای انتقال اطلاعات تکیه نکنید. از متن یا آیکون نیز
              استفاده کنید
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
            <h3 className="font-semibold mb-3">متن کوتاه و مختصر</h3>
            <p className="text-muted-foreground">
              Badge برای متن‌های کوتاه طراحی شده. از متن‌های طولانی خودداری کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استفاده مناسب از variant</h3>
            <p className="text-muted-foreground">
              از destructive فقط برای خطا و هشدار استفاده کنید. از secondary برای
              اطلاعات کم اهمیت‌تر
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">آیکون‌های کوچک</h3>
            <p className="text-muted-foreground">
              اگر از آیکون استفاده می‌کنید، اندازه آن را 3x3 یا 4x4 نگه دارید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">رنگ‌های سفارشی</h3>
            <p className="text-muted-foreground">
              هنگام استفاده از رنگ‌های سفارشی، حتماً حالت hover را نیز تنظیم کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">جایگذاری</h3>
            <p className="text-muted-foreground">
              Badge را در کنار عناصر مرتبط قرار دهید، نه به صورت مجزا
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
