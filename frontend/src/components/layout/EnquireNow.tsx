import { useNavigate } from "react-router-dom";
import { packages } from "../../data/packages";

export default function EnquireNow() {
  const navigate = useNavigate();

  const handlePackageClick = (id: string) => {
    navigate(`/package/${id}`);
  };

  return (
    <div className="fixed right-0 top-[80%] -translate-y-1/2 z-50 flex flex-col items-end font-sans">
      {/* Package Offers tab at the top */}
      <div className="bg-[#7E3FAB] text-white text-[8px] font-bold uppercase py-1 px-3 rounded-tl-lg mr-0 mb-[1px] tracking-widest shadow-md">
        Package Offers
      </div>

      <div className="bg-white border border-r-0 border-gray-200 rounded-l-2xl shadow-2xl overflow-hidden w-[85px] md:w-[100px] lg:w-[110px]">
        {packages.map((pkg, index) => (
          <button
            key={pkg.id}
            onClick={() => handlePackageClick(pkg.id)}
            className={`w-full group px-2 py-3 md:px-3 md:py-4 flex flex-col items-center text-center transition-all duration-300 hover:bg-gray-50 relative ${index !== packages.length - 1 ? "border-b border-gray-100" : ""
              }`}
          >
            {/* Minimal Package Indicator Color */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ backgroundColor: pkg.color.border }}
            />

            <span className="text-[9px] md:text-[10px] font-medium text-gray-500 uppercase tracking-tighter leading-tight mb-1">
              {pkg.shortTitle}
            </span>
            <span
              className="text-[11px] md:text-[13px] font-bold transition-colors"
              style={{ color: pkg.color.border }}
            >
              {pkg.price}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
