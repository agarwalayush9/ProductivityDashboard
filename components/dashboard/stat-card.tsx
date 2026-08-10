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
    <Card className="flex flex-col justify-between hover:border-surface-border/80">
      {/* Icon & Label Row */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-brand-blue/15 flex items-center justify-center text-brand-blue shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-sm font-medium text-text-secondary truncate">
          {label}
        </span>
      </div>

      {/* Main Stat & Delta Row */}
      <div className="space-y-1">
        <div className="text-2xl font-semibold text-text-primary tracking-tight tabular-nums">
          {value}
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <span
            className={cn(
              "tabular-nums",
              isPositive ? "text-status-positive" : "text-status-negative"
            )}
          >
            {formattedDelta}
          </span>
          <span className="text-text-muted">{deltaLabel}</span>
        </div>
      </div>
    </Card>
  );
}
