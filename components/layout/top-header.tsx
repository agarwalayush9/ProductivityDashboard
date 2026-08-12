import React from "react";
import { FilterPill } from "@/components/ui/filter-pill";
import { Layers, Calendar, ChevronsRight } from "lucide-react";

interface TopHeaderProps {
  isSidebarCollapsed?: boolean;
  onExpand?: () => void;
}

export function TopHeader({ isSidebarCollapsed, onExpand }: TopHeaderProps) {
  return (
    <header className="h-16 shrink-0 px-4 border-b border-[#1E2129] flex items-center justify-between bg-[#13151A] sticky top-0 z-10 select-none">
      {/* Title */}
      <div className="flex items-center gap-3">
        {isSidebarCollapsed && (
          <button
            onClick={onExpand}
            title="Expand sidebar"
            className="w-7 h-7 rounded-full bg-[#1F2127] border border-[#2B2E37] flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-[#252830] transition-all shadow-md"
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        )}
        <h1 className="text-base font-bold tracking-wide text-text-primary">Dashboard</h1>
      </div>

      {/* Filter Pills */}
      <div className="flex items-center gap-3">
        <FilterPill
          icon={Layers}
          label="Scope"
          value="Root domain"
        />
        <FilterPill
          icon={Calendar}
          label="Historical data"
          value="March 2026"
        />
      </div>
    </header>
  );
}
