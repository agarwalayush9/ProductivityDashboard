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
  averageValue: 75800,
  averageFormatted: "75.8K",
  startDate: "June 1, 2026",
  endDate: "July 1, 2026",
  points: [
    { date: "1", value: 45000 }, { date: "2", value: 47000 }, { date: "3", value: 43000 }, { date: "4", value: 46000 },
    { date: "5", value: 44000 }, { date: "6", value: 50000 }, { date: "7", value: 54000 }, { date: "8", value: 51000 },
    { date: "9", value: 55000 }, { date: "10", value: 58000 }, { date: "11", value: 56000 }, { date: "12", value: 65000 },
    { date: "13", value: 63000 }, { date: "14", value: 62000 }, { date: "15", value: 67000 }, { date: "16", value: 64000 },
    { date: "17", value: 69000 }, { date: "18", value: 61000 }, { date: "19", value: 58000 }, { date: "20", value: 63000 },
    { date: "21", value: 60000 }, { date: "22", value: 66000 }, { date: "23", value: 68000 }, { date: "24", value: 66000 },
    { date: "25", value: 80000 }, { date: "26", value: 82000 }, { date: "27", value: 79000 }, { date: "28", value: 81000 },
    { date: "29", value: 77000 }, { date: "30", value: 70000 }, { date: "31", value: 71000 }, { date: "32", value: 72000 },
    { date: "33", value: 68000 }, { date: "34", value: 81000 }, { date: "35", value: 75000 }, { date: "36", value: 65000 },
    { date: "37", value: 66000 }, { date: "38", value: 63000 }, { date: "39", value: 64000 }, { date: "40", value: 61000 },
    { date: "41", value: 59000 }, { date: "42", value: 62000 }, { date: "43", value: 57000 }, { date: "44", value: 56000 },
    { date: "45", value: 61000 }, { date: "46", value: 55000 }, { date: "47", value: 60000 }, { date: "48", value: 58000 },
    { date: "49", value: 61000 }, { date: "50", value: 62000 }, { date: "51", value: 59000 }, { date: "52", value: 64000 },
    { date: "53", value: 61000 }, { date: "54", value: 68000 }, { date: "55", value: 64000 }, { date: "56", value: 63000 },
    { date: "57", value: 68000 }, { date: "58", value: 72000 }, { date: "59", value: 68000 }, { date: "60", value: 73000 },
    { date: "61", value: 70000 }, { date: "62", value: 75000 }, { date: "63", value: 77000 }, { date: "64", value: 73000 },
    { date: "65", value: 81000 }, { date: "66", value: 79000 }, { date: "67", value: 85000 }, { date: "68", value: 82000 },
    { date: "69", value: 84000 }, { date: "70", value: 83000 }, { date: "71", value: 88000 }, { date: "72", value: 92000 },
    { date: "73", value: 94000 }
  ],
};

export const backlinkData: {
  points: SeriesPoint[];
  averageValue: number;
  averageFormatted: string;
  startDate: string;
  endDate: string;
} = {
  averageValue: 11300,
  averageFormatted: "11.3K",
  startDate: "June 1, 2026",
  endDate: "July 1, 2026",
  points: [
    { date: "1", value: 10500 }, { date: "2", value: 10600 }, { date: "3", value: 10800 }, { date: "4", value: 10200 },
    { date: "5", value: 10400 }, { date: "6", value: 9800 }, { date: "7", value: 9600 }, { date: "8", value: 9900 },
    { date: "9", value: 9400 }, { date: "10", value: 9700 }, { date: "11", value: 9900 }, { date: "12", value: 10100 },
    { date: "13", value: 10000 }, { date: "14", value: 10300 }, { date: "15", value: 10600 }, { date: "16", value: 10800 },
    { date: "17", value: 10700 }, { date: "18", value: 10900 }, { date: "19", value: 10700 }, { date: "20", value: 10600 },
    { date: "21", value: 10800 }, { date: "22", value: 10500 }, { date: "23", value: 10700 }, { date: "24", value: 10400 },
    { date: "25", value: 10600 }, { date: "26", value: 10700 }, { date: "27", value: 11000 }, { date: "28", value: 11200 },
    { date: "29", value: 11500 }, { date: "30", value: 12000 }, { date: "31", value: 11900 }, { date: "32", value: 12400 },
    { date: "33", value: 12100 }, { date: "34", value: 11800 }, { date: "35", value: 12000 }, { date: "36", value: 11600 },
    { date: "37", value: 11400 }, { date: "38", value: 11200 }, { date: "39", value: 11100 }, { date: "40", value: 10800 },
    { date: "41", value: 10900 }, { date: "42", value: 10600 }, { date: "43", value: 10300 }, { date: "44", value: 10200 },
    { date: "45", value: 9900 }, { date: "46", value: 10100 }, { date: "47", value: 9700 }, { date: "48", value: 9800 },
    { date: "49", value: 9500 }, { date: "50", value: 9600 }, { date: "51", value: 10000 }, { date: "52", value: 10200 },
    { date: "53", value: 10100 }, { date: "54", value: 10500 }, { date: "55", value: 10700 }, { date: "56", value: 10400 },
    { date: "57", value: 10800 }, { date: "58", value: 10900 }, { date: "59", value: 11200 }, { date: "60", value: 11000 },
    { date: "61", value: 11400 }, { date: "62", value: 11100 }, { date: "63", value: 11300 }, { date: "64", value: 11200 },
    { date: "65", value: 11500 }, { date: "66", value: 11400 }, { date: "67", value: 11700 }, { date: "68", value: 11600 },
    { date: "69", value: 11900 }, { date: "70", value: 11800 }, { date: "71", value: 12200 }, { date: "72", value: 12000 },
    { date: "73", value: 12500 }
  ],
};
