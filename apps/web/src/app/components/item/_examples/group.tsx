"use client"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/web/ui"
import { CreditCard, Settings, User } from "lucide-react"

export const code = `import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { CreditCard, Settings, User } from "lucide-react"

export function ItemGroupExample() {
  return (
    <div className="w-full max-w-md border rounded-xl p-2">
      <ItemGroup>
        <Item>
          <ItemMedia>
            <User className="h-5 w-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>پروفایل</ItemTitle>
            <ItemDescription>مشاهده اطلاعات کاربری.</ItemDescription>
          </ItemContent>
        </Item>
        
        <ItemSeparator />
        
        <Item>
          <ItemMedia>
            <Settings className="h-5 w-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>تنظیمات</ItemTitle>
            <ItemDescription>مدیریت تنظیمات برنامه.</ItemDescription>
          </ItemContent>
        </Item>

        <ItemSeparator />

        <Item>
          <ItemMedia>
             <CreditCard className="h-5 w-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>صورت‌حساب</ItemTitle>
            <ItemDescription>مدیریت پرداخت‌ها و فاکتورها.</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  )
}
`

export default function ItemGroupExample() {
  return (
    <div className="w-full max-w-md border rounded-xl p-2">
      <ItemGroup>
        <Item>
          <ItemMedia>
            <User className="h-5 w-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>پروفایل</ItemTitle>
            <ItemDescription>مشاهده اطلاعات کاربری.</ItemDescription>
          </ItemContent>
        </Item>

        <ItemSeparator />

        <Item>
          <ItemMedia>
            <Settings className="h-5 w-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>تنظیمات</ItemTitle>
            <ItemDescription>مدیریت تنظیمات برنامه.</ItemDescription>
          </ItemContent>
        </Item>

        <ItemSeparator />

        <Item>
          <ItemMedia>
            <CreditCard className="h-5 w-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>صورت‌حساب</ItemTitle>
            <ItemDescription>مدیریت پرداخت‌ها و فاکتورها.</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  )
}
