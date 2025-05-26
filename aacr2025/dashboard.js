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
            .on("mousemove", (event) => this.moveTooltip(event));
    }

    getColor(d) {
        // Use 2025 color for all AACR 2025 data, blue for hypothetical older data
        return "#ff9999"; // All data is from AACR 2025
    }

    setupTooltip() {
        this.tooltip = d3.select("#tooltip");
    }

    showTooltip(event, d) {
        const tooltipContent = `
            <div class="tooltip-title">${d.trialName || d.drug}</div>
            <div class="tooltip-details">
                <div><strong>Company:</strong> ${d.company || 'Not specified'}</div>
                <div><strong>Cancer Type:</strong> ${d.cancerType}</div>
                <div><strong>Phase:</strong> ${d.trialPhase}</div>
                <div><strong>ORR:</strong> ${d.objResponseRate}%</div>
                <div><strong>Sample Size:</strong> ${d.sampleSize}</div>
                <div><strong>Abstract:</strong> ${d.abstractNumber}</div>
                ${d.studyName ? `<div><strong>Study:</strong> ${d.studyName}</div>` : ''}
                <div><strong>Population:</strong> ${d.patientPopulation}</div>
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