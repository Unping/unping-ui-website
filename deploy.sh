#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files are available in the 'dist' directory"
    echo ""
    echo "🚀 Deployment options:"
    echo "1. Vercel: Run 'vercel' (install with: npm i -g vercel)"
    echo "2. Netlify: Upload 'dist' folder to Netlify"
    echo "3. Appwrite: Use Appwrite CLI to deploy static files"
    echo "4. Manual: Upload 'dist' contents to any web server"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
