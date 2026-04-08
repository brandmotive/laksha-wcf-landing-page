export interface NavSubItem {
  label: string;
  slug: string;
  heroTagline: string; // One-line hero center content for the service page
  bgImage?: string;   // Optional: path or import for the hero background image
}

export interface NavItem {
  label: string;
  slug?: string;
  children?: NavSubItem[];
}

export const navMenu: NavItem[] = [
  {
    label: "Child Care",
    children: [
      { label: "Child Psychology",                   slug: "child-psychology",                   heroTagline: "Nurturing young minds with expert child psychology care." },
      { label: "Children's Nutrition",               slug: "childrens-nutrition",               heroTagline: "Fuelling healthy growth with the right nutrition for children." },
      { label: "General Pediatrics",                 slug: "general-pediatrics",                 heroTagline: "Comprehensive general pediatric care for every child." },
      { label: "Neonatal Intensive Care Unit",       slug: "neonatal-intensive-care-unit",       heroTagline: "Advanced neonatal care for the most vulnerable little ones." },
      { label: "Occupational Therapy",               slug: "occupational-therapy",               heroTagline: "Empowering children through therapeutic activities and skill-building." },
      { label: "Pediatric Allergy",                  slug: "pediatric-allergy",                  heroTagline: "Expert allergy diagnosis and management for children." },
      { label: "Pediatric Anesthesia",               slug: "pediatric-anesthesia",               heroTagline: "Safe and gentle anesthesia care tailored for children." },
      { label: "Pediatric Cardiology & Cardiac Surgery", slug: "pediatric-cardiology-cardiac-surgery", heroTagline: "World-class cardiac care to protect your child's heart." },
      { label: "Pediatric Dentistry",                slug: "pediatric-dentistry",                heroTagline: "Building healthy smiles with gentle pediatric dental care." },
      { label: "Pediatric Dermatology",              slug: "pediatric-dermatology",              heroTagline: "Expert skin care solutions designed for children of all ages." },
      { label: "Pediatric Endocrinology",            slug: "pediatric-endocrinology",            heroTagline: "Specialized hormonal and metabolic care for growing children." },
      { label: "Pediatric ENT & Airway",             slug: "pediatric-ent-airway",               heroTagline: "Exceptional ear, nose, throat and airway care for children." },
      { label: "Pediatric Infectious Disease",       slug: "pediatric-infectious-disease",       heroTagline: "Advanced infectious disease management for children's health." },
      { label: "Pediatric Orthopedics",              slug: "pediatric-orthopedics",              heroTagline: "Expert bone and joint care to keep children moving freely." },
      { label: "Pediatric Plastic Surgery",          slug: "pediatric-plastic-surgery",          heroTagline: "Precision reconstructive and cosmetic surgery for children." },
      { label: "Pediatric Urology",                  slug: "pediatric-urology",                  heroTagline: "Specialized urological care for children at every stage." },
      { label: "Physiotherapy & Rehabilitation",     slug: "physiotherapy-rehabilitation",       heroTagline: "Restoring strength and mobility with expert physiotherapy." },
      { label: "Radiology",                          slug: "radiology",                          heroTagline: "Advanced imaging and radiology services for accurate diagnosis." },
      { label: "Speech & Language Therapy",          slug: "speech-language-therapy",            heroTagline: "Helping children find their voice with expert therapy." },
    ],
  },
  {
    label: "Women Care",
    children: [
      { label: "Breast Care Clinic",                     slug: "breast-care-clinic",                     heroTagline: "Comprehensive breast health screening and care for women." },
      { label: "Breastfeeding Support",                  slug: "breastfeeding-support",                  heroTagline: "Expert guidance and support for a confident breastfeeding journey." },
      { label: "Childbirth Preparation Classes",         slug: "childbirth-preparation-classes",         heroTagline: "Empowering mothers with knowledge for a confident childbirth." },
      { label: "Diabetes in Women",                      slug: "diabetes-in-women",                      heroTagline: "Holistic diabetes management tailored for women's health." },
      { label: "Fetal Medicine",                         slug: "fetal-medicine",                         heroTagline: "Advanced fetal care ensuring the health of mother and baby." },
      { label: "General Medicine",                       slug: "general-medicine",                       heroTagline: "Comprehensive general medical care designed for women." },
      { label: "Gynecological Endoscopic Surgeries",     slug: "gynecological-endoscopic-surgeries",     heroTagline: "Minimally invasive gynecological surgeries with faster recovery." },
      { label: "High-Risk Pregnancy",                    slug: "high-risk-pregnancy",                    heroTagline: "Specialized care and monitoring for high-risk pregnancies." },
      { label: "Lactation",                              slug: "lactation",                              heroTagline: "Professional lactation support for new mothers and their babies." },
      { label: "Laparoscopic Surgeries",                 slug: "laparoscopic-surgeries",                 heroTagline: "Advanced laparoscopic surgeries for faster healing and recovery." },
      { label: "Menopause & Perimenopause",              slug: "menopause-perimenopause",                heroTagline: "Supportive care to help women navigate menopause confidently." },
      { label: "Minimally Invasive Surgery",             slug: "minimally-invasive-surgery",             heroTagline: "State-of-the-art minimally invasive surgeries for women's health." },
      { label: "Obstetrics & Gynecology",                slug: "obstetrics-gynecology",                  heroTagline: "Expert obstetric and gynecological care for every woman." },
      { label: "Painless Delivery & Labor",              slug: "painless-delivery-labor",                heroTagline: "Safe and comfortable delivery experience with expert pain management." },
      { label: "Pre-Pregnancy Health Checkup",           slug: "pre-pregnancy-health-checkup",           heroTagline: "Proactive health checkups to prepare you for motherhood." },
      { label: "Pregnancy & Delivery",                   slug: "pregnancy-delivery",                     heroTagline: "Expert care through every step of your pregnancy journey." },
      { label: "Urogynecology",                          slug: "urogynecology",                          heroTagline: "Specialized urogynecological care for pelvic health and wellness." },
      { label: "Vaginal Birth After Cesarean (VBAC)",    slug: "vaginal-birth-after-cesarean",           heroTagline: "Safe and supported VBAC for a natural birthing experience." },
      { label: "Well Women Check Up",                    slug: "well-women-check-up",                    heroTagline: "Regular wellness screenings to keep you at your healthiest." },
      { label: "Women Physiotherapy",                    slug: "women-physiotherapy",                    heroTagline: "Targeted physiotherapy care for women's strength and recovery." },
      { label: "Women Psychiatry",                       slug: "women-psychiatry",                       heroTagline: "Compassionate psychiatric care focused on women's mental health." },
      { label: "Women's Nutrition",                      slug: "womens-nutrition",                       heroTagline: "Personalized nutritional guidance to support women's wellbeing." },
    ],
  },
  { label: "Packages",   slug: "packages" },
  { label: "About Us",   slug: "about" },
  { label: "Blogs",      slug: "blogs" },
  {
    label: "Our Hospitals",
    children: [
      { label: "Anna Nagar, Chennai",          slug: "anna-nagar-chennai",          heroTagline: "World-class care at our Anna Nagar, Chennai hospital." },
      { label: "Bannerghatta Road, Bengaluru", slug: "bannerghatta-road-bengaluru", heroTagline: "Excellence in healthcare at Bannerghatta Road, Bengaluru." },
      { label: "Banjara Hills, Hyderabad",     slug: "banjara-hills-hyderabad",     heroTagline: "Trusted care at our Banjara Hills, Hyderabad hospital." },
      { label: "Hebbal, Bengaluru",            slug: "hebbal-bengaluru",            heroTagline: "Advanced medical services at Hebbal, Bengaluru." },
      { label: "Marathahalli, Bengaluru",      slug: "marathahalli-bengaluru",      heroTagline: "Comprehensive healthcare at Marathahalli, Bengaluru." },
    ],
  },
];
