"use client";

import React, { useState } from "react";
import { IconRail } from "@/components/layout/icon-rail";
import { SideNav, SideNavExpandButton } from "@/components/layout/side-nav";
import { TopHeader } from "@/components/layout/top-header";
import { StatCard } from "@/components/dashboard/stat-card";
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
    <div className="flex h-screen w-screen bg-[#1E1E20] text-text-primary overflow-hidden font-sans">
      {/* 68px Fixed Icon Rail */}
      <IconRail />

      {/* 240px Collapsible Navigation Sidebar */}
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
      <main className="flex-1 flex flex-col h-screen overflow-y-auto min-w-0 bg-[#1E1E20]">
        <TopHeader />

        {/* Flush Grid Floor Layout (0px outer padding/margin against SideNav and TopNav) */}
        <div className="p-0 space-y-[3px] w-full bg-[#1E1E20]">
          {/* Row 1: 4 Equal Rectangular Metric Tile Blocks */}
          <div className="grid grid-cols-12 gap-[3px] bg-[#1E1E20]">
            {statCardsData.map((stat) => (
              <div key={stat.id} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <StatCard {...stat} />
              </div>
            ))}
          </div>

          {/* Row 2: Traffic Analytics Main Tile Block */}
          <div className="grid grid-cols-12 gap-[3px] bg-[#1E1E20]">
            <div className="col-span-12">
              <TrafficAnalyticsChart data={trafficAnalyticsData} />
            </div>
          </div>

          {/* Row 3: Organic Rankings & Backlinks Tile Blocks */}
          <div className="grid grid-cols-12 gap-[3px] bg-[#1E1E20]">
            <div className="col-span-12 lg:col-span-6">
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
            </div>
            <div className="col-span-12 lg:col-span-6">
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
        </div>
      </main>
    </div>
  );
}
