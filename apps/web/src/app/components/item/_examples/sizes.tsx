"use client"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/web/ui"
import { Bell, BellRing, Volume2 } from "lucide-react"

export const code = `import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Bell, BellRing, Volume2 } from "lucide-react"

export function ItemSizes() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Item size="default" variant="outline">
        <ItemMedia>
          <Bell className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>اندازه پیش‌فرض</ItemTitle>
          <ItemDescription>فاصله‌گذاری استاندارد.</ItemDescription>
        </ItemContent>
      </Item>

      <Item size="sm" variant="outline">
        <ItemMedia>
          <BellRing className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>اندازه کوچک (Small)</ItemTitle>
          <ItemDescription>چیدمان فشرده برای لیست‌های متراکم.</ItemDescription>
        </ItemContent>
      </Item>

      <Item size="xs" variant="outline">
        <ItemMedia className="h-8 w-8">
          <Volume2 className="h-3 w-3" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-xs">خیلی کوچک (XS)</ItemTitle>
          <ItemDescription className="text-xs">حداقل فضای اشغالی.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
`

export default function ItemSizes() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Item size="default" variant="outline">
        <ItemMedia>
          <Bell className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>اندازه پیش‌فرض</ItemTitle>
          <ItemDescription>فاصله‌گذاری استاندارد.</ItemDescription>
        </ItemContent>
      </Item>

      <Item size="sm" variant="outline">
        <ItemMedia>
          <BellRing className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>اندازه کوچک (Small)</ItemTitle>
          <ItemDescription>چیدمان فشرده برای لیست‌های متراکم.</ItemDescription>
        </ItemContent>
      </Item>

      <Item size="xs" variant="outline">
        <ItemMedia className="h-8 w-8">
          <Volume2 className="h-3 w-3" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-xs">خیلی کوچک (XS)</ItemTitle>
          <ItemDescription className="text-xs">
            حداقل فضای اشغالی.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
