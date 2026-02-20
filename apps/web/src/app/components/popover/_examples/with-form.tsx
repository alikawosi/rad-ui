"use client";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  Button,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
} from "@/registry/web/ui";

export const code = `import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function WithFormPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">باز کردن پاپ‌اور</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>ایجاد حساب کاربری</PopoverTitle>
          <PopoverDescription>
            اطلاعات خود را وارد کنید تا حساب کاربری جدید ایجاد شود.
          </PopoverDescription>
        </PopoverHeader>
        <div className="mt-4 space-y-4">
          <Field>
            <FieldGroup>
              <FieldLabel>نام</FieldLabel>
              <Input placeholder="نام خود را وارد کنید" />
            </FieldGroup>
          </Field>
          <Field>
            <FieldGroup>
              <FieldLabel>ایمیل</FieldLabel>
              <Input type="email" placeholder="ایمیل خود را وارد کنید" />
            </FieldGroup>
          </Field>
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm">انصراف</Button>
            <Button size="sm">ایجاد</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}`;

export default function WithFormExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">باز کردن پاپ‌اور</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>ایجاد حساب کاربری</PopoverTitle>
          <PopoverDescription>
            اطلاعات خود را وارد کنید تا حساب کاربری جدید ایجاد شود.
          </PopoverDescription>
        </PopoverHeader>
        <div className="mt-4 space-y-4">
          <Field>
            <FieldGroup>
              <FieldLabel>نام</FieldLabel>
              <Input placeholder="نام خود را وارد کنید" />
            </FieldGroup>
          </Field>
          <Field>
            <FieldGroup>
              <FieldLabel>ایمیل</FieldLabel>
              <Input type="email" placeholder="ایمیل خود را وارد کنید" />
            </FieldGroup>
          </Field>
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm">انصراف</Button>
            <Button size="sm">ایجاد</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
