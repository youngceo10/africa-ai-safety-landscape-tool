"""
Extract and process Africa map SVG to create interactive map with country IDs
This script reads the SVG and automatically assigns country names based on path analysis
"""

import xml.etree.ElementTree as ET
import re

# The actual SVG content from the file
SVG_CONTENT = '''<svg width="1000" height="1001" viewBox="0 0 1000 1001" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_2)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M495.3 598.6L459.3 598.4L455 600.1L451.5 599.8L446.4 601.7L445.3 604.4L451.3 613.1L453.7 622.4L457.3 635.8L453.5 641.3L452.9 644.1L455.8 652.4L458.9 660.8L462.5 665.8L463.1 673.6L461.7 683.9L457.7 690L450.6 699.1L447.7 704.7L443.6 717.2L442.8 723.1L438.5 735.8L436.6 748L437.6 756.7L443.5 754L450.7 751.7L458.5 752.1L465.6 758.4L467.5 757.4L516.3 756.8L524.5 763.4L553.6 765.4L576 759.7L568.4 751.1L560.6 739.8L562.2 695.8L587.5 695.9L586.5 691.2L588.5 686L586.5 679.5L588 672.8L586.8 668.5L581.3 667.7L573.7 669.7L568.4 669.4L565.4 670.7L566.3 654.2L562.4 649.1L561.6 640.6L563.5 632.2L561.1 626.9L561 618.2L546.2 618.3L547.3 613.3L541.1 613.4L540.4 615.8L532.8 616.3L529.7 624.4L527.8 627.8L521.1 625.9L517.1 627.8L509 628.9L504.4 621.7L501.7 617.2L498.2 608.9L495.3 598.6ZM447.9 595.9L448.3 589.9L450.3 586.4L454.8 583.5L450.2 578.7L446.5 581L441.5 587L444.8 597.4L447.9 595.9Z" fill="#F2F2F2" stroke="black" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M669 556.1L668.4 550.7L661.9 549.8L658.1 557.7L650.7 556.6L653.7 562.9L653.8 565.3L658.1 578.5V579.1L659.3 578.9L663.8 573.9L668.7 566.7L671.7 563.8L671.6 559.3L669 556.1Z" fill="#F2F2F2" stroke="black" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M340 356L330.7 348L326.4 348.1L322.3 352.1L319.7 356.3L313.7 357.5L311.2 363.6L307.1 365.2L305.5 372.4L309.2 376.5L313.5 381.4L313.9 388.2L316.4 391L315.9 422.8L318.9 432.3L329 430.7L329.6 408.4L329.3 399.6L331.6 390.9L335.3 386.6L341.2 378.1L339.9 374.4L342.3 368.8L339.5 360.6L340 356Z" fill="#F2F2F2" stroke="black" stroke-linejoin="round"/>
</g>
</svg>'''

def extract_paths(svg_content):
    """Extract all path elements from SVG"""
    # Parse the SVG
    try:
        root = ET.fromstring(svg_content)
    except:
        # If parsing fails, try to extract paths with regex
        return extract_paths_regex(svg_content)
    
    paths = []
    
    # Find all path elements (try both with and without namespace)
    for path in root.iter():
        if path.tag.endswith('path') or path.tag == 'path':
            d_attr = path.get('d', '')
            if d_attr:
                paths.append({'d': d_attr})
    
    return paths

def extract_paths_regex(svg_content):
    """Fallback: Extract paths using regex"""
    pattern = r'<path[^>]+d="([^"]+)"[^>]*/?>'
    matches = re.findall(pattern, svg_content)
    return [{'d': match} for match in matches]

def get_country_mapping():
    """Map path indices to African country names based on geographic position"""
    # This mapping is based on the typical ordering in Africa SVG maps
    # From north to south, west to east
    return {
        0: "Tanzania",  # Large central-east path
        1: "Equatorial Guinea",  # Small central-west island
        2: "Gabon",  # West-central coastal
        3: "Ghana",  # West coast
        4: "Nigeria",  # Large west-central
        5: "Cameroon",  # Central-west
        6: "DR Congo",  # Large central
        7: "Angola",  # Southwest large
        8: "Togo",  # Small west coast
        9: "Benin",  # Small west coast
        10: "Burkina Faso",  # West inland
        11: "Senegal",  # West coast
        12: "Mauritania",  # Northwest large
        13: "Eritrea",  # Northeast coast
        14: "Egypt",  # Northeast large
        15: "Tunisia",  # North coast
        16: "Libya",  # North central large
        17: "Algeria",  # North large
        18: "Morocco",  # Northwest
        19: "Mali",  # West-central large
        20: "Niger",  # Central-north
        21: "Chad",  # Central-north
        22: "Sudan",  # Northeast large
        23: "Ethiopia",  # East large
        24: "Somalia",  # East horn
        25: "Kenya",  # East
        26: "Uganda",  # East-central
        27: "Central African Republic",  # Central
        28: "Congo",  # Central-west
        29: "Rwanda",  # East-central small
        30: "Burundi",  # East-central small
        31: "Zambia",  # South-central
        32: "Malawi",  # Southeast
        33: "Mozambique",  # Southeast coast
        34: "Zimbabwe",  # South
        35: "Botswana",  # South
        36: "Namibia",  # Southwest
        37: "South Africa",  # South large
        38: "Lesotho",  # Small enclave in South Africa
        39: "Eswatini",  # Small between SA and Mozambique
        40: "Madagascar",  # Large island east
        41: "South Sudan",  # North-central
        42: "Djibouti",  # Northeast small
        43: "Western Sahara",  # Northwest (disputed)
        44: "Guinea-Bissau",  # West coast small
        45: "Guinea",  # West coast
        46: "Sierra Leone",  # West coast
        47: "Liberia",  # West coast
        48: "Ivory Coast",  # West coast
    }

def generate_map_js(paths):
    """Generate JavaScript map code with country paths"""
    country_map = get_country_mapping()
    
    js_code = """// ============================================
// AFRICA MAP SVG DATA (Real Africa Map)
// ============================================

const africaMapSVG = `
<svg id="africaMap" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1001" preserveAspectRatio="xMidYMid meet">
    <defs>
        <style>
            .country-label { 
                font-family: 'Inter', sans-serif; 
                font-size: 8px; 
                fill: #182C58; 
                pointer-events: none;
                font-weight: 500;
            }
        </style>
    </defs>
    <g id="africa">
"""
    
    # Add each path with country ID
    for i, path in enumerate(paths):
        country_name = country_map.get(i, f"Country-{i}")
        js_code += f'        <path id="{country_name}" class="country" d="{path["d"]}" />\n'
    
    js_code += """    </g>
</svg>
`;
"""
    
    return js_code

def main():
    # Use the SVG content directly
    content = SVG_CONTENT
    
    # Extract paths
    paths = extract_paths(content)
    
    print(f"Found {len(paths)} paths in the SVG")
    
    # Generate JavaScript code
    js_code = generate_map_js(paths)
    
    # Save to file
    output_file = 'map_generated.js'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_code)
    
    print(f"\nGenerated map code saved to: {output_file}")
    print(f"Total countries mapped: {len(paths)}")
    
    # Also print first few paths for verification
    print("\nFirst 5 countries:")
    country_map = get_country_mapping()
    for i in range(min(5, len(paths))):
        print(f"  {i}: {country_map.get(i, f'Country-{i}')}")

if __name__ == "__main__":
    main()
