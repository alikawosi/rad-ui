"use client";

import { Badge } from "@/registry/web/ui";
import { Check, X, Clock, Star, TrendingUp } from "lucide-react";

export const code = `import { Badge } from "@/components/ui/badge";
import { Check, X, Clock, Star, TrendingUp } from "lucide-react";

export default function WithIconsExample() {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge variant="default" className="gap-1">
        <Check className="h-3 w-3" />
        تایید شده
      </Badge>
      <Badge variant="destructive" className="gap-1">
        <X className="h-3 w-3" />
        رد شده
      </Badge>
      <Badge variant="secondary" className="gap-1">
        <Clock className="h-3 w-3" />
        در انتظار
      </Badge>
      <Badge variant="outline" className="gap-1">
        <Star className="h-3 w-3" />
        ویژه
      </Badge>
      <Badge variant="default" className="gap-1">
        <TrendingUp className="h-3 w-3" />
        پرفروش
      </Badge>
    </div>
  );
}
`;

export default function WithIconsExample() {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge variant="default" className="gap-1">
        <Check className="h-3 w-3" />
        تایید شده
      </Badge>
      <Badge variant="destructive" className="gap-1">
        <X className="h-3 w-3" />
        رد شده
      </Badge>
      <Badge variant="secondary" className="gap-1">
        <Clock className="h-3 w-3" />
        در انتظار
      </Badge>
      <Badge variant="outline" className="gap-1">
        <Star className="h-3 w-3" />
        ویژه
      </Badge>
      <Badge variant="default" className="gap-1">
        <TrendingUp className="h-3 w-3" />
        پرفروش
      </Badge>
    </div>
  );
}
