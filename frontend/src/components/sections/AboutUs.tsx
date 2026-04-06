import React from 'react';
import motherChildImage from '../../assets/images/mother_children_image.png?url';

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
                <span className="font-bold">Best Maternity Hospital in Anna Nagar, Chennai</span>,
                In the bustling locality of Anna Nagar, Chennai, expectant mothers are fortunate
                to have access to one of the premier maternity hospitals in the region.
                Renowned for its exceptional care and state-of-the-art facilities,
                this establishment stands out as a beacon of excellence in maternal healthcare.
                Nestled within the vibrant community, it caters to the diverse needs of
                mothers-to-be with unwavering commitment and compassion.
              </p>

              <p className='text-[13px]'>
                At this distinguished maternity hospital, expectant mothers receive
                comprehensive care tailored to their individual needs. From prenatal
                consultations to postnatal support, the hospital offers a holistic
                approach to maternity care, ensuring the well-being of both mother
                and child at every stage of pregnancy and childbirth. The dedicated
                team of healthcare professionals, including obstetricians, nurses,
                and support staff, work tirelessly to provide personalized attention
                and guidance, fostering a nurturing environment where expectant
                mothers can feel reassured and empowered.
              </p>

              <p className='text-[13px]'>
                Moreover, the hospital's affiliation with Rainbow Children's Hospital,
                renowned for its expertise in pediatric care, further enhances its
                reputation as the best maternity hospital in Anna Nagar. This
                partnership ensures seamless continuity of care for both mother
                and baby, with access to specialized services and advanced medical
                interventions if needed. With a focus on innovation and excellence,
                coupled with a deep commitment to maternal and child health,
                this maternity hospital stands as a beacon of hope and support
                for families in Anna Nagar and beyond, embodying the highest
                standards of healthcare excellence in the field of obstetrics
                and gynecology.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full h-[500px] flex justify-center">
          <img
            src={motherChildImage}
            alt="Mother and Child"
            className="w-full max-w-md md:max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section >
  );
};

export default AboutUs;
