"use client";

import { Badge } from "@/registry/web/ui";

export const code = `import { Badge } from "@/components/ui/badge";

export default function VariantsExample() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-medium">پیش‌فرض (Default)</h3>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="default">فعال</Badge>
          <Badge variant="default">جدید</Badge>
          <Badge variant="default">ویژه</Badge>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-medium">ثانویه (Secondary)</h3>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="secondary">در انتظار</Badge>
          <Badge variant="secondary">پیش‌نویس</Badge>
          <Badge variant="secondary">آرشیو</Badge>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-medium">هشدار (Destructive)</h3>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="destructive">خطا</Badge>
          <Badge variant="destructive">حذف شده</Badge>
          <Badge variant="destructive">رد شده</Badge>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-medium">حاشیه‌دار (Outline)</h3>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="outline">برچسب</Badge>
          <Badge variant="outline">دسته‌بندی</Badge>
          <Badge variant="outline">تگ</Badge>
        </div>
      </div>
    </div>
  );
}
`;

export default function VariantsExample() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-medium">پیش‌فرض (Default)</h3>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="default">فعال</Badge>
          <Badge variant="default">جدید</Badge>
          <Badge variant="default">ویژه</Badge>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-medium">ثانویه (Secondary)</h3>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="secondary">در انتظار</Badge>
          <Badge variant="secondary">پیش‌نویس</Badge>
          <Badge variant="secondary">آرشیو</Badge>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-medium">هشدار (Destructive)</h3>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="destructive">خطا</Badge>
          <Badge variant="destructive">حذف شده</Badge>
          <Badge variant="destructive">رد شده</Badge>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-medium">حاشیه‌دار (Outline)</h3>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="outline">برچسب</Badge>
          <Badge variant="outline">دسته‌بندی</Badge>
          <Badge variant="outline">تگ</Badge>
        </div>
      </div>
    </div>
  );
}
