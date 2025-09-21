#!/bin/bash

# Clean previous build
rm -rf dist

# Install dependencies
npm install

# Build the project
npm run build

# Verify build output
if [ -f "dist/index.html" ]; then
    echo "Build successful!"
    ls -la dist/
else
    echo "Build failed - index.html not found"
    exit 1
fi
