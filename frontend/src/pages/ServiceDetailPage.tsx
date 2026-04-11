import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import EnquireNow from "../components/layout/EnquireNow";
import FadeIn from "../components/common/FadeIn";
import { navMenu } from "../data/navMenu";
import { serviceContentMap, defaultServiceContent } from "../data/serviceContent";

// ── Static image imports ───────────────────────────────────────────────────────
import childPsychologyImg from "../assets/images/child_physcology.jpg";
import motherChildrenImg from "../assets/images/mother_children_image.png";
import hospitalElectronicImg from "../assets/images/hospital_electronic_city.png";
import hospitalHennurImg from "../assets/images/hospital_hennur.png";
import hospitalMarathaImg from "../assets/images/hospital_marathahalli.png";

// ── Hero background image map (slug → image) ──────────────────────────────────
const heroBgMap: Record<string, string> = {
  // Child Care
  "child-psychology": childPsychologyImg,
  "childrens-nutrition": motherChildrenImg,
  "general-pediatrics": motherChildrenImg,
  "neonatal-intensive-care-unit": hospitalElectronicImg,
  "occupational-therapy": childPsychologyImg,
  "pediatric-allergy": childPsychologyImg,
  "pediatric-anesthesia": hospitalElectronicImg,
  "pediatric-cardiology-cardiac-surgery": hospitalElectronicImg,
  "pediatric-dentistry": childPsychologyImg,
  "pediatric-dermatology": childPsychologyImg,
  "pediatric-endocrinology": childPsychologyImg,
  "pediatric-ent-airway": childPsychologyImg,
  "pediatric-infectious-disease": hospitalElectronicImg,
  "pediatric-orthopedics": hospitalElectronicImg,
  "pediatric-plastic-surgery": hospitalElectronicImg,
  "pediatric-urology": hospitalElectronicImg,
  "physiotherapy-rehabilitation": motherChildrenImg,
  "radiology": hospitalElectronicImg,
  "speech-language-therapy": childPsychologyImg,
  // Women Care
  "breast-care-clinic": motherChildrenImg,
  "breastfeeding-support": motherChildrenImg,
  "childbirth-preparation-classes": motherChildrenImg,
  "diabetes-in-women": hospitalElectronicImg,
  "fetal-medicine": motherChildrenImg,
  "general-medicine": hospitalElectronicImg,
  "gynecological-endoscopic-surgeries": hospitalElectronicImg,
  "high-risk-pregnancy": motherChildrenImg,
  "lactation": motherChildrenImg,
  "laparoscopic-surgeries": hospitalElectronicImg,
  "menopause-perimenopause": motherChildrenImg,
  "minimally-invasive-surgery": hospitalElectronicImg,
  "obstetrics-gynecology": motherChildrenImg,
  "painless-delivery-labor": motherChildrenImg,
  "pre-pregnancy-health-checkup": motherChildrenImg,
  "pregnancy-delivery": motherChildrenImg,
  "urogynecology": hospitalElectronicImg,
  "vaginal-birth-after-cesarean": motherChildrenImg,
  "well-women-check-up": motherChildrenImg,
  "women-physiotherapy": motherChildrenImg,
  "women-psychiatry": motherChildrenImg,
  "womens-nutrition": motherChildrenImg,
  // Fertility Care
  "ivf-in-vitro-fertilisation": motherChildrenImg,
  "iui-intrauterine-insemination": motherChildrenImg,
  "icsi-intracytoplasmic-sperm-injection": motherChildrenImg,
  "egg-freezing": motherChildrenImg,
  "embryo-freezing": motherChildrenImg,
  "fertility-assessment": motherChildrenImg,
  "male-infertility-treatment": hospitalElectronicImg,
  "recurrent-pregnancy-loss": motherChildrenImg,
  "surrogacy": motherChildrenImg,
  // Hospitals
  "anna-nagar-chennai": hospitalElectronicImg,
  "bannerghatta-road-bengaluru": hospitalHennurImg,
  "banjara-hills-hyderabad": hospitalElectronicImg,
  "hebbal-bengaluru": hospitalHennurImg,
  "marathahalli-bengaluru": hospitalMarathaImg,
};

