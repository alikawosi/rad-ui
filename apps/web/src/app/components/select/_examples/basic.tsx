"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/web/ui";

export const code = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BasicExample() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="یک میوه انتخاب کنید" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>میوه‌ها</SelectLabel>
          <SelectItem value="apple">سیب</SelectItem>
          <SelectItem value="banana">موز</SelectItem>
          <SelectItem value="blueberry">زغال‌اخته</SelectItem>
          <SelectItem value="grapes">انگور</SelectItem>
          <SelectItem value="pineapple">آناناس</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
`;

export default function BasicExample() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="یک میوه انتخاب کنید" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>میوه‌ها</SelectLabel>
          <SelectItem value="apple">سیب</SelectItem>
          <SelectItem value="banana">موز</SelectItem>
          <SelectItem value="blueberry">زغال‌اخته</SelectItem>
          <SelectItem value="grapes">انگور</SelectItem>
          <SelectItem value="pineapple">آناناس</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
