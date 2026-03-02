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

const chartConfig = {
  desktop: { label: "دسکتاپ", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

const CustomGradientBar = (props) => {
  const { fill, x, y, width, height, dataKey } = props;
  return (
    <>
      <rect x={x} y={y} width={width} height={height} stroke="none"
        fill={\`url(#gradient-bar-\${dataKey})\`} />
      <rect x={x} y={y} width={width} height={2} stroke="none" fill={fill} />
      <defs>
        <linearGradient id={\`gradient-bar-\${dataKey}\`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fill} stopOpacity={0.5} />
          <stop offset="100%" stopColor={fill} stopOpacity={0} />
        </linearGradient>
      </defs>
    </>
  );
};

export function GradientBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          نمودار گرادیان
          <Badge variant="outline" className="ms-2">
            <TrendingUp className="h-4 w-4" /><span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>فروردین - اسفند ۱۴۰۴</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar shape={<CustomGradientBar />} dataKey="desktop"
              fill="var(--color-desktop)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}`;

const CustomGradientBar = (
  props: React.SVGProps<SVGRectElement> & { dataKey?: string }
) => {
  const { fill, x, y, width, height, dataKey } = props;

  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        stroke="none"
        fill={`url(#gradient-bar-pattern-${dataKey})`}
      />
      <rect x={x} y={y} width={width} height={2} stroke="none" fill={fill} />
      <defs>
        <linearGradient
          id={`gradient-bar-pattern-${dataKey}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor={fill} stopOpacity={0.5} />
          <stop offset="100%" stopColor={fill} stopOpacity={0} />
        </linearGradient>
      </defs>
    </>
  );
};

export default function GradientBarChartExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          نمودار گرادیان
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
            <Bar
              shape={<CustomGradientBar />}
              dataKey="desktop"
              fill="var(--color-desktop)"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
