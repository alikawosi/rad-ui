"use client";

import * as React from "react";
import {
  Field,
  FieldLabel,
  FieldError,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
} from "@/registry/web/ui";

export const code = `"use client";

import * as React from "react";
import {
  Field,
  FieldLabel,
  FieldError,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
} from "@/components/ui";

export default function FormExample() {
  const [country, setCountry] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!country) {
      setError("لطفاً یک کشور انتخاب کنید");
      return;
    }
    setError("");
    console.log("کشور انتخاب شده:", country);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field data-invalid={!!error}>
        <FieldLabel>کشور</FieldLabel>
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger aria-invalid={!!error}>
            <SelectValue placeholder="کشور خود را انتخاب کنید" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="ir">ایران</SelectItem>
              <SelectItem value="tr">ترکیه</SelectItem>
              <SelectItem value="ae">امارات</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {error && <FieldError>{error}</FieldError>}
      </Field>
      <Button type="submit">ارسال</Button>
    </form>
  );
}
`;

export default function FormExample() {
  const [country, setCountry] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!country) {
      setError("لطفاً یک کشور انتخاب کنید");
      return;
    }
    setError("");
    console.log("کشور انتخاب شده:", country);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xs">
      <Field data-invalid={!!error}>
        <FieldLabel>کشور</FieldLabel>
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger aria-invalid={!!error}>
            <SelectValue placeholder="کشور خود را انتخاب کنید" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="ir">ایران</SelectItem>
              <SelectItem value="tr">ترکیه</SelectItem>
              <SelectItem value="ae">امارات</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {error && <FieldError>{error}</FieldError>}
      </Field>
      <Button type="submit">ارسال</Button>
    </form>
  );
}
