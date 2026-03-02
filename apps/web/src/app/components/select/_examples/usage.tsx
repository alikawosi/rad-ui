"use client";

export const code = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Example() {
  return (
    <Select>
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
  );
}
`;

export default function UsageExample() {
  return null;
}
