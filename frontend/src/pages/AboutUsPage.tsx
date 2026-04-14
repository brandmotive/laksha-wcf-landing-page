import Navbar from "../components/layout/Navbar";

import EnquireNow from "../components/layout/EnquireNow";
import FadeIn from "../components/common/FadeIn";
import { Link } from "react-router-dom";

// Image from existing assets if relevant, or using a generic fallback
import aboutHeroImg from "../assets/images/mother_children_image.png";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <EnquireNow />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={aboutHeroImg}
          alt="About Us Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About <span className="text-[#ba98ce]">Us</span>
            </h1>
            <div className="flex justify-center items-center gap-3">
              <span className="w-12 h-1 bg-[#ba98ce] rounded-full" />
              <p className="text-white/90 text-lg md:text-xl font-medium">26 Years of Dedicated Excellence</p>
              <span className="w-12 h-1 bg-[#ba98ce] rounded-full" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="w-[90%] md:w-[70%] mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#6B2D8B] transition-colors">Home</Link>
          <span>›</span>
          <span className="text-[#6B2D8B] font-semibold">About Us</span>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="w-[90%] md:w-[70%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-20">

            {/* Core Story */}
            <FadeIn delay={100}>
              <div className="text-gray-700 leading-relaxed space-y-8 text-[15px] md:text-base">
                <p className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                  At <strong className="text-[#6B2D8B]">WCF Hospital – Health & Happiness</strong>, we proudly celebrate <strong>26 years of excellence</strong> in providing dedicated and compassionate healthcare services for women.
                </p>

                <p>
                  For more than two decades, our hospital has stood as a trusted name in maternity, gynecology, and women-centered medical care, committed to ensuring the health, safety, and happiness of every woman who walks through our doors.
                </p>

                <p>
                  Founded with a strong vision to empower women through quality healthcare, WCF Hospital has consistently focused on delivering <strong>modern, technologically advanced, and quality-assured medical services</strong>. Our hospital is built on the belief that every woman deserves access to safe, affordable, and comprehensive healthcare under one roof. From adolescence to motherhood and beyond, we are dedicated to supporting women at every stage of life with expert medical guidance and compassionate care.
                </p>

                <p>
                  As a leading maternity and women’s healthcare center, we specialize in providing <strong>holistic and comprehensive medical services</strong>, especially in pregnancy care, childbirth, postnatal recovery, fertility consultation, gynecological treatments, and preventive health screening. Our experienced team of doctors, nurses, and healthcare professionals work together to create a safe and comforting environment where patients feel supported, respected, and confident in every medical decision.
                </p>

                {/* Leadership Feature */}
                <div className="bg-[#6B2D8B]/5 border-l-4 border-[#6B2D8B] p-8 rounded-r-2xl my-12">
                  <p className="italic text-lg md:text-xl text-gray-800">
                    "Under the leadership of <strong>Dr. D. Rajasekar, MBBS, MRCOG, DFFP (OG), Chairman & Managing Director</strong>, WCF Hospital continues to uphold the highest standards of medical excellence. His vision and commitment have played a vital role in shaping the hospital into a trusted destination for maternity and women’s wellness services."
                  </p>
                </div>

                {/* Vision and Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                  <div className="bg-white border border-gray-100 shadow-xl p-8 rounded-3xl hover:shadow-2xl transition-shadow border-t-4 border-t-[#6B2D8B]">
                    <h3 className="text-2xl font-bold text-[#6B2D8B] mb-4">Our Vision</h3>
                    <p className="text-gray-600">
                      To provide the best quality healthcare for women, empowering them to lead healthier and stronger lives while contributing positively to society. We believe that women’s health is the foundation of family and community well-being.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-100 shadow-xl p-8 rounded-3xl hover:shadow-2xl transition-shadow border-t-4 border-t-[#E91E8C]">
                    <h3 className="text-2xl font-bold text-[#E91E8C] mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                      To establish a modern, technologically advanced, self-regulated, and quality-assured healthcare model that delivers free-at-the-point-of-delivery services and accessible maternal care for women.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Goal</h3>
                  <p>
                    At WCF Hospital, our <strong>goal</strong> is to provide <strong>holistic, comprehensive, and high-quality healthcare at an affordable cost</strong>. We strive to make advanced maternity and gynecological care financially accessible without compromising on quality, safety, or patient comfort.
                  </p>
                </div>

                {/* Values & Objectives */}
                <div className="my-16">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4">Core Objectives & Values</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: "Equitable Care", desc: "Ensuring equal access to healthcare for all women" },
                      { title: "Affordable Services", desc: "Making quality healthcare financially accessible" },
                      { title: "Prevention-Focused", desc: "Promoting preventive care and early intervention" },
                      { title: "Women’s Choice", desc: "Respecting and supporting informed decisions" },
                      { title: "Accountability", desc: "Maintaining responsibility and ethical practices" },
                      { title: "Quality Healthcare", desc: "Upholding the highest standards of care" },
                      { title: "Financial Transparency", desc: "Ensuring openness in all financial matters" },
                    ].map((val, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                        <span className="w-6 h-6 rounded-full bg-[#E91E8C]/20 text-[#E91E8C] flex items-center justify-center font-bold text-xs shrink-0 mt-1">✓</span>
                        <div>
                          <h4 className="font-bold text-gray-900">{val.title}</h4>
                          <p className="text-sm text-gray-500">{val.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p>
                  At the heart of everything we do is our commitment to <strong>motherhood, safety, and happiness</strong>. Whether it is routine maternity care, high-risk pregnancy management, childbirth, or women’s wellness services, WCF Hospital remains a symbol of trust, excellence, and compassionate healthcare.
                </p>

                <p className="text-lg font-semibold text-[#6B2D8B]">
                  For 26 years, we have been privileged to be a part of countless families’ most precious moments, and we continue our journey with the same dedication toward creating healthier futures for women and their children.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#6B2D8B] to-[#ba98ce] py-16">
        <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Years of Trust", value: "26+" },
            { label: "Successful Deliveries", value: "50,000+" },
            { label: "Expert Doctors", value: "100+" },
            { label: "Happy Families", value: "1M+" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center text-white">
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-white/80 font-medium text-sm md:text-base uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
