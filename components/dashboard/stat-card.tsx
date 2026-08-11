import React from "react";
import { Card } from "@/components/ui/card";
import { StatCardData } from "@/types/dashboard";
import { cn } from "@/lib/utils";
import { CircleIconWrapper } from "@/components/ui/circle-icon-button";

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
    <Card className="flex flex-col justify-between h-full">
      {/* Icon & Label Row */}
      <div className="flex items-center gap-3 mb-4">
        <CircleIconWrapper size={34} iconSize={17} active>
          <Icon className="w-4 h-4 text-[#2BB0ED]" />
        </CircleIconWrapper>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] truncate">
          {label}
        </span>
      </div>

      {/* Main Stat & Delta Row */}
      <div className="space-y-1">
        <div className="text-2xl font-bold text-white tracking-tight tabular-nums">
          {value}
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <span
            className={cn(
              "tabular-nums font-semibold",
              isPositive ? "text-status-positive" : "text-status-negative"
            )}
          >
            {formattedDelta}
          </span>
          <span className="text-[#6B7280]">{deltaLabel}</span>
        </div>
      </div>
    </Card>
  );
}
