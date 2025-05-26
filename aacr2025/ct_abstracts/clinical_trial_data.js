// Clinical Trial Metadata Extracted from AACR 2025 Abstracts
const clinicalTrialData = [
  // CT001 - KEYNOTE-689
  {
    abstractNumber: "CT001",
    trialName: "KEYNOTE-689",
    drug: "Pembrolizumab",
    company: "Merck/MSD",
    cancerType: "Head and neck cancer",
    trialPhase: "Phase 3",
    primaryEndpoint: "Event-free survival (EFS)",
    objResponseRate: null, // mPR rate difference reported instead
    sampleSize: 714, // 363 + 351 randomized
    patientPopulation: "Resectable locally advanced HNSCC",
    dataCutoff: "July 25, 2024",
    studyName: "KEYNOTE-689",
    medianFollowUp: 38.3,
    medianEFS_treatment: 59.7, // months for CPS ≥10
    medianEFS_control: 26.9, // months for CPS ≥10
    mPR_rate_difference: 13.7 // % for CPS ≥10
  },

  // CT002 - ctDNA-directed immunotherapy
  {
    abstractNumber: "CT002", 
    trialName: "Circulating tumor DNA status to direct adjuvant immunotherapy",
    drug: "Pembrolizumab",
    company: "Memorial Sloan Kettering",
    cancerType: "Pan-cancer",
    trialPhase: "Phase 2", // prospective clinical study
    primaryEndpoint: "ctDNA clearance at 6 months",
    objResponseRate: null, // Not applicable for adjuvant setting
    sampleSize: 303, // screened, 174 measured, 22 ctDNA positive, 52 ctDNA negative
    patientPopulation: "Resected early-stage MMRd solid tumors",
    dataCutoff: null,
    studyName: null,
    medianFollowUp: 32.1,
    ctDNA_clearance_rate: 85, // 11/13 patients achieved clearance
    recurrence_rate_treated: 38, // 5/13 in treated group
    recurrence_rate_untreated: 100 // 9/9 in untreated group
  },

  // CT004 - KEYLYNK-007
  {
    abstractNumber: "CT004",
    trialName: "KEYLYNK-007", 
    drug: "Olaparib + Pembrolizumab",
    company: "Merck/AstraZeneca",
    cancerType: "Ovarian cancer",
    trialPhase: "Phase 2",
    primaryEndpoint: "Objective response rate (ORR)",
    objResponseRate: 27, // BRCAm cohort
    sampleSize: 332, // 132 BRCAm + 104 non-BRCA HRRm + 96 non-HRRm HRD
    patientPopulation: "HRRm or HRD+ advanced solid tumors",
    dataCutoff: "May 16, 2024",
    studyName: "KEYLYNK-007",
    medianFollowUp_BRCAm: 13.4,
    medianFollowUp_nonBRCA: 10.4,
    medianFollowUp_HRD: 10.8,
    ORR_BRCAm: 27.3,
    ORR_nonBRCA_HRRm: 11.5,
    ORR_nonHRRm_HRD: 12.5,
    medianOS_BRCAm: 14.0,
    medianOS_nonBRCA: 10.4,
    medianOS_HRD: 10.8
  },

  // CT008 - SYS6010
  {
    abstractNumber: "CT008",
    trialName: "SYS6010 First-in-Human Study",
    drug: "SYS6010 (EGFR-targeting ADC)",
    company: null, // Not clearly specified
    cancerType: "Lung cancer",
    trialPhase: "Phase 1",
    primaryEndpoint: "Safety, MTD, RP2D",
    objResponseRate: 32.8,
    sampleSize: 232,
    patientPopulation: "Advanced solid tumors, failed standard treatment",
    dataCutoff: "December 26, 2024",
    studyName: null,
    medianPriorLines: 3,
    ORR_overall: 32.8,
    ORR_high_dose: 39.1, // ≥4.8 mg/kg
    ORR_EGFR_mutant_NSCLC: 50, // nsq-NSCLC in ≥4.8 mg/kg
    ORR_EGFR_TKI_resistant: 90, // 9/10 patients
    DCR_overall: 86.2,
    DCR_high_dose: 78.3
  },

  // CT009 - SHR-A1811 HORIZON-Lung
  {
    abstractNumber: "CT009",
    trialName: "HORIZON-Lung",
    drug: "SHR-A1811 (HER2-directed ADC)",
    company: null, // Not clearly specified
    cancerType: "Lung cancer",
    trialPhase: "Phase 2",
    primaryEndpoint: "Objective response rate (ORR)",
    objResponseRate: 74.5,
    sampleSize: 94,
    patientPopulation: "Advanced HER2-mutant NSCLC, previously treated",
    dataCutoff: "December 14, 2024", 
    studyName: "HORIZON-Lung",
    medianFollowUp: 14.2,
    ORR_IRC: 74.5,
    ORR_INV: 68.1,
    medianDoR: 9.8,
    medianPFS: 11.5,
    OS_12mo_rate: 88.2,
    DCR: 98.9,
    medianPriorLines: 2,
    patients_with_BM: 25.5 // % with brain metastases
  },

  // CT019 - Zoldonrasib
  {
    abstractNumber: "CT019",
    trialName: "Zoldonrasib Phase 1 Study",
    drug: "Zoldonrasib (RMC-9805)",
    company: "Revolution Medicines",
    cancerType: "Lung cancer",
    trialPhase: "Phase 1",
    primaryEndpoint: "Safety and tolerability",
    objResponseRate: 61,
    sampleSize: 211, // total enrolled, 18 NSCLC at 1200mg QD
    patientPopulation: "Previously treated KRAS G12D solid tumors",
    dataCutoff: "December 2, 2024",
    studyName: null,
    ORR_NSCLC_1200mg: 61, // in NSCLC cohort receiving 1200mg QD
    DCR_NSCLC_1200mg: 89,
    medianTimeToResponse: 1.4, // months
    sampleSize_NSCLC_1200mg: 18, // NSCLC patients at 1200mg QD dose
    dose_range: "150-1200 mg daily",
    recommendedPhase2Dose: "1200 mg QD"
  },

  // CT051 - SKYSCRAPER-01
  {
    abstractNumber: "CT051",
    trialName: "SKYSCRAPER-01",
    drug: "Tiragolumab + Atezolizumab",
    company: "Genentech/Roche",
    cancerType: "Lung cancer",
    trialPhase: "Phase 3",
    primaryEndpoint: "Progression-free survival (PFS) and Overall survival (OS)",
    objResponseRate: 45.8, // treatment arm
    sampleSize: 534, // 266 + 268
    patientPopulation: "Previously-untreated PD-L1-high locally advanced/metastatic NSCLC",
    dataCutoff: "September 24, 2024",
    studyName: "SKYSCRAPER-01",
    medianFollowUp: 17.9,
    ORR_treatment: 45.8,
    ORR_control: 35.1,
    medianPFS_treatment: 7.0,
    medianPFS_control: 5.6,
    medianOS_treatment: 23.1,
    medianOS_control: 16.9,
    medianDoR_treatment: 18.0,
    medianDoR_control: 14.6,
    primaryEndpointsMet: false // Study did not meet primary endpoints
  },

  // CT003 - Dostarlimab neoadjuvant study
  {
    abstractNumber: "CT003",
    trialName: "Non operative management of mismatch repair deficient tumors",
    drug: "Dostarlimab",
    company: "GSK",
    cancerType: "Colorectal cancer",
    trialPhase: "Phase 2", // prospective study
    primaryEndpoint: "Response rate and durability of complete response",
    objResponseRate: 81, // 81% achieved clinical complete response (79/97)
    sampleSize: 110, // enrolled, 97 completed treatment
    patientPopulation: "Early stage MMRd solid tumors eligible for curative surgery",
    dataCutoff: null,
    studyName: null,
    medianFollowUp_rectal: 24.8, // for rectal cancer cohort
    cohort1_CCR_rate: 100, // rectal cancers (48/48)
    cohort2_CCR_rate: 63, // non-rectal tumors (31/49)
    overall_CCR_rate: 81, // all patients (79/97)
    nonOperativeManagement_rate: 79 // 77/97 managed non-operatively
  },

  // CT010 - JS107
  {
    abstractNumber: "CT010",
    trialName: "JS107 Phase I Study",
    drug: "JS107 (CLDN18.2-targeting ADC)",
    company: null, // Not clearly specified
    cancerType: "Gastric cancer",
    trialPhase: "Phase 1",
    primaryEndpoint: "Safety",
    objResponseRate: 34.8, // monotherapy in CLDN18.2-high GC/GEJ
    sampleSize: 90, // 63 Part A + 27 Part B
    patientPopulation: "Advanced solid tumors refractory to standard therapies",
    dataCutoff: "January 7, 2025",
    studyName: null,
    ORR_monotherapy_CLDN18high: 34.8, // 8/23 patients
    ORR_combination_CLDN18high: 78.6, // 11/14 patients in Part B
    medianPFS_monotherapy: 4.11,
    patients_partA: 63,
    patients_partB: 27,
    MTD_monotherapy: "Not reached",
    MTD_combination: "2.5 mg/kg"
  },

  // CT011 - Penpulimab AK105-304
  {
    abstractNumber: "CT011",
    trialName: "AK105-304",
    drug: "Penpulimab + Chemotherapy",
    company: "Akeso",
    cancerType: "Head and neck cancer",
    trialPhase: "Phase 3",
    primaryEndpoint: "Progression-free survival (PFS)",
    objResponseRate: 68.1, // treatment arm
    sampleSize: 291, // 144 + 147
    patientPopulation: "Previously untreated R/M NPC",
    dataCutoff: "April 29, 2024",
    studyName: "AK105-304",
    medianFollowUp: 19.1,
    ORR_treatment: 68.1,
    ORR_control: 63.9,
    medianPFS_treatment: 9.6,
    medianPFS_control: 7.0,
    medianDoR_treatment: 9.8,
    medianDoR_control: 5.7,
    OS_immature: true // OS not mature
  },

  // CT050 - Zongertinib Beamion LUNG-1
  {
    abstractNumber: "CT050",
    trialName: "Beamion LUNG-1",
    drug: "Zongertinib",
    company: "Boehringer Ingelheim",
    cancerType: "Lung cancer",
    trialPhase: "Phase 1b",
    primaryEndpoint: "Objective response rate (ORR)",
    objResponseRate: 71, // Cohort 1 TKD mutations
    sampleSize: 126, // 75 + 20 + 31 across cohorts
    patientPopulation: "Pretreated HER2-mutant advanced/metastatic NSCLC",
    dataCutoff: "November 29, 2024",
    studyName: "Beamion LUNG-1",
    ORR_cohort1_TKD: 71, // Cohort 1 (TKD mutations)
    ORR_cohort3_nonTKD: 30, // Cohort 3 (non-TKD mutations)
    ORR_cohort5_postADC: 48, // Cohort 5 (post-ADC treatment)
    DCR_cohort1: 96,
    DCR_cohort3: 65,
    DCR_cohort5: 97,
    medianDoR_cohort1: 14.1,
    medianPFS_cohort1: 12.4,
    medianDoR_cohort5: 5.3,
    medianPFS_cohort5: 6.8
  },

  // CT052 - JYP0322
  {
    abstractNumber: "CT052",
    trialName: "JYP0322 Phase I Study",
    drug: "JYP0322 (ROS1 inhibitor)",
    company: null, // Not clearly specified
    cancerType: "Lung cancer",
    trialPhase: "Phase 1",
    primaryEndpoint: "Safety, pharmacokinetics, and preliminary efficacy",
    objResponseRate: 85.7, // TKI-naive patients
    sampleSize: 73, // total enrolled, 58 efficacy evaluable
    patientPopulation: "Locally advanced or metastatic ROS1+ NSCLC",
    dataCutoff: "December 10, 2024",
    studyName: null,
    ORR_TKI_naive: 85.7, // 12/14 patients
    ORR_pretreated_2L: 54.5, // 12/22 patients with ≥2L therapy
    ORR_G2032R_mutant: 71.4, // 5/7 patients
    ORR_intracranial: 33.3, // 2/6 with brain metastases
    DCR_G2032R: 100,
    DCR_pretreated_2L: 81.8,
    DCR_intracranial: 83.3,
    brainPlasmaRatio: 1.20,
    doseRange: "50mg qd to 150mg tid"
  },

  // CT053 - AENEAS2
  {
    abstractNumber: "CT053",
    trialName: "AENEAS2",
    drug: "Aumolertinib + Chemotherapy",
    company: "Hansoh Pharma",
    cancerType: "Lung cancer",
    trialPhase: "Phase 3",
    primaryEndpoint: "Progression-free survival (PFS)",
    objResponseRate: null, // Not reported in abstract
    sampleSize: 624, // 310 + 314
    patientPopulation: "Treatment-naive locally advanced or metastatic EGFR-mutant NSCLC",
    dataCutoff: "June 18, 2024",
    studyName: "AENEAS2",
    medianFollowUp: 23.4,
    medianPFS_combination: 28.9,
    medianPFS_monotherapy: 18.9,
    HR_PFS: 0.471, // p<0.0001
    OS_immature: true, // 21.6% event rate
    HR_OS: 0.442, // p<0.0001
    grade3Plus_AE_combination: 75.7,
    grade3Plus_AE_monotherapy: 23.7,
    discontinuation_combination: 3.0,
    discontinuation_monotherapy: 1.3
  },

  // CT126 - ARTS
  {
    abstractNumber: "CT126",
    trialName: "ARTS",
    drug: "Aumolertinib (adjuvant)",
    company: "Hansoh Pharma",
    cancerType: "Lung cancer",
    trialPhase: "Phase 3",
    primaryEndpoint: "Disease-free survival (DFS)",
    objResponseRate: null, // Not applicable for adjuvant setting
    sampleSize: 214, // 107 + 107
    patientPopulation: "Stage II-IIIB EGFR-mutant NSCLC after complete resection",
    dataCutoff: "April 15, 2024",
    studyName: "ARTS",
    medianFollowUp: 27.6,
    medianDFS_treatment: "Not reached",
    medianDFS_control: 19.4,
    HR_DFS: 0.166, // p<0.0001
    DFS_2year_treatment: 88.2,
    DFS_2year_control: 40.6,
    OS_immature: true, // <4% events
    treatment_duration: "3 years",
    setting: "adjuvant"
  },

  // CT264 - mKRAS-VAX
  {
    abstractNumber: "CT264",
    trialName: "mKRAS-VAX Phase I Study",
    drug: "mKRAS-VAX + Ipilimumab/Nivolumab",
    company: "Johns Hopkins",
    cancerType: "Colorectal cancer",
    trialPhase: "Phase 1",
    primaryEndpoint: "Safety and mKRAS-specific T cell response",
    objResponseRate: 8.3, // 1/12 partial response
    sampleSize: 12,
    patientPopulation: "Heavily pretreated MMRp/MSS CRC with KRAS mutations",
    dataCutoff: "December 13, 2024",
    studyName: null,
    T_cell_response_rate: 75, // 8/12 patients
    DCR: 41.7, // 5/12 patients
    medianPFS: 3.7,
    medianOS: 24.9,
    liver_metastases_response: 29, // 2/7 patients with liver mets had shrinkage
    grade3Plus_irAE: 25, // 3/12 patients
    KRAS_mutations_targeted: ["G12D", "G13D", "G12V", "G12C", "G12A", "G12R"]
  }
];

// Export for use in dashboard
if (typeof module !== 'undefined' && module.exports) {
  module.exports = clinicalTrialData;
}