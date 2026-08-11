import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-[#13151A] border-0 rounded-none p-6 select-none shadow-[0_0.5px_1px_rgba(0,0,0,0.8)] transition-all",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
