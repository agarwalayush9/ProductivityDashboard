"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

// 1. Target Bullseye with Dart (Tracker)
export function TargetDartIcon({
  size = 24,
  className,
  strokeWidth = 2,
  ...props
}: CustomIconProps) {
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
      {/* Outer Target Ring Arc */}
      <path
        d="M 12 4.5 C 7.86 4.5 4.5 7.86 4.5 12 C 4.5 16.14 7.86 19.5 12 19.5 C 16.14 19.5 19.5 16.14 19.5 12"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Inner Bullseye Circle */}
      <circle
        cx="12"
        cy="12"
        r="3.8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      {/* Dart Line entering Bullseye */}
      <path
        d="M 20.5 3.5 L 14.2 9.8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Dart Fletching / Wings */}
      <path
        d="M 17.5 3.5 L 20.5 3.5 V 6.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 2. Magic Wand with Sparkles (Magic Tool)
export function MagicWandSparkleIcon({
  size = 24,
  className,
  strokeWidth = 2,
  ...props
}: CustomIconProps) {
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
      {/* Diagonal Wand Body */}
      <rect
        x="4.5"
        y="14"
        width="4"
        height="11"
        rx="1.5"
        transform="rotate(-45 4.5 14)"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {/* Top Tip Divider Line */}
      <path
        d="M 10.5 8.5 L 15.5 13.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Radiating Sparkles at Tip */}
      <path
        d="M 16 3 V 5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M 21 8 H 19"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M 19.5 4.5 L 18 6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M 19.5 11.5 L 18 10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

// 3. Dual Vertical Bar Columns (Analytics)
export function BarChartColumnsIcon({
  size = 24,
  className,
  strokeWidth = 2,
  ...props
}: CustomIconProps) {
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
      {/* Left Taller Bar */}
      <rect
        x="5"
        y="5"
        width="6"
        height="15"
        rx="1.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {/* Right Shorter Bar */}
      <rect
        x="13"
        y="10"
        width="6"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 4. Map Pin with Inner Circle Dot (Local SEO)
export function MapPinDotIcon({
  size = 24,
  className,
  strokeWidth = 2,
  ...props
}: CustomIconProps) {
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
      <path
        d="M 12 21 C 12 21 19 14.8 19 9.5 C 19 5.63 15.87 2.5 12 2.5 C 8.13 2.5 5 5.63 5 9.5 C 5 14.8 12 21 12 21 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

// 5. Overlapping Dual Speech / Chat Bubbles (Feedback)
export function DoubleChatBubblesIcon({
  size = 24,
  className,
  strokeWidth = 2,
  ...props
}: CustomIconProps) {
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
      {/* Back / Larger Bubble (Top Right) */}
      <path
        d="M 14 3.5 C 17.59 3.5 20.5 6.41 20.5 10 C 20.5 11.96 19.64 13.72 18.27 14.92 L 18.8 18.2 L 15.65 16.95 C 15.12 17.18 14.57 17.3 14 17.3 C 13.43 17.3 12.88 17.18 12.35 16.95"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Front / Smaller Bubble (Bottom Left) */}
      <path
        d="M 9.5 8.5 C 6.46 8.5 4 10.96 4 14 C 4 15.35 4.49 16.58 5.3 17.54 L 4.5 20.5 L 7.6 19.6 C 8.2 19.86 8.84 20 9.5 20 C 12.54 20 15 17.54 15 14 C 15 10.96 12.54 8.5 9.5 8.5 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 6. Megaphone / Loudspeaker angled right (Campaigns)
export function CustomMegaphoneIcon({
  size = 24,
  className,
  strokeWidth = 2,
  ...props
}: CustomIconProps) {
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
      {/* Megaphone Cone Body */}
      <path
        d="M 11.5 6 L 17 3.5 V 15.5 L 11.5 13 H 8.5 L 8 18.5 H 5.5 L 6.5 13 H 5.5 C 4.67 13 4 12.33 4 11.5 V 7.5 C 4 6.67 4.67 6 5.5 6 H 11.5 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sound Output Ring at Cone Opening */}
      <path
        d="M 19 6.5 C 20.2 8.1 20.2 10.9 19 12.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
