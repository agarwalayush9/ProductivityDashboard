import React from "react";
import { StatCard } from "@/components/dashboard/stat-card";
import { StatCardData } from "@/types/dashboard";

interface StatCardsRowProps {
  stats: StatCardData[];
}

export function StatCardsRow({ stats = [] }: StatCardsRowProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </div>
  );
}
