"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

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
  { month: "تیر", desktop: 273 },
  { month: "مرداد", desktop: 209 },
  { month: "شهریور", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "دسکتاپ",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const code = `"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
  Badge, ChartContainer, ChartTooltip, ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui";

const chartData = [
  { month: "فروردین", desktop: 186 },
  { month: "اردیبهشت", desktop: 305 },
  { month: "خرداد", desktop: 237 },
  { month: "تیر", desktop: 273 },
  { month: "مرداد", desktop: 209 },
  { month: "شهریور", desktop: 214 },
];

const chartConfig = {
  desktop: { label: "دسکتاپ", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

export function StrokeRadarChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>
          نمودار رادار
          <Badge variant="outline" className="ms-2">
            <TrendingUp className="h-4 w-4" /><span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>نمایش بازدیدکنندگان ۶ ماه اخیر</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid strokeDasharray="3 3" />
            <Radar stroke="var(--color-desktop)" dataKey="desktop"
              fill="var(--color-desktop)" fillOpacity={0.1} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}`;

export default function RadarChartExample() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>
          نمودار رادار
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
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid strokeDasharray="3 3" />
            <Radar
              stroke="var(--color-desktop)"
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.1}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
