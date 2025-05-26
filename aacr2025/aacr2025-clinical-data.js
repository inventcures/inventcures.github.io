// Real AACR 2025 Clinical Trial Data
// Extracted from actual AACR abstracts

const aacr2025ClinicalTrials = [
  {
    trialName: "Pembrolizumab + SOC",
    company: "Merck",
    condition: "Head and neck squamous cell carcinoma",
    endpoint: "Event-free survival (EFS)",
    phase: "Phase 3",
    orr: null, // EFS was primary endpoint, not ORR
    sampleSize: 714, // 363 + 351 patients
    dataCutoff: "2024-07-25",
    aacrYear: 2025,
    cancerType: "Head and neck cancer",
    patientSubgroup: "Locally advanced resectable",
    abstractNumber: "CT001",
    presenters: ["Ravindra Uppaluri", "Robert I. Haddad"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: true,
    studyName: "KEYNOTE-689",
    primaryEndpointMet: true,
    efs_hr: 0.73, // HR for EFS in all patients
    mpr_rate_difference: 9.3 // Major pathological response rate difference
  },

  {
    trialName: "Pembrolizumab (ctDNA-directed)",
    company: "Merck",
    condition: "Mismatch repair deficient tumors",
    endpoint: "ctDNA clearance",
    phase: "Phase 2",
    orr: 85.0, // ctDNA clearance rate at 6 months
    sampleSize: 174, // Total screened with ctDNA status measured
    dataCutoff: "2024-11-01",
    aacrYear: 2025,
    cancerType: "Pan-cancer",
    patientSubgroup: "ctDNA-positive MMRd",
    abstractNumber: "CT002",
    presenters: ["Yelena Yuriy Janjigian", "Michael B. Foote"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false,
    studyName: "ctDNA-directed adjuvant therapy",
    primaryEndpointMet: true,
    ctdna_positive_patients: 22,
    treated_patients: 13
  },

  {
    trialName: "Olaparib + Pembrolizumab",
    company: "Merck/AstraZeneca",
    condition: "HRR-mutated/HRD-positive cancers",
    endpoint: "Objective response rate",
    phase: "Phase 2",
    orr: 27.3, // BRCAm cohort ORR
    sampleSize: 132, // BRCAm cohort
    dataCutoff: "2024-05-16",
    aacrYear: 2025,
    cancerType: "Pan-cancer",
    patientSubgroup: "BRCA-mutated",
    abstractNumber: "CT004",
    presenters: ["Timothy A. Yap", "Ronnie Shapira-Frommer"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: true,
    studyName: "KEYLYNK-007",
    primaryEndpointMet: true,
    median_dor_months: 19.1,
    median_pfs_months: 4.4
  },

  {
    trialName: "Olaparib + Pembrolizumab",
    company: "Merck/AstraZeneca", 
    condition: "Non-BRCA HRR-mutated cancers",
    endpoint: "Objective response rate",
    phase: "Phase 2",
    orr: 11.5, // Non-BRCA HRRm cohort ORR
    sampleSize: 104, // Non-BRCA HRRm cohort
    dataCutoff: "2024-05-16",
    aacrYear: 2025,
    cancerType: "Pan-cancer",
    patientSubgroup: "Non-BRCA HRR-mutated",
    abstractNumber: "CT004",
    presenters: ["Timothy A. Yap", "Ronnie Shapira-Frommer"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false,
    studyName: "KEYLYNK-007",
    primaryEndpointMet: false,
    median_dor_months: 8.3,
    median_pfs_months: 3.7
  },

  {
    trialName: "Olaparib + Pembrolizumab",
    company: "Merck/AstraZeneca",
    condition: "HRD-positive cancers",
    endpoint: "Objective response rate",
    phase: "Phase 2", 
    orr: 12.5, // Non-HRRm HRD cohort ORR
    sampleSize: 96, // Non-HRRm HRD cohort
    dataCutoff: "2024-05-16",
    aacrYear: 2025,
    cancerType: "Pan-cancer",
    patientSubgroup: "HRD-positive",
    abstractNumber: "CT004",
    presenters: ["Timothy A. Yap", "Ronnie Shapira-Frommer"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false,
    studyName: "KEYLYNK-007",
    primaryEndpointMet: false,
    median_dor_months: 11.5,
    median_pfs_months: 4.1
  },

  {
    trialName: "Zoldonrasib (RMC-9805)",
    company: "Revolution Medicines",
    condition: "KRAS G12D NSCLC",
    endpoint: "Objective response rate",
    phase: "Phase 1",
    orr: 61.0, // NSCLC patients at 1200mg QD
    sampleSize: 18, // NSCLC patients at 1200mg QD
    dataCutoff: "2024-12-02",
    aacrYear: 2025,
    cancerType: "Lung cancer",
    patientSubgroup: "KRAS G12D-mutated",
    abstractNumber: "CT019",
    presenters: ["Kathryn C. Arbour", "David S. Hong"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: true,
    studyName: "Phase 1 dose escalation",
    primaryEndpointMet: true,
    disease_control_rate: 89.0,
    median_time_to_response: 1.4,
    total_patients_all_doses: 211
  },

  {
    trialName: "Tiragolumab + Atezolizumab",
    company: "Genentech/Roche",
    condition: "PD-L1-high NSCLC",
    endpoint: "Progression-free survival and overall survival",
    phase: "Phase 3",
    orr: 45.8, // ORR in tira + atezo arm
    sampleSize: 262, // Primary analysis set tira + atezo
    dataCutoff: "2024-09-24",
    aacrYear: 2025,
    cancerType: "Lung cancer",
    patientSubgroup: "PD-L1-high (TPS ≥50%)",
    abstractNumber: "CT051",
    presenters: ["Solange Peters", "Roy Herbst"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false,
    studyName: "SKYSCRAPER-01",
    primaryEndpointMet: false, // Primary endpoints not met
    median_pfs_months: 7.0,
    median_os_months: 23.1,
    pfs_hr: 0.78,
    os_hr: 0.87,
    control_orr: 35.1, // Placebo + atezo arm ORR
    control_sampleSize: 259
  },

  {
    trialName: "Atezolizumab (control)",
    company: "Genentech/Roche",
    condition: "PD-L1-high NSCLC",
    endpoint: "Progression-free survival and overall survival",
    phase: "Phase 3",
    orr: 35.1, // ORR in placebo + atezo arm
    sampleSize: 259, // Primary analysis set placebo + atezo
    dataCutoff: "2024-09-24",
    aacrYear: 2025,
    cancerType: "Lung cancer",
    patientSubgroup: "PD-L1-high (TPS ≥50%)",
    abstractNumber: "CT051",
    presenters: ["Solange Peters", "Roy Herbst"],
    sessionType: "Clinical Trial",
    color: "#4d94ff", // Different color for control arm
    isHighlighted: false,
    studyName: "SKYSCRAPER-01 (Control)",
    primaryEndpointMet: false,
    median_pfs_months: 5.6,
    median_os_months: 16.9
  }
];

// Cancer types for filtering (extracted from real data)
const cancerTypesReal = [
  "Head and neck cancer",
  "Pan-cancer", 
  "Lung cancer"
];

// Companies/sponsors (extracted from real data)
const companiesReal = [
  "Merck",
  "AstraZeneca",
  "Revolution Medicines",
  "Genentech/Roche"
];

// Patient subgroups (extracted from real data)
const patientSubgroupsReal = [
  "Locally advanced resectable",
  "ctDNA-positive MMRd",
  "BRCA-mutated",
  "Non-BRCA HRR-mutated", 
  "HRD-positive",
  "KRAS G12D-mutated",
  "PD-L1-high (TPS ≥50%)"
];

export { 
  aacr2025ClinicalTrials, 
  cancerTypesReal, 
  companiesReal, 
  patientSubgroupsReal 
};