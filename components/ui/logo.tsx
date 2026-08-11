"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
  color?: string;
  showContainer?: boolean;
  containerClassName?: string;
}

export function Logo({
  className,
  size = 40,
  color = "#24A0ED", // Vibrant cyan-blue matching reference image
  showContainer = false,
  containerClassName,
  ...props
}: LogoProps) {
  const svgContent = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-transform duration-200", className)}
      {...props}
    >
      {/* Layer 1: Top Bar (Ears & Concave Dip) */}
      <path
        d="M 32 30 C 32 30 58 43 100 43 C 142 43 168 30 168 30 C 172 36 172 44 172 56 L 28 56 C 28 44 28 36 32 30 Z"
        fill={color}
      />

      {/* Layer 2: Second Bar (Wide Central Trapezoid Cutout) */}
      <path
        d="M 28 64 L 72 64 L 81 81 L 119 81 L 128 64 L 172 64 L 172 92 L 28 92 Z"
        fill={color}
      />

      {/* Layer 3: Third Bar (Narrow Central Trapezoid Cutout) */}
      <path
        d="M 29 100 L 82 100 L 89 117 L 111 117 L 118 100 L 171 100 L 169 128 L 31 128 Z"
        fill={color}
      />

      {/* Layer 4: Bottom Bar (Shield Base with Bottom Center U-Notch) */}
      <path
        d="M 33 136 L 167 136 C 167 154 150 178 109 178 L 109 164 C 109 157 91 157 91 164 L 91 178 C 50 178 33 154 33 136 Z"
        fill={color}
      />
    </svg>
  );

  if (showContainer) {
    return (
      <div
        className={cn(
          "bg-[#15171C] border border-[#22252D] rounded-2xl flex items-center justify-center p-3 shadow-xl",
          containerClassName
        )}
      >
        {svgContent}
      </div>
    );
  }

  return svgContent;
}

export default Logo;
