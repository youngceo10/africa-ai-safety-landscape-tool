// ============================================
// DATA STRUCTURE
// ============================================

const africanCountriesData = {
    // RAI Index Data (from provided dataset)
    raiIndex: {
        "South Africa": { score: 27.61, rank: 42 },
        "Morocco": { score: 22.99, rank: 51 },
        "Benin": { score: 21.96, rank: 53 },
        "Senegal": { score: 20.11, rank: 56 },
        "Rwanda": { score: 18.09, rank: 59 },
        "Tunisia": { score: 15.80, rank: 62 },
        "Egypt": { score: 15.79, rank: 63 },
        "Namibia": { score: 10.84, rank: 73 },
        "Kenya": { score: 8.79, rank: 77 },
        "Nigeria": { score: 7.21, rank: 80 },
        "Mauritius": { score: 6.29, rank: 85 },
        "Ghana": { score: 6.26, rank: 86 },
        "Ethiopia": { score: 6.10, rank: 87 },
        "Niger": { score: 5.28, rank: 90 },
        "Zambia": { score: 4.71, rank: 92 },
        "Libya": { score: 4.53, rank: 94 },
        "Cameroon": { score: 4.04, rank: 97 },
        "Zimbabwe": { score: 3.69, rank: 98 },
        "Algeria": { score: 2.66, rank: 104 },
        "Botswana": { score: 2.37, rank: 105 },
        "Uganda": { score: 2.25, rank: 106 },
        "Burkina Faso": { score: 2.24, rank: 107 },
        "Tanzania": { score: 2.23, rank: 108 },
        "Mozambique": { score: 1.67, rank: 114 },
        "Gabon": { score: 1.66, rank: 115 },
        "Malawi": { score: 1.40, rank: 119 },
        "Chad": { score: 1.20, rank: 120 },
        "Lesotho": { score: 1.16, rank: 121 },
        "Togo": { score: 1.09, rank: 122 },
        "Côte d'Ivoire": { score: 1.04, rank: 123 },
        "Sierra Leone": { score: 1.03, rank: 124 },
        "Gambia": { score: 1.00, rank: 125 },
        "Somalia": { score: 0.97, rank: 126 },
        "Guinea": { score: 0.71, rank: 128 },
        "Burundi": { score: 0.71, rank: 130 },
        "Mali": { score: 0.70, rank: 131 },
        "Democratic Republic of the Congo": { score: 0.70, rank: 132 },
        "Liberia": { score: 0.67, rank: 133 },
        "Central African Republic": { score: 0.57, rank: 136 },
        "Eritrea": { score: 0.56, rank: 137 },
        "South Sudan": { score: 0.47, rank: 138 }
    },

    // Data Protection Laws
    dataProtection: {
        "South Africa": { status: "enacted", law: "Protection of Personal Information Act (POPIA)", year: 2013 },
        "Morocco": { status: "enacted", law: "Law 09-08", year: 2009 },
        "Tunisia": { status: "enacted", law: "Organic Law on Personal Data Protection", year: 2004 },
        "Senegal": { status: "enacted", law: "Law on Personal Data Protection", year: 2008 },
        "Ghana": { status: "enacted", law: "Data Protection Act", year: 2012 },
        "Kenya": { status: "enacted", law: "Data Protection Act", year: 2019 },
        "Nigeria": { status: "enacted", law: "Nigeria Data Protection Regulation (NDPR)", year: 2019 },
        "Rwanda": { status: "enacted", law: "Law on Protection of Personal Data and Privacy", year: 2021 },
        "Mauritius": { status: "enacted", law: "Data Protection Act", year: 2017 },
        "Benin": { status: "enacted", law: "Digital Code", year: 2018 },
        "Egypt": { status: "enacted", law: "Personal Data Protection Law", year: 2020 },
        "Angola": { status: "enacted", law: "Law on Personal Data Protection", year: 2011 },
        "Burkina Faso": { status: "enacted", law: "Law on Personal Data Protection", year: 2004 },
        "Algeria": { status: "draft", law: "Draft Data Protection Law", year: null },
        "Ethiopia": { status: "draft", law: "Draft Data Protection Proclamation", year: null },
        "Tanzania": { status: "draft", law: "Draft Data Protection Act", year: null },
        "Uganda": { status: "draft", law: "Draft Data Protection and Privacy Bill", year: null }
    },

    // AI Strategy
    aiStrategy: {
        "Mauritius": { status: "implemented", name: "National AI Strategy", year: 2018 },
        "Egypt": { status: "implemented", name: "National AI Strategy", year: 2019 },
        "Tunisia": { status: "implemented", name: "National AI Strategy", year: 2021 },
        "Rwanda": { status: "implemented", name: "National AI Policy", year: 2023 },
        "Kenya": { status: "planning", name: "Draft National AI Strategy", year: null },
        "South Africa": { status: "planning", name: "Presidential Commission on 4IR", year: null },
        "Ghana": { status: "planning", name: "National AI Strategy (in development)", year: null },
        "Senegal": { status: "planning", name: "Digital Senegal 2025 Strategy", year: null },
        "Nigeria": { status: "planning", name: "National AI Strategy (in development)", year: null }
    }
};

