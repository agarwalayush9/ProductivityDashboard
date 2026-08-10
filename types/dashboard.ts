import { ComponentType } from "react";

export interface StatCardData {
  id: string;
  label: string;
  value: string;
  deltaPercent: number; // signed percentage e.g. -18.6 or 11.2
  deltaLabel: string;   // e.g. "vs. previous 30 days"
  icon: ComponentType<{ className?: string }>;
}

export interface TrafficPoint {
  date: string;
  direct: number;
  organic: number;
  paid: number;
}

export interface SeriesPoint {
  date: string;
  value: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: ComponentType<{ className?: string }>;
  active?: boolean;
  badge?: string;
}

export interface NavGroup {
  group: string | null;
  items: NavItem[];
}
