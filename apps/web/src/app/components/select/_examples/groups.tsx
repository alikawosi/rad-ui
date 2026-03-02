"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/web/ui";

export const code = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function GroupsExample() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="یک مورد انتخاب کنید" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>میوه‌ها</SelectLabel>
          <SelectItem value="apple">سیب</SelectItem>
          <SelectItem value="banana">موز</SelectItem>
          <SelectItem value="blueberry">زغال‌اخته</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>سبزیجات</SelectLabel>
          <SelectItem value="carrot">هویج</SelectItem>
          <SelectItem value="broccoli">کلم بروکلی</SelectItem>
          <SelectItem value="spinach">اسفناج</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
`;

export default function GroupsExample() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="یک مورد انتخاب کنید" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>میوه‌ها</SelectLabel>
          <SelectItem value="apple">سیب</SelectItem>
          <SelectItem value="banana">موز</SelectItem>
          <SelectItem value="blueberry">زغال‌اخته</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>سبزیجات</SelectLabel>
          <SelectItem value="carrot">هویج</SelectItem>
          <SelectItem value="broccoli">کلم بروکلی</SelectItem>
          <SelectItem value="spinach">اسفناج</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
