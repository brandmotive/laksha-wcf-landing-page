import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import { packages, type PackageData } from "../../data/packages";

const PackagesSection = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openPopup = (pkg: PackageData) => {
    setSelectedPackage(pkg);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => setSelectedPackage(null), 300); // clear after animation
  };

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPopupOpen]);

  const popupContent = (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${isPopupOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 transition-opacity duration-300"
        onClick={closePopup}
      />

      {/* Modal Container */}
      <div
        className={`relative bg-white w-[90%] md:w-auto md:min-w-[500px] md:max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform ${isPopupOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
          }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 shrink-0">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-[#6B2D8B]">
            {selectedPackage?.title}
          </h3>
          <button
            onClick={closePopup}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900 focus:outline-none shrink-0 ml-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar">
          <div className="mb-8">
            <span className="text-3xl md:text-4xl font-extrabold text-[#6B2D8B]">
              {selectedPackage?.price}
            </span>
          </div>

          <div className="space-y-6">
            {/* Exclusions */}
            {selectedPackage?.exclusions && selectedPackage.exclusions.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-800 text-[16px] md:text-[18px] mb-3">
                  Exclusions:
                </h4>
                <ul className="text-gray-600 text-[15px] space-y-2">
                  {selectedPackage.exclusions.map((exc, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-gray-400 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Inclusions */}
            <div>
              <h4 className="font-semibold text-gray-800 text-[16px] md:text-[18px] mb-3">
                {selectedPackage?.descriptionHeading}
              </h4>
              <ul className="text-gray-600 text-[15px] space-y-3">
                {selectedPackage?.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-[#E91E8C] text-[20px] leading-tight">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer — Buy Now + View Detail */}
        <div className="p-6 border-t border-gray-100 flex flex-wrap items-center justify-end gap-3 shrink-0">
          {/* View Detail */}
          <button
            onClick={() => {
              if (selectedPackage) {
                closePopup();
                navigate(`/package/${selectedPackage.id}`);
              }
            }}
            className="border-2 border-[#6B2D8B] text-[#6B2D8B] hover:bg-[#6B2D8B] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2"
          >
            View Detail
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
          {/* Buy Now */}
          <button
            onClick={() => { if (selectedPackage) navigate(`/package/${selectedPackage.id}`); }}
            className="bg-[#7E3FAB] hover:bg-[#6B2D8B] text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 shadow-md flex items-center gap-2"
          >
            Buy Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white flex justify-center pb-10">
      <div className="w-[90%] md:w-[80%] flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center w-full flex flex-col gap-3 md: mt-12 justify-between mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Our Care Packages
          </h2>
          <div className="flex justify-center flex-col items-center">
            <p className="text-gray-700 leading-relaxed text-sm md:text-[15px] max-w-2xl text-center">
              Comprehensive maternity care packages tailored for you and your baby's journey.
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              onClick={() => openPopup(pkg)}
              className="group flex flex-col bg-white rounded-2xl md:rounded-3xl transition-all duration-300 overflow-hidden cursor-pointer h-[380px] md:h-[420px] p-6 hover:-translate-y-2 relative"
              style={{
                border: `1.5px solid ${pkg.color.border}`,
                boxShadow: pkg.color.shadow,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = pkg.color.shadowHover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = pkg.color.shadow;
              }}
            >
              <div className="flex flex-col h-full">
                {/* Title and Icon */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-snug group-hover:text-[#6B2D8B] transition-colors pr-2">
                    {pkg.title}
                  </h3>
                  <div className="bg-[#fdf4fb] p-2.5 rounded-xl shrink-0 text-[#E91E8C] group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#6B2D8B]">{pkg.price}</span>
                </div>

                {/* Description Heading */}
                <h4 className="font-semibold text-gray-800 text-sm md:text-[15px] mb-3">
                  {pkg.descriptionHeading}
                </h4>

                {/* Points List */}
                <ul className="text-gray-600 text-sm md:text-[15px] space-y-2 flex-grow overflow-hidden">
                  {pkg.points.slice(0, 3).map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-[#E91E8C] text-[18px] leading-tight">•</span>
                      <span className="line-clamp-1">{point}</span>
                    </li>
                  ))}
                  {pkg.points.length > 3 && (
                    <li className="flex items-start text-gray-400">
                      <span className="mr-2">&nbsp;</span>
                      <span>.........</span>
                    </li>
                  )}
                </ul>

                {/* More Details link — opens popup */}
                <div
                  className="mt-auto flex items-center gap-1 text-[#6B2D8B] font-semibold text-sm md:text-[15px] group-hover:translate-x-1 transition-transform duration-300 cursor-pointer select-none"
                  onClick={(e) => { e.stopPropagation(); openPopup(pkg); }}
                >
                  More Details...
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Render Portal manually for the overlay to escape any transition/transform stacking context constraints */}
      {mounted && createPortal(popupContent, document.body)}
    </section>
  );
};

export default PackagesSection;
