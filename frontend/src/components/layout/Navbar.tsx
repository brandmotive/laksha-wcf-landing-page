import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/HospitalLogo.png";
import { useScrolled } from "../../hooks/useScrolled";
import { navMenu } from "../../data/navMenu";
import MobileDrawer from "./MobileDrawer";

// ── Helper: resolve href from a top-level nav item ────────────────────────────
function navItemHref(slug?: string): string {
  if (!slug) return "#";
  // Anchor-style items on home page
  if (["packages", "about", "blogs"].includes(slug)) return `/#${slug}`;
  return `/${slug}`;
}

// ── Desktop Nav Item with dropdown ───────────────────────────────────────────
const DesktopNavItem = ({ item }: { item: (typeof navMenu)[number] }) => {
  const hasChildren = !!(item.children && item.children.length > 0);
  const navigate = useNavigate();

  const handleTopClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault(); // dropdown handles navigation
    } else {
      e.preventDefault();
      const href = navItemHref(item.slug);
      if (href.startsWith("/#")) {
        // Scroll to section on home page
        window.location.href = href;
      } else {
        navigate(href);
      }
    }
  };

  return (
    <div className="group relative flex items-center h-full">
      {/* Top-level label */}
      <button
        onClick={handleTopClick}
        className="flex items-center gap-1 text-[13px] font-medium text-gray-700 group-hover:text-[#6B2D8B] transition-colors duration-200 whitespace-nowrap cursor-pointer h-full border-b-[3px] border-transparent group-hover:border-[#6B2D8B] bg-transparent"
      >
        {item.label}
        {hasChildren && (
          <svg
            className="w-3 h-3 text-gray-500 group-hover:rotate-180 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      {/* Mega-menu dropdown (desktop only) */}
      {hasChildren && (
        <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-gray-100 w-max max-w-[95vw]">
          <div className="p-4 rounded-b-md">
            <div
              className={`grid gap-x-8 gap-y-1 ${item.children!.length > 30
                  ? "grid-cols-4"
                  : item.children!.length > 20
                    ? "grid-cols-3"
                    : item.children!.length > 10
                      ? "grid-cols-2"
                      : "grid-cols-1"
                }`}
            >
              {item.children!.map((child) => (
                <Link
                  key={child.slug}
                  to={`/service/${child.slug}`}
                  className="text-[13px] text-gray-600 hover:text-[#6B2D8B] hover:bg-purple-50 transition-colors flex items-center py-2 px-2 border-b border-gray-100 last:border-b-0 rounded-sm"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── CTA buttons ───────────────────────────────────────────────────────────────
function AppointmentButton() {
  return (
    <a
      href="tel:18002122"
      className="h-[43px] w-[115px] flex justify-center items-center gap-1.5 bg-[#5C2476] hover:bg-[#4a1c5e] text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors duration-200 whitespace-nowrap"
    >
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

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const headerBg = isScrolled
    ? "bg-white shadow-md border-b-[4px] border-[#ba98ce] rounded-b-3xl"
    : "bg-white md:bg-white/30";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[60] w-full flex flex-row justify-center transition-all duration-300 mx-auto ${headerBg}`}>
        <div className="w-[90%] h-full md:w-[70%]">

          {/* ROW 1: Logo + Actions */}
          <div className="flex items-center justify-between my-2">
            {/* Logo — always navigates home */}
            <Link to="/" className="flex flex-col shrink-0">
              <img src={logo} alt="WCF Hospital" className="h-10 sm:h-12 md:h-16 w-auto object-contain" />
            </Link>

            {/* Right-side actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden min-[600px]:flex items-center gap-2">
                <AppointmentButton />
                <EmergencyButton />
              </div>

              {/* Hamburger — visible below 992px */}
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

          {/* ROW 2: Desktop Nav Links */}
          <div className="hidden min-[992px]:block border-t border-gray-400">
            <nav className="w-full my-4 flex justify-center gap-6 xl:gap-8">
              {navMenu.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
            </nav>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
