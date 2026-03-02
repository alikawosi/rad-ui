"use client";

import {
  Field,
  FieldError,
  FieldLabel,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/web/ui";

export const code = `import {
  Field,
  FieldError,
  FieldLabel,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

export default function InvalidExample() {
  return (
    <Field data-invalid className="w-full max-w-48">
      <FieldLabel>میوه</FieldLabel>
      <Select>
        <SelectTrigger aria-invalid>
          <SelectValue placeholder="یک میوه انتخاب کنید" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">سیب</SelectItem>
            <SelectItem value="banana">موز</SelectItem>
            <SelectItem value="blueberry">زغال‌اخته</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError>لطفاً یک میوه انتخاب کنید.</FieldError>
    </Field>
  );
}
`;

export default function InvalidExample() {
  return (
    <Field data-invalid className="w-full max-w-48">
      <FieldLabel>میوه</FieldLabel>
      <Select>
        <SelectTrigger aria-invalid>
          <SelectValue placeholder="یک میوه انتخاب کنید" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">سیب</SelectItem>
            <SelectItem value="banana">موز</SelectItem>
            <SelectItem value="blueberry">زغال‌اخته</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError>لطفاً یک میوه انتخاب کنید.</FieldError>
    </Field>
  );
}
