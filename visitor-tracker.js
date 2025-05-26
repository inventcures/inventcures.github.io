// Jekyll-compatible Site-wide Visitor Tracker with Page-specific Analytics
class VisitorTracker {
    constructor() {
        this.visitors = this.loadVisitors();
        this.pageVisits = this.loadPageVisits();
        this.maxVisitors = 200; // Keep last 200 visitors
        this.maxPageVisits = 500; // Keep last 500 page visits
        this.apiEndpoint = 'https://ipapi.co/json/'; // Free tier: 1000 requests/day
        this.fallbackEndpoint = 'https://api.ipify.org?format=json'; // Fallback for IP only
        this.currentPage = this.getCurrentPageInfo();
        this.init();
    }

    async init() {
        // Always track page visits site-wide
        await this.trackPageVisit();
        
        // Only render visitor widgets if elements exist (Jekyll compatibility)
        if (document.getElementById('visitor-map') || document.getElementById('recent-visitors')) {
            this.renderVisitorMap();
            this.renderRecentVisitors();
            this.updateVisitorCounter();
        }
        
        // Update page-specific counters if they exist
        this.updatePageSpecificCounters();
    }

    getCurrentPageInfo() {
        const path = window.location.pathname;
        let pageType = 'general';
        let pageTitle = document.title || 'Unknown Page';
        
        // Detect page types
        if (path.includes('aacr') || path.includes('AACR')) {
            pageType = 'aacr2025';
            pageTitle = 'AACR 2025 Clinical Trials Dashboard';
        } else if (path.includes('publications')) {
            pageType = 'publications';
        } else if (path.includes('talks')) {
            pageType = 'talks';
        } else if (path.includes('teaching')) {
            pageType = 'teaching';
        } else if (path === '/' || path === '/index.html') {
            pageType = 'homepage';
        }
        
        return {
            path: path,
            type: pageType,
            title: pageTitle,
            url: window.location.href
        };
    }

    async trackPageVisit() {
        try {
            // Always track page visits (even if visitor was already tracked)
            const sessionKey = `page_tracked_${this.currentPage.path}`;
            
            // Get visitor's location using free ipapi service (only if not cached)
            let locationData = sessionStorage.getItem('visitor_location');
            if (!locationData) {
                try {
                    const response = await fetch('https://ipapi.co/json/');
                    const data = await response.json();
                    locationData = JSON.stringify(data);
                    sessionStorage.setItem('visitor_location', locationData);
                } catch (error) {
                    console.warn('Could not fetch location, using defaults');
                    locationData = JSON.stringify({});
                }
            }
            
            const data = JSON.parse(locationData);
            
            const pageVisit = {
                id: Date.now() + Math.random(), // Ensure uniqueness
                timestamp: new Date().toISOString(),
                page: this.currentPage,
                country: data.country_name || 'Unknown',
                countryCode: data.country_code || 'XX',
                city: data.city || 'Unknown',
                region: data.region || 'Unknown',
                latitude: data.latitude || 0,
                longitude: data.longitude || 0,
                ip: data.ip || 'Unknown',
                userAgent: navigator.userAgent,
                referrer: document.referrer || 'Direct'
            };

            // Add to page visits list
            this.pageVisits.unshift(pageVisit);
            
            // Keep only recent page visits
            if (this.pageVisits.length > this.maxPageVisits) {
                this.pageVisits = this.pageVisits.slice(0, this.maxPageVisits);
            }

            // Update unique visitors list (only if new visitor)
            if (!sessionStorage.getItem('visitor_tracked')) {
                const visitor = { ...pageVisit };
                delete visitor.page; // Remove page info for general visitor tracking
                
                this.visitors.unshift(visitor);
                
                if (this.visitors.length > this.maxVisitors) {
                    this.visitors = this.visitors.slice(0, this.maxVisitors);
                }
                
                sessionStorage.setItem('visitor_tracked', 'true');
            }

            // Save to localStorage
            this.saveVisitors();
            this.savePageVisits();
            
            console.log('Page visit tracked:', pageVisit);
        } catch (error) {
            console.error('Error tracking page visit:', error);
        }
    }

    loadVisitors() {
        try {
            const stored = localStorage.getItem('site_visitors');
            let visitors = stored ? JSON.parse(stored) : [];
            
            // Add some sample data if no visitors yet (for demo)
            if (visitors.length === 0) {
                visitors = this.getSampleVisitors();
                this.saveVisitors();
            }
            
            return visitors;
        } catch (error) {
            return this.getSampleVisitors();
        }
    }

