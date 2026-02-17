"use client";

import * as React from "react";
import { cn } from "@/registry/web/lib/utils";
import { CodeBlock } from "./code-block";

interface ComponentExampleProps {
  title: string;
  titleEn?: string;
  description?: React.ReactNode;
  code: string;
  language?: string;
  children: React.ReactNode;
  className?: string;
  previewClassName?: string;
  /** When false, preview does not use flex center (for grid layouts). Default true */
  previewCentered?: boolean;
}

/**
 * Component example wrapper that displays a live preview with a collapsible code block.
 * Used for showcasing component examples in documentation pages.
 */
export function ComponentExample({
  title,
  titleEn,
  description,
  code,
  language = "tsx",
  children,
  className,
  previewClassName,
  previewCentered = true,
}: ComponentExampleProps) {
  return (
    <section className={cn("mb-16", className)}>
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          {title}
          {titleEn && ` (${titleEn})`}
        </h2>
        {description && (
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
        )}

        {/* Live Preview */}
        <div
          className={cn(
            "p-8 rounded-t-lg border border-border bg-card",
            previewCentered && "flex items-center justify-center",
            previewClassName
          )}
        >
          {children}
        </div>

        {/* Collapsible Code Block */}
        <CodeBlock code={code} language={language} />
      </div>
    </section>
  );
}

interface ComponentExampleGroupProps {
  title: string;
  titleEn?: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Group multiple examples under a single section heading.
 * Useful for "Examples" or "Advanced Examples" sections with multiple sub-examples.
 */
export function ComponentExampleGroup({
  title,
  titleEn,
  description,
  children,
  className,
}: ComponentExampleGroupProps) {
  return (
    <section className={cn("mb-16", className)}>
      <h2 className="text-2xl font-semibold mb-6">
        {title}
        {titleEn && ` (${titleEn})`}
      </h2>
      {description && (
        <p className="text-muted-foreground mb-6">{description}</p>
      )}
      <div className="space-y-8">{children}</div>
    </section>
  );
}

interface SubExampleProps {
  title: string;
  titleEn?: string;
  description?: React.ReactNode;
  code: string;
  language?: string;
  children: React.ReactNode;
  className?: string;
  previewClassName?: string;
  /** When false, preview does not use flex center. Default true */
  previewCentered?: boolean;
}

/**
 * Sub-example within a ComponentExampleGroup.
 * Uses h3 instead of h2 for proper heading hierarchy.
 */
export function SubExample({
  title,
  titleEn,
  description,
  code,
  language = "tsx",
  children,
  className,
  previewClassName,
  previewCentered = true,
}: SubExampleProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h3 className="text-lg font-semibold mb-2">
        {title}
        {titleEn && ` (${titleEn})`}
      </h3>
      {description && (
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      )}

      {/* Live Preview */}
      <div
        className={cn(
          "p-8 rounded-t-lg border border-border bg-card",
          previewCentered && "flex items-center justify-center",
          previewClassName
        )}
      >
        {children}
      </div>

      {/* Collapsible Code Block */}
      <CodeBlock code={code} language={language} />
    </div>
  );
}
