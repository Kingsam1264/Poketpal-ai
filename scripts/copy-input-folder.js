/**
 * Script to copy Input folder to the Android assets directory
 * This ensures the curriculum data is bundled with the app
 */

const fs = require('fs');
const path = require('path');

const inputSrc = path.join(__dirname, '..', 'Input');
const inputDest = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'assets', 'Input');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.json')) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${entry.name}`);
    }
  }
}

if (fs.existsSync(inputSrc)) {
  console.log('Copying Input folder to Android assets...');
  copyDir(inputSrc, inputDest);
  console.log('Done!');
} else {
  console.log('Input folder not found at:', inputSrc);
}