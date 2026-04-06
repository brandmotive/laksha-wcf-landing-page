export default function EnquireNow() {
  return (
    <a
      href="#enquire"
      aria-label="Enquire Now"
      className="fixed right-3 top-1/2 -translate-y-1/2 z-50 md:right-6"
      style={{ writingMode: "vertical-lr" }}
    >
      <span
        className="hidden md:flex items-center justify-center h-[160px] w-[46px] text-[15px] bg-[#7E3FAB] text-white font-semibold tracking-wide px-3 py-5 rounded-3xl hover:bg-[#6B2D8B] transition-colors duration-200 shadow-lg select-none"
        style={{ writingMode: "vertical-rl" }} //transform: "rotate(180deg)"
      >
        Enquire Now
      </span>
    </a>
  );
}
