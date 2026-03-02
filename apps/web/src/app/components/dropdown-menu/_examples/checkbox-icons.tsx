"use client";

import * as React from "react";
import { Button } from "@/registry/web/ui";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/web/ui";
import { Bell, Mail, MessageSquare } from "lucide-react";

export const code = `"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Mail, MessageSquare } from "lucide-react";

export default function CheckboxIconsExample() {
  const [notifications, setNotifications] = React.useState(true);
  const [emails, setEmails] = React.useState(false);
  const [messages, setMessages] = React.useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">اعلان‌ها</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>تنظیمات اعلان</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={notifications}
          onCheckedChange={setNotifications}
        >
          <Bell className="me-2 h-4 w-4" />
          <span>اعلان‌ها</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={emails}
          onCheckedChange={setEmails}
        >
          <Mail className="me-2 h-4 w-4" />
          <span>ایمیل‌ها</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={messages}
          onCheckedChange={setMessages}
        >
          <MessageSquare className="me-2 h-4 w-4" />
          <span>پیام‌ها</span>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export default function CheckboxIconsExample() {
  const [notifications, setNotifications] = React.useState(true);
  const [emails, setEmails] = React.useState(false);
  const [messages, setMessages] = React.useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">اعلان‌ها</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>تنظیمات اعلان</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={notifications}
          onCheckedChange={setNotifications}
        >
          <Bell className="me-2 h-4 w-4" />
          <span>اعلان‌ها</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={emails}
          onCheckedChange={setEmails}
        >
          <Mail className="me-2 h-4 w-4" />
          <span>ایمیل‌ها</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={messages}
          onCheckedChange={setMessages}
        >
          <MessageSquare className="me-2 h-4 w-4" />
          <span>پیام‌ها</span>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
