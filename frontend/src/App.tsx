import Navbar from "./components/layout/Navbar";
import EnquireNow from "./components/layout/EnquireNow";
import HeroSection from "./components/sections/HeroSection";
import QuickActions from "./components/sections/QuickActions";
import AboutUs from "./components/sections/AboutUs";
import LeadingHospitals from "./components/sections/LeadingHospitals";
import Blogs from "./components/sections/Blogs";
import FAQs from "./components/sections/FAQs";
import FadeIn from "./components/common/FadeIn";

function App() {
  return (
    <>
      {/* Fixed right-side Enquire Now pill */}
      <EnquireNow />

      <div className="md:relative">
        <Navbar />
        <FadeIn direction="none">
          <HeroSection />
        </FadeIn>
      </div>

      <main className="flex flex-col gap-10">

        {/* Quick Actions section for Mobile Screen */}
        <div className="md:hidden">
          <FadeIn delay={200}>
            <QuickActions />
          </FadeIn>
        </div>

        {/* About Us section */}
        <FadeIn delay={100}>
          <AboutUs />
        </FadeIn>

        {/* Leading Hospitals section */}
        <FadeIn delay={100}>
          <LeadingHospitals />
        </FadeIn>

        {/* Blogs Section */}
        <FadeIn delay={100}>
          <Blogs />
        </FadeIn>

        {/* FAQs Section */}
        <FadeIn delay={100}>
          <FAQs />
        </FadeIn>
      </main>
    </>
  );
}

export default App;
