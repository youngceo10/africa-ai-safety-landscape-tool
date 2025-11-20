// ============================================
// APPLICATION STATE
// ============================================
let currentMetric = 'rai';
let selectedCountry = null;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 App initializing...');
    console.log('initializeMap exists:', typeof initializeMap);
    initializeMap();
    setupEventListeners();
    updateMapColors(currentMetric);
    updateLegend(currentMetric);
    updateStatistics();
    console.log('✅ App initialized');
});

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Metric selector buttons
    const metricButtons = document.querySelectorAll('.metric-btn');
    metricButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            metricButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update current metric
            currentMetric = button.dataset.metric;
            
            // Update visualizations
            updateMapColors(currentMetric);
            updateLegend(currentMetric);
            
            // Update info panel if a country is selected
            if (selectedCountry) {
                updateInfoPanel(selectedCountry);
            }
        });
    });
}

// ============================================
// MAP VISUALIZATION
// ============================================
function updateMapColors(metric) {
    const countries = document.querySelectorAll('.country');
    
    countries.forEach(countryElement => {
        const countryId = countryElement.id;
        const standardName = getStandardizedName(countryId);
        const data = getCountryData(standardName, metric);
        const colorClass = getColorClass(metric, data);
        
        // Remove all previous color classes
        countryElement.className = 'country';
        
        // Add new color class
        if (colorClass) {
            countryElement.classList.add(colorClass);
        }
    });
}

// ============================================
// LEGEND
// ============================================
function updateLegend(metric) {
    const legendContainer = document.getElementById('legend');
    
    let legendHTML = '<div class="metric-label">Legend:</div>';
    
    switch(metric) {
        case 'rai':
            legendHTML += `
                <div class="legend-item">
                    <div class="legend-color" style="background: rgba(24, 44, 88, 0.1);"></div>
                    <span>0-2 (Very Low)</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: rgba(24, 44, 88, 0.25);"></div>
                    <span>2-5 (Low)</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: rgba(24, 44, 88, 0.5);"></div>
                    <span>5-10 (Medium)</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: rgba(24, 44, 88, 0.75);"></div>
                    <span>10-20 (High)</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #182C58;"></div>
                    <span>20+ (Very High)</span>
                </div>
            `;
            break;
            
        case 'dataprotection':
            legendHTML += `
                <div class="legend-item">
                    <div class="legend-color" style="background: rgba(24, 44, 88, 0.1);"></div>
                    <span>No Data/Law</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: rgba(255, 99, 71, 0.4);"></div>
                    <span>Draft Legislation</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #FF6347;"></div>
                    <span>Enacted Law</span>
                </div>
            `;
            break;
            
        case 'aistrategy':
            legendHTML += `
                <div class="legend-item">
                    <div class="legend-color" style="background: rgba(24, 44, 88, 0.1);"></div>
                    <span>No Strategy</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: rgba(255, 99, 71, 0.4);"></div>
                    <span>Planning Phase</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #182C58;"></div>
                    <span>Implemented</span>
                </div>
            `;
            break;
    }
    
    legendContainer.innerHTML = legendHTML;
}

