
/**
 * This is a utility script to help fix button variants across the codebase.
 * 
 * It should be run with:
 * node src/scripts/fixButtonVariants.js
 * 
 * It will:
 * 1. Replace "primary" with "default" for Button variant props
 * 2. Replace "md" with "default" for Button size props
 * 
 * Note: This is just a reference script. We're manually fixing the issues in this PR.
 */

const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, '..', 'components'),
  path.join(__dirname, '..', 'pages'),
];

const fixButtonVariants = (content) => {
  // Replace variant="primary" with variant="default"
  const fixedPrimary = content.replace(/variant="primary"/g, 'variant="default"');
  
  // Replace size="md" with size="default"
  const fixedSize = fixedPrimary.replace(/size="md"/g, 'size="default"');
  
  return fixedSize;
};

const processFile = (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixButtonVariants(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
};

const processDirectory = (directory) => {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      processDirectory(filePath);
    } else {
      processFile(filePath);
    }
  }
};

directories.forEach(processDirectory);
console.log('Button variant fixing complete!');
