"use client";

import React, { useState } from "react";
import { IconRail } from "@/components/layout/icon-rail";
import { SideNav, SideNavExpandButton } from "@/components/layout/side-nav";
import { TopHeader } from "@/components/layout/top-header";
import { StatCardsRow } from "@/components/dashboard/stat-cards-row";
import { TrafficAnalyticsChart } from "@/components/dashboard/traffic-analytics-chart";
import { TimeSeriesCard } from "@/components/dashboard/time-series-card";
import {
  statCardsData,
  trafficAnalyticsData,
  organicRankingsData,
  backlinkData,
} from "@/lib/mock-data";

export default function DashboardPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-screen bg-surface text-text-primary overflow-hidden font-sans">
      {/* 64px Fixed Icon Rail */}
      <IconRail />

      {/* 280px Collapsible Navigation Sidebar */}
      <SideNav
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Expand button when sidebar is collapsed */}
      {isSidebarCollapsed && (
        <SideNavExpandButton
          onExpand={() => setIsSidebarCollapsed(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto min-w-0 bg-surface">
        <TopHeader />

        <div className="px-8 py-6 space-y-6 max-w-[1600px] w-full mx-auto pb-12">
          {/* 4 Stat Cards Row */}
          <StatCardsRow stats={statCardsData} />

          {/* Traffic Analytics Stacked Bar Chart */}
          <TrafficAnalyticsChart data={trafficAnalyticsData} />

          {/* Side-by-side Time Series Area Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TimeSeriesCard
              title="Organic rankings"
              data={organicRankingsData.points}
              averageValue={organicRankingsData.averageValue}
              averageFormatted={organicRankingsData.averageFormatted}
              startDate={organicRankingsData.startDate}
              endDate={organicRankingsData.endDate}
              pillType="dateRange"
              pillValue="Last 6 months"
            />
            <TimeSeriesCard
              title="Backlink"
              data={backlinkData.points}
              averageValue={backlinkData.averageValue}
              averageFormatted={backlinkData.averageFormatted}
              startDate={backlinkData.startDate}
              endDate={backlinkData.endDate}
              pillType="scope"
              pillValue="Root domain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
