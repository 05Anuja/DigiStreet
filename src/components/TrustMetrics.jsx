import React from "react";
import { Users, FileText, Cog, Building2 } from "lucide-react";

export const trustMetricsData = [
  {
    number: "50+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    number: "200+",
    label: "Projects Delivered",
    icon: FileText,
  },
  {
    number: "10+",
    label: "Years of Experience",
    icon: Cog,
  },
  {
    number: "8+",
    label: "Industries Served",
    icon: Building2,
  },
];

export default function TrustMetrics({
  metrics = trustMetricsData,
  className = "",
}) {
  return (
    <section
      aria-label="Trust and Key Metrics"
      className={`py-5 sm:py-6 md:py-8 bg-white border-b border-slate-200/80 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-0 gap-y-5 md:gap-y-0">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === metrics.length - 1;
            return (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 sm:gap-3.5 md:justify-center px-1 sm:px-3 md:px-6 ${
                  !isLast ? "md:border-r md:border-slate-200/80" : ""
                }`}
              >
                <Icon
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#00529B] flex-shrink-0"
                  strokeWidth={2.2}
                />
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#00529B] tracking-tight leading-none">
                    {item.number}
                  </div>
                  <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-600 mt-1 leading-snug max-w-[90px] sm:max-w-none">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
