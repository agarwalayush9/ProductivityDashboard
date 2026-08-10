import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface-panel border border-surface-border rounded-xl p-5 shadow-sm transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
