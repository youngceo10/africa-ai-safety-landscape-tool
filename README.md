# AI Safety in Africa - Interactive Visualization

An interactive data visualization project showcasing AI Safety metrics, governance frameworks, and regulatory landscapes across African nations. Built with Encode Justice brand identity and Swiss minimalist design principles.

## 🎨 Design Philosophy

### Brand Colors (Encode Justice)

**Primary Colors:**
- Navy: `#182C58` - Professional, authoritative base
- Red: `#FF6347` - Emphasis and data highlights  
- Yellow: `#FEFE19` - Accent for CTAs (reserved for future use)

**Background:**
- Cream: `#FFFAE9` - Standard background

**Neutrals:**
- Black: `#000000`
- White: `#FFFFFF`

**Tints:**
- Navy variations: 75%, 50%, 25%, 10% opacity
- Red variations: 80%, 60%, 40% opacity

### Design Approach
- **Swiss Minimalism**: Clean typography, grid-based layout, generous white space
- **Typographic System**: Inter font family with systematic scale
- **8px Grid System**: All spacing follows 8px increments
- **Functional Color Use**: Data-driven color application, not decorative

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
├── styles.css          # Swiss-minimal design system & brand colors
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

## 🎨 Customization

### Adding New Metrics
1. Add data structure in `data.js`
2. Add button in `index.html` control panel
3. Define color scale in `styles.css`
4. Add legend logic in `app.js` `updateLegend()` function
5. Add info panel display in `app.js` `updateInfoPanel()` function

### Styling Modifications
All brand colors are defined as CSS custom properties in `:root` for easy theming:
```css
:root {
    --ej-navy: #182C58;
    --ej-red: #FF6347;
    /* ... etc */
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
- Pure CSS transitions for smooth interactions
- Event delegation for map interactions
- No external dependencies or API calls
- Optimized SVG paths for fast rendering

## 📱 Responsive Design

- **Desktop** (1280px+): Full layout with side-by-side map and info panel
- **Tablet** (768px-1024px): Stacked layout with sticky info panel
- **Mobile** (< 768px): Vertical layout, optimized touch targets

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

## 📋 Future Enhancements

### Planned Features
- [ ] Direct links to legislation documents
- [ ] AI Safety Initiatives layer
- [ ] Timeline view of policy development
- [ ] Comparison mode (multi-country)
- [ ] Export/share functionality
- [ ] Data download options
- [ ] Advanced filtering and search

### Data Expansion
- [ ] AI research institutions
- [ ] AI ethics frameworks
- [ ] Government AI initiatives
- [ ] Regional AI partnerships
- [ ] Tech ecosystem metrics

## 🤝 Contributing

### Adding Data
1. Update appropriate data structure in `data.js`
2. Ensure country names match SVG path IDs
3. Include source attribution
4. Test visualization rendering

### Reporting Issues
- Incorrect data: Provide source for correction
- Missing countries: Submit data with citations
- UI/UX improvements: Describe expected behavior

## 📄 License

Data sources should be properly attributed. Check individual data source licenses for usage terms.

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
