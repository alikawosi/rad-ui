"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const tabsListVariants = cva(
  "inline-flex items-center gap-1 border-b border-border",
  {
    variants: {
      variant: {
        underline: "text-muted-foreground",
        pill: "rounded-full bg-muted/60 px-1 py-0.5 text-muted-foreground",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        between: "justify-between",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "underline",
      size: "md",
      justify: "start",
    },
  }
);

const tabsTriggerVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors",
  {
    variants: {
      variant: {
        underline:
          "rounded-none border-b-2 border-transparent text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-foreground",
        pill:
          "rounded-full bg-transparent text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
      fullWidth: {
        true: "flex-1",
      },
    },
    defaultVariants: {
      variant: "underline",
      size: "md",
    },
  }
);

interface TabsContextValue
  extends VariantProps<typeof tabsTriggerVariants>,
    VariantProps<typeof tabsListVariants> {
  disabled?: boolean;
}

const TabsContext = React.createContext<TabsContextValue>({
  variant: "underline",
  size: "md",
});

export interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabsTriggerVariants>,
    Pick<VariantProps<typeof tabsListVariants>, "justify" | "fullWidth"> {
  disabled?: boolean;
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(
  (
    {
      children,
      className,
      variant,
      size,
      justify = "start",
      fullWidth,
      disabled,
      ...props
    },
    ref
  ) => {
    const contextValue = React.useMemo(
      () => ({
        variant,
        size,
        justify,
        fullWidth,
        disabled,
      }),
      [variant, size, justify, fullWidth, disabled]
    );

    return (
      <TabsPrimitive.Root
        ref={ref}
        className={cn("w-full", className)}
        {...props}
      >
        <TabsContext.Provider value={contextValue}>
          {children}
        </TabsContext.Provider>
      </TabsPrimitive.Root>
    );
  }
);

Tabs.displayName = "Tabs";

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, size, justify, fullWidth, ...props }, ref) => {
  const context = React.useContext(TabsContext);

  const finalVariant = context.variant ?? variant;
  const finalSize = context.size ?? size;
  const finalJustify = context.justify ?? justify;
  const finalFullWidth = context.fullWidth ?? fullWidth;

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        tabsListVariants({
          variant: finalVariant,
          size: finalSize,
          justify: finalJustify,
          fullWidth: finalFullWidth,
          className,
        })
      )}
      {...props}
    />
  );
});

TabsList.displayName = "TabsList";

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, size, fullWidth, disabled, ...props }, ref) => {
  const context = React.useContext(TabsContext);

  const finalVariant = context.variant ?? variant;
  const finalSize = context.size ?? size;
  const finalFullWidth = context.fullWidth ?? fullWidth;
  const isDisabled = context.disabled || disabled;

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        tabsTriggerVariants({
          variant: finalVariant,
          size: finalSize,
          fullWidth: finalFullWidth,
          className,
        })
      )}
      disabled={isDisabled}
      {...props}
    />
  );
});

TabsTrigger.displayName = "TabsTrigger";

export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        "mt-4 rounded-lg border border-border bg-card p-4 text-foreground",
        className
      )}
      {...props}
    />
  );
});

TabsContent.displayName = "TabsContent";

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
  tabsTriggerVariants,
};

