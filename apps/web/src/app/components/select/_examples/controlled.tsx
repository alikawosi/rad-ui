"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/web/ui";

export const code = `"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ControlledExample() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-4">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="تم" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="light">روشن</SelectItem>
            <SelectItem value="dark">تاریک</SelectItem>
            <SelectItem value="system">سیستم</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        مقدار انتخاب شده: {value || "هیچ"}
      </p>
    </div>
  );
}
`;

export default function ControlledExample() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-4">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="تم" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="light">روشن</SelectItem>
            <SelectItem value="dark">تاریک</SelectItem>
            <SelectItem value="system">سیستم</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        مقدار انتخاب شده: {value || "هیچ"}
      </p>
    </div>
  );
}
