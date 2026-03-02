"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

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
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "بازدیدکننده",
  },
  chrome: {
    label: "کروم",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "سافاری",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "فایرفاکس",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "اج",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "سایر",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const code = `"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
  Badge, ChartContainer, ChartTooltip, ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: { label: "بازدیدکننده" },
  chrome: { label: "کروم", color: "hsl(var(--chart-1))" },
  safari: { label: "سافاری", color: "hsl(var(--chart-2))" },
  firefox: { label: "فایرفاکس", color: "hsl(var(--chart-3))" },
  edge: { label: "اج", color: "hsl(var(--chart-4))" },
  other: { label: "سایر", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig;

export function RoundedPieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          نمودار دایره‌ای
          <Badge variant="outline" className="ms-2">
            <TrendingUp className="h-4 w-4" /><span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>فروردین - شهریور ۱۴۰۴</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="visitors" hideLabel />} />
            <Pie data={chartData} innerRadius={30} dataKey="visitors"
              cornerRadius={8} paddingAngle={4}>
              <LabelList dataKey="visitors" stroke="none" fontSize={12}
                fontWeight={500} fill="currentColor" />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}`;

export default function PieChartExample() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          نمودار دایره‌ای
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
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent nameKey="visitors" hideLabel />
              }
            />
            <Pie
              data={chartData}
              innerRadius={30}
              dataKey="visitors"
              cornerRadius={8}
              paddingAngle={4}
            >
              <LabelList
                dataKey="visitors"
                stroke="none"
                fontSize={12}
                fontWeight={500}
                fill="currentColor"
                formatter={(value) => `${value}`}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
