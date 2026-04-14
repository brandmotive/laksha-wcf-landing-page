import React from 'react';
// import motherChildImage from '../../assets/images/mother_children_image.png?url';
import AboutUsImage from '../../assets/images/AboutUsImage.png'

const AboutUs: React.FC = () => {
  return (

    <section className="bg-white md:pt-10 flex justify-center" >
      <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row items-center gap-4 md:gap-12">
        {/* Content Section */}
        <div className="flex-1 text-left">

          <div className='flex flex-col gap-6'>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Best Maternity Hospital in Chennai
            </h2>

            <div className="flex flex-col gap-4 text-gray-700 leading-relaxed md:text-base">
              <p className='text-[13px]'>
                At <span className="font-bold">WCF Hospital – Health & Happiness</span>,
                we proudly celebrate 26 years of excellence in women’s healthcare and maternity services. For over two decades, we have been a trusted destination for expectant mothers and women seeking compassionate, high-quality medical care. Our hospital is dedicated to creating a safe, supportive, and empowering environment where every woman receives personalized attention throughout her healthcare journey.
              </p>

              <p className='text-[13px]'>
                Our vision is to provide the best quality healthcare for women, empowering them to lead healthier lives and contribute confidently to society. With a strong focus on maternity, gynecology, pregnancy care, childbirth, and postnatal wellness, we combine medical expertise with modern technology to ensure safe and effective treatment at every stage of womanhood. Under the leadership of Dr. D. Rajasekar, WCF Hospital continues to uphold the highest standards of excellence and patient-centered care.Our mission is to build a modern, technologically advanced, quality-assured, and self-regulated healthcare model that makes women’s healthcare accessible and affordable.
              </p>

              <p className='text-[13px]'>
                We strive to offer holistic and comprehensive care under one roof, ensuring preventive care, early intervention, and informed medical guidance. Every service is designed to support women with dignity, comfort, and confidence.At WCF Hospital, our goal is to deliver high-quality and affordable healthcare with complete transparency and accountability.We are committed to ensuring equal access to care, respecting women’s choices, promoting preventive health, and maintaining the highest ethical standards in every aspect of treatment. For 26 years, we have remained a symbol of trust, care, and excellence in maternity and women’s healthcare.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full h-[500px] flex justify-center">
          <img
            src={AboutUsImage}
            alt="Mother and Child"
            className="w-full max-w-md md:max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section >
  );
};

export default AboutUs;
