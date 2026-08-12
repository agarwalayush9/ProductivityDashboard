const fs = require('fs');

const baseCurve = [
  45, 42, 43, 38, 41, 44, 45, 48, 52, 55, // 0-9
  52, 57, 58, 62, 60, 65, 63, 67, 65, 64, // 10-19
  68, 66, 69, 72, 70, 78, 80, 77, 81, 79, // 20-29
  78, 75, 72, 74, 70, 68, 67, 69, 66, 65, // 30-39
  68, 72, 75, 80, 84, 85, 83, 75, 70, 65, // 40-49 (ref line at 47)
  68, 63, 60, 58, 62, 59, 56, 54, 55, 52, // 50-59
  50, 48, 49, 47, 48, 51, 49, 53, 50, 49, // 60-69
  52, 51, 48, 50, 52, 55, 54, 58, 59, 62, // 70-79
  60, 65, 68, 67, 66, 72, 74, 71, 73, 76, // 80-89
  75, 79, 82, 80, 85, 88, 87, 89, 92, 95  // 90-99
];

const noisyCurve = baseCurve.map((val, i) => {
  const noise = (Math.sin(i * 1.7) * 2) + (Math.cos(i * 3.1) * 1.5) + (Math.sin(i * 5.5) * 1);
  return val + noise;
});

const min = Math.min(...noisyCurve);
const max = Math.max(...noisyCurve);
const targetMin = 42000;
const targetMax = 94000;

const scaledData = noisyCurve.map(val => {
  const normalized = (val - min) / (max - min);
  return Math.round(targetMin + normalized * (targetMax - targetMin));
});

let out = `import { SeriesPoint } from "@/types/dashboard";

export const organicRankingsData: {
  points: SeriesPoint[];
  averageValue: number;
  averageFormatted: string;
  startDate: string;
  endDate: string;
} = {\n`;
out += `  averageValue: 75800,\n`;
out += `  averageFormatted: "75.8K",\n`;
out += `  startDate: "June 1, 2026",\n`;
out += `  endDate: "July 1, 2026",\n`;
out += `  points: [\n`;

scaledData.forEach((val, i) => {
  const day = (i % 30) + 1;
  const month = i < 30 ? 'Jun' : i < 60 ? 'Jul' : 'Aug'; 
  const date = `${month} ${day}`;
  out += `    { date: "${date}", value: ${val} },\n`;
});

out += `  ]\n};\n`;

let existing = fs.readFileSync('/Users/ayushagarwal/Documents/Web-Dev/UiToCode/ProductivityDashboard/lib/mock-data.ts', 'utf8');

// replace the organicRankingsData block in existing content
const regex = /export const organicRankingsData: \{[\s\S]*?points: \[\s*[\s\S]*?\]\s*,\s*\n\};\n/;
existing = existing.replace(regex, out);

fs.writeFileSync('/Users/ayushagarwal/Documents/Web-Dev/UiToCode/ProductivityDashboard/lib/mock-data.ts', existing);
console.log('done');
