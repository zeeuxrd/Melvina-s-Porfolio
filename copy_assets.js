const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/d189ee92-2ad7-43f3-b2c8-4c42f3c69bd6';
const destDir = path.join(__dirname, 'src', 'assets', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const filesToCopy = [
  { src: 'media__1785187669727.jpg', dest: 'desk.jpg' },
  { src: 'media__1785189117726.jpg', dest: 'matcha.jpg' },
  { src: 'media__1785189276883.jpg', dest: 'workshop.jpg' },
  { src: 'media__1785189547294.png', dest: 'books.png' },
  { src: 'media__1785194193745.png', dest: 'peace-hand.png' },
  { src: 'media__1785160138028.png', dest: 'case-01.png' },
  { src: 'media__1785160961905.png', dest: 'case-02.png' },
  { src: 'media__1785165571132.jpg', dest: 'case-03.jpg' },
  { src: 'media__1785166951949.jpg', dest: 'case-04.jpg' },
];

filesToCopy.forEach(({ src, dest }) => {
  const srcPath = path.join(srcDir, src);
  const destPath = path.join(destDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.error(`Source not found: ${srcPath}`);
  }
});
