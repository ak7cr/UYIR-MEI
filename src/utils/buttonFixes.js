
/**
 * This is a utility script that can be used to fix button variant and size issues
 * across the codebase. Run this manually in your development environment when needed.
 * 
 * Usage:
 * 1. Copy this file to your project root
 * 2. Run: node buttonFixes.js
 */

const fs = require('fs');
const path = require('path');

// List of files where buttons need to be fixed
const filesToFix = [
  'src/components/home/ImpactStories.tsx',
  'src/components/layout/Navbar.tsx',
  'src/pages/About.tsx',
  'src/pages/GetInvolved.tsx',
  'src/pages/Index.tsx',
  'src/pages/Services.tsx',
  'src/pages/Stories.tsx'
];

function fixButtonProps(content) {
  // Replace invalid variant props
  let fixedContent = content.replace(/variant="primary"/g, 'variant="default"');
  
  // Replace invalid size props
  fixedContent = fixedContent.replace(/size="md"/g, 'size="default"');
  
  // Replace fullWidth prop with className
  fixedContent = fixedContent.replace(/fullWidth(={true})?/g, 'className="w-full"');
  
  return fixedContent;
}

async function fixFiles() {
  console.log('Starting button prop fixes...');
  
  for (const filePath of filesToFix) {
    try {
      const fullPath = path.resolve(filePath);
      
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const fixedContent = fixButtonProps(content);
        
        if (content !== fixedContent) {
          fs.writeFileSync(fullPath, fixedContent, 'utf8');
          console.log(`✅ Fixed: ${filePath}`);
        } else {
          console.log(`ℹ️ No changes needed: ${filePath}`);
        }
      } else {
        console.log(`⚠️ File not found: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error fixing ${filePath}:`, error);
    }
  }
  
  console.log('Button prop fixes completed!');
}

fixFiles();
