import React, { ComponentType } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FilterPillProps {
  label: string;
  value?: string;
  icon?: ComponentType<{ className?: string }>;
  showChevron?: boolean;
  className?: string;
  onClick?: () => void;
}

export function FilterPill({
  label,
  value,
  icon: Icon,
  showChevron = true,
  className,
  onClick,
}: FilterPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 bg-surface-raised hover:bg-surface-border/50 text-text-secondary hover:text-text-primary border border-surface-border/50 rounded-full px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer select-none",
        className
      )}
    >
      {Icon && <Icon className="w-3.5 h-3.5 text-text-muted" />}
      <span className="text-text-muted">{label}:</span>
      {value && <span className="font-semibold text-text-primary">{value}</span>}
      {showChevron && <ChevronDown className="w-3 h-3 text-text-muted ml-0.5" />}
    </button>
  );
}