// Country name mappings - SVG ID to Data name
const countryNameMap = {
    "tanzania": "Tanzania",
    "malawi": "Malawi",
    "gambia": "Gambia",
    "madagascar": "Madagascar",
    "uganda": "Uganda",
    "burkina-faso": "Burkina Faso",
    "equatorial-guinea": "Equatorial Guinea",
    "democratic-republic-of-congo": "Democratic Republic of the Congo",
    "republic-of-congo": "Republic of the Congo",
    "south-sudan": "South Sudan",
    "mali": "Mali",
    "congo-brazzaville": "Republic of the Congo",
    "kenya": "Kenya",
    "senegal": "Senegal",
    "sierra-leone": "Sierra Leone",
    "ivory-coast": "Côte d'Ivoire",
    "mozambique": "Mozambique",
    "mauritania": "Mauritania",
    "guinea": "Guinea",
    "somalia": "Somalia",
    "benin": "Benin",
    "algeria": "Algeria",
    "morocco": "Morocco",
    "tunisia": "Tunisia",
    "libya": "Libya",
    "egypt": "Egypt",
    "mauritius": "Mauritius",
    "niger": "Niger",
    "chad": "Chad",
    "sudan": "Sudan",
    "ethiopia": "Ethiopia",
    "eritrea": "Eritrea",
    "djibouti": "Djibouti",
    "rwanda": "Rwanda",
    "burundi": "Burundi",
    "cameroon": "Cameroon",
    "central-african-republic": "Central African Republic",
    "gabon": "Gabon",
    "angola": "Angola",
    "zambia": "Zambia",
    "zimbabwe": "Zimbabwe",
    "namibia": "Namibia",
    "botswana": "Botswana",
    "south-africa": "South Africa",
    "lesotho": "Lesotho",
    "eswatini": "Eswatini",
    "ghana": "Ghana",
    "togo": "Togo",
    "nigeria": "Nigeria",
    "liberia": "Liberia",
    "guinea-bissau": "Guinea-Bissau",
    "sao-tome-and-principe": "Sao Tome and Principe",
    "comoros": "Comoros",
    "seychelles": "Seychelles",
    "western-sahara": "Western Sahara"
};

// Get standardized country name
function getStandardizedName(name) {
    // If it's an SVG ID (lowercase with hyphens), use the map
    const lowerName = name.toLowerCase().replace(/\s+/g, '-');
    if (countryNameMap[lowerName]) {
        return countryNameMap[lowerName];
    }
    // Otherwise return the name as-is
    return name;
}

// Calculate statistics
function calculateStatistics() {
    const scores = Object.values(africanCountriesData.raiIndex).map(d => d.score);
    return {
        count: scores.length,
        average: (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2),
        max: Math.max(...scores).toFixed(2),
        min: Math.min(...scores).toFixed(2),
        dataProtectionCount: Object.keys(africanCountriesData.dataProtection).filter(
            k => africanCountriesData.dataProtection[k].status === "enacted"
        ).length,
        aiStrategyCount: Object.keys(africanCountriesData.aiStrategy).filter(
            k => africanCountriesData.aiStrategy[k].status === "implemented"
        ).length
    };
}

// Get country data by metric
function getCountryData(countryName, metric) {
    const standardName = getStandardizedName(countryName);
    
    switch(metric) {
        case 'rai':
            return africanCountriesData.raiIndex[standardName] || null;
        case 'dataprotection':
            return africanCountriesData.dataProtection[standardName] || null;
        case 'aistrategy':
            return africanCountriesData.aiStrategy[standardName] || null;
        default:
            return null;
    }
}

// Get color class based on metric and value
function getColorClass(metric, data) {
    if (!data) return 'no-data';
    
    switch(metric) {
        case 'rai':
            const score = data.score;
            if (score >= 20) return 'rai-very-high';
            if (score >= 10) return 'rai-high';
            if (score >= 5) return 'rai-medium';
            if (score >= 2) return 'rai-low';
            return 'rai-very-low';
            
        case 'dataprotection':
            return data.status === 'enacted' ? 'dp-enacted' : 
                   data.status === 'draft' ? 'dp-draft' : 'dp-none';
            
        case 'aistrategy':
            return data.status === 'implemented' ? 'ai-implemented' : 
                   data.status === 'planning' ? 'ai-planning' : 'ai-none';
            
        default:
            return 'no-data';
    }
}

// Export data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        africanCountriesData,
        getCountryData,
        getColorClass,
        calculateStatistics,
        getStandardizedName
    };
}
