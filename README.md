# SkripsiMate Website

A modern, responsive website for SkripsiMate - the AI-powered thesis planning desktop application. Built with **Vite + React + TypeScript**, featuring a beautiful neumorphic design system.

## 🌟 Features

- **Modern Design**: Neumorphic design system with soft blue and white color scheme
- **Responsive Layout**: Mobile-first design that works on all screen sizes
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **TypeScript**: Full type safety and better developer experience
- **Component Library**: Built with shadcn/ui components and TailwindCSS
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite (not Next.js!)
- **Styling**: TailwindCSS with custom neumorphic design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Fonts**: Inter & JetBrains Mono

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── Navigation.tsx  # Website navigation
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features section
│   ├── Overview.tsx    # Overview section
│   ├── Screenshots.tsx # Screenshots section
│   ├── OpenSource.tsx  # Open source section
│   ├── Download.tsx    # Download section
│   └── Footer.tsx      # Website footer
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Features.tsx    # Features page
│   ├── Docs.tsx        # Documentation page
│   ├── Community.tsx   # Community page
│   ├── News.tsx        # News page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/XenchinRyu7/skripsimate-website.git
   cd skripsimate-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

The website uses a custom neumorphic design system with:

- **Color Palette**: Soft blue and white theme
- **Typography**: Inter for body text, JetBrains Mono for code
- **Shadows**: Custom neumorphic shadow variables
- **Components**: Consistent button, card, and input styles
- **Animations**: Smooth transitions and hover effects

### Key CSS Variables

```css
:root {
  /* Primary Blue System */
  --primary: 213 94% 68%;
  --primary-foreground: 0 0% 100%;
  
  /* Neumorphic Surface Colors */
  --neu-light: 0 0% 100%;
  --neu-surface: 210 25% 97%;
  
  /* Shadows - Neumorphic */
  --shadow-neu: 8px 8px 16px hsl(var(--neu-shadow-light)), 
                -8px -8px 16px hsl(var(--neu-highlight));
}
```

## 📱 Pages

- **Home** (`/`) - Overview of SkripsiMate with hero, features, and call-to-action
- **Features** (`/features`) - Detailed features of the SkripsiMate desktop application
- **Docs** (`/docs`) - Documentation for the SkripsiMate desktop application
- **Community** (`/community`) - Community resources and discussions
- **News** (`/news`) - Latest updates and announcements
- **404** (`/*`) - Custom 404 page with navigation suggestions

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test your changes (`npm run lint && npm run type-check`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Vite](https://vitejs.dev/) for the fast build tool

## 🔗 Links

- **Website**: [skripsimate.com](https://skripsimate.com) (coming soon)
- **Desktop App**: [SkripsiMate Desktop Application](https://github.com/XenchinRyu7/SkripsiMate)
- **Documentation**: [App Documentation](https://github.com/XenchinRyu7/SkripsiMate/blob/main/README.md)

---

**Happy thesis planning! 🎓**