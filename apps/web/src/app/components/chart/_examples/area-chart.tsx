"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
  { month: "فروردین", desktop: 342, mobile: 245 },
  { month: "اردیبهشت", desktop: 876, mobile: 654 },
  { month: "خرداد", desktop: 512, mobile: 387 },
  { month: "تیر", desktop: 629, mobile: 521 },
  { month: "مرداد", desktop: 458, mobile: 412 },
  { month: "شهریور", desktop: 781, mobile: 598 },
  { month: "مهر", desktop: 394, mobile: 312 },
  { month: "آبان", desktop: 925, mobile: 743 },
  { month: "آذر", desktop: 647, mobile: 489 },
  { month: "دی", desktop: 532, mobile: 476 },
  { month: "بهمن", desktop: 803, mobile: 687 },
  { month: "اسفند", desktop: 271, mobile: 198 },
];

const chartConfig = {
  desktop: {
    label: "دسکتاپ",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "موبایل",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const code = `"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
  Badge, ChartContainer, ChartTooltip, ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui";

const chartConfig = {
  desktop: { label: "دسکتاپ", color: "hsl(var(--chart-1))" },
  mobile: { label: "موبایل", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig;

export function AreaChartExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          نمودار مساحتی
          <Badge variant="outline" className="ms-2">
            <TrendingUp className="h-4 w-4" /><span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>نمایش بازدیدکنندگان ۶ ماه اخیر</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="month" tickLine={false} axisLine={false}
              tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area dataKey="mobile" type="natural" fill="var(--color-mobile)"
              fillOpacity={0.2} stroke="var(--color-mobile)" stackId="a" />
            <Area dataKey="desktop" type="natural" fill="var(--color-desktop)"
              fillOpacity={0.2} stroke="var(--color-desktop)" stackId="a" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}`;

const DottedBackgroundPattern = ({
  config,
}: {
  config: ChartConfig;
}) => {
  const items = Object.fromEntries(
    Object.entries(config).map(([key, value]) => [key, value.color])
  );
  return (
    <>
      {Object.entries(items).map(([key, value]) => (
        <pattern
          key={key}
          id={`dotted-background-pattern-${key}`}
          x="0"
          y="0"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="5" cy="5" r="1.5" fill={value} opacity={0.5} />
        </pattern>
      ))}
    </>
  );
};

export default function AreaChartExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          نمودار مساحتی
          <Badge
            variant="outline"
            className="text-green-500 bg-green-500/10 border-none ms-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>
          نمایش بازدیدکنندگان ۶ ماه اخیر
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <defs>
              <DottedBackgroundPattern config={chartConfig} />
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#dotted-background-pattern-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
              strokeWidth={0.8}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#dotted-background-pattern-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
              strokeWidth={0.8}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
