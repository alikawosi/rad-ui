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
import SizesExample, { code as sizesCode } from "./_examples/sizes";
import ShapesExample, { code as shapesCode } from "./_examples/shapes";
import FallbackExample, { code as fallbackCode } from "./_examples/fallback";
import GroupExample, { code as groupCode } from "./_examples/group";
import ProfileCardExample, { code as profileCardCode } from "./_examples/profile-card";
import CommentsExample, { code as commentsCode } from "./_examples/comments";
import TeamExample, { code as teamCode } from "./_examples/team";

const avatarProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

const avatarImageProps: PropDefinition[] = [
  {
    name: "src",
    type: "string",
    defaultValue: "undefined",
    description: "آدرس تصویر",
  },
  {
    name: "alt",
    type: "string",
    defaultValue: "undefined",
    description: "متن جایگزین تصویر",
  },
  {
    name: "onLoadingStatusChange",
    type: "(status) => void",
    defaultValue: "undefined",
    description: "رویداد تغییر وضعیت بارگذاری",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

const avatarFallbackProps: PropDefinition[] = [
  {
    name: "delayMs",
    type: "number",
    defaultValue: "undefined",
    description: "تاخیر نمایش (برای جلوگیری از چشمک زدن محتوا)",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function AvatarPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">آواتار (Avatar)</h1>
        <p className="text-lg text-muted-foreground">
          یک المان تصویری با پشتیبان برای نمایش کاربر.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add avatar" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="استفاده ساده از آواتار با تصویر و فال‌بک."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="اندازه‌ها"
          titleEn="Sizes"
          description="تغییر اندازه آواتار با استفاده از کلاس‌های CSS."
          code={sizesCode}
        >
          <SizesExample />
        </ComponentExample>

        <ComponentExample
          title="شکل‌ها"
          titleEn="Shapes"
          description="تغییر شکل آواتار به دایره، مربع یا گرد."
          code={shapesCode}
        >
          <ShapesExample />
        </ComponentExample>

        <ComponentExample
          title="محتوای پشتیبان"
          titleEn="Fallback"
          description="نمایش محتوای پشتیبان زمانی که تصویر بارگذاری نمی‌شود."
          code={fallbackCode}
        >
          <FallbackExample />
        </ComponentExample>

        <ComponentExample
          title="آواتارهای گروهی"
          titleEn="Grouped Avatars"
          description="نمایش گروهی از آواتارها با حاشیه منفی."
          code={groupCode}
        >
          <GroupExample />
        </ComponentExample>
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های کاربردی"
        titleEn="Practical Examples"
      >
        <SubExample
          title="کارت پروفایل کاربر"
          titleEn="User Profile Card"
          description="استفاده از آواتار در کارت پروفایل."
          code={profileCardCode}
        >
          <ProfileCardExample />
        </SubExample>

        <SubExample
          title="بخش نظرات"
          titleEn="Comment Section"
          description="نمایش آواتار کاربران در بخش نظرات."
          code={commentsCode}
        >
          <CommentsExample />
        </SubExample>

        <SubExample
          title="اعضای تیم"
          titleEn="Team Members"
          description="لیست اعضای تیم با وضعیت آنلاین/آفلاین."
          code={teamCode}
        >
          <TeamExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Avatar"
          description="پراپ‌های کامپوننت Avatar."
          props={avatarProps}
        />
        <PropsTable
          title="AvatarImage"
          description="پراپ‌های کامپوننت AvatarImage."
          props={avatarImageProps}
        />
        <PropsTable
          title="AvatarFallback"
          description="پراپ‌های کامپوننت AvatarFallback."
          props={avatarFallbackProps}
        />
      </ApiReferenceSection>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">اندازه مناسب</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>برای نوار ناوبری و منوها: 32-40px</li>
              <li>برای لیست‌ها و کامنت‌ها: 40-48px</li>
              <li>برای پروفایل کاربر: 64px یا بیشتر</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">محتوای پشتیبان</h3>
            <p className="text-muted-foreground">
              برای محتوای پشتیبان از حروف اول نام استفاده کنید. اگر نام در دسترس
              نیست، از آیکون کاربر استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گروه‌بندی</h3>
            <p className="text-muted-foreground">
              برای نمایش اعضای گروه، از حاشیه منفی استفاده کنید و برای جلوگیری
              از هم‌پوشانی، border اضافه کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">بهینه‌سازی تصاویر</h3>
            <p className="text-muted-foreground">
              تصاویر آواتار را در اندازه مناسب (2x اندازه نمایش) بهینه‌سازی کنید
              و از فرمت WebP یا AVIF استفاده کنید
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
