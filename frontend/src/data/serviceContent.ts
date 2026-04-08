/**
 * Rich "About Disease / Service" content for each navbar sub-item.
 * Keyed by slug (matches navMenu.ts slugs).
 *
 * Structure per entry:
 *   sectionImage  — image shown on the LEFT of the about section
 *   overview      — 2–3 sentence paragraph
 *   symptoms      — bullet list
 *   causes        — bullet list
 *   treatment     — bullet list
 */

export interface ServiceAbout {
  sectionImage: string; // resolved from import — set in serviceImages.ts
  overview: string;
  symptoms: string[];
  causes: string[];
  treatment: string[];
}

// ── Raw content map (images injected in ServiceDetailPage.tsx) ─────────────────
export type ServiceContentMap = Record<
  string,
  Omit<ServiceAbout, "sectionImage">
>;

export const serviceContentMap: ServiceContentMap = {
  // ── Child Care ────────────────────────────────────────────────────────────
  "child-psychology": {
    overview:
      "Child psychology focuses on the mental, emotional, and social development of children from infancy through adolescence. Our specialists assess and treat a broad spectrum of behavioural and developmental challenges, helping children thrive at home, at school, and in their communities.",
    symptoms: [
      "Sudden changes in behaviour or mood",
      "Difficulty concentrating or completing tasks",
      "Social withdrawal or excessive clinginess",
      "Persistent anxiety, fears, or phobias",
      "Sleep disturbances or frequent nightmares",
      "Unexplained physical complaints (headaches, stomach-aches)",
    ],
    causes: [
      "Genetic predisposition or family history of mental health conditions",
      "Traumatic life events or environmental stressors",
      "Learning or developmental disorders (ADHD, autism spectrum)",
      "Parental conflict, separation, or loss",
      "Bullying or peer-relationship difficulties",
    ],
    treatment: [
      "Cognitive Behavioural Therapy (CBT) tailored to the child's age",
      "Play therapy and art-based interventions",
      "Parent-child interaction therapy and family counselling",
      "School-based support and psychoeducation",
      "Medication management when clinically indicated",
    ],
  },

  "childrens-nutrition": {
    overview:
      "Proper nutrition during childhood lays the foundation for lifelong health. Our paediatric nutritionists create personalised meal plans that meet each child's energy and micronutrient needs, addressing under-nutrition, obesity, food allergies, and feeding difficulties.",
    symptoms: [
      "Slow weight gain or unexplained weight loss",
      "Fatigue, weakness, or poor concentration",
      "Frequent infections due to low immunity",
      "Delayed growth or short stature",
      "Picky eating leading to nutritional gaps",
    ],
    causes: [
      "Inadequate or imbalanced dietary intake",
      "Food allergies or intolerances",
      "Underlying gastrointestinal disorders",
      "Socioeconomic barriers to access nutritious food",
      "Poor feeding practices in early childhood",
    ],
    treatment: [
      "Personalised diet plans and meal-prep guidance",
      "Micronutrient supplementation (iron, vitamin D, zinc)",
      "Allergy-friendly meal alternatives",
      "Feeding therapy for aversive or selective eaters",
      "Regular growth monitoring and follow-up",
    ],
  },

  "general-pediatrics": {
    overview:
      "General paediatrics covers the holistic health of children from birth to 18 years. Our paediatricians provide preventive care, immunisations, management of acute illnesses, and coordination of chronic disease treatment to ensure healthy development at every stage.",
    symptoms: [
      "Fever, cough, cold, or respiratory distress",
      "Ear infections and sore throat",
      "Rashes and skin irritations",
      "Vomiting, diarrhoea, or abdominal pain",
      "Developmental milestones not being met",
    ],
    causes: [
      "Viral and bacterial infections",
      "Environmental allergens and pollutants",
      "Nutritional deficiencies",
      "Genetic and hereditary conditions",
      "Lifestyle and hygiene factors",
    ],
    treatment: [
      "Evidence-based antibiotic and antiviral therapy",
      "Vaccination programmes per national schedule",
      "Chronic disease management (asthma, diabetes, epilepsy)",
      "Growth and developmental assessments",
      "Referrals to specialist paediatric departments as needed",
    ],
  },

  "neonatal-intensive-care-unit": {
    overview:
      "Our state-of-the-art NICU provides round-the-clock care for premature and critically ill newborns. A multidisciplinary team of neonatologists, neonatal nurses, and therapists work together to stabilise and nurture the most vulnerable infants.",
    symptoms: [
      "Premature birth (before 37 weeks gestation)",
      "Low birth weight (under 2.5 kg)",
      "Respiratory distress or apnoea",
      "Jaundice requiring phototherapy",
      "Feeding difficulties or necrotising enterocolitis",
    ],
    causes: [
      "Preterm labour or premature rupture of membranes",
      "Maternal complications (pre-eclampsia, infections)",
      "Congenital anomalies or chromosomal disorders",
      "Fetal growth restriction",
      "Multiple gestation pregnancies",
    ],
    treatment: [
      "Mechanical ventilation and CPAP respiratory support",
      "Total parenteral nutrition (TPN) and enteral feeding",
      "Phototherapy for neonatal jaundice",
      "Kangaroo Mother Care (KMC) to promote bonding and thermoregulation",
      "Surgical interventions for congenital defects",
    ],
  },

  "occupational-therapy": {
    overview:
      "Paediatric occupational therapy helps children develop the fine motor, sensory processing, and daily living skills they need to participate fully in school and home activities. Our therapists use play-based techniques to make every session engaging and effective.",
    symptoms: [
      "Difficulty with handwriting or scissors",
      "Sensory sensitivities (light, sound, textures)",
      "Poor coordination or balance",
      "Trouble dressing, eating, or self-care tasks",
      "Challenges with attention and classroom behaviour",
    ],
    causes: [
      "Developmental delays or autism spectrum disorder",
      "Cerebral palsy or neurological conditions",
      "Sensory processing disorder",
      "Premature birth or neonatal complications",
      "Acquired injuries or hospitalisation",
    ],
    treatment: [
      "Sensory integration therapy",
      "Fine and gross motor skill activities",
      "Handwriting Without Tears® programme",
      "Adaptive equipment training",
      "Home exercise programmes for parents",
    ],
  },

  "pediatric-allergy": {
    overview:
      "Paediatric allergy care diagnoses and manages allergic conditions that affect children's quality of life, from food allergies and eczema to asthma and hay fever. Early identification and treatment minimise complications and improve long-term outcomes.",
    symptoms: [
      "Skin rashes, hives, or eczema flares",
      "Runny nose, sneezing, or watery eyes",
      "Wheezing and difficulty breathing",
      "Anaphylaxis after food or insect exposure",
      "Persistent cough or recurrent ear infections",
    ],
    causes: [
      "Genetic predisposition to atopy",
      "Early exposure to allergens (dust mites, pet dander, pollen)",
      "Food triggers (nuts, milk, eggs, shellfish)",
      "Environmental pollutants and tobacco smoke",
      "Gut microbiome imbalance in early life",
    ],
    treatment: [
      "Allergen-specific immunotherapy (allergy shots / sublingual drops)",
      "Antihistamines and corticosteroid management",
      "Elimination diets and dietary reintroduction protocols",
      "Personalised anaphylaxis action plan and adrenaline auto-injector training",
      "Environmental control strategies",
    ],
  },

  "pediatric-cardiology-cardiac-surgery": {
    overview:
      "Our paediatric cardiology team manages a full spectrum of congenital and acquired heart conditions in children. Combining cutting-edge diagnostics with minimally invasive and open-heart surgical options, we deliver life-changing cardiac care from infancy through adulthood.",
    symptoms: [
      "Heart murmur detected at birth or check-up",
      "Cyanosis (bluish skin, lips, or fingertips)",
      "Rapid breathing or shortness of breath",
      "Poor feeding and failure to thrive in infants",
      "Fainting, chest pain, or exercise intolerance",
    ],
    causes: [
      "Congenital heart defects (VSD, ASD, TOF)",
      "Rheumatic fever leading to valvular disease",
      "Chromosomal syndromes (Down, Turner, Di George)",
      "Cardiomyopathies (dilated, hypertrophic)",
      "Arrhythmias and electrical conduction disorders",
    ],
    treatment: [
      "Echocardiography and cardiac MRI diagnostics",
      "Catheter-based interventions (balloon valvuloplasty, device closure)",
      "Open-heart surgery for complex defects",
      "Cardiac rhythm management (pacemakers, ablation)",
      "Long-term cardiology follow-up and lifestyle guidance",
    ],
  },

  // ── Women Care ────────────────────────────────────────────────────────────
  "breast-care-clinic": {
    overview:
      "Our Breast Care Clinic offers comprehensive screening, diagnosis, and treatment for all breast health concerns. From routine mammograms to complex surgical procedures, our expert team provides compassionate, personalised care at every step.",
    symptoms: [
      "New lump or thickening in the breast or underarm",
      "Changes in breast size, shape, or skin texture",
      "Nipple discharge or inversion",
      "Persistent breast pain or tenderness",
      "Redness, swelling, or warmth",
    ],
    causes: [
      "Genetic mutations (BRCA1/BRCA2)",
      "Hormonal imbalances or prolonged oestrogen exposure",
      "Family history of breast or ovarian cancer",
      "Lifestyle factors (obesity, alcohol, inactivity)",
      "Dense breast tissue making detection harder",
    ],
    treatment: [
      "Mammography, ultrasound, and MRI screening",
      "Image-guided biopsy (core needle, vacuum-assisted)",
      "Breast-conserving surgery (lumpectomy) or mastectomy",
      "Chemotherapy, radiation, and targeted hormone therapy",
      "Breast reconstruction and post-surgery rehabilitation",
    ],
  },

  "breastfeeding-support": {
    overview:
      "Breastfeeding is the gold standard of infant nutrition, yet many mothers face challenges. Our certified lactation consultants and breastfeeding counsellors provide hands-on guidance, emotional support, and evidence-based strategies for a successful and comfortable nursing journey.",
    symptoms: [
      "Difficulty latching or painful nursing",
      "Insufficient milk supply concerns",
      "Engorgement, blocked ducts, or mastitis",
      "Infant weight loss or poor feeding",
      "Cracked or bleeding nipples",
    ],
    causes: [
      "Poor latch technique or positioning",
      "Tongue-tie or lip-tie in the baby",
      "Hormonal challenges post-delivery",
      "Maternal anxiety or stress inhibiting let-down",
      "Medical conditions affecting milk production",
    ],
    treatment: [
      "One-on-one lactation consultation (in-person or virtual)",
      "Latch correction and feeding position optimisation",
      "Milk supply enhancement strategies",
      "Frenotomy referral for tongue or lip-tie",
      "Mastitis treatment and blocked duct management",
    ],
  },

  "lactation": {
    overview:
      "Professional lactation support empowers new mothers to provide the best nourishment for their babies. Our team of internationally board-certified lactation consultants (IBCLCs) offer personalised guidance from before birth through the entire nursing journey.",
    symptoms: [
      "Concern about adequate milk production",
      "Painful latching or sore nipples",
      "Baby fussiness or frequent hunger cues",
      "Breast engorgement or mastitis",
      "Difficulty transitioning between breast and bottle",
    ],
    causes: [
      "First-time motherhood and lack of breastfeeding education",
      "Baby's oral anatomy (tongue-tie, high palate)",
      "Maternal hormonal imbalances or prior breast surgery",
      "Stress, fatigue, or inadequate fluid intake",
      "Supplementation with formula disrupting supply",
    ],
    treatment: [
      "Antenatal breastfeeding education classes",
      "Immediate post-delivery skin-to-skin and latch support",
      "Personalised feeding plans and pumping schedules",
      "Donor milk guidance when clinically indicated",
      "Weaning support when the time is right",
    ],
  },

  "high-risk-pregnancy": {
    overview:
      "High-risk pregnancies require specialised monitoring and prompt intervention to protect both mother and baby. Our maternal-fetal medicine specialists work alongside obstetricians, neonatologists, and anaesthesiologists to provide seamless, comprehensive care throughout your pregnancy.",
    symptoms: [
      "Pre-existing conditions (diabetes, hypertension, heart disease)",
      "Multiple gestation (twins, triplets)",
      "Previous pregnancy complications or losses",
      "Abnormal screening results or fetal anomalies",
      "Severe morning sickness (hyperemesis gravidarum)",
    ],
    causes: [
      "Advanced maternal age (35+ years)",
      "Pre-existing chronic illness",
      "Obesity or extreme underweight",
      "Placental abnormalities (previa, accreta)",
      "Infections during pregnancy (TORCH, COVID-19)",
    ],
    treatment: [
      "Enhanced antenatal surveillance (serial ultrasounds, Doppler studies)",
      "Gestational diabetes management and dietitian support",
      "Hypertension and pre-eclampsia protocols",
      "Fetal monitoring (CTG, biophysical profile)",
      "Multidisciplinary team birth planning and NICU readiness",
    ],
  },

  "obstetrics-gynecology": {
    overview:
      "Our obstetrics and gynaecology department offers comprehensive care covering pregnancy, childbirth, and all aspects of women's reproductive health. With empathetic specialists and advanced technology, we provide personalised treatment at every life stage.",
    symptoms: [
      "Irregular or painful menstrual cycles",
      "Pelvic pain or pressure",
      "Abnormal vaginal discharge or bleeding",
      "Difficulty conceiving",
      "Pregnancy-related discomforts and complications",
    ],
    causes: [
      "Hormonal imbalances (PCOS, thyroid disorders)",
      "Endometriosis or fibroids",
      "Sexually transmitted infections",
      "Structural uterine or cervical abnormalities",
      "Age-related reproductive changes",
    ],
    treatment: [
      "Regular antenatal care and prenatal screenings",
      "Medical management of gynaecological conditions",
      "Minimally invasive laparoscopic and hysteroscopic surgeries",
      "Colposcopy and cervical cancer prevention",
      "Menopause management and HRT",
    ],
  },

  "pregnancy-delivery": {
    overview:
      "Our pregnancy and delivery programme supports mothers from the first trimester through a safe, positive birthing experience. Our team of obstetricians, midwives, and neonatal specialists ensures both mother and baby receive the highest level of care.",
    symptoms: [
      "Morning sickness and food aversions in early pregnancy",
      "Back pain, pelvic girdle discomfort",
      "Swelling of feet and ankles",
      "Braxton Hicks contractions",
      "Signs of labour: regular contractions, show, rupture of membranes",
    ],
    causes: [
      "Normal physiological changes of pregnancy",
      "Hormonal shifts affecting various body systems",
      "Postural changes as the uterus grows",
      "Foetal pressure on surrounding organs",
      "Nutritional and circulatory adaptations",
    ],
    treatment: [
      "Structured antenatal visits and trimester check-ups",
      "Birthing care plan (natural, water birth, caesarean)",
      "Pain management options including epidural analgesia",
      "Continuous intrapartum fetal monitoring",
      "Postnatal care including perineal healing and lactation support",
    ],
  },

  // ── Our Hospitals ─────────────────────────────────────────────────────────
  "anna-nagar-chennai": {
    overview:
      "Our Anna Nagar, Chennai facility is a flagship centre of excellence equipped with the latest medical technology. The hospital provides comprehensive child and women's healthcare services with a team of over 100 specialist doctors.",
    symptoms: [],
    causes: [],
    treatment: [
      "Advanced NICU and paediatric ICU facilities",
      "Dedicated women's health and fertility wing",
      "24×7 emergency and trauma care",
      "In-house imaging: MRI, CT, digital X-ray, DEXA",
      "Comfortable private and semi-private room categories",
    ],
  },

  "marathahalli-bengaluru": {
    overview:
      "The Marathahalli, Bengaluru hospital is strategically located to serve families across East Bengaluru. Built with a patient-first philosophy, it offers a full suite of paediatric, maternity, and women's care services under one roof.",
    symptoms: [],
    causes: [],
    treatment: [
      "Dedicated maternity suites and labour ward",
      "Level III NICU for critically ill newborns",
      "Minimally invasive gynaecological surgery programme",
      "Out-patient and telemedicine consultation services",
      "Pharmacy, lab, and radiology services on-site",
    ],
  },

  "hebbal-bengaluru": {
    overview:
      "Our Hebbal, Bengaluru campus blends compassionate care with cutting-edge infrastructure. It is home to specialist centres for fetal medicine, paediatric cardiology, and high-risk obstetrics, serving patients from across North Bengaluru.",
    symptoms: [],
    causes: [],
    treatment: [
      "Fetal medicine and prenatal diagnosis centre",
      "Paediatric cardiac surgery and ICU",
      "Fertility and IVF programme",
      "Robotic-assisted laparoscopic surgery",
      "Round-the-clock paediatric emergency services",
    ],
  },
};

/**
 * Fallback content used when a slug has no specific entry in the map.
 */
export const defaultServiceContent: Omit<ServiceAbout, "sectionImage"> = {
  overview:
    "Our specialist team provides world-class care for this condition. With advanced infrastructure, evidence-based protocols, and a compassionate approach, we ensure every patient receives the personalised treatment they deserve.",
  symptoms: [
    "Persistent or worsening symptoms related to the condition",
    "Functional limitations affecting daily life",
    "Complications arising from underlying causes",
    "Recurrent episodes despite previous treatment",
  ],
  causes: [
    "Genetic and hereditary factors",
    "Environmental and lifestyle contributors",
    "Underlying systemic health conditions",
    "Infectious or inflammatory triggers",
  ],
  treatment: [
    "Comprehensive diagnostic work-up and specialist consultation",
    "Individualised medical and surgical management",
    "Rehabilitation and follow-up care programme",
    "Patient and family education and support",
  ],
};
