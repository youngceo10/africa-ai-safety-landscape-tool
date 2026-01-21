# AI Safety in Africa - Interactive Visualization

An interactive data visualization project showcasing AI Safety metrics, governance frameworks, and regulatory landscapes across African nations. Built with Encode Justice brand identity and Swiss minimalist design principles. I believe this tool will help people curious about how Africa's AI Safety landscape looks like and how they could collaborate. 

## 📊 Data Visualizations

### 1. RAI Index Scores
Displays Responsible AI Index scores for 41 African countries using a 5-tier color scale:
- **Very Low** (0-2): 10% Navy
- **Low** (2-5): 25% Navy  
- **Medium** (5-10): 50% Navy
- **High** (10-20): 75% Navy
- **Very High** (20+): Full Navy

### 2. Data Protection Laws
Shows legislative status across Africa:
- **No Data**: 10% Navy (countries without identified legislation)
- **Draft**: 40% Red (legislation in development)
- **Enacted**: Full Red (active laws)

### 3. AI Strategy
Indicates national AI strategy development:
- **No Strategy**: 10% Navy
- **Planning Phase**: 40% Red (strategies under development)
- **Implemented**: Full Navy (active strategies)

## 🗂️ Project Structure

```
ai-safety-africa-visualizations/
├── index.html          # Main HTML structure
├── styles.css          # Project design system & brand colors
├── data.js            # All data structures and helper functions
├── map.js             # Africa map SVG and map interactions
├── app.js             # Main application logic and state management
├── README.md          # Project documentation
└── [dataset].csv      # Source RAI Index data
```

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in a modern web browser
2. No build process or dependencies required - pure HTML/CSS/JS
3. All visualizations are client-side and interactive

### Browser Requirements
- Modern browser with ES6 support (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Recommended viewport: 1280px+ for optimal experience

## 🎯 Features

### Interactive Map
- **Click**: Select country to view detailed metrics
- **Hover**: Visual feedback with highlight effect
- **Color Coding**: Data-driven colors based on selected metric

### Metric Switching
Toggle between three visualization modes:
1. RAI Index Scores
2. Data Protection Laws  
3. AI Strategy Status

### Info Panel
- Real-time updates on country selection
- Displays all three metrics simultaneously
- Shows specific details (law names, years, rankings)

### Statistics Overview
- Total countries with RAI data
- Average RAI Index score
- Highest performing country

## 📝 Data Sources

### Current Data
- **RAI Index**: Responsible AI Index 2024 (41 African countries)
- **Data Protection**: Compiled from national legislative databases (17 countries)
- **AI Strategy**: National AI strategy documents (9 countries)

### Future Additions
The architecture supports easy expansion:
- AI Safety Initiatives (coming soon)
- Links to actual legislation documents
- Additional metrics and frameworks

### Adding New Data

**To add RAI Index data:**
```javascript
// In data.js, add to raiIndex object:
"Country Name": { score: 12.34, rank: 56 }
```

**To add Data Protection info:**
```javascript
// In data.js, add to dataProtection object:
"Country Name": { 
    status: "enacted",  // or "draft"
    law: "Law Name", 
    year: 2020 
}
```

**To add AI Strategy:**
```javascript
// In data.js, add to aiStrategy object:
"Country Name": { 
    status: "implemented",  // or "planning"
    name: "Strategy Name", 
    year: 2021 
}
```

## 🔧 Technical Architecture

### State Management
- Current metric selection stored in `currentMetric`
- Selected country stored in `selectedCountry`
- No external state management library needed

### Data Flow
1. User interaction triggers metric change
2. `updateMapColors()` applies new color classes
3. `updateLegend()` updates legend display
4. `updateInfoPanel()` refreshes country details

### Performance
- CSS transitions for smooth interactions
- Event delegation for map interactions
- No external dependencies or API calls
- Optimized SVG paths for fast rendering

## 🌍 Country Coverage

### RAI Index Data (41 countries)
Top performers:
1. 🇿🇦 South Africa (27.61)
2. 🇲🇦 Morocco (22.99)
3. 🇧🇯 Benin (21.96)

### Data Protection Laws (17 countries)
Countries with enacted legislation including South Africa (POPIA), Kenya, Nigeria, Rwanda, Ghana, and others.

### AI Strategies (9 countries)
Implemented: Mauritius, Egypt, Tunisia, Rwanda
Planning: Kenya, South Africa, Ghana, Senegal, Nigeria


## 🙏 Acknowledgments

- **Encode Justice**: Brand identity and color system
- **Responsible AI Index**: Primary data source for RAI scores
- **National Governments**: Data protection and AI strategy information

## 📧 Contact

For questions about data sources or visualization updates, please refer to the Encode Justice Africa team.

---

**Last Updated**: November 2025  
**Version**: 1.0.0  
**Visualization Type**: Interactive SVG Map  
**Framework**: Vanilla JavaScript (No dependencies)