// ── Section image map — shown in the About section LEFT column ────────────────
const sectionImageMap: Record<string, string> = {
  "child-psychology": childPsychologyImg,
  "childrens-nutrition": motherChildrenImg,
  "neonatal-intensive-care-unit": hospitalElectronicImg,
  "breast-care-clinic": motherChildrenImg,
  "breastfeeding-support": motherChildrenImg,
  "lactation": motherChildrenImg,
  "high-risk-pregnancy": motherChildrenImg,
  "obstetrics-gynecology": motherChildrenImg,
  "pregnancy-delivery": motherChildrenImg,
  "anna-nagar-chennai": hospitalElectronicImg,
  "hebbal-bengaluru": hospitalHennurImg,
  "marathahalli-bengaluru": hospitalMarathaImg,
};

const defaultHeroImg = childPsychologyImg;
const defaultSectionImg = hospitalElectronicImg;

// ── Resolve all service data from route slug ───────────────────────────────────
function useServiceData(slug: string | undefined) {
  if (!slug) return null;

  for (const category of navMenu) {
    if (!category.children) continue;
    for (const sub of category.children) {
      if (sub.slug === slug) {
        const content = serviceContentMap[slug] ?? defaultServiceContent;
        return {
          label: sub.label,
          heroTagline: sub.heroTagline,
          category: category.label,
          heroBg: heroBgMap[slug] ?? defaultHeroImg,
          sectionImage: sectionImageMap[slug] ?? defaultSectionImg,
          ...content,
        };
      }
    }
  }
  return null;
}

// ── Hero Section ──────────────────────────────────────────────────────────────
function ServiceHero({ bgImage, label, tagline }: { bgImage: string; label: string; tagline: string }) {
  return (
    <section className="relative w-full overflow-hidden min-h-[calc(100vh-72px)] md:min-h-[60vh] md:max-h-[80vh] lg:min-h-[65vh] flex items-center justify-center">
      {/* Bg image */}
      <img
        src={bgImage}
        alt={`${label} background`}
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        draggable={false}
      />

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/65" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-5 sm:gap-7 px-4 sm:px-8 py-16 sm:py-20 text-center w-full">
        {/* Accent */}
        <div className="flex items-center gap-3">
          <span className="block w-10 sm:w-16 h-[2px] bg-[#E91E8C] rounded-full" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E91E8C]" />
          <span className="block w-10 sm:w-16 h-[2px] bg-[#E91E8C] rounded-full" />
        </div>

        {/* Title */}
        <h1 className="text-white font-extrabold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[92vw] sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
          {label}
        </h1>

        {/* Tagline */}
        <p className="text-white/90 font-medium leading-snug drop-shadow-md text-base sm:text-lg md:text-xl max-w-[90vw] sm:max-w-xl md:max-w-2xl">
          {tagline}
        </p>

        {/* CTA  #ba98ce  #6B2D8B */}
        <a
          href="tel:18002122"
          id="service-hero-cta"
          className="inline-flex items-center gap-2 bg-[#6B2D8B] hover:bg-[#521E6E] active:bg-[#3d1652] text-white font-semibold text-sm sm:text-base px-7 sm:px-9 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-[0_4px_20px_rgba(107,45,139,0.5)] hover:shadow-[0_6px_24px_rgba(107,45,139,0.65)] whitespace-nowrap"
        >
          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.46 11.46 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.46 11.46 0 00.57 3.58 1 1 0 01-.24 1.01z" />
          </svg>
          Book an Appointment
        </a>
      </div>
    </section>
  );
}

// ── Breadcrumb ────────────────────────────────────────────────────────────────
function Breadcrumb({ category, label }: { category: string; label: string }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full bg-gray-50 border-b border-gray-200">
      <ol className="flex flex-wrap items-center gap-1.5 w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-3 px-0 text-xs sm:text-sm text-gray-500">
        <li><Link to="/" className="hover:text-[#6B2D8B] transition-colors font-medium">Home</Link></li>
        <li aria-hidden className="text-gray-300 select-none">›</li>
        <li className="text-gray-400">{category}</li>
        <li aria-hidden className="text-gray-300 select-none">›</li>
        <li className="text-[#6B2D8B] font-semibold truncate max-w-[200px] sm:max-w-none">{label}</li>
      </ol>
    </nav>
  );
}

// ── About Disease Section ─────────────────────────────────────────────────────
interface AboutProps {
  label: string;
  sectionImage: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  treatment: string[];
}

