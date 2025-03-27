
/**
 * This script automatically fixes all button variants and sizes across the codebase.
 * It can be run with:
 * node src/scripts/fixButtonVariantsAll.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Replace "primary" with "default" and "md" with "default"
const fixFile = (filePath, content) => {
  // Fix the Button component variants and sizes
  let fixed = content.replace(/variant="primary"/g, 'variant="default"');
  fixed = fixed.replace(/size="md"/g, 'size="default"');
  
  // Fix the fullWidth prop with className
  fixed = fixed.replace(/fullWidth(={true})?/g, 'className={getButtonClassNames("", true)}');
  
  // Check if we need to add the import
  if (fixed.includes('className={getButtonClassNames') && !fixed.includes('getButtonClassNames')) {
    // Add the import if it doesn't exist
    if (fixed.includes('import { Button }')) {
      fixed = fixed.replace(
        'import { Button }', 
        'import { Button, getButtonClassNames }'
      );
    } else if (fixed.includes('import Button')) {
      // For default imports, transform to named imports
      fixed = fixed.replace(
        /import Button from ['"](.*)['"]/,
        'import { Button, getButtonClassNames } from \'$1\''
      );
    }
  }
  
  return fixed;
};

// Process all TypeScript and React files
const processAllFiles = () => {
  const files = execSync('find src -type f -name "*.tsx" | grep -v "node_modules"').toString().split('\n').filter(Boolean);
  
  let changedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const fixed = fixFile(file, content);
      
      if (content !== fixed) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed button variants in: ${file}`);
        changedCount++;
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
  
  console.log(`Done! Fixed ${changedCount} files.`);
};

processAllFiles();
