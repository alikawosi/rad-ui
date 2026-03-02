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
import { Check } from "lucide-react"

export const code = `import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function UsageExample() {
  return (
    <Item className="border rounded-md">
      <ItemMedia>
        <Check className="h-5 w-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>تکمیل وظیفه</ItemTitle>
        <ItemDescription>وظیفه با موفقیت انجام شد.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="sm">بستن</Button>
      </ItemActions>
    </Item>
  )
}
`

export default function UsageExample() {
  return (
    <Item className="border rounded-md">
      <ItemMedia>
        <Check className="h-5 w-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>تکمیل وظیفه</ItemTitle>
        <ItemDescription>وظیفه با موفقیت انجام شد.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="sm">
          بستن
        </Button>
      </ItemActions>
    </Item>
  )
}
