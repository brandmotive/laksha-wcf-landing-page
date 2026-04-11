import { useState, useEffect, useCallback } from "react";
import heroOne from "../../assets/images/heroSection/heroOne.jpg.jpeg";
import heroTwo from "../../assets/images/heroSection/heroTwo.jpg.jpeg";
import heroThree from "../../assets/images/heroSection/heroThree.jpg.jpeg";
import heroFour from "../../assets/images/heroSection/heroFour.jpg.jpeg";
import heroFive from "../../assets/images/heroSection/heroFive.jpg.jpeg";

const heroImages = [heroOne, heroTwo, heroThree, heroFour, heroFive];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 600);
    },
    [animating]
  );

  const prev = () => goTo((current - 1 + heroImages.length) % heroImages.length);
  const next = useCallback(
    () => goTo((current + 1) % heroImages.length),
    [current, goTo]
  );

  // Auto-advance every 4 seconds
  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    // md+: full 100vh — transparent absolute navbar floats on top
    // mobile: subtract ~72px for the always-visible white navbar
    <section className="relative w-full overflow-hidden min-h-[calc(100vh-72px)] md:min-h-screen">
      {/*
      
        
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-[100%] md:h-full object-cover"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      */}
      {/* ── Carousel images ── */}
      {heroImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Hero slide ${index + 1}`}
          aria-hidden={index !== current}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: index === current ? (animating ? 0 : 1) : 0,
            transition: "opacity 0.6s ease-in-out",
            zIndex: index === current ? 1 : 0,
          }}
        />
      ))}

      {/* ── White overlay — only on tablet and above (≥768px) ── */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ background: "rgba(255,255,255,0.55)", zIndex: 2 }}
      />

      {/* ── Arrow: Previous ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        style={{ background: "rgba(0,0,0,0.45)" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 md:w-6 md:h-6"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* ── Arrow: Next ── */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        style={{ background: "rgba(0,0,0,0.45)" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 md:w-6 md:h-6"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none"
            style={{
              background: i === current ? "#6B2D8B" : "rgba(255,255,255,0.65)",
              transform: i === current ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-center px-4 pt-10 pb-10 md:pt-36 md:pb-16 min-h-[calc(100vh-72px)] md:h-[130vh]">
        <div className="flex gap-6">
          {/* Heading with brand-purple background pill */}
          {/* bg-[#6B2D8B] */}
          <div className="rounded-xl md:mx-auto max-w-[90vw] md:max-w-xl lg:max-w-4xl mb-0">
            <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Best Maternity Hospital in Chennai
            </h1>
            <p className="text-black text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold leading-tight">
              26 Years of Excellence
            </p>
          </div>
        </div>

        {/* Book an Appointment CTA */}
        <div className="max-w-xl md:max-w-sm">
          <a
            href="#book"
            className="block w-[200px] flex items-center justify-center h-[45px] bg-[#6B2D8B] hover:bg-[#521E6E] text-white font-semibold text-base md:text-xl rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg md:w-[240px]"
          >
            Book an Appointment
          </a>
        </div>

        <div className="hidden md:flex flex-row gap-20">
          {/* Box 1: Book Online Consult */}
          <div className="p-8 bg-white/70 rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 gap-6 hover:bg-white/80 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 text-gray-800 transition-transform duration-300 group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                {/* Laptop silhouette */}
                <path d="M4 16h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2z" />
                <path d="M2 16h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" />
                {/* Person */}
                <circle cx="12" cy="9" r="2.5" />
                <path d="M16 13.5a4 4 0 0 0-8 0" />
                {/* Speech Bubble */}
                <path d="M18 4l2-2v4h-2.5" strokeWidth="1" />
                <circle cx="16" cy="3" r="0.5" fill="currentColor" />
                <circle cx="18" cy="3" r="0.5" fill="currentColor" />
              </svg>
            </div>
            <p className="text-xl font-bold text-gray-800 leading-tight">
              Book Online
              <br />
              Consult
            </p>
          </div>

          {/* Box 2: Book Hospital Visit */}
          <div className="p-8 bg-white/70 rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 gap-6 hover:bg-white/80 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 text-gray-800 transition-transform duration-300 group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                {/* Calendar grid dots */}
                <circle cx="7" cy="14" r="0.5" fill="currentColor" />
                <circle cx="11" cy="14" r="0.5" fill="currentColor" />
                <circle cx="15" cy="14" r="0.5" fill="currentColor" />
                <circle cx="7" cy="18" r="0.5" fill="currentColor" />
                <circle cx="11" cy="18" r="0.5" fill="currentColor" />
                {/* Checkmark in circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="4"
                  fill="white"
                  stroke="currentColor"
                />
                <path d="M16 18l1.5 1.5 2.5-3.5" />
              </svg>
            </div>
            <p className="text-xl font-bold text-gray-800 leading-tight">
              Book Hospital
              <br />
              Visit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
