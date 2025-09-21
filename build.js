const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

try {
  // Clean dist directory
  if (fs.existsSync('dist')) {
    console.log('Cleaning dist directory...');
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Build project
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Verify build
  if (fs.existsSync('dist/index.html')) {
    console.log('✅ Build successful!');
    console.log('Build output:');
    const files = fs.readdirSync('dist');
    files.forEach(file => {
      const filePath = path.join('dist', file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        console.log(`📁 ${file}/`);
      } else {
        console.log(`📄 ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
      }
    });
  } else {
    console.error('❌ Build failed - index.html not found');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
