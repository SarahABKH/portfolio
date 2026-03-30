#!/bin/bash
# Run this from inside the sarah-portfolio folder to push to GitHub

echo "🌸 Setting up your portfolio repo..."

git init
git add .
git commit -m "feat: initial portfolio — sarahabkh.com"
git branch -M main
git remote add origin https://github.com/SarahABKH/portfolio.git
git push -u origin main

echo "✅ Done! Your portfolio is live at github.com/SarahABKH/portfolio"
echo "🚀 Next: import this repo on vercel.com and set your domain to sarahabkh.com"
