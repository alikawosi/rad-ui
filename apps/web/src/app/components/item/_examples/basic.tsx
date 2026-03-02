"use client"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/web/ui"
import { ScanFace } from "lucide-react"

export const code = `import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { ScanFace } from "lucide-react"

export function BasicItem() {
  return (
    <Item>
      <ItemMedia>
        <ScanFace className="h-5 w-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>ورود بیومتریک</ItemTitle>
        <ItemDescription>
          برای ورود از چهره یا اثر انگشت خود استفاده کنید.
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}
`

export default function BasicItem() {
  return (
    <Item>
      <ItemMedia>
        <ScanFace className="h-5 w-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>ورود بیومتریک</ItemTitle>
        <ItemDescription>
          برای ورود از چهره یا اثر انگشت خود استفاده کنید.
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}
