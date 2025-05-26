// AACR 2025 Clinical Trial Dashboard JavaScript

class ClinicalTrialDashboard {
    constructor() {
        this.data = clinicalTrialData;
        this.filteredData = [...this.data];
        this.margin = { top: 20, right: 60, bottom: 60, left: 60 };
        this.width = 800 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.bottom - this.margin.top;
        
        this.init();
    }

    init() {
        this.setupFilters();
        this.setupSidebar();
        this.createChart();
        this.setupTooltip();
    }

    setupFilters() {
        // Get unique values for filters
        const cancerTypes = [...new Set(this.data.map(d => d.cancerType))].sort();
        const companies = [...new Set(this.data.map(d => d.company).filter(c => c))].sort();

        // Populate cancer type filter
        const cancerFilter = document.getElementById('cancer-type-filter');
        cancerTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            cancerFilter.appendChild(option);
        });

        // Populate company filter
        const companyFilter = document.getElementById('company-filter');
        companies.forEach(company => {
            const option = document.createElement('option');
            option.value = company;
            option.textContent = company;
            companyFilter.appendChild(option);
        });

        // Add event listeners
        cancerFilter.addEventListener('change', () => this.applyFilters());
        document.getElementById('phase-filter').addEventListener('change', () => this.applyFilters());
        companyFilter.addEventListener('change', () => this.applyFilters());
    }

    setupSidebar() {
        const cancerTypes = [...new Set(this.data.map(d => d.cancerType))].sort();
        const sidebar = document.querySelector('.cancer-type-list');
        
        // Clear existing items except "All cancer types"
        const allItem = sidebar.querySelector('[data-cancer="all"]');
        sidebar.innerHTML = '';
        sidebar.appendChild(allItem);

        // Add cancer type items
        cancerTypes.forEach(type => {
            const item = document.createElement('div');
            item.className = 'cancer-type-item';
            item.dataset.cancer = type;
            item.textContent = type;
            item.addEventListener('click', () => this.selectCancerType(type));
            sidebar.appendChild(item);
        });

        // All cancer types click handler
        allItem.addEventListener('click', () => this.selectCancerType('all'));
    }

    selectCancerType(cancerType) {
        // Update active state
        document.querySelectorAll('.cancer-type-item').forEach(item => {
            item.classList.remove('active');
        });
        
        if (cancerType === 'all') {
            document.querySelector('[data-cancer="all"]').classList.add('active');
            document.getElementById('cancer-type-filter').value = '';
        } else {
            document.querySelector(`[data-cancer="${cancerType}"]`).classList.add('active');
            document.getElementById('cancer-type-filter').value = cancerType;
        }

        this.applyFilters();
    }

    applyFilters() {
        const cancerTypeFilter = document.getElementById('cancer-type-filter').value;
        const phaseFilter = document.getElementById('phase-filter').value;
        const companyFilter = document.getElementById('company-filter').value;

        this.filteredData = this.data.filter(d => {
            const hasORR = d.objResponseRate !== null && d.objResponseRate !== undefined;
            const matchesCancer = !cancerTypeFilter || d.cancerType === cancerTypeFilter;
            const matchesPhase = !phaseFilter || d.trialPhase === phaseFilter;
            const matchesCompany = !companyFilter || d.company === companyFilter;
            
            return hasORR && matchesCancer && matchesPhase && matchesCompany;
        });

        this.updateChart();
    }

    createChart() {
        // Clear existing chart
        d3.select("#scatter-plot").selectAll("*").remove();

        const svg = d3.select("#scatter-plot")
            .append("svg")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom);

        this.g = svg.append("g")
            .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

        // Create scales
        this.xScale = d3.scaleLinear()
            .range([0, this.width]);

        this.yScale = d3.scaleLinear()
            .range([this.height, 0]);

        // Create axes
        this.xAxis = d3.axisBottom(this.xScale)
            .tickFormat(d3.format("d"));

        this.yAxis = d3.axisLeft(this.yScale);

        // Add axes groups
        this.g.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0,${this.height})`);

        this.g.append("g")
            .attr("class", "y-axis");

        // Add axis labels
        this.g.append("text")
            .attr("class", "axis-title")
            .attr("transform", `translate(${this.width/2}, ${this.height + 45})`)
            .style("text-anchor", "middle")
            .text("Sample Size");

        this.g.append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - this.margin.left)
            .attr("x", 0 - (this.height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("ORR (%)");

        // Add grid lines
        this.g.append("g")
            .attr("class", "grid x-grid");

        this.g.append("g")
            .attr("class", "grid y-grid");

        this.updateChart();
    }

    updateChart() {
        // Filter data to only include trials with ORR data
        const validData = this.filteredData.filter(d => 
            d.objResponseRate !== null && 
            d.objResponseRate !== undefined &&
            d.sampleSize > 0
        );

        // Update scales domains
        const xExtent = d3.extent(validData, d => d.sampleSize);
        const yExtent = d3.extent(validData, d => d.objResponseRate);
        
        this.xScale.domain([0, Math.max(xExtent[1] * 1.1, 100)]);
        this.yScale.domain([0, Math.max(yExtent[1] * 1.1, 100)]);

        // Update axes
        this.g.select(".x-axis")
            .transition()
            .duration(750)
            .call(this.xAxis);

        this.g.select(".y-axis")
            .transition()
            .duration(750)
            .call(this.yAxis);

        // Update grid lines
        this.g.select(".x-grid")
            .selectAll("line")
            .data(this.xScale.ticks())
            .join("line")
            .attr("class", "grid-line")
            .attr("x1", d => this.xScale(d))
            .attr("x2", d => this.xScale(d))
            .attr("y1", 0)
            .attr("y2", this.height);

        this.g.select(".y-grid")
            .selectAll("line")
            .data(this.yScale.ticks())
            .join("line")
            .attr("class", "grid-line")
            .attr("x1", 0)
            .attr("x2", this.width)
            .attr("y1", d => this.yScale(d))
            .attr("y2", d => this.yScale(d));

        // Update data points
        const circles = this.g.selectAll(".data-point")
            .data(validData, d => d.abstractNumber);

        circles.exit()
            .transition()
            .duration(500)
            .attr("r", 0)
            .remove();

        const circlesEnter = circles.enter()
            .append("circle")
            .attr("class", "data-point")
            .attr("r", 0)
            .attr("cx", d => this.xScale(d.sampleSize))
            .attr("cy", d => this.yScale(d.objResponseRate));

        circles.merge(circlesEnter)
            .transition()
            .duration(750)
            .attr("cx", d => this.xScale(d.sampleSize))
            .attr("cy", d => this.yScale(d.objResponseRate))
            .attr("r", 6)
            .attr("fill", d => this.getColor(d))
            .attr("opacity", 0.8);

        // Re-add event listeners
        this.g.selectAll(".data-point")
            .on("mouseover", (event, d) => this.showTooltip(event, d))
            .on("mouseout", () => this.hideTooltip())
            .on("mousemove", (event) => this.moveTooltip(event))
            .on("click", (event, d) => this.openPDF(d.abstractNumber))
            .style("cursor", "pointer");
    }

    getColor(d) {
        // Use 2025 color for all AACR 2025 data, blue for hypothetical older data
        return "#ff9999"; // All data is from AACR 2025
    }

    setupTooltip() {
        this.tooltip = d3.select("#tooltip");
    }

    showTooltip(event, d) {
        // Extract abstract text (first 300 characters)
        const abstractText = this.getAbstractText(d.abstractNumber);
        
        const tooltipContent = `
            <div class="tooltip-title">${d.trialName || d.drug}</div>
            <div class="tooltip-details">
                <div><strong>Drug:</strong> ${d.drug}</div>
                <div><strong>Company:</strong> ${d.company || 'Not specified'}</div>
                <div><strong>Cancer Type:</strong> ${d.cancerType}</div>
                <div><strong>Phase:</strong> ${d.trialPhase}</div>
                <div><strong>ORR:</strong> ${d.objResponseRate}%</div>
                <div><strong>Sample Size:</strong> ${d.sampleSize}</div>
                <div><strong>Abstract:</strong> ${d.abstractNumber}</div>
                ${d.studyName ? `<div><strong>Study:</strong> ${d.studyName}</div>` : ''}
                <div><strong>Population:</strong> ${d.patientPopulation}</div>
                <div class="abstract-preview"><strong>Abstract:</strong> ${abstractText}</div>
                <div class="tooltip-action">Click to view full PDF</div>
            </div>
        `;

        this.tooltip
            .html(tooltipContent)
            .style("display", "block")
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
    }

    hideTooltip() {
        this.tooltip.style("display", "none");
    }

    moveTooltip(event) {
        this.tooltip
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
    }

    getAbstractText(abstractNumber) {
        // Abstract text mapping - extracted from available files
        const abstracts = {
            "CT008": "SYS6010 is a novel ADC comprising of an anti-epidermal growth factor receptor (EGFR) humanized IgG1 monoclonal antibody conjugated to topoisomerase I inhibitor JS-1 via a cleavable glycine-glycine-phenylalanine-glycine tetrapeptide linker. This multicenter, open-label, phase 1 study evaluated the safety, tolerability and preliminary efficacy of SYS6010 in patients with advanced solid tumors...",
            "CT019": "Patients with previously treated NSCLC have a high unmet medical need, with a median reported overall survival (OS) of <1 year. In NSCLC, KRAS G12D oncogenic mutations occur in approximately 4% of patients, but there are currently no RAS-targeted therapies approved for this population. Zoldonrasib (RMC-9805) is a potent, oral, RAS(ON) G12D-selective, covalent, tri-complex inhibitor...",
            "CT001": "This randomized, double-blind, placebo-controlled, multicenter, phase 3 study evaluated the efficacy and safety of neoadjuvant and adjuvant pembrolizumab plus standard of care (SOC) compared with neoadjuvant and adjuvant placebo plus SOC in patients with resectable locally advanced head and neck squamous cell carcinoma (LA HNSCC)...",
            "CT002": "Circulating tumor DNA (ctDNA) can be used to detect molecular residual disease (MRD) and guide adjuvant therapy decisions. This prospective clinical study evaluated ctDNA-directed adjuvant immunotherapy in patients with resected early-stage mismatch repair deficient (MMRd) solid tumors...",
            "CT004": "KEYLYNK-007 is a tumor agnostic trial evaluating olaparib plus pembrolizumab in patients with homologous recombination repair (HRR) mutation-positive or homologous recombination deficiency (HRD)-positive advanced solid tumors. The primary endpoint is objective response rate (ORR)...",
            "CT051": "SKYSCRAPER-01 is a phase III, randomized, double-blind, placebo-controlled trial of tiragolumab plus atezolizumab versus placebo plus atezolizumab in patients with previously-untreated PD-L1-high, locally advanced unresectable or metastatic NSCLC. Primary endpoints were progression-free survival (PFS) and overall survival (OS)..."
        };
        
        return abstracts[abstractNumber] || "Abstract text not available for this trial.";
    }

    openPDF(abstractNumber) {
        // PDF file mapping based on available files
        const pdfFiles = {
            "CT001": "ct_abstracts/Abstract CT001_ Neoadjuvant and adjuvant pembrolizumab plus standard of care (SOC) in resectable locally advanced head and neck squamous cell carcinoma (LA HNSCC)_ Phase 3 KEYNOTE-689 study _ Cancer Research _ American Association for Cancer Research.pdf",
            "CT002": "ct_abstracts/Abstract CT002_ Circulating tumor DNA status to direct adjuvant immunotherapy for mismatch repair deficient tumors _ Cancer Research _ American Association for Cancer Research.pdf",
            "CT003": "ct_abstracts/Abstract CT003_ Non operative management of mismatch repair deficient tumors _ Cancer Research _ American Association for Cancer Research.pdf",
            "CT004": "ct_abstracts/Abstract CT004_ KEYLYNK-007_ Tumor agnostic trial of olaparib plus pembrolizumab in homologous recombination repair mutation- and homologous recombination deficiency- positive advanced cancers _ Cancer Research _ American Association for Cancer Resear.pdf",
            "CT008": "ct_abstracts/Abstract CT008_ First-in-human study of SYS6010, a novel EGFR targeting antibody drug conjugate (ADC) for patients with advanced solid tumors _ Cancer Research _ American Association for Cancer Research.pdf",
            "CT009": "ct_abstracts/Abstract CT009_ SHR-A1811, a HER2-directed antibody-drug conjugate (ADC), in advanced HER2-mutant non-small cell lung cancer (NSCLC)_ Updated phase 2 results from HORIZON-Lung _ Cancer Research _ American Association for Cancer Research.pdf",
            "CT010": "ct_abstracts/Abstract CT010_ Phase I dose-escalation and expansion study of JS107, a claudin 18.2 (CLDN18.2)-targeting antibody-drug conjugate (ADC), as monotherapy or in combination for patients (pts) with advanced solid tumors _ Cancer Research _ American Associ.pdf",
            "CT011": "ct_abstracts/Abstract CT011_ Penpulimab versus placebo in combination with chemotherapy as first-line treatment for recurrent or metastatic nasopharyngeal carcinoma_ A global, multicenter, randomized, double-blind, phase 3 trial (AK105-304) _ Cancer Research _ Ame.pdf",
            "CT019": "ct_abstracts/Abstract CT019_ Preliminary safety and antitumor activity of zoldonrasib (RMC-9805), an oral, RAS(ON) G12D-selective, tri-complex inhibitor in patients with KRAS G12D non-small cell lung cancer (NSCLC) from a phase 1 study in advanced solid tumors _ C.pdf",
            "CT050": "ct_abstracts/Abstract CT050_ Zongertinib in patients with pretreated HER2-mutant advanced NSCLC_ Beamion LUNG-1 _ Cancer Research _ American Association for Cancer Research.pdf",
            "CT051": "ct_abstracts/Abstract CT051_ SKYSCRAPER-01_ A phase III, randomized trial of tiragolumab (tira) + atezolizumab (atezo) versus placebo (pbo) + atezo in patients (pts) with previously-untreated PD-L1-high, locally advanced unresectable_metastatic NSCLC _ Cancer Rese.pdf",
            "CT052": "ct_abstracts/Abstract CT052_ A highly selective, brain-penetrant and overcoming G2032R resistance ROS1 inhibitor JYP0322 in NSCLC patients with ROS1 fusion _ Cancer Research _ American Association for Cancer Research.pdf",
            "CT053": "ct_abstracts/Abstract CT053_ Aumolertinib with or without chemotherapy as first line treatment in locally advanced or metastatic NSCLC with sensitizing EGFR mutations (AENEAS2) _ Cancer Research _ American Association for Cancer Research.pdf",
            "CT126": "ct_abstracts/Abstract CT126_ Aumolertinib as adjuvant therapy in patients with stage II-IIIB EGFR-mutated NSCLC after complete tumor resection_ A randomized, double-blind, placebo-controlled, phase 3 trial (ARTS) _ Cancer Research _ American Association for Cancer.pdf",
            "CT264": "ct_abstracts/Abstract CT264_ Mutant KRAS peptide vaccine combined with ipilimumab_nivolumab in advanced mismatch repair proficient_microsatellite stable (MMRp_MSS) colorectal cancer_ Preliminary analysis from a phase I study _ Cancer Research _ American Associatio.pdf"
        };
        
        const pdfPath = pdfFiles[abstractNumber];
        if (pdfPath) {
            window.open(pdfPath, '_blank');
        } else {
            alert(`PDF not available for abstract ${abstractNumber}`);
        }
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if clinical trial data is loaded
    if (typeof clinicalTrialData === 'undefined') {
        console.error('Clinical trial data not loaded');
        return;
    }
    
    // Initialize dashboard
    const dashboard = new ClinicalTrialDashboard();
});

// Handle responsive chart resizing
window.addEventListener('resize', function() {
    // Debounce resize events
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
        if (window.dashboard) {
            window.dashboard.createChart();
        }
    }, 250);
});