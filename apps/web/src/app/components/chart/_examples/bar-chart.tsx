"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/web/ui";

const chartData = [
  { month: "فروردین", desktop: 342 },
  { month: "اردیبهشت", desktop: 876 },
  { month: "خرداد", desktop: 512 },
  { month: "تیر", desktop: 629 },
  { month: "مرداد", desktop: 458 },
  { month: "شهریور", desktop: 781 },
  { month: "مهر", desktop: 394 },
  { month: "آبان", desktop: 925 },
  { month: "آذر", desktop: 647 },
  { month: "دی", desktop: 532 },
  { month: "بهمن", desktop: 803 },
  { month: "اسفند", desktop: 271 },
];

const chartConfig = {
  desktop: {
    label: "دسکتاپ",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const code = `"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis } from "recharts";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
  Badge, ChartContainer, ChartTooltip, ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui";

const chartData = [
  { month: "فروردین", desktop: 342 },
  { month: "اردیبهشت", desktop: 876 },
  { month: "خرداد", desktop: 512 },
  { month: "تیر", desktop: 629 },
  { month: "مرداد", desktop: 458 },
  { month: "شهریور", desktop: 781 },
];

const chartConfig = {
  desktop: { label: "دسکتاپ", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

export function DefaultBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          نمودار میله‌ای
          <Badge variant="outline" className="ms-2">
            <TrendingUp className="h-4 w-4" />
            <span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>فروردین - اسفند ۱۴۰۴</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}`;

const DottedBackgroundPattern = () => {
  return (
    <pattern
      id="default-pattern-dots"
      x="0"
      y="0"
      width="10"
      height="10"
      patternUnits="userSpaceOnUse"
    >
      <circle
        className="dark:text-muted/40 text-muted"
        cx="2"
        cy="2"
        r="1"
        fill="currentColor"
      />
    </pattern>
  );
};

export default function BarChartExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          نمودار میله‌ای
          <Badge
            variant="outline"
            className="text-green-500 bg-green-500/10 border-none ms-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>فروردین - اسفند ۱۴۰۴</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <rect
              x="0"
              y="0"
              width="100%"
              height="85%"
              fill="url(#default-pattern-dots)"
            />
            <defs>
              <DottedBackgroundPattern />
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
