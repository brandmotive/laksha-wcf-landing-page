export interface PackageData {
  id: string;
  title: string;
  shortTitle: string;
  price: string;
  descriptionHeading: string;
  points: string[];
  exclusions: string[];
  facilities: string[];
  color: {
    border: string;
    cardBg: string;
    shadow: string;
    shadowHover: string;
  };
  inPatientChargesCovered: string[];
}

export const packages: PackageData[] = [
  {
    id: "pkg-1",
    title: "Inaugural Delivery Offer",
    shortTitle: "(Green Package)",
    price: "₹29,999",
    descriptionHeading: "Facilities include:",
    exclusions: [
      "Medicines", //: ₹10,000 (excluded)
      "Baby charges", //: ₹5,000 (excluded)
      "Blood Reservation/Units"
    ],
    inPatientChargesCovered: [
      "Doctor's Fees",
      "Investigation",
      "OT Charges",
      "Medical Equipment Charges",
      "Post Operative Charges",
      "Labour Room",
      "Hospital Charges",
      "General Ward Room"
    ],
    facilities: [],
    points: [
      "Applicable for pregnancies above 37 weeks",
      "Standard Delivery Care",
      "Specialist Pediatric Support",
      "Nursing & Ward Care",
      "45 days postpartum period free consultations"
    ],
    color: {
      border: "#22c55e",
      cardBg: "#22c55e",
      shadow: "0 1px 3px 0 rgba(34,197,94,0.15)",
      shadowHover: "0 20px 40px -8px rgba(34,197,94,0.35), 0 0 0 2px rgba(34,197,94,0.25)",
    },
  },
  {
    id: "pkg-2",
    title: "Single Room",
    shortTitle: "(Purple Package)",
    price: "₹59,999",
    descriptionHeading: "Facilities include:",
    exclusions: [
      "Medicines: ₹10,000 (excluded)",
      "Baby charges: ₹5,000 (excluded)"
    ],
    inPatientChargesCovered: [
      "Doctor's Fees",
      "Investigation",
      "OT Charges",
      "Medical Equipment Charges",
      "Post Operative Charges",
      "Labour Room",
      "Hospital Charges",
      "General Ward Room"
    ],
    facilities: [],
    points: [
      "Complete antenatal care (conception to delivery)",
      "Free Blood Tests & ultrasounds",
      "Free CTG monitoring",
      "Free obstetric consultations",
      "IP hospitalization covered",
      "45 days postpartum period free consultations"
    ],
    color: {
      border: "#7E3FAB", //#7c3aed
      cardBg: "#7E3FAB",
      shadow: "0 1px 3px 0 rgba(124,58,237,0.15)",
      shadowHover: "0 20px 40px -8px rgba(124,58,237,0.35), 0 0 0 2px rgba(124,58,237,0.25)",
    },
  },
  {
    id: "pkg-3",
    title: "Suite Room",
    shortTitle: "(Pink Package)",
    price: "₹99,999",
    descriptionHeading: "Facilities include:",
    exclusions: [
      "Medicines: ₹10,000 (excluded)"
    ],
    inPatientChargesCovered: [
      "Doctor's Fees",
      "Investigation",
      "OT Charges",
      "Medical Equipment Charges",
      "Post Operative Charges",
      "Labour Room",
      "Hospital Charges",
      "General Ward Room"
    ],
    facilities: [],
    points: [
      "Complete antenatal care (conception to delivery)",
      "Free Blood tests & ultrasounds",
      "Free CTG monitoring",
      "Free obstetric consultations",
      "IP hospitalization covered",
      "45 days postpartum period free consultations",
      "Baby charges included",
      "Painless delivery included"
    ],
    color: {
      border: "#ec4899",
      cardBg: "#ec4899",
      shadow: "0 1px 3px 0 rgba(236,72,153,0.15)",
      shadowHover: "0 20px 40px -8px rgba(236,72,153,0.35), 0 0 0 2px rgba(236,72,153,0.25)",
    },
  }
];
