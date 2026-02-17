"use client";

import { Badge } from "@/registry/web/ui";
import { Check, Star, Sparkles } from "lucide-react";

export const code = `import { Badge } from "@/components/ui/badge";
import { Check, Star, Sparkles } from "lucide-react";

export default function UserListExample() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">علی محمدی</span>
            <Badge variant="default" className="gap-1 bg-blue-500 text-white">
              <Check className="h-3 w-3" />
              تایید شده
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            توسعه‌دهنده فرانت‌اند
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">سارا احمدی</span>
            <Badge
              variant="outline"
              className="gap-1 bg-purple-50 dark:bg-purple-950 border-purple-300"
            >
              <Star className="h-3 w-3" />
              Pro
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">طراح UI/UX</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">رضا کریمی</span>
            <Badge
              variant="secondary"
              className="gap-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200"
            >
              <Sparkles className="h-3 w-3" />
              مدیر
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">مدیر محصول</p>
        </div>
      </div>
    </div>
  );
}
`;

export default function UserListExample() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">علی محمدی</span>
            <Badge variant="default" className="gap-1 bg-blue-500 text-white">
              <Check className="h-3 w-3" />
              تایید شده
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            توسعه‌دهنده فرانت‌اند
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">سارا احمدی</span>
            <Badge
              variant="outline"
              className="gap-1 bg-purple-50 dark:bg-purple-950 border-purple-300"
            >
              <Star className="h-3 w-3" />
              Pro
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">طراح UI/UX</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">رضا کریمی</span>
            <Badge
              variant="secondary"
              className="gap-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200"
            >
              <Sparkles className="h-3 w-3" />
              مدیر
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">مدیر محصول</p>
        </div>
      </div>
    </div>
  );
}
