"use client";

import { Badge } from "@/registry/web/ui";
import { Check, X, Clock, AlertCircle } from "lucide-react";

export const code = `import { Badge } from "@/components/ui/badge";
import { Check, X, Clock, AlertCircle } from "lucide-react";

export default function StatusExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
        <span className="text-sm">سفارش #1234</span>
        <Badge variant="default" className="gap-1">
          <Check className="h-3 w-3" />
          تحویل داده شده
        </Badge>
      </div>
      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
        <span className="text-sm">سفارش #1235</span>
        <Badge variant="secondary" className="gap-1">
          <Clock className="h-3 w-3" />
          در حال پردازش
        </Badge>
      </div>
      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
        <span className="text-sm">سفارش #1236</span>
        <Badge variant="destructive" className="gap-1">
          <X className="h-3 w-3" />
          لغو شده
        </Badge>
      </div>
      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
        <span className="text-sm">سفارش #1237</span>
        <Badge
          variant="outline"
          className="gap-1 bg-yellow-50 dark:bg-yellow-950 border-yellow-300"
        >
          <AlertCircle className="h-3 w-3" />
          نیاز به بررسی
        </Badge>
      </div>
    </div>
  );
}
`;

export default function StatusExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
        <span className="text-sm">سفارش #1234</span>
        <Badge variant="default" className="gap-1">
          <Check className="h-3 w-3" />
          تحویل داده شده
        </Badge>
      </div>
      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
        <span className="text-sm">سفارش #1235</span>
        <Badge variant="secondary" className="gap-1">
          <Clock className="h-3 w-3" />
          در حال پردازش
        </Badge>
      </div>
      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
        <span className="text-sm">سفارش #1236</span>
        <Badge variant="destructive" className="gap-1">
          <X className="h-3 w-3" />
          لغو شده
        </Badge>
      </div>
      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
        <span className="text-sm">سفارش #1237</span>
        <Badge
          variant="outline"
          className="gap-1 bg-yellow-50 dark:bg-yellow-950 border-yellow-300"
        >
          <AlertCircle className="h-3 w-3" />
          نیاز به بررسی
        </Badge>
      </div>
    </div>
  );
}
