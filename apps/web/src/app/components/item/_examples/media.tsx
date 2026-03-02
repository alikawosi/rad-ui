"use client"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/web/ui"
import { Camera } from "lucide-react"

export const code = `import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Camera } from "lucide-react"

export function ItemMediaTypes() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Item variant="outline">
        <ItemMedia variant="icon">
           <Camera className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>نوع آیکون (Icon)</ItemTitle>
          <ItemDescription>رسانه با پس‌زمینه شفاف.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline">
        <ItemMedia variant="image">
           <img
            src="https://github.com/shadcn.png"
            alt="کاربر"
            className="h-full w-full object-cover"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>نوع تصویر (Image)</ItemTitle>
          <ItemDescription>رسانه با گوشه‌های گرد شده.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline">
        <ItemMedia variant="avatar">
          <img
            src="https://github.com/shadcn.png"
            alt="کاربر"
            className="h-full w-full object-cover"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>نوع آواتار (Avatar)</ItemTitle>
          <ItemDescription>رسانه دایره‌ای شکل.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
`

export default function ItemMediaTypes() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Camera className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>نوع آیکون (Icon)</ItemTitle>
          <ItemDescription>رسانه با پس‌زمینه شفاف.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline">
        <ItemMedia variant="image">
          <img
            src="https://github.com/shadcn.png"
            alt="کاربر"
            className="h-full w-full object-cover"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>نوع تصویر (Image)</ItemTitle>
          <ItemDescription>رسانه با گوشه‌های گرد شده.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline">
        <ItemMedia variant="avatar">
          <img
            src="https://github.com/shadcn.png"
            alt="کاربر"
            className="h-full w-full object-cover"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>نوع آواتار (Avatar)</ItemTitle>
          <ItemDescription>رسانه دایره‌ای شکل.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
