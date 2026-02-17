"use client";

import { Badge } from "@/registry/web/ui";
import { Sparkles, Tag } from "lucide-react";

export const code = `import { Badge } from "@/components/ui/badge";
import { Sparkles, Tag } from "lucide-react";

export default function ProductCardExample() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-4 rounded-lg border border-border">
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-semibold">هدفون بی‌سیم</h4>
          <Badge variant="default" className="gap-1">
            <Sparkles className="h-3 w-3" />
            جدید
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          کیفیت صدای عالی با نویز کنسلینگ
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Tag className="h-3 w-3" />
            الکترونیک
          </Badge>
          <Badge className="bg-green-500 text-white">موجود</Badge>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-border">
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-semibold">کفش ورزشی</h4>
          <Badge variant="destructive">50% تخفیف</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          راحتی بی‌نظیر برای ورزش روزانه
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Tag className="h-3 w-3" />
            پوشاک
          </Badge>
          <Badge
            variant="secondary"
            className="bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200"
          >
            تعداد محدود
          </Badge>
        </div>
      </div>
    </div>
  );
}
`;

export default function ProductCardExample() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-4 rounded-lg border border-border">
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-semibold">هدفون بی‌سیم</h4>
          <Badge variant="default" className="gap-1">
            <Sparkles className="h-3 w-3" />
            جدید
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          کیفیت صدای عالی با نویز کنسلینگ
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Tag className="h-3 w-3" />
            الکترونیک
          </Badge>
          <Badge className="bg-green-500 text-white">موجود</Badge>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-border">
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-semibold">کفش ورزشی</h4>
          <Badge variant="destructive">50% تخفیف</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          راحتی بی‌نظیر برای ورزش روزانه
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Tag className="h-3 w-3" />
            پوشاک
          </Badge>
          <Badge
            variant="secondary"
            className="bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200"
          >
            تعداد محدود
          </Badge>
        </div>
      </div>
    </div>
  );
}
