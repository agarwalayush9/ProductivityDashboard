"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import { FilterPill } from "@/components/ui/filter-pill";
import { Calendar } from "lucide-react";
import { TrafficPoint } from "@/types/dashboard";

interface TrafficAnalyticsChartProps {
  data: TrafficPoint[];
}

// Custom Top Label for stacked bar total
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTotalLabel = (props: any) => {
  const { x, y, width, payload } = props;
  if (!payload) return null;
  const total = payload.direct + payload.organic + payload.paid;
  return (
    <text
      x={x + width / 2}
      y={y - 8}
      fill="#9CA3AF"
      textAnchor="middle"
      fontSize={10}
      fontWeight={600}
      className="tabular-nums select-none"
    >
      {total.toLocaleString()}
    </text>
  );
};

export function TrafficAnalyticsChart({ data }: TrafficAnalyticsChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Card className="p-6 space-y-6">
      {/* Card Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <h2 className="text-base font-semibold text-text-primary">
            Traffic analytics
          </h2>

          {/* Inline Legend */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
              <span className="text-text-secondary">Direct</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-purple" />
              <span className="text-text-secondary">Organic search</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-pink" />
              <span className="text-text-secondary">Paid search</span>
            </div>
          </div>
        </div>

        {/* Date Range Pill */}
        <FilterPill
          icon={Calendar}
          label="Date range"
          value="Last 6 months"
        />
      </div>

      {/* Stacked Bar Chart */}
      <div className="h-[260px] w-full pt-2">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 24, right: 10, left: 10, bottom: 0 }}
              barCategoryGap="25%"
            >
              {/* SVG Defs for Diagonal Hatch Pattern on Organic series */}
              <defs>
                <pattern
                  id="diagonalHatch"
                  patternUnits="userSpaceOnUse"
                  width="8"
                  height="8"
                  patternTransform="rotate(45)"
                >
                  <rect width="8" height="8" fill="#A855F7" />
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="8"
                    stroke="#8B5CF6"
                    strokeWidth="2.5"
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
                      <div className="bg-surface-panel/95 border border-surface-border p-3 rounded-lg shadow-xl text-xs space-y-1.5 backdrop-blur-md">
                        <div className="font-semibold text-text-primary pb-1 border-b border-surface-border/60">
                          {item.date}
                        </div>
                        <div className="flex items-center justify-between gap-4 text-brand-blue">
                          <span>Direct:</span>
                          <span className="font-semibold tabular-nums">
                            {item.direct}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-brand-purple">
                          <span>Organic search:</span>
                          <span className="font-semibold tabular-nums">
                            {item.organic}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-brand-pink">
                          <span>Paid search:</span>
                          <span className="font-semibold tabular-nums">
                            {item.paid}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-text-primary pt-1 border-t border-surface-border/60 font-semibold">
                          <span>Total:</span>
                          <span className="tabular-nums">{total}</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />

              {/* Bottom Series: Direct (Blue) */}
              <Bar
                dataKey="direct"
                stackId="a"
                fill="#38BDF8"
                radius={[0, 0, 4, 4]}
              />

              {/* Middle Series: Organic Search (Purple Hatch Pattern) */}
              <Bar
                dataKey="organic"
                stackId="a"
                fill="url(#diagonalHatch)"
              />

              {/* Top Series: Paid Search (Pink) with Total Stack Label */}
              <Bar
                dataKey="paid"
                stackId="a"
                fill="#EC4899"
                radius={[4, 4, 0, 0]}
                label={<CustomTotalLabel />}
              />

              <XAxis dataKey="date" hide />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full w-full bg-surface-raised/20 animate-pulse rounded-lg" />
        )}
      </div>

      {/* Axis Footer: Start & End Date */}
      <div className="flex items-center justify-between text-xs font-medium text-text-muted pt-1 border-t border-surface-border/40">
        <span>January 1, 2026</span>
        <span>July 1, 2026</span>
      </div>
    </Card>
  );
}
