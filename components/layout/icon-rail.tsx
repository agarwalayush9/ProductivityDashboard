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
    <aside className="w-[68px] min-w-[68px] h-screen bg-[#131417] border-r border-[#20232B] flex flex-col items-center select-none z-20">
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
      <div className="mt-auto flex flex-col gap-3 items-center py-4 border-t border-[#20232B]">
        <CircleIconButton
          icon={User}
          title="User Profile"
          size={38}
          iconSize={18}
        />
        <CircleIconButton
          icon={Moon}
          title="Dark Mode (Active)"
          size={38}
          iconSize={18}
          active
        />
        <CircleIconButton
          icon={Sun}
          title="Light Mode"
          size={38}
          iconSize={18}
        />
        <CircleIconButton
          icon={LogOut}
          title="Logout"
          size={38}
          iconSize={18}
          className="hover:text-status-negative hover:border-status-negative/30 hover:bg-status-negative/10"
        />
      </div>
    </aside>
  );
}
