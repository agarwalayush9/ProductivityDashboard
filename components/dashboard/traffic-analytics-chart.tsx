"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Card } from "@/components/ui/card";
import { FilterPill } from "@/components/ui/filter-pill";
import { Calendar } from "lucide-react";
import { TrafficPoint } from "@/types/dashboard";

interface TrafficAnalyticsChartProps {
  data: TrafficPoint[];
}

// Helper to format values with K suffix if >= 1000
const formatKValue = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

// Custom Top Label for stacked bar total (e.g. 23.9K)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTotalLabel = (props: any) => {
  const { x, y, width, value } = props;
  if (value == null) return null;
  return (
    <text
      x={x + width / 2}
      y={y - 12}
      fill="#D1D5DB"
      textAnchor="middle"
      fontSize={12}
      fontWeight={600}
      className="tabular-nums select-none"
    >
      {formatKValue(value)}
    </text>
  );
};

// Custom Bar Renderer to render all 3 segments exactly on top of each other
// with 20% border radius
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StackedCapsuleBar = (props: any) => {
  const { x, y, width, height, payload } = props;
  if (!height || height <= 0) return null;

  // 20% border radius
  const r = Math.round(width * 0.3);
  const total = payload.organic + payload.direct + payload.paid;
  if (total === 0) return null;

  const organicH = height * (payload.organic / total);
  const directH = height * ((payload.organic + payload.direct) / total);
  const totalH = height;

  const baseY = y + height;

  return (
    <g>
      {/* Pink Bar (Total) */}
      <rect
        x={x}
        y={baseY - totalH}
        width={width}
        height={totalH}
        rx={r}
        ry={r}
        fill="#d84ec8ff"
      />
      {/* Blue Bar (Organic + Direct) */}
      <rect
        x={x}
        y={baseY - directH}
        width={width}
        height={directH}
        rx={r}
        ry={r}
        fill="#4FA2EA"
      />
      {/* Purple Bar (Organic) */}
      <rect
        x={x}
        y={baseY - organicH}
        width={width}
        height={organicH}
        rx={r}
        ry={r}
        fill="url(#hatchPurple)"
      />
    </g>
  );
};

export function TrafficAnalyticsChart({ data }: TrafficAnalyticsChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Compute total height for the single Bar
  const chartData = data.map((item) => ({
    ...item,
    totalHeight: item.organic + item.direct + item.paid,
  }));

  return (
    <Card className="p-6 space-y-6 bg-[#13151A]">
      {/* Card Header matching reference orientation and sizes */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Title */}
        <h2 className="text-base font-bold text-white tracking-wide">
          Traffic analytics
        </h2>

        {/* Center Legend Dot Stack */}
        <div className="flex items-center gap-6 text-sm font-medium text-[#8F96A3]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#4FA2EA] shrink-0" />
            <span>Direct</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#996BE4] shrink-0" />
            <span>Organic search</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E258D3] shrink-0" />
            <span>Paid search</span>
          </div>
        </div>

        {/* Right Date Range Pill */}
        <FilterPill
          icon={Calendar}
          label="Date range"
          value="Last 6 months"
        />
      </div>

      {/* Complete from Base Bar Chart */}
      <div className="h-[320px] w-full mt-2">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              barCategoryGap="18%"
            >
              {/* Dashed Horizontal Background Grid Lines */}
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#22252E"
              />

              {/* SVG Defs for Diagonal Hatch Pattern on Organic (Purple) Series */}
              <defs>
                <pattern
                  id="hatchPurple"
                  patternUnits="userSpaceOnUse"
                  width="10"
                  height="8"
                  patternTransform="rotate(-20)"
                >
                  <rect width="10" height="8" fill="#996BE4" />
                  <line
                    x1="0"
                    y1="0"
                    x2="10"
                    y2="0"
                    stroke="#1A1C24"
                    strokeWidth="6.15"
                  />
                </pattern>
              </defs>

              <Tooltip
                cursor={{ fill: "rgba(255, 255, 255, 0.03)" }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const item = payload[0].payload as TrafficPoint;
                    const total = item.direct + item.organic + item.paid;
                    return (
                      <div className="bg-[#1A1C22] border border-[#2B2E37] p-3 rounded-xl shadow-xl text-xs space-y-1.5 backdrop-blur-md">
                        <div className="font-semibold text-white pb-1 border-b border-[#2B2E37]">
                          {item.date}
                        </div>
                        <div className="flex items-center justify-between gap-4 text-[#4FA2EA]">
                          <span>Direct:</span>
                          <span className="font-semibold tabular-nums">
                            {item.direct}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-[#996BE4]">
                          <span>Organic search:</span>
                          <span className="font-semibold tabular-nums">
                            {item.organic}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-[#E258D3]">
                          <span>Paid search:</span>
                          <span className="font-semibold tabular-nums">
                            {item.paid}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-white pt-1 border-t border-[#2B2E37] font-semibold">
                          <span>Total:</span>
                          <span className="tabular-nums">{total}</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />

              {/* A single Bar component handles rendering all three segments via a custom shape */}
              <Bar
                dataKey="totalHeight"
                shape={<StackedCapsuleBar />}
                label={<CustomTotalLabel />}
              />

              <XAxis dataKey="date" hide />
              <YAxis hide domain={[0, 30000]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full w-full bg-[#1A1C22]/50 animate-pulse rounded-lg" />
        )}
      </div>

      {/* Axis Footer: Start & End Date */}
      <div className="flex items-center justify-between text-xs font-medium text-[#6B7280] pt-1">

        <span>January 1, 2026</span>
        <span>July 1, 2026</span>
      </div>
    </Card>
  );
}
