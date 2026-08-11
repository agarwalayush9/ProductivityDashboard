"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CircleIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ElementType;
  children?: React.ReactNode;
  size?: number;
  iconSize?: number;
  active?: boolean;
  className?: string;
  iconClassName?: string;
}

export function CircleIconButton({
  icon: Icon,
  children,
  size = 42,
  iconSize = 20,
  active = false,
  className,
  iconClassName,
  ...props
}: CircleIconButtonProps) {
  return (
    <button
      type="button"
      style={{ width: size, height: size }}
      className={cn(
        "rounded-full flex items-center justify-center transition-all duration-200 select-none",
        "bg-[#1F2127] border border-[#2B2E37] text-[#9399A5]",
        "shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_2px_4px_rgba(0,0,0,0.4)]",
        "hover:bg-[#252830] hover:border-[#373B46] hover:text-[#E2E8F0]",
        "active:scale-95 focus:outline-none",
        active &&
          "bg-[#21242C] border-[#2E333F] text-[#2BB0ED] shadow-[0_0_14px_rgba(43,176,237,0.18)]",
        className
      )}
      {...props}
    >
      {Icon ? (
        <Icon
          style={{ width: iconSize, height: iconSize }}
          className={cn(
            "transition-colors stroke-[1.8]",
            active ? "text-[#2BB0ED]" : "text-[#9399A5] group-hover:text-[#E2E8F0]",
            iconClassName
          )}
        />
      ) : (
        children
      )}
    </button>
  );
}

export interface CircleIconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ElementType;
  children?: React.ReactNode;
  size?: number;
  iconSize?: number;
  active?: boolean;
  className?: string;
  iconClassName?: string;
}

export function CircleIconWrapper({
  icon: Icon,
  children,
  size = 40,
  iconSize = 19,
  active = false,
  className,
  iconClassName,
  ...props
}: CircleIconWrapperProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        "rounded-full flex items-center justify-center select-none transition-all duration-200",
        "bg-[#1F2127] border border-[#2B2E37] text-[#9399A5]",
        "shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_2px_4px_rgba(0,0,0,0.4)]",
        active && "bg-[#21242C] border-[#2E333F] text-[#2BB0ED]",
        className
      )}
      {...props}
    >
      {Icon ? (
        <Icon
          style={{ width: iconSize, height: iconSize }}
          className={cn(
            "transition-colors stroke-[1.8]",
            active ? "text-[#2BB0ED]" : "text-[#9399A5]",
            iconClassName
          )}
        />
      ) : (
        children
      )}
    </div>
  );
}

export default CircleIconButton;
