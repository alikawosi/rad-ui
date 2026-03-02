"use client";

import { InstallCodeBlock } from "@/components/docs/code-block";
import {
  ComponentExample,
  ComponentExampleGroup,
  SubExample,
} from "@/components/docs/component-example";
import {
  ApiReferenceSection,
  PropsTable,
  type PropDefinition,
} from "@/components/docs/props-table";

import BarChartExample, { code as barChartCode } from "./_examples/bar-chart";
import GradientBarChartExample, {
  code as gradientBarChartCode,
} from "./_examples/gradient-bar-chart";
import AreaChartExample, {
  code as areaChartCode,
} from "./_examples/area-chart";
import LineChartExample, {
  code as lineChartCode,
} from "./_examples/line-chart";
import PieChartExample, { code as pieChartCode } from "./_examples/pie-chart";
import RadarChartExample, {
  code as radarChartCode,
} from "./_examples/radar-chart";
import RtlExample, { code as rtlCode } from "./_examples/rtl";
import UsageExample, { code as usageCode } from "./_examples/usage";

const chartContainerProps: PropDefinition[] = [
  {
    name: "config",
    type: "ChartConfig",
    defaultValue: "-",
    description: "پیکربندی نمودار شامل برچسب‌ها و رنگ‌ها",
  },
  {
    name: "id",
    type: "string",
    defaultValue: "auto",
    description: "شناسه یکتا برای اسکوپ CSS متغیرها",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const chartTooltipContentProps: PropDefinition[] = [
  {
    name: "labelKey",
    type: "string",
    defaultValue: "-",
    description: "کلید داده برای برچسب",
  },
  {
    name: "nameKey",
    type: "string",
    defaultValue: "-",
    description: "کلید داده برای نام",
  },
  {
    name: "indicator",
    type: '"dot" | "line" | "dashed"',
    defaultValue: '"dot"',
    description: "نوع نشانگر",
  },
  {
    name: "hideLabel",
    type: "boolean",
    defaultValue: "false",
    description: "مخفی کردن برچسب",
  },
  {
    name: "hideIndicator",
    type: "boolean",
    defaultValue: "false",
    description: "مخفی کردن نشانگر",
  },
  {
    name: "formatter",
    type: "function",
    defaultValue: "-",
    description: "تابع فرمت‌دهنده سفارشی برای محتوای تولتیپ",
  },
];

const chartLegendContentProps: PropDefinition[] = [
  {
    name: "nameKey",
    type: "string",
    defaultValue: "-",
    description: "کلید داده برای نام",
  },
  {
    name: "hideIcon",
    type: "boolean",
    defaultValue: "false",
    description: "مخفی کردن آیکون راهنما",
  },
];

export default function ChartPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">نمودار (Chart)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت‌های نمودار با استفاده از Recharts v3 برای نمایش داده‌ها
          همراه با تولتیپ، راهنما، و پترن‌های پیشرفته
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add chart" />
      </section>

      {/* Bar Charts */}
      <ComponentExampleGroup
        title="نمودارهای میله‌ای"
        titleEn="Bar Charts"
      >
        <SubExample
          title="نمودار میله‌ای پیش‌فرض"
          titleEn="Default Bar Chart"
          description="نمودار میله‌ای ساده با پس‌زمینه نقطه‌ای و تولتیپ."
          code={barChartCode}
        >
          <BarChartExample />
        </SubExample>
        <SubExample
          title="نمودار میله‌ای گرادیان"
          titleEn="Gradient Bar Chart"
          description="نمودار میله‌ای با افکت گرادیان برای ظاهر مدرن."
          code={gradientBarChartCode}
        >
          <GradientBarChartExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* Area Charts */}
      <ComponentExample
        title="نمودار مساحتی"
        titleEn="Area Chart"
        description="نمودار مساحتی با پترن نقطه‌ای و دو سری داده."
        code={areaChartCode}
      >
        <AreaChartExample />
      </ComponentExample>

      {/* Line Charts */}
      <ComponentExample
        title="نمودار خطی"
        titleEn="Line Chart"
        description="نمودار خطی نقطه‌چین برای نمایش روند داده‌ها."
        code={lineChartCode}
      >
        <LineChartExample />
      </ComponentExample>

      {/* Pie Charts */}
      <ComponentExample
        title="نمودار دایره‌ای"
        titleEn="Pie Chart"
        description="نمودار دایره‌ای با گوشه‌های گرد و برچسب داخلی."
        code={pieChartCode}
      >
        <PieChartExample />
      </ComponentExample>

      {/* Radar Charts */}
      <ComponentExample
        title="نمودار رادار"
        titleEn="Radar Chart"
        description="نمودار رادار برای نمایش داده‌های چندبعدی."
        code={radarChartCode}
      >
        <RadarChartExample />
      </ComponentExample>

      {/* RTL Support */}
      <ComponentExample
        title="پشتیبانی RTL"
        titleEn="RTL Support"
        description="نمودار با پشتیبانی کامل از جهت راست به چپ."
        code={rtlCode}
      >
        <RtlExample />
      </ComponentExample>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="ChartContainer"
          description="کانتینر اصلی نمودار که ResponsiveContainer را می‌پوشاند و متغیرهای CSS برای رنگ‌ها را از طریق ChartStyle تزریق می‌کند."
          props={chartContainerProps}
        />
        <PropsTable
          title="ChartTooltipContent"
          description="محتوای سفارشی برای تولتیپ نمودار با پشتیبانی از فرمت‌دهنده سفارشی."
          props={chartTooltipContentProps}
        />
        <PropsTable
          title="ChartLegendContent"
          description="محتوای سفارشی برای راهنمای نمودار."
          props={chartLegendContentProps}
        />
      </ApiReferenceSection>

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              لایه دسترسی (Accessibility Layer)
            </h3>
            <p>
              با استفاده از پراپ{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                accessibilityLayer
              </code>{" "}
              در نمودارهای Recharts، دسترسی با کیبورد و پشتیبانی خواننده صفحه
              فعال می‌شود.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پشتیبانی از RTL
            </h3>
            <p>
              برای نمودارهای RTL، از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                orientation=&quot;right&quot;
              </code>{" "}
              در CartesianGrid و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                reversed
              </code>{" "}
              در XAxis استفاده کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">ارتفاع نمودار</h3>
            <p className="text-muted-foreground">
              همیشه از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                min-h-[VALUE]
              </code>{" "}
              در ChartContainer استفاده کنید تا نمودار به درستی ریسپانسیو شود.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">ChartConfig</h3>
            <p className="text-muted-foreground">
              ChartConfig از داده جدا است و رنگ‌ها و برچسب‌ها را تعریف می‌کند.
              برای استفاده از رنگ‌های تم، از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                hsl(var(--chart-N))
              </code>{" "}
              یا{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                var(--color-KEY)
              </code>{" "}
              استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">ChartStyle و تم‌ها</h3>
            <p className="text-muted-foreground">
              کامپوننت ChartStyle به صورت خودکار متغیرهای CSS را بر اساس
              ChartConfig تزریق می‌کند و از تم‌های روشن و تاریک پشتیبانی
              می‌نماید.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <ComponentExample
        title="نحوه استفاده"
        titleEn="Usage"
        description="نمونه کامل از نحوه ایمپورت و استفاده از کامپوننت نمودار."
        code={usageCode}
      >
        <UsageExample />
      </ComponentExample>
    </div>
  );
}
