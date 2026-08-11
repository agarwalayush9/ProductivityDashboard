import { Monitor, User, Clock, MousePointerClick } from "lucide-react";
import { StatCardData, TrafficPoint, SeriesPoint } from "@/types/dashboard";

export const statCardsData: StatCardData[] = [
  {
    id: "visits",
    label: "Visits",
    value: "1.85M",
    deltaPercent: -18.6,
    deltaLabel: "vs. previous 30 days",
    icon: Monitor,
  },
  {
    id: "unique-visitors",
    label: "Unique visitors",
    value: "738.2K",
    deltaPercent: 11.2,
    deltaLabel: "vs. previous 30 days",
    icon: User,
  },
  {
    id: "avg-visit-duration",
    label: "Avg. visit duration",
    value: "00:17:23",
    deltaPercent: 9.22,
    deltaLabel: "vs. previous 30 days",
    icon: Clock,
  },
  {
    id: "bounce-rate",
    label: "Bounce rate",
    value: "1,842",
    deltaPercent: -2.83,
    deltaLabel: "vs. previous 30 days",
    icon: MousePointerClick,
  },
];

// ~13 points representing bi-weekly intervals from Jan 1, 2026 to Jul 1, 2026
export const trafficAnalyticsData: TrafficPoint[] = [
  { date: "Jan 1", organic: 10500, direct: 3000, paid: 10400 },
  { date: "Jan 12", organic: 6200, direct: 1500, paid: 4700 },
  { date: "Jan 24", organic: 3300, direct: 1500, paid: 3500 },
  { date: "Feb 4", organic: 7300, direct: 2000, paid: 5000 },
  { date: "Feb 16", organic: 6000, direct: 2000, paid: 4100 },
  { date: "Feb 28", organic: 10000, direct: 5400, paid: 7000 },
  { date: "Mar 11", organic: 13000, direct: 5000, paid: 7100 },
  { date: "Mar 23", organic: 4000, direct: 3500, paid: 7000 },
  { date: "Apr 4", organic: 12000, direct: 3800, paid: 9000 },
  { date: "Apr 16", organic: 5000, direct: 3400, paid: 4000 },
  { date: "Apr 28", organic: 8900, direct: 3000, paid: 6000 },
  { date: "May 10", organic: 5500, direct: 2500, paid: 4500 },
  { date: "May 22", organic: 7300, direct: 2000, paid: 5000 },
  { date: "Jun 3", organic: 14100, direct: 2000, paid: 8000 },
  { date: "Jun 15", organic: 6200, direct: 3500, paid: 4500 },
  { date: "Jun 27", organic: 6000, direct: 1500, paid: 4700 },
];

export const organicRankingsData: {
  points: SeriesPoint[];
  averageValue: number;
  averageFormatted: string;
  startDate: string;
  endDate: string;
} = {
  averageValue: 7134,
  averageFormatted: "7,134",
  startDate: "January 1, 2026",
  endDate: "July 1, 2026",
  points: [
    { date: "Jan 1", value: 4200 },
    { date: "Jan 8", value: 4500 },
    { date: "Jan 15", value: 5100 },
    { date: "Jan 22", value: 4900 },
    { date: "Feb 1", value: 5800 },
    { date: "Feb 8", value: 6200 },
    { date: "Feb 15", value: 6700 },
    { date: "Feb 22", value: 6400 },
    { date: "Mar 1", value: 7100 },
    { date: "Mar 8", value: 7500 },
    { date: "Mar 15", value: 7134 },
    { date: "Mar 22", value: 7800 },
    { date: "Apr 1", value: 8100 },
    { date: "Apr 8", value: 7900 },
    { date: "Apr 15", value: 8400 },
    { date: "Apr 22", value: 8200 },
    { date: "May 1", value: 8900 },
    { date: "May 8", value: 9200 },
    { date: "May 15", value: 9500 },
    { date: "May 22", value: 9100 },
    { date: "Jun 1", value: 9800 },
    { date: "Jun 8", value: 10200 },
    { date: "Jun 15", value: 10600 },
    { date: "Jun 22", value: 10400 },
    { date: "Jul 1", value: 11000 },
  ],
};

export const backlinkData: {
  points: SeriesPoint[];
  averageValue: number;
  averageFormatted: string;
  startDate: string;
  endDate: string;
} = {
  averageValue: 12450,
  averageFormatted: "12.4K",
  startDate: "January 1, 2026",
  endDate: "July 1, 2026",
  points: [
    { date: "Jan 1", value: 8500 },
    { date: "Jan 8", value: 8900 },
    { date: "Jan 15", value: 9400 },
    { date: "Jan 22", value: 9800 },
    { date: "Feb 1", value: 10200 },
    { date: "Feb 8", value: 10800 },
    { date: "Feb 15", value: 11200 },
    { date: "Feb 22", value: 11900 },
    { date: "Mar 1", value: 12450 },
    { date: "Mar 8", value: 12800 },
    { date: "Mar 15", value: 13100 },
    { date: "Mar 22", value: 13600 },
    { date: "Apr 1", value: 14000 },
    { date: "Apr 8", value: 14400 },
    { date: "Apr 15", value: 14900 },
    { date: "Apr 22", value: 15200 },
    { date: "May 1", value: 15800 },
    { date: "May 8", value: 16100 },
    { date: "May 15", value: 16500 },
    { date: "May 22", value: 16900 },
    { date: "Jun 1", value: 17400 },
    { date: "Jun 8", value: 17800 },
    { date: "Jun 15", value: 18200 },
    { date: "Jun 22", value: 18700 },
    { date: "Jul 1", value: 19100 },
  ],
};
