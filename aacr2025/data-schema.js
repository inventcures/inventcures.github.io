// AACR Clinical Trial Results Data Schema
// Based on the reference dashboard at aacr.convoke.bio

const clinicalTrialSchema = {
  // Core trial identification
  trialName: String,           // e.g., "Linvoseltamab"
  company: String,             // e.g., "Regeneron"
  condition: String,           // e.g., "Multiple myeloma"
  endpoint: String,            // e.g., "Primary endpoint"
  phase: String,               // e.g., "phase 2"
  
  // Results data
  orr: Number,                 // Objective Response Rate (%) - Y-axis
  sampleSize: Number,          // Sample Size - X-axis
  dataCutoff: String,          // e.g., "2023-09-08"
  aacrYear: Number,            // e.g., 2024
  
  // Categorization
  cancerType: String,          // e.g., "Breast cancer", "Lung cancer", etc.
  patientSubgroup: String,     // For filtering by patient subgroup
  
  // Additional metadata
  abstractNumber: String,      // AACR abstract reference
  presenters: Array,           // List of presenting authors
  sessionType: String,         // e.g., "Clinical Trial", "Late Breaking"
  
  // Visual representation
  color: String,               // For chart visualization (based on year)
  isHighlighted: Boolean       // For featured trials
};

// Cancer types available for filtering (based on reference dashboard)
const cancerTypes = [
  "Breast cancer",
  "Lung cancer", 
  "Melanoma",
  "Pancreatic cancer",
  "Colorectal cancer",
  "CLL",
  "Gastric cancer",
  "Ovarian cancer"
];

// AACR years for filtering
const aacrYears = [2022, 2023, 2024, 2025];

// Sample data structure for visualization
const sampleTrialData = {
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
  color: "#ff6b6b", // Red for 2024 data
  isHighlighted: true
};

export { clinicalTrialSchema, cancerTypes, aacrYears, sampleTrialData };