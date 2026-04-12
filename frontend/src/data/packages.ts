export interface PackageData {
  id: string;
  title: string;
  shortTitle: string;
  price: string;
  descriptionHeading: string;
  points: string[];
  exclusions: string[];
  color: {
    border: string;
    shadow: string;
    shadowHover: string;
  };
}

export const packages: PackageData[] = [
  {
    id: "pkg-1",
    title: "Inaugural Delivery Offer (Green Package)",
    shortTitle: "Green Package",
    price: "₹29,999",
    descriptionHeading: "Applicable for pregnancies above 37 weeks",
    exclusions: [
      "Medicines: ₹10,000 (excluded)",
      "Baby charges: ₹5,000 (excluded)"
    ],
    points: [
      "Medicines: ₹10,000 (excluded)",
      "Baby charges: ₹5,000 (excluded)",
    ],
    color: {
      border: "#22c55e",
      shadow: "0 1px 3px 0 rgba(34,197,94,0.15)",
      shadowHover: "0 20px 40px -8px rgba(34,197,94,0.35), 0 0 0 2px rgba(34,197,94,0.25)",
    },
  },
  {
    id: "pkg-2",
    title: "Single Room (Purple Package)",
    shortTitle: "Purple Package",
    price: "₹59,999",
    descriptionHeading: "Facilities include:",
    exclusions: [
      "Medicines: ₹10,000 (excluded)",
      "Baby charges: ₹5,000 (excluded)"
    ],
    points: [
      "Complete antenatal care (conception to delivery)",
      "Free Blood Tests & ultrasounds",
      "Free CTG monitoring",
      "Free obstetric consultations",
      "IP hospitalization covered",
      "45 days postnatal free consultations"
    ],
    color: {
      border: "#7c3aed",
      shadow: "0 1px 3px 0 rgba(124,58,237,0.15)",
      shadowHover: "0 20px 40px -8px rgba(124,58,237,0.35), 0 0 0 2px rgba(124,58,237,0.25)",
    },
  },
  {
    id: "pkg-3",
    title: "Suite Room Pink Package",
    shortTitle: "Pink Package",
    price: "₹99,999",
    descriptionHeading: "Facilities include:",
    exclusions: [
      "Medicines: ₹10,000 (excluded)"
    ],
    points: [
      "Complete antenatal care (conception to delivery)",
      "Free Blood tests & ultrasounds",
      "Free CTG monitoring",
      "Free obstetric consultations",
      "IP hospitalization covered",
      "45 days postnatal free consultations",
      "Baby charges included",
      "Painless delivery included"
    ],
    color: {
      border: "#ec4899",
      shadow: "0 1px 3px 0 rgba(236,72,153,0.15)",
      shadowHover: "0 20px 40px -8px rgba(236,72,153,0.35), 0 0 0 2px rgba(236,72,153,0.25)",
    },
  }
];
