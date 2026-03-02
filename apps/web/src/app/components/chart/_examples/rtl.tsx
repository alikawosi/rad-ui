"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/web/ui";

const chartData = [
  { month: "فروردین", desktop: 186, mobile: 80 },
  { month: "اردیبهشت", desktop: 305, mobile: 200 },
  { month: "خرداد", desktop: 237, mobile: 120 },
  { month: "تیر", desktop: 73, mobile: 190 },
  { month: "مرداد", desktop: 209, mobile: 130 },
  { month: "شهریور", desktop: 214, mobile: 140 },
];

export const code = `"use client";

import {
  ChartContainer, ChartLegend, ChartLegendContent,
  ChartTooltip, ChartTooltipContent, type ChartConfig,
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function ChartRtl() {
  const dir = "rtl";

  const chartConfig = {
    desktop: { label: "دسکتاپ", color: "hsl(var(--chart-2))" },
    mobile: { label: "موبایل", color: "hsl(var(--chart-1))" },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardContent>
        <div dir={dir}>
          <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false}
                orientation={dir === "rtl" ? "right" : "left"} />
              <XAxis dataKey="month" tickLine={false} tickMargin={10}
                axisLine={false} reversed={dir === "rtl"}
                />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}`;

export default function RtlExample() {
  const [dir, setDir] = React.useState<"rtl" | "ltr">("rtl");

  const chartConfig: ChartConfig = {
    desktop: {
      label: "دسکتاپ",
      color: "hsl(var(--chart-2))",
    },
    mobile: {
      label: "موبایل",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>پشتیبانی RTL</CardTitle>
        <CardDescription>
          تغییر جهت نمودار بین راست‌به‌چپ و چپ‌به‌راست
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setDir("rtl")}
              className={`rounded-md border px-3 py-1.5 text-sm ${
                dir === "rtl"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border"
              }`}
            >
              RTL
            </button>
            <button
              type="button"
              onClick={() => setDir("ltr")}
              className={`rounded-md border px-3 py-1.5 text-sm ${
                dir === "ltr"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border"
              }`}
            >
              LTR
            </button>
          </div>
          <div dir={dir}>
            <ChartContainer
              config={chartConfig}
              className="min-h-[300px] w-full"
            >
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid
                  vertical={false}
                  orientation={dir === "rtl" ? "right" : "left"}
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  reversed={dir === "rtl"}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar
                  dataKey="desktop"
                  fill="var(--color-desktop)"
                  radius={4}
                />
                <Bar
                  dataKey="mobile"
                  fill="var(--color-mobile)"
                  radius={4}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
