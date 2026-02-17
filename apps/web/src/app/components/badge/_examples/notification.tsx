"use client";

import { Badge } from "@/registry/web/ui";
import { Mail, Bell } from "lucide-react";

export const code = `import { Badge } from "@/components/ui/badge";
import { Mail, Bell } from "lucide-react";

export default function NotificationExample() {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="relative">
        <Mail className="h-6 w-6" />
        <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-[10px]">
          5
        </Badge>
      </div>
      <div className="relative">
        <Bell className="h-6 w-6" />
        <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-[10px]">
          12
        </Badge>
      </div>
      <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
        <span className="text-sm">پیام‌ها</span>
        <Badge variant="destructive">3</Badge>
      </div>
    </div>
  );
}
`;

export default function NotificationExample() {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="relative">
        <Mail className="h-6 w-6" />
        <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-[10px]">
          5
        </Badge>
      </div>
      <div className="relative">
        <Bell className="h-6 w-6" />
        <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-[10px]">
          12
        </Badge>
      </div>
      <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
        <span className="text-sm">پیام‌ها</span>
        <Badge variant="destructive">3</Badge>
      </div>
    </div>
  );
}
