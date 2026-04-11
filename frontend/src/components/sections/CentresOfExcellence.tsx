import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navMenu } from "../../data/navMenu";

// ── Static image imports ───────────────────────────────────────────────────────
import childCareImg from "../../assets/images/centre_child_care.png";
import womenCareImg from "../../assets/images/centre_women_care.png";
import fertilityCareImg from "../../assets/images/centre_fertility_care.png";

// ── Centre definitions ────────────────────────────────────────────────────────
interface Centre {
  key: string;       // matches navMenu label exactly
  label: string;
  image: string;
  description: string;
}

const centres: Centre[] = [
  {
    key: "Child Care",
    label: "Child Care",
    image: childCareImg,
    description:
      "Every child possesses unique qualities, and at Rainbow Children's Hospitals, we are dedicated to nurturing their holistic development and well-being through a range of comprehensive and customized services. As India's foremost childcare multi-specialty hospital chain, our commitment to excellence is anchored by our team of trained and certified Pediatricians and support staff, available round-the-clock.",
  },
  {
    key: "Women Care",
    label: "Women Care",
    image: womenCareImg,
    description:
      "We understand that women's health is unique at every stage of life. Our Women Care specialists bring together expertise in obstetrics, gynaecology, fetal medicine, and wellness — delivering compassionate, evidence-based care from adolescence through menopause. You are in the hands of over 200 dedicated women's health professionals.",
  },
  {
    key: "Fertility Care",
    label: "Fertility Care",
    image: fertilityCareImg,
    description:
      "Parenthood is one of life's most profound journeys, and our Fertility Care team is here to support you every step of the way. With state-of-the-art assisted reproductive technologies including IVF, IUI, ICSI, and fertility preservation, our specialists combine cutting-edge science with heartfelt compassion to make your dream of a family a reality.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function CentresOfExcellence() {
  const [activeKey, setActiveKey] = useState<string>("Child Care");
  const navigate = useNavigate();

  // Derive active centre data
  const activeCentre = centres.find((c) => c.key === activeKey)!;

  // Derive sub-nav items from navMenu
  const activeNavItem = navMenu.find((item) => item.label === activeKey);
  const subItems = activeNavItem?.children ?? [];

  // Navigate to service page
  const handleNavLink = (slug: string) => {
    navigate(`/service/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-14 md:py-20 flex justify-center" id="centres-of-excellence">
      <div className="w-[90%] md:w-[80%] flex flex-col items-center gap-10 md:gap-14">

        {/* ── Heading ── */}
        <div className="text-center flex flex-col gap-3 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Our Centres of Excellence
          </h2>
          <p className="text-[13px] sm:text-sm md:text-[15px] text-[#6B2D8B] leading-relaxed">
            Discover Our Premier Centers of Medical Expertise. Delve deeper into the exceptional
            healthcare services we champion, meticulously crafted to meet global standards and
            dedicated to ensuring patient well-being at every touchpoint.
          </p>
        </div>

        {/* ── Three image tabs ── */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
          {centres.map((centre) => {
            const isActive = centre.key === activeKey;
            return (
              <button
                key={centre.key}
                onClick={() => setActiveKey(centre.key)}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer border-0 p-0 focus:outline-none transition-all duration-300 ${
                  isActive ? "ring-4 ring-[#6B2D8B] ring-offset-2 scale-[1.02]" : "hover:ring-2 hover:ring-[#6B2D8B]/50 hover:scale-[1.01]"
                }`}
                aria-pressed={isActive}
                id={`coe-tab-${centre.key.toLowerCase().replace(/\s/g, "-")}`}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-44 md:h-52 lg:h-60 w-full overflow-hidden">
                  <img
                    src={centre.image}
                    alt={centre.label}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-t from-[#6B2D8B]/85 via-[#6B2D8B]/30 to-transparent"
                        : "bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-[#6B2D8B]/70 group-hover:via-[#6B2D8B]/20"
                    }`}
                  />
                  {/* Label bar */}
                  <div
                    className={`absolute bottom-0 inset-x-0 px-4 py-3 flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-[#6B2D8B]" : "bg-white/10 group-hover:bg-[#6B2D8B]/80"
                    }`}
                  >
                    <span
                      className={`font-semibold text-sm md:text-base leading-tight text-center ${
                        isActive ? "text-white" : "text-white"
                      }`}
                    >
                      {centre.label}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Detail Panel ── */}
        <div
          key={activeKey}
          className="w-full animate-coe-fade"
        >
          {/* Desktop / Tablet layout */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">

            {/* LEFT — Description */}
            <div className="w-full md:w-[42%] flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                {activeCentre.label}
              </h3>
              <p className="text-gray-600 text-[13px] sm:text-sm md:text-[14px] leading-relaxed text-justify">
                {activeCentre.description}
              </p>

              {/* Know More link */}
              <button
                onClick={() => {
                  // Navigate to the first child service
                  if (subItems.length > 0) {
                    handleNavLink(subItems[0].slug);
                  }
                }}
                className="mt-1 self-start inline-flex items-center gap-1.5 text-gray-800 font-semibold text-sm hover:text-[#6B2D8B] transition-colors duration-200 group"
                id={`coe-know-more-${activeKey.toLowerCase().replace(/\s/g, "-")}`}
              >
                Know More
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Mobile/Tablet divider (visible below md) */}
              <div className="md:hidden w-full border-t border-gray-200 mt-2" />
            </div>

            {/* RIGHT — Nav link buttons */}
            <div className="w-full md:flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {subItems.map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => handleNavLink(item.slug)}
                    id={`coe-link-${item.slug}`}
                    className="group relative bg-[#7C3FAD] hover:bg-[#5C1E8A] active:bg-[#4a1870] text-white font-medium text-[11px] sm:text-xs md:text-[11px] lg:text-xs leading-snug px-3 py-3 sm:px-4 sm:py-3.5 rounded-full text-center transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#6B2D8B] focus:ring-offset-1"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Inline keyframe animation */}
      <style>{`
        @keyframes coeFade {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-coe-fade {
          animation: coeFade 0.4s ease-out both;
        }
      `}</style>
    </section>
  );
}
