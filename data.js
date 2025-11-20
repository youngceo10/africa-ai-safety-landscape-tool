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
        "Benin": { status: "enacted", law: "Digital Code - Data Protection Law", year: 2023 },
        "Egypt": { status: "enacted", law: "Personal Data Protection Law", year: 2020 },
        "Angola": { status: "enacted", law: "Law 22/11 - Personal Data Protection Legislation", year: 2011 },
        "Botswana": { status: "enacted", law: "Data Protection Act 32 of 2018", year: 2018 },
        "Burkina Faso": { status: "enacted", law: "Law on Personal Data Protection", year: 2021 },
        "Algeria": { status: "enacted", law: "Law 18-07 on Personal Data Protection", year: 2025 },
        "Central African Republic": { status: "enacted", law: "Law No. 24.001 on Protection of Personal Data", year: 2024 },
        "Chad": { status: "enacted", law: "Data Protection Law", year: 2015 },
        "Côte d'Ivoire": { status: "enacted", law: "Data Protection Law", year: 2013 },
        "Equatorial Guinea": { status: "enacted", law: "Data Protection Law", year: 2016 },
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
        "Nigeria": { status: "planning", name: "National AI Strategy (in development)", year: null },
        "Algeria": { status: "implemented", name: "National Strategy for Artificial Intelligence", year: 2024 },
        "Benin": { status: "implemented", name: "National AI and Big Data Strategy 2023-2027", year: 2023 },
        "Cameroon": { status: "implemented", name: "AI Roadmap 2040", year: 2025 }
    },

    // AI Safety Initiatives (Evidence of activities to advance AI safety, accuracy and reliability)
    // Based on: Government frameworks, Government actions, and Non-state actors
    aiSafetyInitiatives: {
        "South Africa": { hasEvidence: true, governmentFrameworks: true, governmentActions: true, nonStateActors: true },
        "Morocco": { hasEvidence: true, governmentFrameworks: true, governmentActions: true, nonStateActors: false },
        "Benin": { hasEvidence: true, governmentFrameworks: true, governmentActions: false, nonStateActors: false },
        "Senegal": { hasEvidence: true, governmentFrameworks: true, governmentActions: true, nonStateActors: false },
        "Rwanda": { hasEvidence: true, governmentFrameworks: true, governmentActions: true, nonStateActors: true },
        "Tunisia": { hasEvidence: true, governmentFrameworks: true, governmentActions: true, nonStateActors: false },
        "Egypt": { hasEvidence: true, governmentFrameworks: true, governmentActions: true, nonStateActors: false },
        "Kenya": { hasEvidence: true, governmentFrameworks: true, governmentActions: true, nonStateActors: true },
        "Nigeria": { hasEvidence: true, governmentFrameworks: true, governmentActions: true, nonStateActors: true },
        "Mauritius": { hasEvidence: true, governmentFrameworks: true, governmentActions: true, nonStateActors: false },
        "Ghana": { hasEvidence: true, governmentFrameworks: true, governmentActions: false, nonStateActors: true }
    },

    // Data Protection Law Links
    dataProtectionLinks: {
        "South Africa": "https://popia.co.za/",
        "Morocco": "https://www.cndp.ma/",
        "Senegal": "https://www.cdp.sn/",
        "Rwanda": "https://ncsa.gov.rw/",
        "Tunisia": "https://www.inpdp.nat.tn/",
        "Egypt": "https://www.egypt.gov.eg/",
        "Kenya": "https://www.odpc.go.ke/",
        "Nigeria": "https://ndpr.nitda.gov.ng/",
        "Mauritius": "https://dataprotection.govmu.org/",
        "Ghana": "https://www.dataprotection.org.gh/",
        "Algeria": "https://anpdp.dz/ar/",
        "Angola": "https://www.rapdp.org/sites/default/files/2021-07/Angolan%20Personal%20Data%20Protection%20Legislation%20-%20Law%2022_11%20of%2017th%20June_0.pdf",
        "Benin": "https://asin.bj/documents/",
        "Botswana": "https://www.bocra.org.bw/sites/default/files/documents/32%20Act%2010-08-2018-Data%20Protection.pdf",
        "Burkina Faso": "https://dataprotection.africa/burkina-faso/",
        "Central African Republic": "https://www.techhiveadvisory.africa/insights/review-of-the-central-african-republic-data-protection-law",
        "Chad": "https://cyrilla.org/entity/plvgmylt69g?file=1721649762781ctjegvl2qnb.pdf&page=1",
        "Côte d'Ivoire": "https://dataprotection.africa/cote-divoire/",
        "Equatorial Guinea": "https://cyrilla.org/entity/yf8eiw9h3g?file=1721651158058guqswwp1w6r.pdf&page=1",
        "Egypt": "https://www.acc.com/sites/default/files/program-materials/upload/Data%20Protection%20Law%20-%20Egypt%20-%20EN%20-%20MBH.PDF"
    },

    // AI Strategy Links
    aiStrategyLinks: {
        "Algeria": "https://aicouncil.dz/",
        "Benin": "https://numerique.gouv.bj/assets/documents/strategie-nationale-d'intelligence-artificielle-et-des-megadonnees-2023-2027.pdf",
        "Cameroon": "https://techafricanews.com/2025/07/08/cameroon-unveils-2040-ai-roadmap-anchored-on-seven-strategic-pillars/",
        "Egypt": "https://mcit.gov.eg/en/Publication/Publication_Summary/9283",
        "Mauritius": "https://www.govmu.org/EN/Documents/Communiques/AI%20Strategy.pdf",
        "Rwanda": "https://www.minict.gov.rw/",
        "Tunisia": "https://www.tunisie.gov.tn/"
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
        ).length,
        aiSafetyCount: Object.keys(africanCountriesData.aiSafetyInitiatives).length
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
        case 'aisafety':
            return africanCountriesData.aiSafetyInitiatives[standardName] || null;
        default:
            return null;
    }
}

// Get data protection law link
function getDataProtectionLink(countryName) {
    const standardName = getStandardizedName(countryName);
    return africanCountriesData.dataProtectionLinks[standardName] || null;
}

// Get AI strategy link
function getAiStrategyLink(countryName) {
    const standardName = getStandardizedName(countryName);
    return africanCountriesData.aiStrategyLinks[standardName] || null;
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
        
        case 'aisafety':
            return data.hasEvidence ? 'safety-yes' : 'safety-no';
            
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
