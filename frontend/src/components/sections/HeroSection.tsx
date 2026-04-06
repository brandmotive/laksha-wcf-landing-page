import heroVideo from "../../assets/videos/landingPageVideo.mp4";
// import sampleVideo from "../../assets/videos/secondLandingPage.mp4";

export default function HeroSection() {
  return (
    // md+: full 100vh — transparent absolute navbar floats on top
    // mobile: subtract ~72px for the always-visible white navbar
    <section className="relative w-full overflow-hidden min-h-[calc(100vh-72px)] md:min-h-screen">
      {/* ── Background video (all screens) ── */}
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

      {/* ── White overlay — only on tablet and above (≥768px) ── */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ background: "rgba(255,255,255,0.55)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-center px-4 pt-10 pb-10 md:pt-36 md:pb-16 min-h-[calc(100vh-72px)] md:h-[130vh]">
        <div className="flex gap-6">
          {/* Pink decorative line — above heading */}
          {/* <div className="flex items-center justify-center w-[200px] max-w-xs md:max-w-md lg:max-w-lg mb-3">
            <div className="flex-1 h-px bg-[#E91E8C]" />
            <div className="flex-1 h-px bg-[#E91E8C]" />
          </div> */}

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

          {/* Pink decorative line — below heading */}
          {/* <div className="flex items-center justify-center w-[200px] max-w-xs md:max-w-md lg:max-w-lg mt-3">
            <div className="flex-1 h-px bg-[#E91E8C]" />
            <div className="flex-1 h-px bg-[#E91E8C]" />
          </div> */}
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
