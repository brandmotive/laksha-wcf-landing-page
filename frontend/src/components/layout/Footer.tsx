import { Link } from "react-router-dom";
import { navMenu } from "../../data/navMenu";

// Social Icons SVGs
const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7c3996] hover:bg-gray-100 transition-colors shadow-md cursor-pointer">
    {children}
  </div>
);

export default function Footer() {
  const womenCare = navMenu.find((m) => m.label === "Women Care")?.children || [];
  const childCare = navMenu.find((m) => m.label === "Child Care")?.children || [];
  const fertilityCare = navMenu.find((m) => m.label === "Fertility Care")?.children || [];
  const hospitals = navMenu.find((m) => m.label === "Our Hospitals")?.children || [];

  return (
    <footer className="w-full flex justify-center bg-[#fdf6ff]">
      <div className="w-full">
        {/* Main Links Container */}
        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 overflow-hidden">
          
          {/* Column 1: Women Care */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#7c80bc] font-bold text-lg mb-2">Women Care</h3>
            <ul className="flex flex-col gap-y-3">
              {womenCare.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/service/${item.slug}`}
                    className="text-gray-700 hover:text-[#7c3996] text-[13px] sm:text-sm font-medium transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Child Care */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#7c80bc] font-bold text-lg mb-2">Child Care</h3>
            <ul className="flex flex-col gap-y-3">
              {childCare.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/service/${item.slug}`}
                    className="text-gray-700 hover:text-[#7c3996] text-[13px] sm:text-sm font-medium transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Fertility Care */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#7c80bc] font-bold text-lg mb-2">Fertility Care</h3>
            <ul className="flex flex-col gap-y-3">
              {fertilityCare.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/service/${item.slug}`}
                    className="text-gray-700 hover:text-[#7c3996] text-[13px] sm:text-sm font-medium transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hospitals Locations & Corporate */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#7c80bc] font-bold text-lg mb-2">Hospitals Locations</h3>
            <ul className="flex flex-col gap-y-3 mb-6">
              {hospitals.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/service/${item.slug}`}
                    className="text-gray-700 hover:text-[#7c3996] text-[13px] sm:text-sm font-medium transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-[#7c80bc] font-bold text-lg mb-2 mt-4">Corporate</h3>
            <ul className="flex flex-col gap-y-3">
              <li>
                <Link to="/#about" className="text-gray-700 hover:text-[#7c3996] text-[13px] sm:text-sm font-medium transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#packages" className="text-gray-700 hover:text-[#7c3996] text-[13px] sm:text-sm font-medium transition-colors inline-block">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/#blogs" className="text-gray-700 hover:text-[#7c3996] text-[13px] sm:text-sm font-medium transition-colors inline-block">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Social Logos and Copyright */}
        <div className="bg-[#7c3996] py-5 px-6 sm:px-14 lg:px-20 w-full flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          {/* Social Icons */}
          <div className="flex justify-center flex-wrap items-center gap-3">
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
            <SocialIcon>
              {/* LinkedIn Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              {/* Twitter/X Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-[14px] h-[14px]">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              {/* Youtube Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </SocialIcon>
          </div>

          {/* Copyright section */}
          <div className="text-white text-sm font-medium tracking-wide">
            Copyright © 2026. All Rights Reserved by Laksha WCF Hospitals.
          </div>
        </div>
      </div>
    </footer>
  );
}
