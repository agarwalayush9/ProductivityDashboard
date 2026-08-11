import React from "react";
import { FilterPill } from "@/components/ui/filter-pill";
import { Layers, Calendar } from "lucide-react";

export function TopHeader() {
  return (
    <header className="h-16 px-8 border-b border-[#1E2129] flex items-center justify-between bg-[#13151A] sticky top-0 z-10 select-none">
      {/* Title */}
      <div>
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
