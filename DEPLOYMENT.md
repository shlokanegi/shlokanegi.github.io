# Deployment Guide for GitHub Pages

## Option 1: Automatic Deployment with GitHub Actions (Recommended)

This method automatically builds and deploys your site whenever you push changes.

### Steps:

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Update portfolio site"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/shlokanegi/shlokanegi.github.io
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save

3. **The workflow will automatically:**
   - Build your Jekyll site
   - Deploy it to GitHub Pages
   - Your site will be live at: https://shlokanegi.github.io

---

## Option 2: Manual Deployment (Build Locally)

If you prefer to build locally and push the built site:

### Steps:

1. **Build the site:**
   ```bash
   bundle exec jekyll build
   ```

2. **Copy built files to repository root:**
   ```bash
   # This copies _site contents to root (be careful!)
   cp -r _site/* .
   ```

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Deploy site"
   git push origin main
   ```

**Note:** This method commits build artifacts to your repository, which can make git history messy.

---

## Option 3: Use GitHub Pages Gem (Simpler, but older Jekyll)

If you want GitHub to build automatically without Actions:

1. **Update Gemfile:**
   - Comment out `gem "jekyll", "~> 4.3.3"`
   - Uncomment `gem "github-pages", group: :jekyll_plugins`

2. **Update bundle:**
   ```bash
   bundle install
   ```

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   ```

4. **Enable Pages:**
   - Go to Settings → Pages
   - Select **main** branch and **/ (root)** folder
   - Save

**Note:** This uses Jekyll 3.x, which may not support all features.

---

## Recommended: Option 1 (GitHub Actions)

The GitHub Actions workflow I created will:
- ✅ Use the latest Jekyll version (4.3.3)
- ✅ Build automatically on every push
- ✅ Keep your repository clean (no build artifacts)
- ✅ Deploy to GitHub Pages automatically

Just push your code and enable GitHub Actions in Settings → Pages!
