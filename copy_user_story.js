const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'images', 'assets', 'user-story -section.png');
const dest = path.join(__dirname, 'public', 'user-stories.png');

try {
  fs.copyFileSync(src, dest);
  console.log('SUCCESS: Copied user-story image to public/user-stories.png');
} catch (err) {
  console.error('ERROR copying file:', err);
}
