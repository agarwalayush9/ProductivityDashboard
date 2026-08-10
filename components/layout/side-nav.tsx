"use client";

import React from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { navConfig } from "@/lib/nav-config";
import { cn } from "@/lib/utils";

interface SideNavProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function SideNav({ isCollapsed, onToggleCollapse }: SideNavProps) {
  return (
    <aside
      className={cn(
        "h-screen bg-surface-panel border-r border-surface-border flex flex-col transition-all duration-300 ease-in-out relative select-none z-10",
        isCollapsed ? "w-0 overflow-hidden border-r-0" : "w-[280px] min-w-[280px]"
      )}
    >
      {/* Header */}
      <div className="h-16 px-5 flex items-center justify-between border-b border-surface-border/50">
        <span className="text-base font-bold tracking-wide text-text-primary">
          SEO
        </span>
        <button
          onClick={onToggleCollapse}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="w-7 h-7 rounded-md bg-surface-raised border border-surface-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface border-surface-border transition-colors"
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Nav Content */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navConfig.map((section, idx) => (
          <div key={idx} className="space-y-1">
            {section.group && (
              <h3 className="px-3 text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2">
                {section.group}
              </h3>
            )}
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors group",
                        item.active
                          ? "bg-surface-raised text-text-primary font-semibold border-l-2 border-brand-blue rounded-l-none pl-2.5"
                          : "text-text-secondary hover:text-text-primary hover:bg-surface-raised/60"
                      )}
                    >
                      {Icon && (
                        <Icon
                          className={cn(
                            "w-4 h-4 transition-colors",
                            item.active
                              ? "text-brand-blue"
                              : "text-text-muted group-hover:text-text-secondary"
                          )}
                        />
                      )}
                      <span className="truncate">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

export function SideNavExpandButton({ onExpand }: { onExpand: () => void }) {
  return (
    <button
      onClick={onExpand}
      title="Expand sidebar"
      className="fixed left-[68px] top-4 z-30 w-7 h-7 rounded-md bg-surface-panel border border-surface-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-raised transition-all shadow-md"
    >
      <ChevronsRight className="w-4 h-4" />
    </button>
  );
}
