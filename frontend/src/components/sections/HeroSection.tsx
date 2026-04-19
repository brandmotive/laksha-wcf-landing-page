import { useState, useEffect, useCallback } from "react";
// import { quickActions } from "../../data/quickActions";
// import { icons } from "./QuickActions";
import heroOne from "../../assets/images/heroSection/heroOne.jpg.jpeg";
import heroTwo from "../../assets/images/heroSection/heroTwo.jpg.jpeg";
import heroThree from "../../assets/images/heroSection/heroThree.jpg.jpeg";
import heroFour from "../../assets/images/heroSection/heroFour.jpg.jpeg";
import heroFive from "../../assets/images/heroSection/heroFive.jpg.jpeg";
import hero from "../../assets/images/logos/Hero_Section_Logo.png"

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

  const [lang, setLang] = useState<"en" | "ta">("en");

  const content = {
    en: {
      box1Title: "Uniqueness",
      box1Points: [
        "Delivered First Water Birth Delivery",
        "Inhouse OG Consultants Module",
        "Delivered Low Birth (Delivered 600 grams)",
        "Allowing Partners during labour",
        "VBAC - Vaginal Birth after C-Section",
        "Painless Delivery",
      ],
      box2Title: "Introduced First in India",
      box2Points: [
        "Normal or Section at Same Cost",
        "Hospital EMI Option",
        "Package System from Conception to delivery",
        "Allowing Partner during labour",
      ],
    },
    ta: {
      box1Title: "தனித்துவம்",
      box1Points: [
        "முதல் நீர் பிரசவம் (முதன்முதலில் எங்களால் நிகழ்த்தப்பட்டது)",
        "உள்நோயியல் மருத்துவ நிபுணர்கள் (OG Consultants)",
        "குறைந்த எடை (600 கிராம்) குழந்தை பிரசவம்",
        "பிரசவத்தின் போது கணவர்/துணையை அனுமதித்தல்",
        "VBAC - சிசேரியனுக்குப் பின் சாதாரணப் பிரசவம்",
        "வலியற்ற பிரசவம்",
      ],
      box2Title: "இந்தியாவில் முதன்முதலில் அறிமுகம்",
      box2Points: [
        "சுகப்பிரசவம் அல்லது சிசேரியன் - ஒரே கட்டணம்",
        "மருத்துவமனை மூலம் தவணை முறை (EMI) வசதி",
        "கருத்தரிப்பு முதல் பிரசவம் வரை தொகுப்புத் திட்டம்",
        "பிரசவத்தின் போது துணையை அனுமதித்தல்",
      ],
    },
  };

  const activeContent = content[lang];

  const scrollToPackages = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // md+: full 100vh — transparent absolute navbar floats on top
    // mobile: subtract ~72px for the always-visible white navbar
    <section className="relative w-full overflow-hidden min-h-[calc(100vh-72px)] md:min-h-screen">
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

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-start gap-4 md:gap-2 text-center px-4 pt-18 pb-10 min-h-screen md:pt-36 md:pb-16 min-h-[calc(100vh-72px)] md:min-h-screen">

        <div className="flex flex-col gap-2 md:gap-3 mt-0 md:mt-0">
          {/* Main Heading Text */}
          <div className="rounded-xl  md:mx-auto max-w-[90vw] md:max-w-3xl lg:max-w-4xl drop-shadow-md">
            <h1 className="text-black text-xl sm:text-4xl md:text-[40px] font-bold font-sans leading-tight tracking-wide drop-shadow-sm">
              Best Maternity Normal Delivery Hospital in Chennai
            </h1>

            <div className="mt-2 flex flex-col items-center">
              <img className="h-65" src={hero} alt="" />
            </div>
            {/* <p className="text-black text-[18px] sm:text-xl md:text-[22px] font-semibold md:mt-4 leading-snug drop-shadow-sm">
              26 Years of Excellence
            </p>
            <p className="text-black text-[12px] sm:text-lg md:text-xl font-medium mt-1 leading-snug drop-shadow-sm opacity-95">
              90% of Natural Birth, Delivered more than 25,000+ Babies
            </p> */}
          </div>
        </div>

        <div className="max-w-xl md:max-w-sm mt-2 md:mt-3">
          <a
            href="#packages"
            onClick={scrollToPackages}
            className="block w-full p-4 sm:flex items-center justify-center bg-[#9e80d8] hover:bg-[#602b75] text-white font-semibold text-base rounded-full transition-colors duration-200 shadow-md hover:shadow-lg mx-auto"
          >
            Book Delivery Package
          </a>
        </div>

        {/* ── NEW: Language Toggle & Content Boxes ── */}
        <div className="w-full max-w-5xl flex flex-col items-center gap-6 mt-2 md:mt-4">

          {/* Language Toggle */}
          <div className="flex bg-white/40 backdrop-blur-sm p-1 rounded-full border border-white/50 shadow-sm">
            <button
              onClick={() => setLang("en")}
              className={`px-6 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${lang === "en" ? "bg-[#6B2D8B] text-white shadow-md" : "text-gray-700 hover:text-[#6B2D8B]"
                }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("ta")}
              className={`px-6 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${lang === "ta" ? "bg-[#6B2D8B] text-white shadow-md" : "text-gray-700 hover:text-[#6B2D8B]"
                }`}
            >
              தமிழ்
            </button>
          </div>

          {/* Info Boxes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">

            {/* Box 1: Uniqueness */}
            <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow text-left">
              <h3 className="text-[#6B2D8B] font-bold text-base md:text-lg mb-4 border-b border-[#6B2D8B]/20 pb-2">
                {activeContent.box1Title}
              </h3>
              <ul className="space-y-2.5">
                {activeContent.box1Points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E91E8C] mt-2 shrink-0 shadow-sm" />
                    <span className="text-gray-800 text-[13px] md:text-[14px] font-medium leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Introduced First in India */}
            <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow text-left">
              <h3 className="text-[#6B2D8B] font-bold text-base md:text-lg mb-4 border-b border-[#6B2D8B]/20 pb-2">
                {activeContent.box2Title}
              </h3>
              <ul className="space-y-2.5">
                {activeContent.box2Points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E91E8C] mt-2 shrink-0 shadow-sm" />
                    <span className="text-gray-800 text-[13px] md:text-[14px] font-medium leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Book an Appointment CTA (Optional: Keep hidden or move below) */}
        {/* <div className="max-w-xl md:max-w-sm mt-4 md:mt-6">
          <a
            href="#book"
            className="block w-full p-4 sm:flex items-center justify-center bg-[#9e80d8] hover:bg-[#602b75] text-white font-semibold text-base rounded-full transition-colors duration-200 shadow-md hover:shadow-lg mx-auto"
          >
            Book an Appointment
          </a>
        </div> */}

        {/* Desktop Quick Actions */}
        {/* <div className="hidden md:flex flex-row gap-5 lg:gap-8 mt-5 md:mt-8">
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
        </div> */}
      </div>
    </section>
  );
}
