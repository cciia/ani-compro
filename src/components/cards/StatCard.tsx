"use client";

import { IconType } from "react-icons";
import CountUp from "react-countup";

type StatCardProps = {icon: IconType; value: number; suffix?: string; title: string; description: string; delay?: number;};

export default function StatCard({icon: Icon, value, suffix = "", title, description,}: 
  
StatCardProps) {
  return (
    <div className="flex flex-col">
      <Icon size={24} style={{color: "var(--primary)",}}/>
      <h3 className="mt-2 text-3xl font-bold" style={{color: "var(--primary)",}}>
         <CountUp end={value} duration={2} enableScrollSpy scrollSpyOnce/>{suffix}
      </h3>
      <h4 className="mt-2 text-sm font-bold" style={{color: "var(--text-primary)",}}>
        {title}
      </h4>
      <p className="mt-1 text-xs leading-5" style={{color: "var(--text-secondary)",}}>
        {description}
      </p>
    </div>
  );
}