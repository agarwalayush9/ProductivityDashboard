"use client";

import React, { useState } from "react";
import {
  MousePointerClick,
  Moon,
  Sun,
  LogOut,
  User,
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { CircleIconButton } from "@/components/ui/circle-icon-button";
import { HomeCircleIcon } from "@/components/ui/home-circle-button";
import {
  TargetDartIcon,
  MagicWandSparkleIcon,
  BarChartColumnsIcon,
  MapPinDotIcon,
  DoubleChatBubblesIcon,
  CustomMegaphoneIcon,
} from "@/components/ui/custom-icons";

export function IconRail() {
  const [activeIdx, setActiveIdx] = useState(1); // 2nd item (Target) active by default as per screenshot

  const railIcons = [
    { icon: HomeCircleIcon, label: "Home" },
    { icon: TargetDartIcon, label: "Tracker" },
    { icon: MagicWandSparkleIcon, label: "Magic Tool" },
    { icon: BarChartColumnsIcon, label: "Analytics" },
    { icon: MapPinDotIcon, label: "Local SEO" },
    { icon: DoubleChatBubblesIcon, label: "Feedback" },
    { icon: CustomMegaphoneIcon, label: "Campaigns" },
    { icon: MousePointerClick, label: "PPC" },
  ];

  return (
    <aside className="w-[68px] min-w-[68px] h-screen bg-[#1B1B1D] border-r border-[#20232B] flex flex-col items-center select-none z-20">
      {/* Top Logo Section matching reference image header */}
      <div className="w-full h-16 shrink-0 flex items-center justify-center border-b border-[#20232B] hover:opacity-90 transition-opacity cursor-pointer">
        <Logo size={34} color="#2BB0ED" />
      </div>

      {/* Vertical Icon Stack using exact circular buttons */}
      <nav className="flex flex-col gap-3.5 items-center py-5">
        {railIcons.map((item, idx) => (
          <CircleIconButton
            key={idx}
            icon={item.icon}
            title={item.label}
            size={42}
            iconSize={20}
            active={idx === activeIdx}
            onClick={() => setActiveIdx(idx)}
          />
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto flex flex-col gap-4 items-center py-4 border-t border-[#20232B]">
        <CircleIconButton
          icon={User}
          title="User Profile"
          size={42}
          iconSize={20}
        />
        
        {/* Theme Toggle Pill */}
        <div className="flex flex-col items-center bg-[#17191E] rounded-full p-[3px] border border-[#20232A]">
          {/* Active Moon */}
          <div className="w-[36px] h-[36px] rounded-full bg-[#2A2E35] border border-[#333740] flex items-center justify-center cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            <Moon size={18} color="#FFFFFF" fill="#FFFFFF" strokeWidth={2.5} />
          </div>
          {/* Inactive Sun */}
          <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
            <Sun size={18} color="#6B7280" strokeWidth={2} />
          </div>
        </div>

        <CircleIconButton
          icon={LogOut}
          title="Logout"
          size={42}
          iconSize={20}
          iconClassName="text-[#F03E3E] group-hover:text-[#F03E3E]"
          className="hover:border-[#F03E3E]/30 hover:bg-[#F03E3E]/10"
        />
      </div>
    </aside>
  );
}
