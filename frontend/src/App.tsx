import Navbar from "./components/layout/Navbar";
import EnquireNow from "./components/layout/EnquireNow";
import HeroSection from "./components/sections/HeroSection";
import QuickActions from "./components/sections/QuickActions";
import AboutUs from "./components/sections/AboutUs";
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
      </main>
    </>
  );
}

export default App;
