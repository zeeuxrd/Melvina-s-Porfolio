const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'images', 'assets', 'user-story -section.png');
const destDir = path.join(__dirname, 'src', 'assets');
const destPath = path.join(destDir, 'user-story-section.png');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

try {
  fs.copyFileSync(srcPath, destPath);
  console.log('Successfully copied image to src/assets/user-story-section.png');
} catch (err) {
  console.error('Failed to copy image:', err);
}
