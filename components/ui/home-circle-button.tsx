"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface HomeCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function HomeCircleIcon({
  size = 24,
  className,
  strokeWidth = 2,
  ...props
}: HomeCircleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-colors", className)}
      {...props}
    >
      {/* Outer House / Home Shape */}
      <path
        d="M 12 3.5 L 20.5 10.2 V 19.5 C 20.5 20.33 19.83 21 19 21 H 5 C 4.17 21 3.5 20.33 3.5 19.5 V 10.2 L 12 3.5 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central Inner Circle / Target Dot */}
      <circle
        cx="12"
        cy="13.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export interface HomeCircleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number;
  iconSize?: number;
  active?: boolean;
  className?: string;
  iconClassName?: string;
}

export function HomeCircleButton({
  size = 48,
  iconSize = 22,
  active = false,
  className,
  iconClassName,
  ...props
}: HomeCircleButtonProps) {
  return (
    <button
      type="button"
      style={{ width: size, height: size }}
      className={cn(
        "rounded-full flex items-center justify-center transition-all duration-200 select-none shadow-md",
        "bg-[#1A1C22] border border-[#2A2D36] text-[#8F96A3]",
        "hover:bg-[#22252E] hover:border-[#353945] hover:text-[#E2E8F0] hover:shadow-lg",
        "active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-blue/50",
        active && "bg-[#252833] border-[#3B4050] text-[#F3F4F6] shadow-indigo-500/10",
        className
      )}
      {...props}
    >
      <HomeCircleIcon
        size={iconSize}
        className={cn(active ? "text-[#F3F4F6]" : "text-[#8F96A3]", iconClassName)}
      />
    </button>
  );
}

export default HomeCircleButton;
