import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navMenu, type NavItem } from "../../data/navMenu";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [activeItem, setActiveItem] = useState<NavItem | null>(null);
  const [animating, setAnimating] = useState(false);
  const [page, setPage] = useState<"main" | "sub">("main");

  // Reset to main page whenever drawer closes
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setActiveItem(null);
        setPage("main");
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const handleItemClick = (item: NavItem) => {
    if (!item.children) {
      onClose(); // Link component handles navigation
      return;
    }
    setAnimating(true);
    setTimeout(() => {
      setActiveItem(item);
      setPage("sub");
      setAnimating(false);
    }, 220);
  };

  const handleBack = () => {
    setAnimating(true);
    setTimeout(() => {
      setActiveItem(null);
      setPage("main");
      setAnimating(false);
    }, 220);
  };

  const getTopLevelHref = (item: NavItem): string => {
    if (!item.slug) return "/";
    if (["packages", "about", "blogs"].includes(item.slug)) return `/#${item.slug}`;
    return `/${item.slug}`;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 left-0 z-[70] h-full w-[82vw] max-w-[420px] bg-white flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ── Top bar ── */}
        <div className="flex h-[56px] items-center justify-between px-5 border-b border-gray-200">
          <span className="text-sm font-semibold text-gray-700">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 hover:bg-gray-100 text-gray-700 text-sm transition-colors"
          >
            ✕
          </button>
        </div>

        {/* ── Sliding content area ── */}
        <div className="relative flex-1 overflow-hidden">

          {/* PAGE 1 — Main menu */}
          <div
            className={`absolute inset-0 overflow-y-auto transition-transform duration-300 ease-in-out ${
              page === "sub" || animating ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <nav className="py-2">
              {navMenu.map((item) =>
                item.children ? (
                  // Has children → open sub-panel
                  <button
                    key={item.label}
                    onClick={() => handleItemClick(item)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left text-[15px] font-medium text-gray-800 hover:bg-gray-50 border-b border-gray-100 transition-colors duration-150"
                  >
                    {item.label}
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  // No children → direct link
                  <Link
                    key={item.label}
                    to={getTopLevelHref(item)}
                    onClick={(e) => {
                      const href = getTopLevelHref(item);
                      if (href.startsWith("/#") && window.location.pathname === "/") {
                        e.preventDefault();
                        onClose();
                        const id = href.replace("/#", "");
                        setTimeout(() => {
                          const element = document.getElementById(id);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 300); // Wait for drawer to close
                      } else {
                        onClose();
                      }
                    }}
                    className="w-full flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover:bg-gray-50 border-b border-gray-100 transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* PAGE 2 — Sub-menu */}
          <div
            className={`absolute inset-0 overflow-y-auto transition-transform duration-300 ease-in-out ${
              page === "sub" && !animating ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Back header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 z-10 flex items-center gap-2 px-3 py-3">
              <button
                onClick={handleBack}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#6B2D8B] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              {activeItem && (
                <span className="text-sm font-semibold text-gray-600 border-l border-gray-300 pl-2.5">
                  {activeItem.label}
                </span>
              )}
            </div>

            {/* Sub-items list */}
            {activeItem?.children?.map((sub) => (
              <Link
                key={sub.slug}
                to={`/service/${sub.slug}`}
                onClick={onClose}
                className="block px-6 py-3.5 text-[14px] text-gray-700 hover:bg-purple-50 hover:text-[#6B2D8B] border-b border-gray-100 transition-colors duration-150"
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