    loadPageVisits() {
        try {
            const stored = localStorage.getItem('site_page_visits');
            let pageVisits = stored ? JSON.parse(stored) : [];
            
            // Add some sample data if no page visits yet (for demo)
            if (pageVisits.length === 0) {
                pageVisits = this.getSamplePageVisits();
                this.savePageVisits();
            }
            
            return pageVisits;
        } catch (error) {
            return this.getSamplePageVisits();
        }
    }

    getSampleVisitors() {
        // Sample visitor data for demonstration
        const samples = [
            { country: 'United States', countryCode: 'US', city: 'New York', region: 'New York' },
            { country: 'Germany', countryCode: 'DE', city: 'Berlin', region: 'Berlin' },
            { country: 'Japan', countryCode: 'JP', city: 'Tokyo', region: 'Tokyo' },
            { country: 'United Kingdom', countryCode: 'GB', city: 'London', region: 'England' },
            { country: 'Canada', countryCode: 'CA', city: 'Toronto', region: 'Ontario' },
            { country: 'Australia', countryCode: 'AU', city: 'Sydney', region: 'New South Wales' },
            { country: 'France', countryCode: 'FR', city: 'Paris', region: 'Île-de-France' },
            { country: 'Switzerland', countryCode: 'CH', city: 'Zurich', region: 'Zurich' }
        ];

        return samples.map((sample, index) => ({
            id: Date.now() - (index * 3600000), // Spread over hours
            timestamp: new Date(Date.now() - (index * 3600000)).toISOString(),
            country: sample.country,
            countryCode: sample.countryCode,
            city: sample.city,
            region: sample.region,
            latitude: 0,
            longitude: 0,
            ip: '***.***.***',
            userAgent: 'Sample User Agent',
            referrer: index % 3 === 0 ? 'Direct' : index % 3 === 1 ? 'https://google.com' : 'https://twitter.com'
        }));
    }

    saveVisitors() {
        try {
            localStorage.setItem('site_visitors', JSON.stringify(this.visitors));
        } catch (error) {
            console.error('Error saving visitors:', error);
        }
    }

    savePageVisits() {
        try {
            localStorage.setItem('site_page_visits', JSON.stringify(this.pageVisits));
        } catch (error) {
            console.error('Error saving page visits:', error);
        }
    }

    getSamplePageVisits() {
        const samplePages = [
            { path: '/aacr2025/', type: 'aacr2025', title: 'AACR 2025 Clinical Trials Dashboard' },
            { path: '/', type: 'homepage', title: 'Home' },
            { path: '/publications/', type: 'publications', title: 'Publications' },
            { path: '/talks/', type: 'talks', title: 'Talks' },
            { path: '/teaching/', type: 'teaching', title: 'Teaching' }
        ];
        
        const sampleLocations = [
            { country: 'United States', countryCode: 'US', city: 'New York', region: 'New York' },
            { country: 'Germany', countryCode: 'DE', city: 'Berlin', region: 'Berlin' },
            { country: 'Japan', countryCode: 'JP', city: 'Tokyo', region: 'Tokyo' },
            { country: 'United Kingdom', countryCode: 'GB', city: 'London', region: 'England' },
            { country: 'Canada', countryCode: 'CA', city: 'Toronto', region: 'Ontario' }
        ];

        const pageVisits = [];
        for (let i = 0; i < 20; i++) {
            const page = samplePages[i % samplePages.length];
            const location = sampleLocations[i % sampleLocations.length];
            
            pageVisits.push({
                id: Date.now() - (i * 1800000) + Math.random(), // Spread over 30-minute intervals
                timestamp: new Date(Date.now() - (i * 1800000)).toISOString(),
                page: page,
                country: location.country,
                countryCode: location.countryCode,
                city: location.city,
                region: location.region,
                latitude: 0,
                longitude: 0,
                ip: '***.***.***',
                userAgent: 'Sample User Agent',
                referrer: i % 3 === 0 ? 'Direct' : i % 3 === 1 ? 'https://google.com' : 'https://twitter.com'
            });
        }
        
        return pageVisits;
    }

