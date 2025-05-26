// Sample AACR Clinical Trial Dataset
// Generated based on the reference dashboard visualization

const clinicalTrialsData = [
  // Highlighted trial from reference
  {
    trialName: "Linvoseltamab",
    company: "Regeneron",
    condition: "Multiple myeloma",
    endpoint: "Primary endpoint",
    phase: "phase 2",
    orr: 71.00,
    sampleSize: 117,
    dataCutoff: "2023-09-08",
    aacrYear: 2024,
    cancerType: "CLL",
    patientSubgroup: "Relapsed/refractory",
    abstractNumber: "CT001",
    presenters: ["Dr. Smith", "Dr. Johnson"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: true
  },

  // Breast cancer trials
  {
    trialName: "Trastuzumab deruxtecan",
    company: "Daiichi Sankyo",
    condition: "HER2+ breast cancer",
    endpoint: "Primary endpoint",
    phase: "phase 3",
    orr: 95.5,
    sampleSize: 75,
    dataCutoff: "2024-01-15",
    aacrYear: 2024,
    cancerType: "Breast cancer",
    patientSubgroup: "HER2-positive",
    abstractNumber: "CT002",
    presenters: ["Dr. Chen", "Dr. Williams"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  },

  {
    trialName: "Pembrolizumab + chemotherapy",
    company: "Merck",
    condition: "Triple-negative breast cancer",
    endpoint: "Primary endpoint", 
    phase: "phase 3",
    orr: 64.8,
    sampleSize: 566,
    dataCutoff: "2023-12-01",
    aacrYear: 2024,
    cancerType: "Breast cancer",
    patientSubgroup: "Triple-negative",
    abstractNumber: "CT003",
    presenters: ["Dr. Davis", "Dr. Miller"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  },

  // Lung cancer trials
  {
    trialName: "Osimertinib",
    company: "AstraZeneca",
    condition: "EGFR+ NSCLC",
    endpoint: "Primary endpoint",
    phase: "phase 3",
    orr: 80.6,
    sampleSize: 279,
    dataCutoff: "2024-02-28",
    aacrYear: 2024,
    cancerType: "Lung cancer",
    patientSubgroup: "EGFR-positive",
    abstractNumber: "CT004",
    presenters: ["Dr. Thompson", "Dr. Garcia"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  },

  {
    trialName: "Nivolumab + ipilimumab",
    company: "Bristol Myers Squibb",
    condition: "Advanced NSCLC",
    endpoint: "Primary endpoint",
    phase: "phase 3",
    orr: 36.0,
    sampleSize: 583,
    dataCutoff: "2023-11-30",
    aacrYear: 2024,
    cancerType: "Lung cancer",
    patientSubgroup: "PD-L1 high",
    abstractNumber: "CT005",
    presenters: ["Dr. Rodriguez", "Dr. Lee"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  },

  // Melanoma trials
  {
    trialName: "Pembrolizumab",
    company: "Merck",
    condition: "Advanced melanoma",
    endpoint: "Primary endpoint",
    phase: "phase 3",
    orr: 42.0,
    sampleSize: 419,
    dataCutoff: "2024-01-31",
    aacrYear: 2024,
    cancerType: "Melanoma",
    patientSubgroup: "Treatment-naive",
    abstractNumber: "CT006",
    presenters: ["Dr. Anderson", "Dr. White"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  },

  // Pancreatic cancer trials
  {
    trialName: "FOLFIRINOX",
    company: "Multiple",
    condition: "Metastatic pancreatic cancer",
    endpoint: "Primary endpoint",
    phase: "phase 3",
    orr: 31.6,
    sampleSize: 342,
    dataCutoff: "2023-10-15",
    aacrYear: 2024,
    cancerType: "Pancreatic cancer",
    patientSubgroup: "Metastatic",
    abstractNumber: "CT007",
    presenters: ["Dr. Brown", "Dr. Taylor"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  },

  // Colorectal cancer trials
  {
    trialName: "Bevacizumab + FOLFOX",
    company: "Genentech",
    condition: "Metastatic colorectal cancer",
    endpoint: "Primary endpoint",
    phase: "phase 3",
    orr: 47.0,
    sampleSize: 1401,
    dataCutoff: "2024-03-01",
    aacrYear: 2024,
    cancerType: "Colorectal cancer",
    patientSubgroup: "RAS wild-type",
    abstractNumber: "CT008",
    presenters: ["Dr. Wilson", "Dr. Moore"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  },

  // CLL trials
  {
    trialName: "Ibrutinib + rituximab",
    company: "Janssen",
    condition: "Chronic lymphocytic leukemia",
    endpoint: "Primary endpoint",
    phase: "phase 3",
    orr: 82.7,
    sampleSize: 547,
    dataCutoff: "2023-12-15",
    aacrYear: 2024,
    cancerType: "CLL",
    patientSubgroup: "Treatment-naive",
    abstractNumber: "CT009",
    presenters: ["Dr. Jackson", "Dr. Martin"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  },

  // Gastric cancer trials
  {
    trialName: "Trastuzumab + chemotherapy",
    company: "Roche",
    condition: "HER2+ gastric cancer",
    endpoint: "Primary endpoint",
    phase: "phase 3",
    orr: 47.3,
    sampleSize: 594,
    dataCutoff: "2024-02-01",
    aacrYear: 2024,
    cancerType: "Gastric cancer",
    patientSubgroup: "HER2-positive",
    abstractNumber: "CT010",
    presenters: ["Dr. Clark", "Dr. Lewis"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  },

  // Ovarian cancer trials
  {
    trialName: "Olaparib maintenance",
    company: "AstraZeneca",
    condition: "BRCA-mutated ovarian cancer",
    endpoint: "Primary endpoint",
    phase: "phase 3",
    orr: 59.9,
    sampleSize: 391,
    dataCutoff: "2023-11-01",
    aacrYear: 2024,
    cancerType: "Ovarian cancer",
    patientSubgroup: "BRCA-mutated",
    abstractNumber: "CT011",
    presenters: ["Dr. Hall", "Dr. Young"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  },

  // Historical data from other years (blue dots in reference)
  {
    trialName: "Nivolumab",
    company: "Bristol Myers Squibb",
    condition: "Advanced melanoma",
    endpoint: "Primary endpoint",
    phase: "phase 3",
    orr: 31.7,
    sampleSize: 418,
    dataCutoff: "2022-08-15",
    aacrYear: 2023,
    cancerType: "Melanoma",
    patientSubgroup: "Previously treated",
    abstractNumber: "CT012",
    presenters: ["Dr. King", "Dr. Wright"],
    sessionType: "Clinical Trial",
    color: "#4d94ff",
    isHighlighted: false
  },

  {
    trialName: "Atezolizumab + bevacizumab",
    company: "Genentech",
    condition: "Hepatocellular carcinoma",
    endpoint: "Primary endpoint",
    phase: "phase 3",
    orr: 27.3,
    sampleSize: 501,
    dataCutoff: "2022-06-30",
    aacrYear: 2023,
    cancerType: "Gastric cancer",
    patientSubgroup: "Treatment-naive",
    abstractNumber: "CT013",
    presenters: ["Dr. Lopez", "Dr. Hill"],
    sessionType: "Clinical Trial",
    color: "#4d94ff",
    isHighlighted: false
  },

  {
    trialName: "Keytruda combination",
    company: "Merck",
    condition: "Advanced lung cancer",
    endpoint: "Primary endpoint",
    phase: "phase 2",
    orr: 56.0,
    sampleSize: 189,
    dataCutoff: "2022-12-01",
    aacrYear: 2023,
    cancerType: "Lung cancer",
    patientSubgroup: "PD-L1 positive",
    abstractNumber: "CT014",
    presenters: ["Dr. Green", "Dr. Adams"],
    sessionType: "Clinical Trial",
    color: "#4d94ff",
    isHighlighted: false
  },

  // Additional diverse data points to match reference visualization
  {
    trialName: "CAR-T therapy",
    company: "Novartis",
    condition: "B-cell lymphoma",
    endpoint: "Primary endpoint",
    phase: "phase 2",
    orr: 83.3,
    sampleSize: 111,
    dataCutoff: "2023-09-30",
    aacrYear: 2024,
    cancerType: "CLL",
    patientSubgroup: "Relapsed/refractory",
    abstractNumber: "CT015",
    presenters: ["Dr. Scott", "Dr. Turner"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  },

  {
    trialName: "ADC therapy",
    company: "Gilead",
    condition: "Advanced solid tumor",
    endpoint: "Primary endpoint",
    phase: "phase 1",
    orr: 22.0,
    sampleSize: 45,
    dataCutoff: "2024-01-01",
    aacrYear: 2024,
    cancerType: "Pancreatic cancer",
    patientSubgroup: "Heavily pretreated",
    abstractNumber: "CT016",
    presenters: ["Dr. Phillips", "Dr. Campbell"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  },

  {
    trialName: "Combination immunotherapy",
    company: "Moderna",
    condition: "Advanced breast cancer",
    endpoint: "Primary endpoint",
    phase: "phase 1",
    orr: 18.5,
    sampleSize: 54,
    dataCutoff: "2024-02-15",
    aacrYear: 2024,
    cancerType: "Breast cancer",
    patientSubgroup: "Triple-negative",
    abstractNumber: "CT017",
    presenters: ["Dr. Parker", "Dr. Evans"],
    sessionType: "Clinical Trial",
    color: "#ff9999",
    isHighlighted: false
  }
];

// Export for use in dashboard
export { clinicalTrialsData };