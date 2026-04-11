import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import EnquireNow from "./components/layout/EnquireNow";
import HeroSection from "./components/sections/HeroSection";
import QuickActions from "./components/sections/QuickActions";
import AboutUs from "./components/sections/AboutUs";
import CentresOfExcellence from "./components/sections/CentresOfExcellence";
import LeadingHospitals from "./components/sections/LeadingHospitals";
import Blogs from "./components/sections/Blogs";
import FAQs from "./components/sections/FAQs";
import FadeIn from "./components/common/FadeIn";
import PackagesSection from "./components/sections/PackagesSection";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import PackageDetailPage from "./pages/PackageDetailPage";

// ── Home Page ─────────────────────────────────────────────────────────────────
function HomePage() {
  return (
    <>
      <EnquireNow />
      <div className="md:relative">
        <Navbar />
        <FadeIn direction="none">
          <HeroSection />
        </FadeIn>
      </div>

      <main className="flex flex-col gap-10">
        {/* Quick Actions — mobile only */}
        <div className="md:hidden">
          <FadeIn delay={200}>
            <QuickActions />
          </FadeIn>
        </div>

        <FadeIn delay={100}><PackagesSection /></FadeIn>
        <FadeIn delay={100}><AboutUs /></FadeIn>
        <FadeIn delay={100}><CentresOfExcellence /></FadeIn>
        <FadeIn delay={100}><LeadingHospitals /></FadeIn>
        <FadeIn delay={100}><Blogs /></FadeIn>
        <FadeIn delay={100}><FAQs /></FadeIn>
      </main>
    </>
  );
}

// ── App with Router ───────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Service detail — reusable for all sub-items */}
        <Route path="/service/:slug" element={<ServiceDetailPage />} />

        {/* Package detail pages */}
        <Route path="/package/:packageId" element={<PackageDetailPage />} />

        {/* Catch-all → home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
