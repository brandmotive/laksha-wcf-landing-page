import React from 'react';
import WCFVillivakkamImg from '../../assets/images/Hospitals/Wcf_Villivakam_Enhanced.png';
import LakshaHospitalImg from '../../assets/images/Hospitals/Laksha_Hospital.png';
import WCFKolathurImg from '../../assets/images/Hospitals/WCF_Kolathur.jpeg';



const hospitals = [
  {
    name: 'Laksha WCF Royapettah',
    image: LakshaHospitalImg,
    url: '#laksha-wcf-royapettah',
  },
  {
    name: 'WCF Villivakkam',
    image: WCFVillivakkamImg,
    url: '#wcf-villivakkam',
  },
  {
    name: 'WCF Kolathur',
    image: WCFKolathurImg,
    url: '#wcf-kolathur',
  },
];

const LeadingHospitals: React.FC = () => {
  return (
    <section className="bg-white py-5 md:py-10 flex justify-center">
      <div className="w-[90%] md:w-[80%] flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center w-full flex flex-col gap-5 justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Our Hospitals
          </h2>
          {/* Horizontal Line with Dot (Image 2 style) */}
          <div className="flex items-center justify-center gap-3 -mt-3">
            <span className="block w-12 h-[3px] bg-[#E91E8C] rounded-full" />
            <span className="block w-3 h-3 rounded-full bg-[#E91E8C]" />
            <span className="block w-12 h-[3px] bg-[#E91E8C] rounded-full" />
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className="text-gray-700 leading-relaxed text-sm md:text-[15px] max-w-4xl text-center pb-8 border-b border-gray-200">
              Our Hospital stands as a testament to the hospital's continual
              pursuit of excellence and innovation, providing specialized care for women and children.
            </p>
          </div>
        </div>

        {/* Hospital Cards Section */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {hospitals.map((hospital, index) => (
            <a
              key={index}
              href={hospital.url}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden group block shadow-md hover:shadow-2xl transition-all duration-300 h-[280px] md:h-[450px]"
            >
              {/* Background Image */}
              <img
                src={hospital.image}
                alt={hospital.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end">
                <div className="p-4 md:p-6 w-full flex justify-between items-center text-white">
                  <span className="font-medium text-sm sm:text-base md:text-xl tracking-wide">{hospital.name}</span>

                  {/* Animated Arrow Icon */}
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white transform group-hover:translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadingHospitals;
