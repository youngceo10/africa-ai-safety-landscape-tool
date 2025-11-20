import re
import xml.etree.ElementTree as ET

# All 54 African countries we should try to map
african_countries = [
    'algeria', 'angola', 'benin', 'botswana', 'burkina-faso', 'burundi',
    'cameroon', 'central-african-republic', 'chad', 'comoros',
    'congo-brazzaville', 'congo-kinshasa', 'djibouti', 'egypt',
    'equatorial-guinea', 'eritrea', 'eswatini', 'ethiopia', 'gabon',
    'gambia', 'ghana', 'guinea', 'guinea-bissau', 'ivory-coast', 'kenya',
    'lesotho', 'liberia', 'libya', 'madagascar', 'malawi', 'mali',
    'mauritania', 'mauritius', 'morocco', 'mozambique', 'namibia', 'niger',
    'nigeria', 'rwanda', 'sao-tome-and-principe', 'senegal', 'seychelles',
    'sierra-leone', 'somalia', 'south-africa', 'south-sudan', 'sudan',
    'tanzania', 'togo', 'tunisia', 'uganda', 'zambia', 'zimbabwe', 'western-sahara'
]

# Read current map.js to see what's there
with open('map.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all current IDs
current_ids = re.findall(r'<path id="([^"]+)"', content)
print(f"Current IDs in map.js: {len(current_ids)}")
print("Unique IDs:", set(current_ids))
print("\nID frequency:")
from collections import Counter
for id, count in Counter(current_ids).most_common():
    print(f"  {id}: {count}")
