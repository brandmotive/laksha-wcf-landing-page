import type { JSX } from "react";
import { quickActions } from "../../data/quickActions";

// Inline SVG icons matching the design
const icons: Record<string, JSX.Element> = {
  "online-consultation": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="#555"
      strokeWidth="1.8"
      className="w-12 h-12"
    >
      <rect x="6" y="8" width="36" height="26" rx="3" />
      <path d="M17 34v6M31 34v6M13 40h22" />
      <circle cx="19" cy="19" r="5" />
      <path d="M10 30c1.5-4 5-6 9-6s7.5 2 9 6" />
      <rect x="28" y="14" width="10" height="2.5" rx="1.2" />
      <rect x="28" y="19" width="7" height="2.5" rx="1.2" />
    </svg>
  ),
  "hospital-visit": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="#555"
      strokeWidth="1.8"
      className="w-12 h-12"
    >
      <rect x="5" y="10" width="38" height="30" rx="3" />
      <path d="M5 18h38" />
      <path d="M15 10V6M33 10V6" />
      <circle cx="24" cy="30" r="1.5" fill="#555" />
      <path d="M18 30h-2v-4h2v-2h4v2h2v4h-2v2h-4z" />
      <path d="M30 24h6M33 21v6" />
    </svg>
  ),
  "pregnancy-tracker": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="#555"
      strokeWidth="1.8"
      className="w-12 h-12"
    >
      <path d="M20 8c0 0 1 3 0 7s-6 7-4 13 8 10 10 10 8-4 10-10-3-9-4-13-0-7 0-7" />
      <path d="M18 26c2 2 4 3 6 3s4-1 6-3" />
      <circle cx="24" cy="14" r="2" />
    </svg>
  ),
  "book-scans": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="#555"
      strokeWidth="1.8"
      className="w-12 h-12"
    >
      <rect x="8" y="6" width="32" height="38" rx="3" />
      <path d="M15 16h18M15 22h18M15 28h10" />
      <circle cx="34" cy="34" r="6" />
      <path d="M21 28a6 6 0 100 0" strokeDasharray="3 2" />
      <path d="M37.5 37.5l3 3" strokeLinecap="round" />
    </svg>
  ),
};

export default function QuickActions() {
  return (
    <section className="h-[400px] w-full flex flex-row justify-center items-center bg-gray-100 p-8 md:p-10 lg:p-12">
      <div className="w-[85%] h-[80%] grid grid-cols-2 gap-4">
        {quickActions.map((action) => (
          <a
            key={action.id}
            href={action.href}
            className="flex flex-col items-center justify-center gap-3 bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group mx-1 my-1.5"
          >
            <div className="text-gray-500 group-hover:text-[#6B2D8B] transition-colors duration-200">
              {icons[action.icon]}
            </div>
            <span className="text-center text-sm md:text-[13px] font-medium text-gray-700 group-hover:text-[#6B2D8B] transition-colors duration-200 leading-snug">
              {action.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
