"use client";

import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  ReferenceLine,
  XAxis,
  Tooltip,
  ResponsiveContainer,
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

// Custom Label component for the Avg badge floating on the reference line
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AverageBadgeLabel = (props: { viewBox?: any; value?: string }) => {
  const { viewBox, value } = props;
  if (!viewBox) return null;
  const { x, y } = viewBox;
  return (
    <g transform={`translate(${x - 44}, ${y - 32})`}>
      <rect
        width="88"
        height="26"
        rx="13"
        fill="#171A21"
        stroke="#22252C"
        strokeWidth="1"
      />
      <text
        x="44"
        y="17"
        fill="#F3F4F6"
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        className="font-sans"
      >
        Avg {value}
      </text>
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
      <div className="h-[200px] w-full pt-4">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 32, right: 10, left: 10, bottom: 0 }}
            >
              <defs>
                <linearGradient id={`gradient-${title.replace(/\s+/g, "")}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#38BDF8" stopOpacity={0.0} />
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
                  stroke="#38BDF8"
                  strokeDasharray="4 4"
                  strokeWidth={1.5}
                  label={<AverageBadgeLabel value={averageFormatted} />}
                />
              )}

              <Area
                type="monotone"
                dataKey="value"
                stroke="#38BDF8"
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
      <div className="flex items-center justify-between text-xs font-medium text-text-muted pt-1 border-t border-surface-border/40">
        <span>{startDate}</span>
        <span>{endDate}</span>
      </div>
    </Card>
  );
}
