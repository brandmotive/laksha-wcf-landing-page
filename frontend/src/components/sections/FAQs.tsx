import React, { useState } from 'react';

const faqData = [
  {
    question: "What makes this maternity hospital stand out from others in Chennai?",
    answer: "Our maternity hospital offers state-of-the-art facilities, specialized maternal and fetal care, and a dedicated team of experienced obstetricians and pediatricians available 24/7."
  },
  {
    question: "What services does the maternity hospital offer for expectant mothers?",
    answer: "We offer comprehensive care ranging from preconception counseling, advanced fetal medicine, natural birthing options, to high-risk pregnancy management and postnatal support."
  },
  {
    question: "How does the hospital ensure the safety and well-being of expectant mothers and babies?",
    answer: "We employ cutting-edge medical equipment, strict infection control protocols, and maintain a highly trained multidisciplinary team ready to manage any emergency situations around the clock."
  },
  {
    question: "Can I expect personalized care and support throughout my pregnancy journey?",
    answer: "Absolutely. We believe every pregnancy is unique, and we tailor our care plans, birthing options, and postnatal care to perfectly match your individual health needs and preferences."
  }
  // },
  // {
  //   question: "What advantages does the hospital's affiliation with Rainbow Children's Hospital offer?",
  //   answer: "Our affiliation ensures seamless continuity of care. Newborns have immediate access to specialized neonatology and pediatric emergency care provided by one of the nation's leading children's hospitals."
  // }
];

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 md:py-16 flex justify-center">
      {/* 
        Mobile/Tab: w-full with some padding.
        Laptop+: w-[80%] max-w-4xl, centered via flex layout.
      */}
      <div className="w-full px-5 md:px-10 lg:px-0 lg:w-[80%] max-w-4xl flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center w-full mb-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-gray-900 tracking-wide">
            FAQs
          </h2>
        </div>

        {/* FAQs List */}
        <div className="w-full flex flex-col">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-transparent">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-3 md:py-4 text-left flex items-start md:items-center gap-2 md:gap-3 transition-colors duration-200 hover:text-black focus:outline-none"
                >
                  {/* Chevron Icon on the Left */}
                  <div className="mt-1 md:mt-0 shrink-0">
                    <svg
                      className={`w-[18px] h-[18px] text-gray-800 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Question Text */}
                  <span className={`text-[15px] md:text-base leading-snug ${isOpen ? 'text-black' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                </button>

                {/* Dropdown Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-6 pl-7 md:pl-8' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQs;
