import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import EnquireNow from "../components/layout/EnquireNow";
import FadeIn from "../components/common/FadeIn";
import { packageDataMap } from "../data/packageData";
import type { PackageDetail, FAQ } from "../data/packageData";

// ── Static image imports ───────────────────────────────────────────────────────
import greenImg from "../assets/images/package_green.png";
import purpleImg from "../assets/images/package_purple.png";
import pinkImg from "../assets/images/package_pink.png";

const packageImages: Record<string, string> = {
  "pkg-1": greenImg,
  "pkg-2": purpleImg,
  "pkg-3": pinkImg,
};

// ── Hero ──────────────────────────────────────────────────────────────────────
function PackageHero({ pkg }: { pkg: PackageDetail }) {
  return (
    <section
      className="w-full flex items-center justify-center py-20 sm:py-28 px-4 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${pkg.gradientFrom} 0%, ${pkg.gradientTo} 100%)`,
      }}
    >
      {/* Decorative blurred circles */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: pkg.tagColor }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: pkg.tagColor }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-5 max-w-3xl">
        {/* Accent line */}
        <div className="flex items-center gap-3">
          <span className="block w-10 sm:w-16 h-[2px] rounded-full bg-white/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
          <span className="block w-10 sm:w-16 h-[2px] rounded-full bg-white/50" />
        </div>

        {/* Subtitle badge */}
        <span
          className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
          style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
        >
          {pkg.subtitle}
        </span>

        {/* Title */}
        <h1 className="text-white font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">
          {pkg.title}
        </h1>

        {/* Price badge */}
        <div className="flex items-center gap-3">
          <span className="text-white/70 text-sm font-medium">Starting from</span>
          <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-2xl sm:text-3xl px-5 py-1.5 rounded-2xl shadow-lg">
            {pkg.price}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-xl">
          {pkg.heroTagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <a
            href="tel:18002122"
            id="pkg-detail-hero-cta"
            className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.46 11.46 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.46 11.46 0 00.57 3.58 1 1 0 01-.24 1.01z" />
            </svg>
            Book Now
          </a>
          <Link
            to="/"
            id="pkg-detail-hero-back"
            className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-all duration-200 text-sm sm:text-base"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Detail Section ─────────────────────────────────────────────────────────────
function DetailSection({ pkg, image }: { pkg: PackageDetail; image: string }) {
  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-10 xl:gap-16 items-start justify-center">

        {/* Image — left on desktop, top on mobile */}
        <FadeIn direction="left" className="w-[90%] mx-auto lg:mx-0 lg:w-[42%] shrink-0">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src={image}
              alt={pkg.title}
              className="w-full h-64 sm:h-80 lg:h-full lg:max-h-[520px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Colour wash */}
            <div
              className="absolute inset-0 bg-gradient-to-t to-transparent opacity-40"
              style={{ background: `linear-gradient(to top, ${pkg.gradientFrom}55, transparent)` }}
            />
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
              <p
                className="font-bold text-sm sm:text-base leading-tight"
                style={{ color: pkg.tagColor }}
              >
                {pkg.subtitle}
              </p>
              <p className="text-gray-500 text-xs">Laksha Women & Children's Hospital</p>
            </div>
          </div>
        </FadeIn>

        {/* Content — right on desktop, below on mobile */}
        <FadeIn direction="right" delay={150} className="w-[90%] mx-auto lg:mx-0 flex-1 min-w-0">
          <div className="space-y-7">

            {/* Focus label */}
            <div>
              <p
                className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-1"
                style={{ color: pkg.tagColor }}
              >
                Focus
              </p>
              <p className="text-gray-700 text-base sm:text-lg font-medium italic leading-snug">
                {pkg.focus}
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <span
                className="block h-[3px] w-12 rounded-full"
                style={{ background: pkg.tagColor }}
              />
              <span
                className="block w-3 h-3 rounded-full"
                style={{ background: pkg.gradientFrom }}
              />
              <span
                className="block h-[3px] w-12 rounded-full"
                style={{ background: pkg.tagColor }}
              />
            </div>

            {/* Philosophy */}
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span
                  className="flex items-center justify-center w-7 h-7 rounded-full shrink-0"
                  style={{ background: `${pkg.tagColor}18`, color: pkg.tagColor }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </span>
                The Philosophy
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-9">
                {pkg.philosophy}
              </p>
            </div>

            {/* Why Choose */}
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span
                  className="flex items-center justify-center w-7 h-7 rounded-full shrink-0"
                  style={{ background: `${pkg.tagColor}18`, color: pkg.tagColor }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Why Choose This?
              </h2>
              <ul className="space-y-4 pl-9">
                {pkg.whyChoose.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                      style={{ background: pkg.tagColor }}
                    />
                    <div>
                      <span className="font-semibold text-gray-800 text-sm sm:text-base">
                        {point.heading}:{" "}
                      </span>
                      <span className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {point.body}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            {pkg.exclusions.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
                <p className="text-amber-800 font-semibold text-sm mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Not Included (Billed Separately)
                </p>
                <ul className="space-y-1">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="text-amber-700 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {exc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Facilities */}
            {pkg.facilities.length > 0 && (
              <div>
                <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-full shrink-0"
                    style={{ background: `${pkg.tagColor}18`, color: pkg.tagColor }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Facilities Included
                </h2>
                <ul className="space-y-2 pl-9">
                  {pkg.facilities.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm sm:text-base">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                        style={{ background: pkg.tagColor }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* In Patient's Charges Covered */}
            {pkg.inPatientChargesCovered.length > 0 && (
              <div>
                <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-full shrink-0"
                    style={{ background: `${pkg.tagColor}18`, color: pkg.tagColor }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  In Patient's Charges Covered
                </h2>
                <ul className="space-y-2 pl-9">
                  {pkg.inPatientChargesCovered.map((charge, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm sm:text-base">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                        style={{ background: pkg.tagColor }}
                      />
                      {charge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA strip */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="tel:18002122"
                id="pkg-detail-about-cta"
                className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
                style={{ background: pkg.tagColor }}
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.46 11.46 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.46 11.46 0 00.57 3.58 1 1 0 01-.24 1.01z" />
                </svg>
                Book an Appointment
              </a>
              <Link
                to="/"
                id="pkg-detail-back-home"
                className="inline-flex items-center gap-2 border-2 font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm sm:text-base hover:text-white"
                style={{ borderColor: pkg.tagColor, color: pkg.tagColor }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = pkg.tagColor;
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = pkg.tagColor;
                }}
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── FAQ Accordion ──────────────────────────────────────────────────────────────
function FAQItem({ faq, tagColor, index }: { faq: FAQ; tagColor: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
      style={{ borderColor: open ? tagColor + "55" : undefined }}
    >
      <button
        onClick={() => setOpen(!open)}
        id={`faq-item-${index}`}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-800 text-sm sm:text-base leading-snug flex items-start gap-3">
          <span
            className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
            style={{ background: tagColor }}
          >
            {index + 1}
          </span>
          {faq.question}
        </span>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            background: open ? tagColor : "#f3f4f6",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke={open ? "white" : "#6b7280"}
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {/* Smooth height transition via max-height */}
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: open ? "500px" : "0px" }}
      >
        <div className="px-5 sm:px-6 pb-5 pt-1 pl-14 sm:pl-16">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

function FAQSection({ pkg }: { pkg: PackageDetail }) {
  return (
    <section className="w-full bg-gray-50 py-14 sm:py-20">
      <div className="w-[90%] mx-auto max-w-3xl">
        <FadeIn direction="up">
          {/* Heading */}
          <div className="text-center mb-10">
            <p
              className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-2"
              style={{ color: pkg.tagColor }}
            >
              Got Questions?
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-3 mt-3">
              <span className="block w-12 h-[3px] rounded-full" style={{ background: pkg.tagColor }} />
              <span className="block w-3 h-3 rounded-full" style={{ background: pkg.gradientFrom }} />
              <span className="block w-12 h-[3px] rounded-full" style={{ background: pkg.tagColor }} />
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={100}>
          <div className="space-y-4">
            {pkg.faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} tagColor={pkg.tagColor} index={i} />
            ))}
          </div>
        </FadeIn>

        {/* Still have questions CTA */}
        <FadeIn direction="up" delay={150}>
          <div
            className="mt-10 rounded-2xl p-6 sm:p-8 text-center text-white"
            style={{
              background: `linear-gradient(135deg, ${pkg.gradientFrom} 0%, ${pkg.gradientTo} 100%)`,
            }}
          >
            <p className="font-bold text-lg sm:text-xl mb-1">Still have questions?</p>
            <p className="text-white/80 text-sm sm:text-base mb-5">
              Our care coordinators are happy to help you choose the right package.
            </p>
            <a
              href="tel:18002122"
              id="pkg-faq-cta"
              className="inline-flex items-center gap-2 bg-white font-bold px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
              style={{ color: pkg.gradientFrom }}
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.46 11.46 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.46 11.46 0 00.57 3.58 1 1 0 01-.24 1.01z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── Not Found ──────────────────────────────────────────────────────────────────
function PackageNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 px-6 text-center">
      <div className="text-5xl">📦</div>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Package Not Found</h1>
      <p className="text-gray-500 max-w-md text-base sm:text-lg">
        The package you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        id="pkg-not-found-home"
        className="mt-2 inline-flex items-center gap-2 bg-[#6B2D8B] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#521E6E] transition-colors shadow-md"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function PackageDetailPage() {
  const { packageId } = useParams<{ packageId: string }>();
  const pkg = packageId ? packageDataMap[packageId] : null;
  const image = packageId ? packageImages[packageId] : undefined;

  // Scroll to top when page loads / packageId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [packageId]);

  return (
    <>
      <EnquireNow />
      <Navbar />

      <FadeIn direction="none" className="pt-[72px] md:pt-[120px]">
        {pkg && image ? (
          <>
            <PackageHero pkg={pkg} />
            <DetailSection pkg={pkg} image={image} />
            <FAQSection pkg={pkg} />
          </>
        ) : (
          <PackageNotFound />
        )}
      </FadeIn>
    </>
  );
}