    renderVisitorMap() {
        const mapContainer = document.getElementById('visitor-map');
        if (!mapContainer) return;

        // Create simple SVG world map with visitor dots
        const countries = this.getCountryCounts();
        
        mapContainer.innerHTML = `
            <div class="map-header">
                <h3>Visitor Locations</h3>
                <div class="total-visitors">Total Unique Visitors: ${this.visitors.length}</div>
            </div>
            <div class="world-map">
                <div class="map-placeholder">
                    <div class="map-info">🌍 Visitors from ${Object.keys(countries).length} countries</div>
                    <div class="country-list">
                        ${Object.entries(countries)
                            .sort(([,a], [,b]) => b - a)
                            .map(([country, count]) => 
                                `<div class="country-item">
                                    <span class="country-flag">${this.getCountryFlag(this.getCountryCode(country))}</span>
                                    <span class="country-name">${country}</span>
                                    <span class="visitor-count">${count}</span>
                                </div>`
                            ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderRecentVisitors() {
        const container = document.getElementById('recent-visitors');
        if (!container) return;

        const recentVisitors = this.visitors.slice(0, 10);
        
        container.innerHTML = `
            <div class="recent-visitors-header">
                <h3>Recent Visitors</h3>
                <div class="last-updated">Last updated: ${new Date().toLocaleTimeString()}</div>
            </div>
            <div class="visitors-list">
                ${recentVisitors.map(visitor => `
                    <div class="visitor-item">
                        <div class="visitor-flag">${this.getCountryFlag(visitor.countryCode)}</div>
                        <div class="visitor-info">
                            <div class="visitor-location">${visitor.city}, ${visitor.country}</div>
                            <div class="visitor-time">${this.formatTime(visitor.timestamp)}</div>
                        </div>
                        <div class="visitor-referrer" title="${visitor.referrer}">
                            ${this.formatReferrer(visitor.referrer)}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    updatePageSpecificCounters() {
        // Update AACR page counter
        const aacrCounter = document.getElementById('aacr-page-visits');
        if (aacrCounter) {
            const aacrVisits = this.pageVisits.filter(visit => visit.page.type === 'aacr2025').length;
            aacrCounter.textContent = aacrVisits;
        }
        
        // Update general page counters
        const pageCounters = document.querySelectorAll('[data-page-counter]');
        pageCounters.forEach(counter => {
            const pageType = counter.dataset.pageCounter;
            const visits = this.pageVisits.filter(visit => visit.page.type === pageType).length;
            counter.textContent = visits;
        });
        
        // Update current page counter
        const currentPageCounter = document.getElementById('current-page-visits');
        if (currentPageCounter) {
            const currentPageVisits = this.pageVisits.filter(visit => 
                visit.page.path === this.currentPage.path
            ).length;
            currentPageCounter.textContent = currentPageVisits;
        }
    }

    getPageAnalytics(pageType = null) {
        const filteredVisits = pageType 
            ? this.pageVisits.filter(visit => visit.page.type === pageType)
            : this.pageVisits;
            
        return {
            totalVisits: filteredVisits.length,
            uniqueCountries: [...new Set(filteredVisits.map(v => v.country))].length,
            recentVisits: filteredVisits.slice(0, 10),
            topCountries: this.getTopCountries(filteredVisits),
            topReferrers: this.getTopReferrers(filteredVisits)
        };
    }

    getTopCountries(visits) {
        const counts = {};
        visits.forEach(visit => {
            counts[visit.country] = (counts[visit.country] || 0) + 1;
        });
        return Object.entries(counts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .map(([country, count]) => ({ country, count }));
    }

    getTopReferrers(visits) {
        const counts = {};
        visits.forEach(visit => {
            const referrer = this.formatReferrer(visit.referrer);
            counts[referrer] = (counts[referrer] || 0) + 1;
        });
        return Object.entries(counts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .map(([referrer, count]) => ({ referrer, count }));
    }

    updateVisitorCounter() {
        const counter = document.getElementById('visitor-counter');
        if (counter) {
            counter.textContent = this.visitors.length;
        }
    }

    getCountryCounts() {
        const counts = {};
        this.visitors.forEach(visitor => {
            counts[visitor.country] = (counts[visitor.country] || 0) + 1;
        });
        return counts;
    }

    getCountryCode(countryName) {
        const visitor = this.visitors.find(v => v.country === countryName);
        return visitor ? visitor.countryCode : 'XX';
    }

    getCountryFlag(countryCode) {
        if (!countryCode || countryCode === 'XX') return '🌍';
        return String.fromCodePoint(
            ...[...countryCode.toUpperCase()].map(char => 0x1F1E6 + char.charCodeAt(0) - 65)
        );
    }

    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        
        if (diff < 60000) return 'Just now';
        if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
        return date.toLocaleDateString();
    }

    formatReferrer(referrer) {
        if (!referrer || referrer === 'Direct') return '🔗 Direct';
        try {
            const url = new URL(referrer);
            return `🔗 ${url.hostname}`;
        } catch {
            return '🔗 External';
        }
    }

    // Auto-refresh every 30 seconds
    startAutoRefresh() {
        setInterval(() => {
            this.renderRecentVisitors();
        }, 30000);
    }
}

// Initialize visitor tracker when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.visitorTracker = new VisitorTracker();
    window.visitorTracker.startAutoRefresh();
});