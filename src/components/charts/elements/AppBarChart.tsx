"use client";

import {type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart"
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts";
import {CHART_DATA} from "@/data/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export const AppBarChart = () => {
  return (
    <div className={""}>
      <h1 className={"text-lg font-black mb-6"}>
        Total Revenue
      </h1>

      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={CHART_DATA}>
          <CartesianGrid vertical={true} horizontal={true}/>
          <XAxis
            dataKey="month"
            tickLine={true}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent/>}/>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}/>
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4}/>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
