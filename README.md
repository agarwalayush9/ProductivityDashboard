# Dark-Themed SEO Analytics Dashboard

A modern, Semrush-style dark-mode SEO analytics dashboard built with Next.js 14 (App Router), TypeScript, Tailwind CSS v3, Recharts, and Lucide Icons.

---

## 🛠️ Setup & Running Locally

1. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Run the development server**:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Repository & Folder Structure

```
├── app/
│   ├── layout.tsx                 # Root layout with Inter font & dark theme
│   ├── page.tsx                   # Main Dashboard page composition
│   └── globals.css                # Tailwind directives & tabular numbers utility
├── components/
│   ├── layout/
│   │   ├── icon-rail.tsx          # 64px fixed left icon rail
│   │   ├── side-nav.tsx           # 280px collapsible grouped sidebar
│   │   └── top-header.tsx         # Header with title & filter pills
│   ├── dashboard/
│   │   ├── stat-card.tsx          # Single metric stat card with delta indicator
│   │   ├── stat-cards-row.tsx      # Responsive 4-card grid container
│   │   ├── traffic-analytics-chart.tsx # Stacked bar chart with diagonal hatch
│   │   └── time-series-card.tsx   # Reusable area chart with floating average badge
│   └── ui/
│       ├── card.tsx               # Reusable panel container primitive
│       └── filter-pill.tsx        # Reusable filter pill button primitive
├── lib/
│   ├── utils.ts                   # Tailwind class merging helper (cn)
│   ├── nav-config.ts              # Data-driven sidebar navigation config
│   └── mock-data.ts               # Typed fixture data matching reference spec
├── types/
│   └── dashboard.ts               # TypeScript interfaces for stats, charts, & nav
├── tailwind.config.ts             # Custom design tokens (surface, text, brand, status)
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🔄 Swapping Mock Data for a Real API

All dashboard components are **presentational and data-driven**. No API calls are baked into individual UI components.

To integrate with a real backend or API endpoint:

1. **Update or extend the TypeScript contracts** in `types/dashboard.ts`.
2. **Fetch data in `app/page.tsx`** (or create a server action / React Query hook):
   ```tsx
   // Example server component or async fetch in page.tsx
   async function getDashboardData() {
     const res = await fetch('https://api.yourdomain.com/v1/seo-analytics', {
       next: { revalidate: 3600 }
     });
     return res.json();
   }

   export default async function DashboardPage() {
     const data = await getDashboardData();
     return (
       <DashboardShell data={data} />
     );
   }
   ```
3. Pass the fetched data directly to `<StatCardsRow stats={data.stats} />`, `<TrafficAnalyticsChart data={data.traffic} />`, etc.
