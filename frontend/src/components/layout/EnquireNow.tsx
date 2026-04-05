export default function EnquireNow() {
  return (
    <a
      href="#enquire"
      aria-label="Enquire Now"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50"
      style={{ writingMode: "vertical-rl" }}
    >
      <span
        className="flex items-center justify-center bg-[#7E3FAB] text-white text-[13px] font-semibold tracking-wide px-3 py-5 rounded-l-2xl hover:bg-[#6B2D8B] transition-colors duration-200 shadow-lg select-none"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Enquire Now
      </span>
    </a>
  );
}
