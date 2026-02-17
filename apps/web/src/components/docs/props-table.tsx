"use client";

import * as React from "react";
import { cn } from "@/registry/web/lib/utils";

export interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
}

interface PropsTableProps {
  title: string;
  description?: string;
  props: PropDefinition[];
  className?: string;
}

/**
 * API Reference table for component props.
 * Displays prop name, type, default value, and description.
 */
export function PropsTable({
  title,
  description,
  props,
  className,
}: PropsTableProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {description && (
        <p className="text-muted-foreground mb-4">{description}</p>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
              <th className="text-right p-4 font-semibold">نوع (Type)</th>
              <th className="text-right p-4 font-semibold">
                پیش‌فرض (Default)
              </th>
              <th className="text-right p-4 font-semibold">
                توضیحات (Description)
              </th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, index) => (
              <tr
                key={prop.name}
                className={
                  index < props.length - 1 ? "border-b border-border" : ""
                }
              >
                <td className="p-4" dir="ltr">
                  <code>{prop.name}</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>{prop.type}</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>{prop.defaultValue ?? "-"}</code>
                </td>
                <td className="p-4">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface ApiReferenceSectionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wrapper section for API Reference with proper heading.
 */
export function ApiReferenceSection({
  children,
  className,
}: ApiReferenceSectionProps) {
  return (
    <section className={cn("mb-16", className)}>
      <h2 className="text-2xl font-semibold mb-6">مرجع API (API Reference)</h2>
      {children}
    </section>
  );
}
