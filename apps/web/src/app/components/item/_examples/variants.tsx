"use client"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/web/ui"
import { Mail, Shield, Smartphone } from "lucide-react"

export const code = `import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Mail, Shield, Smartphone } from "lucide-react"

export function ItemVariants() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Item variant="default">
        <ItemMedia>
          <Smartphone className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>پیش‌فرض (Default)</ItemTitle>
          <ItemDescription>ظاهر استاندارد آیتم.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline">
        <ItemMedia>
          <Shield className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>خط دور (Outline)</ItemTitle>
          <ItemDescription>
            استایل با خط دور برای تاکید بیشتر.
          </ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="muted">
        <ItemMedia>
          <Mail className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>خاموش (Muted)</ItemTitle>
          <ItemDescription>
            پس‌زمینه ملایم برای اهمیت کمتر.
          </ItemDescription>
        </ItemContent>
      </Item>

       <Item variant="ghost">
        <ItemMedia>
          <Mail className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>روح (Ghost)</ItemTitle>
          <ItemDescription>
            استایل روح برای ظاهری تمیز و مینیمال.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
`

export default function ItemVariants() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Item variant="default">
        <ItemMedia>
          <Smartphone className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>پیش‌فرض (Default)</ItemTitle>
          <ItemDescription>ظاهر استاندارد آیتم.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline">
        <ItemMedia>
          <Shield className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>خط دور (Outline)</ItemTitle>
          <ItemDescription>استایل با خط دور برای تاکید بیشتر.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="muted">
        <ItemMedia>
          <Mail className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>خاموش (Muted)</ItemTitle>
          <ItemDescription>پس‌زمینه ملایم برای اهمیت کمتر.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="ghost">
        <ItemMedia>
          <Mail className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>روح (Ghost)</ItemTitle>
          <ItemDescription>
            استایل روح برای ظاهری تمیز و مینیمال.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
