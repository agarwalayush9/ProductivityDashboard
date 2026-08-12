"use client";

import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  ReferenceLine,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Card } from "@/components/ui/card";
import { FilterPill } from "@/components/ui/filter-pill";
import { Calendar, Globe, BarChart2 } from "lucide-react";
import { SeriesPoint } from "@/types/dashboard";

interface TimeSeriesCardProps {
  title: string;
  data: SeriesPoint[];
  averageValue: number;
  averageFormatted: string;
  startDate: string;
  endDate: string;
  pillType?: "dateRange" | "scope";
  pillValue?: string;
}

// Custom Label component for the Avg badge, highlight column, and reference line
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AverageBadgeLabel = (props: { viewBox?: any; value?: string }) => {
  const { viewBox, value } = props;
  if (!viewBox) return null;
  const { x, y, height } = viewBox;

  return (
    <g>
      {/* Highlight column behind the line */}
      <rect x={x - 45} y={0} width="90" height={height} fill="#FFFFFF" fillOpacity="0.04" />

      {/* Dotted reference line starting below the badge */}
      <line
        x1={x}
        y1={42}
        x2={x}
        y2={height}
        stroke="#D1D5DB"
        strokeDasharray="3 3"
        strokeWidth="1"
      />

      {/* Badge container shifted to be at the top */}
      <g transform={`translate(${x - 45}, 10)`}>
        {/* Pill background */}
        <rect width="90" height="28" rx="14" fill="#202228" stroke="#33353A" strokeWidth="1" />

        {/* Blue chart icon */}
        <rect x="14" y="14" width="3" height="6" rx="1.5" fill="#1CA0F2" />
        <rect x="19" y="10" width="3" height="10" rx="1.5" fill="#1CA0F2" />
        <rect x="24" y="12" width="3" height="8" rx="1.5" fill="#1CA0F2" />

        {/* Text */}
        <text
          x="32"
          y="19"
          fill="#D1D5DB"
          fontSize="11"
          fontWeight="500"
          className="font-sans"
        >
          Avg {value}
        </text>
      </g>

      {/* White downward triangle at the bottom of the pill */}
      <polygon points={`${x - 4},38 ${x + 4},38 ${x},44`} fill="#FFFFFF" />
    </g>
  );
};

export function TimeSeriesCard({
  title,
  data,
  averageValue,
  averageFormatted,
  startDate,
  endDate,
  pillType = "dateRange",
  pillValue = "Last 6 months",
}: TimeSeriesCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Find point closest to averageValue for ReferenceLine positioning
  const refIndex = Math.floor(data.length * 0.4);
  const refPoint = data[refIndex] || data[0];

  return (
    <Card className="p-6 space-y-5 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-text-primary">{title}</h3>
        {pillType === "dateRange" ? (
          <FilterPill icon={Calendar} label="Date range" value={pillValue} />
        ) : (
          <FilterPill icon={Globe} label="Scope" value={pillValue || "Root domain"} />
        )}
      </div>

      {/* Chart */}
      <div className="h-[330px] w-full pt-4">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
            >
              {/* Dashed Horizontal Background Grid Lines */}
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#22252E" />

              <defs>
                <linearGradient id={`gradient-${title.replace(/\s+/g, "")}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1CA0F2" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#1CA0F2" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <Tooltip
                cursor={{ stroke: "#38BDF8", strokeWidth: 1, strokeDasharray: "3 3" }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const item = payload[0].payload as SeriesPoint;
                    return (
                      <div className="bg-surface-panel/95 border border-surface-border px-3 py-2 rounded-lg shadow-xl text-xs space-y-0.5 backdrop-blur-md">
                        <div className="text-text-muted">{item.date}</div>
                        <div className="font-semibold text-brand-blue tabular-nums">
                          {item.value.toLocaleString()}
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />

              {/* Vertical Marker for Average Badge */}
              {refPoint && (
                <ReferenceLine
                  x={refPoint.date}
                  stroke="none"
                  label={<AverageBadgeLabel value={averageFormatted} />}
                />
              )}

              <Area
                type="monotone"
                dataKey="value"
                stroke="#1CA0F2"
                strokeWidth={2.5}
                fillOpacity={1}
                fill={`url(#gradient-${title.replace(/\s+/g, "")})`}
              />

              <XAxis dataKey="date" hide />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full w-full bg-surface-raised/20 animate-pulse rounded-lg" />
        )}
      </div>

      {/* Axis Footer: Start & End Date */}
      <div className="flex items-center justify-between text-xs font-medium text-text-muted pt-1 px-[10px]">
        <span>{startDate}</span>
        <span>{endDate}</span>
      </div>
    </Card>
  );
}
