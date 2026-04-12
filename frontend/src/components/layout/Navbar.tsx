import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/HospitalLogo.png";
import { useScrolled } from "../../hooks/useScrolled";
import { navMenu } from "../../data/navMenu";
import MobileDrawer from "./MobileDrawer";

// Social Icons SVGs
const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="p-2 rounded-full bg-white flex items-center justify-center text-[#7c3996] hover:bg-gray-100 transition-colors shadow-md cursor-pointer lg:p-4">
    {children}
  </div>
);

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
        const id = href.replace("/#", "");
        if (window.location.pathname === "/") {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            return;
          }
        }
        // If not on home page, or element not found, use traditional navigation
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
      className="flex justify-center items-center gap-1.5 bg-[#5C2476] hover:bg-[#4a1c5e] text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors duration-200 whitespace-nowrap"
    >
      <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.46 11.46 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.46 11.46 0 00.57 3.58 1 1 0 01-.24 1.01z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[9px] font-normal opacity-80">For Appointment & Emergency</span>
        <span className="text-sm font-bold tracking-wide">1800 2122</span>
      </span>
    </a>
  );
}

// function EmergencyButton() {
//   return (
//     <a
//       href="tel:7997079970"
//       className="h-[43px] w-[130px] flex justify-center items-center gap-1.5 bg-[#00A896] hover:bg-[#008f7e] text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors duration-200 whitespace-nowrap"
//     >
//       <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
//       </svg>
//       <span className="flex flex-col leading-none">
//         <span className="text-[9px] font-normal opacity-80">Pediatric Emergency</span>
//         <span className="text-sm font-bold tracking-wide">79970 79970</span>
//       </span>
//     </a>
//   );
// }

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
                {/* <EmergencyButton /> */}
              </div>

              <div className="flex items-center gap-2">
                <SocialIcon>
                  {/* Facebook Icon */}
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </SocialIcon>
                <SocialIcon>
                  {/* Instagram Icon */}
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </SocialIcon>
                {/* <SocialIcon>
              LinkedIn Icon 
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              Twitter/X Icon 
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-[14px] h-[14px]">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </SocialIcon> */}
                <SocialIcon>
                  {/* Youtube Icon */}
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </SocialIcon>
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
