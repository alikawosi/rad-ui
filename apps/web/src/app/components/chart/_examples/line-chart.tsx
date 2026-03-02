"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
  { month: "فروردین", desktop: 186 },
  { month: "اردیبهشت", desktop: 305 },
  { month: "خرداد", desktop: 237 },
  { month: "تیر", desktop: 73 },
  { month: "مرداد", desktop: 209 },
  { month: "شهریور", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "دسکتاپ",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const code = `"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
  Badge, ChartContainer, ChartTooltip, ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui";

const chartData = [
  { month: "فروردین", desktop: 186 },
  { month: "اردیبهشت", desktop: 305 },
  { month: "خرداد", desktop: 237 },
  { month: "تیر", desktop: 73 },
  { month: "مرداد", desktop: 209 },
  { month: "شهریور", desktop: 214 },
];

const chartConfig = {
  desktop: { label: "دسکتاپ", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig;

export function DottedLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          نمودار خطی نقطه‌چین
          <Badge variant="outline" className="ms-2">
            <TrendingUp className="h-4 w-4" /><span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>فروردین - شهریور ۱۴۰۴</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart accessibilityLayer data={chartData}
            margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false}
              tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line dataKey="desktop" type="linear" stroke="var(--color-desktop)"
              dot={false} strokeDasharray="4 4" />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}`;

export default function LineChartExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          نمودار خطی نقطه‌چین
          <Badge
            variant="outline"
            className="text-green-500 bg-green-500/10 border-none ms-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>فروردین - شهریور ۱۴۰۴</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              dot={false}
              strokeDasharray="4 4"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
