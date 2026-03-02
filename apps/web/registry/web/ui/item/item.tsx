import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const itemVariants = cva(
  "group relative flex gap-4 rounded-lg p-3 transition-colors hover:bg-muted/50",
  {
    variants: {
      variant: {
        default: "",
        outline:
          "border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        muted: "bg-muted text-muted-foreground hover:bg-muted/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "",
        sm: "p-2",
        xs: "p-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemVariants> {
  asChild?: boolean
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        ref={ref}
        className={cn(itemVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Item.displayName = "Item"

const itemGroupVariants = cva("flex flex-col space-y-1", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface ItemGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemGroupVariants> {}

const ItemGroup = React.forwardRef<HTMLDivElement, ItemGroupProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(itemGroupVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
ItemGroup.displayName = "ItemGroup"

const ItemSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("-mx-3 my-1 h-px bg-muted", className)}
    {...props}
  />
))
ItemSeparator.displayName = "ItemSeparator"

const itemMediaVariants = cva(
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
  {
    variants: {
      variant: {
        default: "",
        icon: "bg-transparent text-foreground",
        image: "overflow-hidden rounded-md",
        avatar: "overflow-hidden rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ItemMediaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemMediaVariants> {}

const ItemMedia = React.forwardRef<HTMLDivElement, ItemMediaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(itemMediaVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
ItemMedia.displayName = "ItemMedia"

const ItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1 space-y-1", className)} {...props} />
))
ItemContent.displayName = "ItemContent"

const ItemTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-sm font-medium leading-none", className)}
    {...props}
  />
))
ItemTitle.displayName = "ItemTitle"

const ItemDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
ItemDescription.displayName = "ItemDescription"

const ItemActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2", className)}
    {...props}
  />
))
ItemActions.displayName = "ItemActions"

export {
  Item,
  itemVariants,
  ItemGroup,
  itemGroupVariants,
  ItemSeparator,
  ItemMedia,
  itemMediaVariants,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
}
