import React from "react";
import { Card } from "@/components/ui/card";
import { StatCardData } from "@/types/dashboard";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  deltaPercent,
  deltaLabel,
  icon: Icon,
}: StatCardData) {
  const isPositive = deltaPercent >= 0;
  const formattedDelta = `${isPositive ? "+" : ""}${deltaPercent}%`;

  return (
    <Card className="flex flex-col justify-between h-full p-5 bg-[#13151A]">
      {/* Top Row: Solid Blue Circle Icon + Label & Value */}
      <div className="flex items-center gap-3.5 mb-4">
        {/* Solid Vibrant Blue Circle */}
        <div className="w-11 h-11 rounded-full bg-[#1CA0F2] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#1CA0F2]/20">
          <Icon className="w-5 h-5 text-white fill-white/20 stroke-[2]" />
        </div>

        {/* Label and Metric Value Stacked */}
        <div className="min-w-0 flex-1">
          <div className="text-xs font-normal text-[#9CA3AF] truncate">
            {label}
          </div>
          <div className="text-xl font-bold text-white tracking-tight tabular-nums mt-0.5">
            {value}
          </div>
        </div>
      </div>

      {/* Bottom Row: Delta Percentage & Time Frame Label */}
      <div className="flex items-center gap-1.5 text-xs font-medium pt-1">
        <span
          className={cn(
            "tabular-nums font-semibold",
            isPositive ? "text-[#34D399]" : "text-[#F87171]"
          )}
        >
          {formattedDelta}
        </span>
        <span className="text-[#6B7280]">{deltaLabel}</span>
      </div>
    </Card>
  );
}
