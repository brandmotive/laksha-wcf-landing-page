import { useState, useEffect, useCallback } from "react";
import { quickActions } from "../../data/quickActions";
import { icons } from "./QuickActions";
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

  // const prev = () => goTo((current - 1 + heroImages.length) % heroImages.length);
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

      {/* ── White overlay — only on tablet and above (≥768px) hidden md:block ── */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(255,255,255,0.55)", zIndex: 2 }}
      />

      {/* ── Arrow: Previous ── */}
      {/* <button
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
      </button> */}

      {/* ── Arrow: Next ── */}
      {/* <button
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
      </button> */}

      {/* ── Dot indicators ── */}
      {/* <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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
      </div> */}

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 text-center px-4 pt-10 pb-10 md:pt-36 md:pb-16 min-h-[calc(100vh-72px)] md:min-h-screen">
        <div className="flex flex-col gap-2 md:gap-4 mt-6 md:mt-0">
          {/* Main Heading Text */}
          <div className="rounded-xl md:mx-auto max-w-[90vw] md:max-w-3xl lg:max-w-4xl drop-shadow-md">
            <h1 className="text-black text-3xl sm:text-4xl md:text-[40px] font-bold font-sans leading-tight tracking-wide drop-shadow-sm">
              Best Maternity Hospital in Chennai
            </h1>
            <p className="text-black text-lg sm:text-xl md:text-[22px] font-semibold mt-3 md:mt-4 leading-snug drop-shadow-sm">
              26 Years of Excellence
            </p>
            <p className="text-black text-base sm:text-lg md:text-xl font-medium mt-1 leading-snug drop-shadow-sm opacity-95">
              90% of Natural Birth, Delivered more than 25,000+ Babies
            </p>
          </div>
        </div>

        {/* Book an Appointment CTA */}
        <div className="max-w-xl md:max-w-sm mt-4 md:mt-6">
          <a
            href="#book"
            className="block w-full p-4 sm:flex items-center justify-center h-[50px] bg-[#9e80d8] hover:bg-[#602b75] text-white font-semibold text-base rounded-full transition-colors duration-200 shadow-md hover:shadow-lg mx-auto"
          >
            Book an Appointment
          </a>
        </div>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex flex-row gap-5 lg:gap-8 mt-5 md:mt-8">
          {quickActions.map((action) => (
            <a
              key={action.id}
              href={action.href}
              className="w-36 lg:w-40 h-32 lg:h-36 bg-white/85 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md border border-white/40 flex flex-col items-center justify-center p-4 gap-3 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-10 h-10 lg:w-11 lg:h-11 text-gray-800 group-hover:text-[#7c3996] transition-colors duration-300">
                {icons[action.icon]}
              </div>
              <p className="text-[13px] lg:text-sm font-semibold text-gray-800 text-center leading-tight group-hover:text-[#7c3996] transition-colors duration-300">
                {action.label.split(" ").map((w, i) => (
                  <span key={i} className="block">{w}</span>
                ))}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
