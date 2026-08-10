import React from "react";
import { FilterPill } from "@/components/ui/filter-pill";
import { Globe, Calendar } from "lucide-react";

export function TopHeader() {
  return (
    <header className="h-16 px-8 border-b border-surface-border flex items-center justify-between bg-surface-panel/40 backdrop-blur-sm sticky top-0 z-10">
      {/* Title */}
      <div>
        <h1 className="text-xl font-semibold text-text-primary">Dashboard</h1>
      </div>

      {/* Filter Pills */}
      <div className="flex items-center gap-3">
        <FilterPill
          icon={Globe}
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
