import Navbar from "./components/layout/Navbar";
import EnquireNow from "./components/layout/EnquireNow";
import HeroSection from "./components/sections/HeroSection";
import QuickActions from "./components/sections/QuickActions";

function App() {
  return (
    <>
      {/* Fixed right-side Enquire Now pill */}
      <EnquireNow />

      {/*
        On md+: relative container so the absolute navbar floats over the hero.
        On mobile: normal flow — navbar appears above hero.
      */}
      <div className="md:relative">
        {/* Navbar — absolute on md+ (overlays hero), sticky on mobile */}
        <div className="md:absolute md:top-0 md:left-0 md:right-0 md:z-[60]">
          <Navbar />
        </div>

        {/* Hero — full 100vh on md+ so it fills the viewport behind the navbar */}
        <HeroSection />
      </div>

      <main>
        <div className="md:hidden">
          <QuickActions />
        </div>
      </main>
    </>
  );
}

export default App;
