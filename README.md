# Dean Whittaker - Professional Profile

A responsive professional profile for Dean Whittaker, focused on senior platform engineering, production AI infrastructure and secure AWS delivery. Built with Next.js and Tailwind CSS, then exported as a static site.

## ✨ Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark presentation**: High-contrast, infrastructure-inspired visual system
- **Professional positioning**: Aligned with Dean's LinkedIn platform and production AI profile
- **Modern UI**: Dark infrastructure-inspired design with responsive layouts
- **Optimized Performance**: Static export for fast loading
- **SEO Ready**: Canonical metadata, structured data, Open Graph and X cards
- **Accessible**: Semantic sections, visible focus states, a skip link and reduced-motion support

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm start
```

## 📁 Project Structure

```text
deancod-es/
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Main layout with metadata and fonts
│   │   ├── page.tsx       # About Me page content
│   │   └── globals.css    # Global Tailwind styles
├── public/
│   ├── avatar.jpg         # Profile photo
│   └── og.png             # Social-sharing preview
├── out/                   # Generated static files (after build)
├── next.config.ts         # Next.js config for static export
├── tailwind.config.ts     # Tailwind CSS configuration
└── README.md             # This file
```

## 🎨 Customization

### Update Personal Information

1. **Avatar Photo**: Replace `public/avatar.jpg` with your photo
2. **Personal Details**: Edit `src/app/page.tsx`:

   ```tsx
   // Update name, title, location, and bio
   <h2>Your Name</h2>
   <h3>Your Title</h3>
   <p>Your Location</p>
   <p>Your bio description...</p>
   ```

3. **Social Links**: Update URLs in `src/app/page.tsx`:

   ```tsx
   // LinkedIn
   href = "https://www.linkedin.com/in/your-username/";

   // Email
   href = "mailto:your-email@example.com";
   ```

4. **Metadata**: Update SEO information in `src/app/layout.tsx`:

   ```tsx
   export const metadata: Metadata = {
     title: "About Me - Your Name",
     description: "Your description...",
     // ... update other metadata
   };
   ```

### Styling Customization

- **Colors**: Modify Tailwind classes in `src/app/page.tsx`
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Theme**: Adjust gradient backgrounds and color schemes

## 🌐 Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build settings:
   - **Build command**: `pnpm build`
   - **Build output directory**: `out`
3. Deploy automatically on every push

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Use GitHub Actions with the following workflow:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Other Static Hosts

The `out/` directory contains all static files ready for deployment to:

- Vercel
- Netlify
- AWS S3
- Any static web server

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Preview production build
- `pnpm lint` - Run ESLint

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Build Output**: Static HTML/CSS/JS

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use this template for your own about page!

## 🤝 Contributing

This is a personal website template. Feel free to fork and customize for your own use!
