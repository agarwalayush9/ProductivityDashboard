"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Target,
  Wand2,
  BarChart2,
  MapPin,
  MessageSquare,
  Megaphone,
  MousePointerClick,
  Moon,
  Sun,
  LogOut,
  User,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function IconRail() {
  const [activeIdx, setActiveIdx] = useState(1); // 2nd icon highlighted by default as per reference spec

  const railIcons = [
    { icon: LayoutDashboard, label: "Overview" },
    { icon: Target, label: "Tracker" },
    { icon: Wand2, label: "Magic Tool" },
    { icon: BarChart2, label: "Analytics" },
    { icon: MapPin, label: "Local SEO" },
    { icon: MessageSquare, label: "Feedback" },
    { icon: Megaphone, label: "Campaigns" },
    { icon: MousePointerClick, label: "PPC" },
  ];

  return (
    <aside className="w-[64px] min-w-[64px] h-screen bg-surface-panel border-r border-surface-border flex flex-col items-center py-4 z-20 select-none">
      {/* Top Logo */}
      <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-surface shadow-lg shadow-brand-blue/20 mb-6 cursor-pointer hover:opacity-90 transition-opacity">
        <Activity className="w-6 h-6 stroke-[2.5]" />
      </div>

      {/* Middle Icon Stack */}
      <nav className="flex flex-col gap-3 items-center">
        {railIcons.map((item, idx) => {
          const Icon = item.icon;
          const isActive = idx === activeIdx;
          return (
            <button
              key={idx}
              title={item.label}
              onClick={() => setActiveIdx(idx)}
              className={cn(
                "w-9 h-9 rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-raised transition-all",
                isActive &&
                  "bg-brand-blue/15 text-brand-blue font-semibold hover:bg-brand-blue/20 hover:text-brand-blue"
              )}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto flex flex-col gap-3 items-center pt-4 border-t border-surface-border/50">
        <button
          title="User Profile"
          className="w-9 h-9 rounded-full bg-surface-raised flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors border border-surface-border"
        >
          <User className="w-4 h-4" />
        </button>
        <button
          title="Dark Mode (Active)"
          className="w-9 h-9 rounded-lg flex items-center justify-center bg-surface-raised text-text-primary transition-colors"
        >
          <Moon className="w-5 h-5 text-brand-blue" />
        </button>
        <button
          title="Light Mode"
          className="w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-text-secondary transition-colors"
        >
          <Sun className="w-5 h-5" />
        </button>
        <button
          title="Logout"
          className="w-9 h-9 rounded-lg flex items-center justify-center text-status-negative/70 hover:text-status-negative hover:bg-status-negative/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
}
