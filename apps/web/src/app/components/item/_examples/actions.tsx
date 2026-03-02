"use client"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/web/ui"
import { Button } from "@/registry/web/ui/button"
import { Globe, Settings } from "lucide-react"

export const code = `import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Globe, Settings } from "lucide-react"

export function ItemWithActions() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Item variant="outline">
        <ItemMedia>
          <Globe className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>تنظیمات زبان</ItemTitle>
          <ItemDescription>زبان مورد نظر خود را تغییر دهید.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            تغییر
          </Button>
        </ItemActions>
      </Item>

      <Item variant="outline">
        <ItemMedia>
          <Settings className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>تنظیمات حساب</ItemTitle>
          <ItemDescription>مدیریت پروفایل کاربری.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">مدیریت</Button>
        </ItemActions>
      </Item>
    </div>
  )
}
`

export default function ItemWithActions() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Item variant="outline">
        <ItemMedia>
          <Globe className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>تنظیمات زبان</ItemTitle>
          <ItemDescription>زبان مورد نظر خود را تغییر دهید.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            تغییر
          </Button>
        </ItemActions>
      </Item>

      <Item variant="outline">
        <ItemMedia>
          <Settings className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>تنظیمات حساب</ItemTitle>
          <ItemDescription>مدیریت پروفایل کاربری.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">مدیریت</Button>
        </ItemActions>
      </Item>
    </div>
  )
}
