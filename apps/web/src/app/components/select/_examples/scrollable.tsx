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

export default function ScrollableExample() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-64">
        <SelectValue placeholder="یک منطقه زمانی انتخاب کنید" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>آمریکای شمالی</SelectLabel>
          <SelectItem value="est">وقت استاندارد شرقی</SelectItem>
          <SelectItem value="cst">وقت استاندارد مرکزی</SelectItem>
          <SelectItem value="mst">وقت استاندارد کوهستانی</SelectItem>
          <SelectItem value="pst">وقت استاندارد اقیانوس آرام</SelectItem>
          <SelectItem value="akst">وقت استاندارد آلاسکا</SelectItem>
          <SelectItem value="hst">وقت استاندارد هاوایی</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>اروپا و آفریقا</SelectLabel>
          <SelectItem value="gmt">وقت گرینویچ</SelectItem>
          <SelectItem value="cet">وقت اروپای مرکزی</SelectItem>
          <SelectItem value="eet">وقت اروپای شرقی</SelectItem>
          <SelectItem value="west">وقت تابستانی اروپای غربی</SelectItem>
          <SelectItem value="cat">وقت آفریقای مرکزی</SelectItem>
          <SelectItem value="eat">وقت آفریقای شرقی</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>آسیا</SelectLabel>
          <SelectItem value="msk">وقت مسکو</SelectItem>
          <SelectItem value="ist">وقت استاندارد هند</SelectItem>
          <SelectItem value="cst_china">وقت استاندارد چین</SelectItem>
          <SelectItem value="jst">وقت استاندارد ژاپن</SelectItem>
          <SelectItem value="kst">وقت استاندارد کره</SelectItem>
          <SelectItem value="ist_indonesia">وقت استاندارد مرکزی اندونزی</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>استرالیا و اقیانوسیه</SelectLabel>
          <SelectItem value="awst">وقت استاندارد غربی استرالیا</SelectItem>
          <SelectItem value="acst">وقت استاندارد مرکزی استرالیا</SelectItem>
          <SelectItem value="aest">وقت استاندارد شرقی استرالیا</SelectItem>
          <SelectItem value="nzst">وقت استاندارد نیوزیلند</SelectItem>
          <SelectItem value="fjt">وقت فیجی</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>آمریکای جنوبی</SelectLabel>
          <SelectItem value="art">وقت آرژانتین</SelectItem>
          <SelectItem value="bot">وقت بولیوی</SelectItem>
          <SelectItem value="brt">وقت برزیلیا</SelectItem>
          <SelectItem value="clt">وقت استاندارد شیلی</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
`;

export default function ScrollableExample() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-64">
        <SelectValue placeholder="یک منطقه زمانی انتخاب کنید" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>آمریکای شمالی</SelectLabel>
          <SelectItem value="est">وقت استاندارد شرقی</SelectItem>
          <SelectItem value="cst">وقت استاندارد مرکزی</SelectItem>
          <SelectItem value="mst">وقت استاندارد کوهستانی</SelectItem>
          <SelectItem value="pst">وقت استاندارد اقیانوس آرام</SelectItem>
          <SelectItem value="akst">وقت استاندارد آلاسکا</SelectItem>
          <SelectItem value="hst">وقت استاندارد هاوایی</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>اروپا و آفریقا</SelectLabel>
          <SelectItem value="gmt">وقت گرینویچ</SelectItem>
          <SelectItem value="cet">وقت اروپای مرکزی</SelectItem>
          <SelectItem value="eet">وقت اروپای شرقی</SelectItem>
          <SelectItem value="west">وقت تابستانی اروپای غربی</SelectItem>
          <SelectItem value="cat">وقت آفریقای مرکزی</SelectItem>
          <SelectItem value="eat">وقت آفریقای شرقی</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>آسیا</SelectLabel>
          <SelectItem value="msk">وقت مسکو</SelectItem>
          <SelectItem value="ist">وقت استاندارد هند</SelectItem>
          <SelectItem value="cst_china">وقت استاندارد چین</SelectItem>
          <SelectItem value="jst">وقت استاندارد ژاپن</SelectItem>
          <SelectItem value="kst">وقت استاندارد کره</SelectItem>
          <SelectItem value="ist_indonesia">وقت استاندارد مرکزی اندونزی</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>استرالیا و اقیانوسیه</SelectLabel>
          <SelectItem value="awst">وقت استاندارد غربی استرالیا</SelectItem>
          <SelectItem value="acst">وقت استاندارد مرکزی استرالیا</SelectItem>
          <SelectItem value="aest">وقت استاندارد شرقی استرالیا</SelectItem>
          <SelectItem value="nzst">وقت استاندارد نیوزیلند</SelectItem>
          <SelectItem value="fjt">وقت فیجی</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>آمریکای جنوبی</SelectLabel>
          <SelectItem value="art">وقت آرژانتین</SelectItem>
          <SelectItem value="bot">وقت بولیوی</SelectItem>
          <SelectItem value="brt">وقت برزیلیا</SelectItem>
          <SelectItem value="clt">وقت استاندارد شیلی</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
