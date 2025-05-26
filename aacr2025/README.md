# AACR 2025 Clinical Trial Results Dashboard

Interactive dashboard visualizing objective response rates from clinical trials reported at AACR 2025, featuring real-time visitor tracking and analytics.

## Overview

This dashboard presents clinical trial results extracted from AACR 2025 abstracts, featuring:

- **15 clinical trials** with comprehensive data
- **Interactive scatter plot** showing ORR vs Sample Size
- **Filtering capabilities** by cancer type, trial phase, and company
- **Real-time tooltips** with detailed trial information
- **Visitor tracking** with world map and analytics
- **Google Analytics integration** for professional insights
- **Responsive design** for all device sizes

## Data Sources

All data is extracted from official AACR 2025 clinical trial abstracts including:

### Featured Trials
- **KEYNOTE-689** (CT001): Pembrolizumab in head & neck cancer (Phase 3, N=714)
- **KEYLYNK-007** (CT004): Olaparib + Pembrolizumab tumor-agnostic trial (Phase 2, N=332)
- **Zoldonrasib** (CT019): KRAS G12D inhibitor (Phase 1, ORR=61%)
- **HORIZON-Lung** (CT009): HER2 ADC in NSCLC (Phase 2, ORR=74.5%)
- **SKYSCRAPER-01** (CT051): Tiragolumab + Atezolizumab (Phase 3, N=534)

### Cancer Types Covered
- Non-small cell lung cancer (NSCLC)
- Head and neck squamous cell carcinoma
- Colorectal cancer
- Mismatch repair deficient tumors
- HER2-mutant cancers
- ROS1+ cancers
- And more...

## Features

### Interactive Visualization
- **Scatter Plot**: ORR (%) vs Sample Size with hover details
- **Dynamic Filtering**: Filter by cancer type, trial phase, or company
- **Sidebar Navigation**: Quick cancer type selection
- **Responsive Tooltips**: Detailed trial information on hover

### Data Metrics
- **Response Rates**: ORR from 8.3% to 85.7%
- **Sample Sizes**: 12 to 714 patients
- **Trial Phases**: Phase 1, 2, and 3 studies
- **Multiple Endpoints**: ORR, PFS, OS, DFS data included

## File Structure

```
aacr2025/
├── index.html                     # Main dashboard page
├── styles.css                     # Styling and responsive design
├── dashboard.js                   # Interactive functionality
├── ct_abstracts/
│   ├── clinical_trial_data.js     # Extracted trial data
│   ├── *.pdf                      # Original AACR abstracts
│   └── *.txt                      # Converted text files
├── data-schema.js                 # Data structure definition
└── README.md                      # This file
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Visualization**: D3.js v7
- **Data Processing**: PDF text extraction with pdftotext
- **Responsive Design**: CSS Grid/Flexbox
- **Deployment**: GitHub Pages ready

## Usage

1. **Open Dashboard**: Open `index.html` in a web browser
2. **Explore Data**: Use filters or sidebar to focus on specific cancer types
3. **View Details**: Hover over data points for detailed trial information
4. **Filter Results**: Use dropdown filters for precise data exploration

## Data Quality

- **Source**: Official AACR 2025 abstracts
- **Extraction**: Automated with manual validation
- **Coverage**: 15 clinical trials with ORR endpoints
- **Accuracy**: Direct extraction from peer-reviewed abstracts

## Deployment

Ready for GitHub Pages deployment at `inventcures.github.io`:

1. Copy files to GitHub repository
2. Enable GitHub Pages in repository settings
3. Dashboard will be available at your GitHub Pages URL

## Contact

For data quality issues or questions: contact@inventcures.com

## License

Data sourced from AACR 2025 abstracts. Dashboard code available under MIT license.

---

*Generated from AACR 2025 clinical trial abstracts using automated data extraction*