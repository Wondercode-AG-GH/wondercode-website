import glob

files = [
    'app/components/ServiceDetailPage.tsx',
    'app/components/IndustrySolutionPage.tsx',
    'app/components/CaseStudySolutionPage.tsx'
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace all activeLanguage with i18n.language
    content = content.replace('activeLanguage', 'i18n.language')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {file_path}")
    
print("Done!")
