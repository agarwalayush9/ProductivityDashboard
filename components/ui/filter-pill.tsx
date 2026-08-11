import React, { ComponentType } from "react";
import { cn } from "@/lib/utils";

export interface FilterPillProps {
  label: string;
  value?: string;
  icon?: ComponentType<{ className?: string }>;
  className?: string;
  onClick?: () => void;
}

export function FilterPill({
  label,
  value,
  icon: Icon,
  className,
  onClick,
}: FilterPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 bg-[#202228] border border-[#2B2E37] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_2px_4px_rgba(0,0,0,0.3)] hover:bg-[#252830] text-[#8F96A3] rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer select-none",
        className
      )}
    >
      {Icon && <Icon className="w-4 h-4 text-[#8F96A3] stroke-[1.8]" />}
      <span className="text-[#8F96A3]">{label}:</span>
      {value && <span className="font-medium text-white">{value}</span>}
    </button>
  );
}