function BulletList({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  if (!items.length) return null;
  return (
    <div className="mt-5 sm:mt-6">
      <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-gray-800 mb-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#6B2D8B]/10 text-[#6B2D8B] shrink-0">
          {icon}
        </span>
        {title}
      </h3>
      <ul className="space-y-2 pl-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm sm:text-base leading-snug">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#E91E8C] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const SymptomsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);
const CausesIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
const TreatmentIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

function AboutSection({ label, sectionImage, overview, symptoms, causes, treatment }: AboutProps) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">

        {/* Section heading */}
        <div className="mb-8 sm:mb-12 text-center">
          {/* <p className="text-[#E91E8C] font-semibold text-sm sm:text-base uppercase tracking-widest mb-2">
            Disease Information
          </p> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            About <span className="text-[#6B2D8B]">{label}</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="block w-12 h-[3px] bg-[#E91E8C] rounded-full" />
            <span className="block w-3 h-3 rounded-full bg-[#6B2D8B]" />
            <span className="block w-12 h-[3px] bg-[#E91E8C] rounded-full" />
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-14 items-start">

          {/* LEFT — Disease image (fades in from left) */}
          <FadeIn direction="left" className="w-full lg:w-[42%] shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src={sectionImage}
                alt={`${label} illustration`}
                className="w-full h-64 sm:h-80 lg:h-full lg:max-h-[520px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle colour wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B2D8B]/30 to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
                <p className="text-[#6B2D8B] font-bold text-sm sm:text-base leading-tight">{label}</p>
                <p className="text-gray-500 text-xs">Expert Care Available</p>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT — Description content (fades in from right) */}
          <FadeIn direction="right" delay={150} className="flex-1 min-w-0">
            <div className="space-y-0">
              {/* Overview */}
              <div>
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-gray-800 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#6B2D8B]/10 text-[#6B2D8B] shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Overview
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{overview}</p>
              </div>

              <BulletList title="Symptoms" items={symptoms} icon={<SymptomsIcon />} />
              <BulletList title="Causes" items={causes} icon={<CausesIcon />} />
              <BulletList title="Treatment & Care" items={treatment} icon={<TreatmentIcon />} />

              {/* CTA strip */}
              <div className="pt-6 sm:pt-8 flex flex-wrap gap-3">
                <a
                  href="tel:18002122"
                  id="about-section-cta-call"
                  className="inline-flex items-center gap-2 bg-[#6B2D8B] hover:bg-[#521E6E] text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.46 11.46 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.46 11.46 0 00.57 3.58 1 1 0 01-.24 1.01z" />
                  </svg>
                  Book an Appointment
                </a>
                <Link
                  to="/"
                  id="about-section-cta-home"
                  className="inline-flex items-center gap-2 border-2 border-[#6B2D8B] text-[#6B2D8B] hover:bg-[#6B2D8B] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm sm:text-base"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { value: "26+", label: "Years of Excellence" },
    { value: "5+", label: "Expert Locations" },
    { value: "1M+", label: "Happy Patients" },
    { value: "200+", label: "Specialist Doctors" },
  ];
  return (
    <div className="w-full bg-gradient-to-r from-[#6B2D8B] to-[#9B4DC8] py-6 sm:py-8">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-0.5">
            <span className="text-white font-extrabold text-2xl sm:text-3xl">{value}</span>
            <span className="text-white/75 text-xs sm:text-sm leading-tight">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 404 Fallback ──────────────────────────────────────────────────────────────
function ServiceNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 px-6 text-center">
      <div className="text-5xl">🔍</div>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Service Not Found</h1>
      <p className="text-gray-500 max-w-md text-base sm:text-lg">
        The service you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        id="service-not-found-home"
        className="mt-2 inline-flex items-center gap-2 bg-[#6B2D8B] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#521E6E] transition-colors shadow-md"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = useServiceData(slug);

  return (
    <>
      <EnquireNow />
      <Navbar />

      {/* Entire page fades in on load */}
      <FadeIn direction="none" className="pt-[72px] md:pt-[120px]">
        {service ? (
          <>
            {/* Breadcrumb */}
            <Breadcrumb category={service.category} label={service.label} />

            {/* Hero */}
            <ServiceHero
              bgImage={service.heroBg}
              label={service.label}
              tagline={service.heroTagline}
            />

            {/* Stats bar */}
            <StatsBar />

            {/* About disease — two-column with directional FadeIn */}
            <AboutSection
              label={service.label}
              sectionImage={service.sectionImage}
              overview={service.overview}
              symptoms={service.symptoms}
              causes={service.causes}
              treatment={service.treatment}
            />
          </>
        ) : (
          <ServiceNotFound />
        )}
      </FadeIn>
    </>
  );
}
