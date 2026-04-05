export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavSubItem[];
}

export const navMenu: NavItem[] = [
  {
    label: "Child Care",
    children: [
      { label: "Bone Marrow Transplant Unit", href: "#" },
      { label: "Cerebral Palsy Care", href: "#" },
      { label: "Child Psychiatry", href: "#" },
      { label: "Child Psychology", href: "#" },
      { label: "Children's Nutrition", href: "#" },
      { label: "CranioMaxillofacial Surgery", href: "#" },
      { label: "Developmental & Behavioral Pediatrics", href: "#" },
      { label: "General Pediatrics", href: "#" },
      { label: "Neonatal Intensive Care Unit", href: "#" },
      { label: "Occupational Therapy", href: "#" },
      { label: "Pediatric Allergy", href: "#" },
      { label: "Pediatric Anesthesia", href: "#" },
      { label: "Pediatric Audiology", href: "#" },
      { label: "Pediatric Cardiology", href: "#" },
      { label: "Pediatric Dermatology", href: "#" },
      { label: "Pediatric Endocrinology", href: "#" },
      { label: "Pediatric Gastroenterology", href: "#" },
      { label: "Pediatric Hematology", href: "#" },
      { label: "Pediatric Nephrology", href: "#" },
      { label: "Pediatric Neurology", href: "#" },
      { label: "Pediatric Oncology", href: "#" },
      { label: "Pediatric Ophthalmology", href: "#" },
      { label: "Pediatric Orthopedics", href: "#" },
      { label: "Pediatric Surgery", href: "#" },
      { label: "Pediatric Urology", href: "#" },
      { label: "Speech Therapy", href: "#" },
    ],
  },
  {
    label: "Women Care",
    children: [
      { label: "Gynecology", href: "#" },
      { label: "High Risk Pregnancy", href: "#" },
      { label: "Maternal Fetal Medicine", href: "#" },
      { label: "Menopause Clinic", href: "#" },
      { label: "Obstetrics", href: "#" },
      { label: "Uro-Gynecology", href: "#" },
    ],
  },
  {
    label: "Fertility Care",
    children: [
      { label: "IUI", href: "#" },
      { label: "IVF & ART", href: "#" },
      { label: "Donor Egg Program", href: "#" },
      { label: "Surrogacy", href: "#" },
      { label: "Fertility Preservation", href: "#" },
    ],
  },
  {
    label: "International Patients",
    href: "#",
  },
  {
    label: "Academics & Research",
    href: "#",
  },
  {
    label: "Investor Relations",
    children: [
      { label: "Annual Reports", href: "#" },
      { label: "Corporate Governance", href: "#" },
      { label: "Financial Results", href: "#" },
      { label: "Investor Presentations", href: "#" },
    ],
  },
  {
    label: "Our Hospitals",
    children: [
      { label: "Anna Nagar, Chennai", href: "#" },
      { label: "Bannerghatta Road, Bengaluru", href: "#" },
      { label: "Banjara Hills, Hyderabad", href: "#" },
      { label: "Hebbal, Bengaluru", href: "#" },
      { label: "Marathahalli, Bengaluru", href: "#" },
    ],
  },
];
