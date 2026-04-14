/**
 * Full content data for each care package detail page.
 * Keyed by package id (pkg-1, pkg-2, pkg-3).
 */

export interface WhyChoosePoint {
  heading: string;
  body: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PackageDetail {
  id: string;
  title: string;
  subtitle: string;          // e.g. "Safe Beginnings"
  price: string;
  tagColor: string;          // theme accent colour for this package
  gradientFrom: string;      // hero gradient start
  gradientTo: string;        // hero gradient end
  heroTagline: string;
  focus: string;
  philosophy: string;
  whyChoose: WhyChoosePoint[];
  exclusions: string[];
  facilities: string[];
  faqs: FAQ[];
}

export const packageDataMap: Record<string, PackageDetail> = {
  "pkg-1": {
    id: "pkg-1",
    title: "Inaugural Delivery Offer (Green Package)",
    subtitle: "Safe Beginnings",
    price: "₹29,999",
    tagColor: "#16a34a",
    gradientFrom: "#14532d",
    gradientTo: "#166534",
    heroTagline: "Expert care for a safe, dignified birthing experience — at an honest, inaugural price.",
    focus: "Accessibility without compromising safety.",
    philosophy:
      "We believe every mother deserves a safe, clinical, and dignified birthing experience. The Green Package is designed for families looking for high-quality medical expertise at an honest, inaugural price.",
    whyChoose: [
      {
        heading: "Expert Hands",
        body: "Even at our most affordable tier, you are monitored by senior consultants trained in British clinical protocols.",
      },
      {
        heading: "Focus on Health",
        body: "Designed for healthy, full-term pregnancies (37+ weeks) to ensure the safest possible delivery.",
      },
      {
        heading: "Safety Net",
        body: "Immediate access to our Level III NICU if your baby needs extra support after delivery.",
      },
    ],
    exclusions: [
      "Medicines: ₹10,000 (excluded)",
      "Baby charges: ₹5,000 (excluded)",
    ],
    facilities: [
      "Applicable for pregnancies above 37 weeks",
      "General Ward Room",
    ],
    faqs: [
      {
        question: "Who is this package designed for?",
        answer:
          "The Green Package is designed for healthy mothers with full-term pregnancies of 37 weeks or more. It is ideal for families seeking world-class medical expertise and a safe, dignified delivery at a transparent and accessible price.",
      },
      {
        question: "What do \"excluded\" charges mean?",
        answer:
          "Excluded charges are costs billed separately from the package fee. For this package, medicines (up to ₹10,000) and baby hospitalization charges (up to ₹5,000) are billed in addition to the package price, giving you full transparency with no hidden surprises.",
      },
      {
        question: "Is the NICU available if my baby needs extra care?",
        answer:
          "Absolutely. Even at this entry-level tier, you have immediate access to our fully equipped Level III NICU staffed with neonatologists around the clock. Your baby's safety is never compromised regardless of the package you choose.",
      },
      {
        question: "Can I upgrade to a higher package mid-pregnancy?",
        answer:
          "Yes, you can upgrade to the Purple or Pink Package at any stage of your pregnancy. Our team will guide you through a seamless transition, and any payments made towards the Green Package will be adjusted accordingly.",
      },
    ],
  },

  "pkg-2": {
    id: "pkg-2",
    title: "Single Room (Purple Package)",
    subtitle: "The Comfort Circle",
    price: "₹59,999",
    tagColor: "#6B2D8B",
    gradientFrom: "#3b0764",
    gradientTo: "#6B2D8B",
    heroTagline: "Privacy, convenience, and complete prenatal support — all in one package.",
    focus: "Privacy, convenience, and complete prenatal support.",
    philosophy:
      "Transitioning into motherhood should be stress-free. This package removes the \"hidden costs\" of pregnancy by including all your tests and scans from the day you conceive until the day you deliver.",
    whyChoose: [
      {
        heading: "Your Private Sanctuary",
        body: "A dedicated single room for you and your partner to bond with the baby in private, away from the ward.",
      },
      {
        heading: "All-Inclusive Prenatal",
        body: "No more paying for every blood test or ultrasound. Focus on your health, not the bills.",
      },
      {
        heading: "Ongoing Support",
        body: "We don't say goodbye at discharge. Enjoy 45 days of free postnatal check-ups to ensure your recovery is on track.",
      },
    ],
    exclusions: [
      "Medicines: ₹10,000 (excluded)",
      "Baby charges: ₹5,000 (excluded)",
    ],
    facilities: [
      "Complete antenatal care (conception to delivery)",
      "Free Blood Tests & ultrasounds",
      "Free CTG monitoring",
      "Free obstetric consultations",
      "IP hospitalization covered",
      "45 days postnatal free consultations",
    ],
    faqs: [
      {
        question: "Does this package cover all my prenatal tests and scans?",
        answer:
          "Yes, the Purple Package is designed to be all-inclusive for your prenatal journey. All blood tests, ultrasound scans, CTG monitoring sessions, and obstetric consultations from conception to delivery are covered at no additional cost.",
      },
      {
        question: "What is CTG monitoring and why is it important?",
        answer:
          "CTG (Cardiotocography) is a technique used to monitor your baby's heartbeat and uterine contractions simultaneously. It is a critical tool in assessing your baby's wellbeing, especially in the third trimester and during labour. This is included free of charge in the Purple Package.",
      },
      {
        question: "Are postnatal consultations truly free for 45 days?",
        answer:
          "Yes, absolutely. After discharge, you and your baby are entitled to complimentary postnatal check-up visits for 45 days. These cover newborn assessments, maternal recovery reviews, breastfeeding support, and more — all at no extra cost.",
      },
      {
        question: "Is a single room guaranteed throughout my hospital stay?",
        answer:
          "Yes, upon admission for delivery, a dedicated single private room is reserved for you. This ensures privacy and a comfortable environment for both you and your partner throughout your hospital stay.",
      },
    ],
  },

  "pkg-3": {
    id: "pkg-3",
    title: "Suite Room Pink Package",
    subtitle: "The Royal Arrival",
    price: "₹99,999",
    tagColor: "#E91E8C",
    gradientFrom: "#831843",
    gradientTo: "#be185d",
    heroTagline: "Ultimate luxury, a painless experience, and total financial transparency.",
    focus: "Ultimate luxury, painless experience, and total transparency.",
    philosophy:
      "This is our most prestigious offering. We've removed every possible worry — including the baby's hospital charges and the cost of pain management — so you can focus entirely on the joy of your new arrival.",
    whyChoose: [
      {
        heading: "Suite Living",
        body: "A spacious, luxury suite designed to feel like home, with premium amenities for you and your family.",
      },
      {
        heading: "Pain-Free Joy",
        body: "Includes Epidural / Painless delivery services as standard — no separate charges, no surprises.",
      },
      {
        heading: "Total Transparency",
        body: "With baby charges fully covered, you can plan your finances with 100% certainty and complete peace of mind.",
      },
      {
        heading: "The Full Journey",
        body: "Comprehensive care from conception right through the first 45 days of motherhood, all under one roof.",
      },
    ],
    exclusions: [
      "Medicines: ₹10,000 (excluded)",
    ],
    facilities: [
      "Complete antenatal care (conception to delivery)",
      "Free Blood tests & ultrasounds",
      "Free CTG monitoring",
      "Free obstetric consultations",
      "IP hospitalization covered",
      "45 days postnatal free consultations",
      "Baby charges included",
      "Painless delivery included",
    ],
    faqs: [
      {
        question: "What does \"painless delivery\" actually include?",
        answer:
          "Painless delivery refers to Epidural Analgesia — a safe and highly effective pain relief method administered by our anaesthesiology team during labour. In the Pink Package, this is included as standard at no additional cost, so you can experience the joy of childbirth comfortably and without fear.",
      },
      {
        question: "Are all my baby's hospital charges fully covered?",
        answer:
          "Yes, the Pink Package is the only tier that fully includes baby hospitalization charges within the package price. This covers your newborn's routine hospital stay, initial assessments, and paediatric check-ups — giving you complete financial certainty from day one.",
      },
      {
        question: "What luxury amenities does the suite include?",
        answer:
          "The premium suite is designed to feel less like a hospital and more like a boutique stay. It features a spacious private room with premium bedding, a dedicated family lounge area, enhanced catering options, and priority nursing attention — all to make your birthing experience truly royal.",
      },
      {
        question: "Is postnatal support included after discharge?",
        answer:
          "Yes, the Pink Package includes 45 days of complimentary postnatal consultations covering maternal recovery, newborn care, breastfeeding guidance, and early childhood assessments. We are with you every step of the way, even after you go home.",
      },
    ],
  },
};
