"use client";

import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../../lib/utils";

const paginationLinkVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-border bg-background hover:bg-muted hover:text-foreground",
        active:
          "border border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
      },
      size: {
        sm: "h-9 w-9",
        md: "h-10 w-10",
        lg: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const Pagination = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav">
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    role="navigation"
    aria-label="صفحه‌بندی"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
));
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "flex flex-row items-center gap-2",
      className
    )}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn(className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof paginationLinkVariants> {
  isActive?: boolean;
}

const PaginationLink = React.forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(({ className, isActive, variant, size, ...props }, ref) => (
  <a
    ref={ref}
    aria-current={isActive ? "page" : undefined}
    className={cn(
      paginationLinkVariants({
        variant: isActive ? "active" : variant,
        size,
        className,
      })
    )}
    {...props}
  />
));
PaginationLink.displayName = "PaginationLink";

export interface PaginationPreviousProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof paginationLinkVariants> {
  text?: string;
}

const PaginationPrevious = React.forwardRef<
  HTMLAnchorElement,
  PaginationPreviousProps
>(({ className, text = "قبلی", size = "md", ...props }, ref) => (
  <a
    ref={ref}
    aria-label="رفتن به صفحه قبلی"
    className={cn(
      paginationLinkVariants({ variant: "default", size, className }),
      "w-auto min-w-10 gap-1 ps-4 pe-4"
    )}
    {...props}
  >
    <ChevronRight className="h-4 w-4 shrink-0" />
    <span className="hidden sm:inline">{text}</span>
  </a>
));
PaginationPrevious.displayName = "PaginationPrevious";

export interface PaginationNextProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof paginationLinkVariants> {
  text?: string;
}

const PaginationNext = React.forwardRef<
  HTMLAnchorElement,
  PaginationNextProps
>(({ className, text = "بعدی", size = "md", ...props }, ref) => (
  <a
    ref={ref}
    aria-label="رفتن به صفحه بعدی"
    className={cn(
      paginationLinkVariants({ variant: "default", size, className }),
      "w-auto min-w-10 gap-1 ps-4 pe-4"
    )}
    {...props}
  >
    <span className="hidden sm:inline">{text}</span>
    <ChevronLeft className="h-4 w-4 shrink-0" />
  </a>
));
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="presentation"
    aria-hidden
    className={cn(
      "flex h-10 w-10 items-center justify-center",
      className
    )}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
  </span>
));
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
  paginationLinkVariants,
};