// ============================================
// INFO PANEL
// ============================================
function updateInfoPanel(countryName) {
    selectedCountry = countryName;
    const infoPanel = document.getElementById('infoPanel');
    const standardName = getStandardizedName(countryName);
    
    // Get data for all metrics
    const raiData = getCountryData(countryName, 'rai');
    const dpData = getCountryData(countryName, 'dataprotection');
    const aiData = getCountryData(countryName, 'aistrategy');
    const dpLink = getDataProtectionLink(countryName);
    
    console.log('Country:', standardName, 'DP Link:', dpLink);
    
    let infoHTML = `
        <div class="info-content fade-in">
            <h3 class="info-title">${standardName}</h3>
    `;
    
    // Always show current metric first (even if no data)
    if (currentMetric === 'rai') {
        infoHTML += raiData ? getRaiSection(raiData) : getNoDataSection('RAI Index Score');
    } else if (currentMetric === 'dataprotection') {
        infoHTML += dpData ? getDpSection(dpData, dpLink) : getNoDataSection('Data Protection Law', 'No legislation identified');
    } else if (currentMetric === 'aistrategy') {
        infoHTML += aiData ? getAiSection(aiData) : getNoDataSection('AI Strategy', 'No strategy identified');
    }
    
    // Then show other metrics
    if (currentMetric !== 'rai') {
        infoHTML += raiData ? getRaiSection(raiData) : getNoDataSection('RAI Index Score');
    }
    if (currentMetric !== 'dataprotection') {
        infoHTML += dpData ? getDpSection(dpData, dpLink) : getNoDataSection('Data Protection Law', 'No legislation identified');
    }
    if (currentMetric !== 'aistrategy') {
        infoHTML += aiData ? getAiSection(aiData) : getNoDataSection('AI Strategy', 'No strategy identified');
    }
    
    infoHTML += '</div>';
    infoPanel.innerHTML = infoHTML;
}

function getNoDataSection(label, message = 'No data available') {
    return `
        <div class="info-metric">
            <div class="metric-label">${label}</div>
            <div class="metric-detail">${message}</div>
        </div>
    `;
}

function getRaiSection(raiData) {
    return `
        <div class="info-metric">
            <div class="metric-label">RAI Index Score</div>
            <div class="metric-value">${raiData.score}</div>
            <div class="metric-detail">Global Rank: #${raiData.rank}</div>
        </div>
    `;
}

function getDpSection(dpData, dpLink) {
    const statusClass = dpData.status === 'enacted' ? 'positive' : 'neutral';
    const statusText = dpData.status === 'enacted' ? 'Enacted' : 'Draft';
    const linkHTML = dpLink ? `<div class="metric-detail"><a href="${dpLink}" target="_blank" rel="noopener noreferrer">${dpLink}</a></div>` : '';
    return `
        <div class="info-metric">
            <div class="metric-label">Data Protection Law</div>
            <div class="metric-status ${statusClass}">${statusText}</div>
            <div class="metric-detail">${dpData.law}</div>
            ${dpData.year ? `<div class="metric-detail">Year: ${dpData.year}</div>` : ''}
            ${linkHTML}
        </div>
    `;
}

function getAiSection(aiData) {
    const statusClass = aiData.status === 'implemented' ? 'positive' : 'neutral';
    const statusText = aiData.status === 'implemented' ? 'Implemented' : 'In Planning';
    return `
        <div class="info-metric">
            <div class="metric-label">AI Strategy</div>
            <div class="metric-status ${statusClass}">${statusText}</div>
            <div class="metric-detail">${aiData.name}</div>
            ${aiData.year ? `<div class="metric-detail">Year: ${aiData.year}</div>` : ''}
        </div>
    `;
}

// ============================================
// STATISTICS
// ============================================
function updateStatistics() {
    const stats = calculateStatistics();
    
    document.getElementById('countriesWithData').textContent = stats.count;
    document.getElementById('avgScore').textContent = stats.average;
    document.getElementById('topScore').textContent = stats.max;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function resetSelection() {
    selectedCountry = null;
    document.querySelectorAll('.country.selected').forEach(c => {
        c.classList.remove('selected');
    });
    
    const infoPanel = document.getElementById('infoPanel');
    infoPanel.innerHTML = `
        <div class="info-content">
            <h3 class="info-title">Select a country</h3>
            <p class="info-description">Click on any country to view detailed AI safety metrics</p>
        </div>
    `;
}

// Export for debugging
window.appDebug = {
    currentMetric: () => currentMetric,
    selectedCountry: () => selectedCountry,
    resetSelection,
    updateMapColors,
    updateInfoPanel
};
