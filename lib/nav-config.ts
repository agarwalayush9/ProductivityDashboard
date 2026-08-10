import {
  LayoutDashboard,
  FileSearch,
  Crosshair,
  Globe,
  TrendingUp,
  FileText,
  GitCompare,
  Layers,
  Link2,
  KeyRound,
  Wand2,
  Sparkles,
  Edit3,
  Search,
  FileSpreadsheet,
  Link,
  ShieldCheck,
  Radio,
  Zap,
} from "lucide-react";
import { NavGroup } from "@/types/dashboard";

export const navConfig: NavGroup[] = [
  {
    group: null,
    items: [
      { label: "Dashboard", href: "#", icon: LayoutDashboard, active: true },
      { label: "Site audit", href: "#", icon: FileSearch },
      { label: "Position tracking", href: "#", icon: Crosshair },
    ],
  },
  {
    group: "Competitive analysis",
    items: [
      { label: "Domain overview", href: "#", icon: Globe },
      { label: "Organic rankings", href: "#", icon: TrendingUp },
      { label: "Top pages", href: "#", icon: FileText },
      { label: "Compare domains", href: "#", icon: GitCompare },
      { label: "Keyword gaps", href: "#", icon: Layers },
      { label: "Backlink gaps", href: "#", icon: Link2 },
    ],
  },
  {
    group: "Keyword research",
    items: [
      { label: "Keyword overview", href: "#", icon: KeyRound },
      { label: "Keyword magic tool", href: "#", icon: Wand2 },
      { label: "Keyword strategy builder", href: "#", icon: Sparkles },
    ],
  },
  {
    group: "Content ideas",
    items: [
      { label: "SEO writing assistant", href: "#", icon: Edit3 },
      { label: "Topic research", href: "#", icon: Search },
      { label: "SEO content template", href: "#", icon: FileSpreadsheet },
    ],
  },
  {
    group: "Link building",
    items: [
      { label: "Backlinks", href: "#", icon: Link },
      { label: "Referring domains", href: "#", icon: Globe },
      { label: "Backlink audit", href: "#", icon: ShieldCheck },
    ],
  },
  {
    group: "Extras",
    items: [
      { label: "Sensor", href: "#", icon: Radio },
      { label: "SEOquake", href: "#", icon: Zap },
    ],
  },
];
