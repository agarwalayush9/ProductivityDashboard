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
        "h-screen bg-[#111216] border-r border-[#1E2129] flex flex-col transition-all duration-300 ease-in-out relative select-none z-10",
        isCollapsed ? "w-0 overflow-hidden border-r-0" : "w-[240px] min-w-[240px]"
      )}
    >
      {/* Header */}
      <div className="h-16 px-5 flex items-center justify-between border-b border-[#1E2129]">
        <span className="text-base font-bold tracking-wide text-text-primary">
          SEO
        </span>
        <button
          onClick={onToggleCollapse}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="w-7 h-7 rounded-full bg-[#1F2127] border border-[#2B2E37] flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-[#252830] transition-colors"
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Nav Content with Hidden Scrollbar */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-3 py-4 space-y-6">
        {navConfig.map((section, idx) => (
          <div key={idx} className="space-y-1.5">
            {section.group && (
              <h3 className="px-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                {section.group}
              </h3>
            )}
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-200 block select-none",
                      item.active
                        ? "bg-[#202228] text-white border border-[#2B2E37] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_2px_4px_rgba(0,0,0,0.3)]"
                        : "text-[#8F96A3] hover:text-[#F3F4F6] hover:bg-[#1C1E24]"
                    )}
                  >
                    <span className="truncate">{item.label}</span>
                  </a>
                </li>
              ))}
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
      className="fixed left-[76px] top-4 z-30 w-7 h-7 rounded-full bg-[#1F2127] border border-[#2B2E37] flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-[#252830] transition-all shadow-md"
    >
      <ChevronsRight className="w-4 h-4" />
    </button>
  );
}
