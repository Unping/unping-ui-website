# Unping UI - Official Website

The official marketing and documentation website for Unping UI, a Web & Desktop first Flutter component library.

**🌐 Live Website**: [unping-ui.com](https://unping-ui.com)

## 🚀 About Unping UI

Unping UI is a Flutter component library designed with a Web & Desktop first approach, providing beautiful, accessible, and highly customizable UI components for Flutter applications.

**Key Features:**
- 📱 **Web & Desktop First** - Optimized for web and desktop platforms
- 🎨 **Design System** - Comprehensive design tokens and foundation
- 🧩 **Copy & Paste Ready** - Components you can easily add to your project
- 🔧 **Highly Customizable** - Flexible theming and styling options
- ✅ **Well Tested** - Comprehensive test coverage
- 📚 **Widgetbook Integration** - Live component documentation

## 🏗️ Website Tech Stack

This website is built with:

- ⚡ **Vite** - Lightning fast dev server and build tool
- ⚛️ **React 18** - Modern React with hooks and concurrent features
- 🎨 **Unping-UI Design System** - Mirrored design tokens from the Flutter library
- 🧩 **shadcn/ui Components** - Beautiful, accessible UI components
- 🎯 **Tailwind CSS** - Utility-first CSS framework with custom Unping-UI configuration
- 🔒 **Appwrite** - Backend-as-a-service (optional for future features)
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode Ready** - Built-in dark/light theme support

## 🎨 Unping UI Design System

This website mirrors the **Unping-UI design system** from the Flutter library, featuring:

### Colors
- **Primary**: Sophisticated blue palette (`primary-25` to `primary-950`)
- **Neutral**: Refined gray scale (`neutral-25` to `neutral-950`) 
- **Success**: Green palette for positive actions
- **Warning**: Amber palette for cautions
- **Error**: Red palette for destructive actions

### Typography
- **Display sizes**: `2xl` (72px) to `xs` (24px) for hero headings
- **Heading sizes**: `xl` (30px) to `xs` (16px) for section titles
- **Body sizes**: `xl` (20px) to `xs` (12px) for content text
- **Font weights**: `thin` (100) to `black` (900)

### Spacing System
Consistent spacing scale: `0.5` (2px) to `480` (1920px)

### Border Radius
- `xs` (4px), `sm` (8px), `md` (12px), `lg` (16px), `xl` (28px), `xxl` (32px), `full` (9999px)

## 🚀 Development Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/unping/unping-ui-website.git
cd unping-ui-website

# Install dependencies
npm install

# Or with yarn
yarn install

# Or with pnpm
pnpm install
```

### 2. Environment Setup (Optional)

For Appwrite integration (if needed for future features):

1. Create a `.env` file based on `.env.example` (if it exists)
2. Configure Appwrite credentials:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id_here
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see the website!

## 🏗️ Project Structure

```
├── src/
│   ├── components/
│   │   └── ui/           # shadcn/ui components + custom components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── alert.tsx
│   │       ├── badge.tsx
│   │       ├── avatar.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── tabs.tsx
│   │       ├── tooltip.tsx
│   │       ├── sonner.tsx
│   │       ├── background-beams.tsx
│   │       ├── container-text-flip.tsx
│   │       ├── dot-background.tsx
│   │       ├── glowing-effect.tsx
│   │       └── text-hover-effect.tsx
│   ├── lib/
│   │   ├── appwrite.ts     # Appwrite configuration (optional)
│   │   ├── foundation.ts   # Unping-UI design tokens
│   │   └── utils.ts        # Utility functions
│   ├── pages/
│   │   └── Imprint.tsx     # Legal/imprint page
│   ├── App.tsx             # Main application component
│   ├── main.tsx           # React entry point
│   └── index.css          # Global styles with design tokens
├── public/                # Static assets (icons, manifest)
├── appwrite.json         # Appwrite project configuration
├── deploy.sh            # Deployment script
└── README.md
```
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── appwrite.json        # Appwrite project configuration
└── README.md
```

## 🎨 Available Components

This website includes several UI components:

### shadcn/ui Components
- **Alert** - Information and warning messages
- **Avatar** - User profile images
- **Badge** - Status indicators and labels  
- **Button** - Various styles and sizes
- **Card** - Content containers with header, body, footer
- **Dialog** - Modal dialogs and overlays
- **Dropdown Menu** - Context menus and dropdowns
- **Navigation Menu** - Main navigation components
- **Select** - Dropdown selection inputs
- **Separator** - Visual dividers
- **Tabs** - Tabbed content sections
- **Tooltip** - Contextual help text
- **Sonner** - Toast notifications

### Custom Components
- **Background Beams** - Animated background effects
- **Container Text Flip** - Animated text transitions
- **Dot Background** - Dotted pattern backgrounds  
- **Glowing Effect** - Interactive glow animations
- **Text Hover Effect** - Text animation on hover

### Adding More shadcn/ui Components

To add more components from shadcn/ui:

```bash
# Add components using shadcn/ui CLI
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form  
npx shadcn-ui@latest add table
```

## 🔧 Customization

### Design Tokens

The website uses Unping-UI design tokens defined in `src/lib/foundation.ts`. These mirror the Flutter library's design system:

```typescript
import { UiColors, UiTextStyles, UiSpacing, UiBorderRadius } from './lib/foundation'
```

### Global Styles

Customize the theme in `src/index.css` using CSS custom properties:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --neutral-950: 12 6% 15%;
  /* ... other design tokens */
}
```

### Tailwind Configuration

The `tailwind.config.js` extends the default configuration with Unping-UI design tokens:
- Custom color palette
- Typography scale
- Spacing system  
- Border radius values
- Responsive breakpoints

## 📦 Building and Deployment

### Build for Production

```bash
# Build the website
npm run build

# Preview production build locally  
npm run preview
```

The built files will be in the `dist/` directory.

### Quick Deploy Script

Use the included deployment script:

```bash
./deploy.sh
```

### Deployment Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

#### GitHub Pages
```bash
npm run build
# Push dist/ contents to gh-pages branch
```

#### Custom Server
```bash
npm run build
# Upload dist/ contents to any web server
```

## � Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint with TypeScript support

## � Related Links

- **Unping UI Flutter Library**: [GitHub](https://github.com/unping/unping-ui)
- **Live Component Demo**: [Widgetbook](https://widgetbook.unping-ui.com)
- **Flutter Package**: [pub.dev](https://pub.dev/packages/unping_ui)
- **FPX CLI Tool**: [GitHub](https://github.com/unping/fpx) - For easy component installation

## 🤝 Contributing

Contributions to improve the website are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT License - This website is open source and free to use.

## 🆘 Support & Documentation

- **Unping UI Documentation**: [unping-ui.com](https://unping-ui.com)
- **Widgetbook**: [widgetbook.unping-ui.com](https://widgetbook.unping-ui.com)
- **Issues**: [GitHub Issues](https://github.com/unping/unping-ui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/unping/unping-ui/discussions)

### Tech Stack Documentation
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev) 
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Appwrite Documentation](https://appwrite.io/docs) (optional features)

---

**Built with ❤️ for the Flutter community** 🎉
