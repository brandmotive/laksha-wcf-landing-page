import { useState, useEffect } from "react";
// import logoOne from "../../assets/images/logo_one.png";
// import logoTwo from "../../assets/images/logo_two.png";
import logo from "../../assets/images/finalLogo.png";
import { useScrolled } from "../../hooks/useScrolled";
import { navMenu } from "../../data/navMenu";
import MobileDrawer from "./MobileDrawer";

// ── Desktop second-row nav item with dropdown arrow ──────────────────────────
const DesktopNavItem = ({ item }: { item: (typeof navMenu)[number] }) => {
  const hasChildren = item.children && item.children.length > 0;
  return (
    <a
      href={item.href ?? "#"}
      className="flex items-center gap-1 text-[13px] font-medium text-gray-700 hover:text-[#6B2D8B] transition-colors duration-200 whitespace-nowrap cursor-pointer py-1"
    >
      {item.label}
      {hasChildren && (
        <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </a>
  );
};

// ── Appointment / Emergency pill buttons ─────────────────────────────────────
function AppointmentButton() {
  return (
    <a
      href="tel:18002122"
      className="h-[43px] w-[115px] flex justify-center items-center gap-1.5 bg-[#5C2476] hover:bg-[#4a1c5e] text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors duration-200 whitespace-nowrap"
    >
      {/* Phone icon */}
      <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.46 11.46 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.46 11.46 0 00.57 3.58 1 1 0 01-.24 1.01z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[9px] font-normal opacity-80">For Appointment</span>
        <span className="text-sm font-bold tracking-wide">1800 2122</span>
      </span>
    </a>
  );
}

function EmergencyButton() {
  return (
    <a
      href="tel:7997079970"
      className="h-[43px] w-[130px] flex justify-center items-center gap-1.5 bg-[#00A896] hover:bg-[#008f7e] text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors duration-200 whitespace-nowrap"
    >
      {/* Alert / cross icon */}
      <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[9px] font-normal opacity-80">Pediatric Emergency</span>
        <span className="text-sm font-bold tracking-wide">79970 79970</span>
      </span>
    </a>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const isScrolled = useScrolled();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  // <768px  → always white
  // ≥768px  → transparent until scrolled, then white
  const headerBg = isScrolled
    ? "bg-white shadow-md"
    : "bg-white/50";
  // md:bg-transparent md:shadow-none shadow-sm

  return (
    <>
      {/* Full-width sticky header so bg color spans whole screen */}
      <header className={`sticky top-0 z-[60] w-full mx-auto transition-all duration-300 ${headerBg}`}>

        {/* ══ ROW 1: Logo + Actions — centered with symmetric horizontal padding ══════ */}
        <div className="flex items-center justify-around px-[10vw] py-4 h-[13vh] mb-10">

          {/* Logo */}
          <div className="flex flex-col shrink-0">
            <div className="flex items-center gap-2">
              <img src={logo} alt="BirthRight by Rainbow" className="h-16 sm:h-18 md:h-20 w-auto object-contain" />
            </div>
          </div>

          {/* Right-side actions */}
          <div className="flex items-center gap-2 md:gap-3">

            {/* Appointment + Emergency — visible from ≥600px */}
            <div className="hidden min-[600px]:flex items-center gap-2">
              <AppointmentButton />
              <EmergencyButton />
            </div>



            {/* Hamburger — visible on <992px */}
            <button
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              className="min-[992px]:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md hover:bg-gray-100/80 transition-colors duration-200 shrink-0"
            >
              <span className="block w-5 h-0.5 bg-gray-700 rounded" />
              <span className="block w-5 h-0.5 bg-gray-700 rounded" />
              <span className="block w-5 h-0.5 bg-gray-700 rounded" />
            </button>
          </div>
        </div>

        {/* ══ ROW 2: Desktop Nav Links — aligned with Row 1 content ═══ */}
        <div className="hidden min-[992px]:block border-t border-gray-400">
          <nav className="w-full h-[10vh] flex justify-center gap-6 xl:gap-8 ">
            {navMenu.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>
        </div>

      </header>

      {/* Mobile / Tablet Drawer */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
