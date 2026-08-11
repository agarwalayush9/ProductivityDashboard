import React, { ComponentType } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CircleIconWrapper } from "@/components/ui/circle-icon-button";

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
        "inline-flex items-center gap-2.5 bg-surface-raised hover:bg-surface-border/50 text-text-secondary hover:text-text-primary border border-surface-border/50 rounded-full pl-1.5 pr-3.5 py-1 text-xs font-medium transition-colors cursor-pointer select-none",
        className
      )}
    >
      {Icon && (
        <CircleIconWrapper
          icon={Icon as React.ElementType}
          size={24}
          iconSize={12}
        />
      )}
      <span className="text-text-muted">{label}:</span>
      {value && <span className="font-semibold text-text-primary">{value}</span>}
      {showChevron && <ChevronDown className="w-3 h-3 text-text-muted ml-0.5" />}
    </button>
  );
}
