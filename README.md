# Appwrite + Unping-UI Website Boilerplate

A modern, production-ready boilerplate for building websites with:

- ⚡ **Vite** - Lightning fast dev server and build tool
- ⚛️ **React 18** - Modern React with hooks and concurrent features
- 🎨 **Unping-UI Design System** - Consistent colors, spacing, typography, and components
- 🧩 **shadcn/ui Components** - Beautiful, accessible UI components integrated with Unping-UI
- 🎯 **Tailwind CSS** - Utility-first CSS framework with custom Unping-UI configuration
- 🔒 **Appwrite** - Secure backend-as-a-service
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode Ready** - Built-in dark/light theme support
- 🎭 **Outfit Font** - Google Fonts integration matching Unping-UI typography

## 🎨 Design System Integration

This boilerplate is built with the **Unping-UI design system**, featuring:

### Colors
- **Primary**: Sophisticated blue palette (`primary-25` to `primary-950`)
- **Neutral**: Refined gray scale (`neutral-25` to `neutral-950`)
- **Success**: Green palette for positive actions
- **Warning**: Amber palette for cautions
- **Error**: Red palette for destructive actions

### Typography (Outfit Font)
- **Display sizes**: `2xl` (72px) to `xs` (24px) for hero headings
- **Heading sizes**: `xl` (30px) to `xs` (16px) for section titles
- **Body sizes**: `xl` (20px) to `xs` (12px) for content text
- **Font weights**: `thin` (100) to `black` (900)

### Spacing System
Consistent spacing scale: `0.5` (2px) to `480` (1920px)

### Border Radius
- `xs` (4px), `sm` (8px), `md` (12px), `lg` (16px), `xl` (28px), `xxl` (32px), `full` (9999px)

## 🚀 Quick Start

### 1. Installation

```bash
# Install dependencies
npm install

# Or with yarn
yarn install

# Or with pnpm
pnpm install
```

### 2. Appwrite Setup

1. Create an account at [Appwrite Cloud](https://cloud.appwrite.io)
2. Create a new project
3. Copy your Project ID from the Appwrite console
4. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

5. Update `.env` with your Appwrite credentials:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id_here
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

### 3. Configure Appwrite Project

1. Go to your Appwrite project dashboard
2. Navigate to **Settings** → **Platforms**
3. Add a new **Web Platform**:
   - Name: `Web App`
   - Hostname: `localhost` (for development)
   - Add production domains later

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your website!

## 🏗️ Project Structure

```
├── src/
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   │       ├── button.tsx
│   │       └── card.tsx
│   ├── lib/
│   │   ├── appwrite.ts   # Appwrite configuration
│   │   └── utils.ts      # Utility functions
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── appwrite.json        # Appwrite project configuration
└── README.md
```

## 🎨 Available Components

This boilerplate includes several pre-built shadcn/ui components:

- **Button** - Various styles and sizes
- **Card** - Content containers with header, body, footer
- **Icons** - Lucide React icons

### Adding More shadcn/ui Components

To add more components from shadcn/ui:

```bash
# Install shadcn/ui CLI (if not already installed)
npx shadcn-ui@latest init

# Add components
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add input
```

## 🔧 Customization

### Colors and Theme

Customize the theme in `src/index.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... other color variables */
}
```

### Tailwind Configuration

Modify `tailwind.config.js` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints
- And more...

## 📦 Building for Production

```bash
# Build the project
npm run build

# Preview production build locally
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment.

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Appwrite Static Hosting
```bash
# Install Appwrite CLI
npm install -g appwrite-cli

# Deploy to Appwrite
appwrite functions createDeployment --functionId=your-function-id --entrypoint=dist
```

## 🔐 Authentication Setup (Optional)

To add user authentication:

1. Enable Auth in your Appwrite project
2. Configure providers (email, OAuth, etc.)
3. Use Appwrite's authentication methods:

```typescript
import { account } from './lib/appwrite'

// Register user
const user = await account.create('unique-id', 'email@example.com', 'password')

// Login
await account.createEmailSession('email@example.com', 'password')

// Logout
await account.deleteSession('current')
```

## 🗄️ Database Integration

The boilerplate includes a sample database structure in `appwrite.json`. To set it up:

1. Install Appwrite CLI:
```bash
npm install -g appwrite-cli
```

2. Login to your Appwrite account:
```bash
appwrite login
```

3. Deploy the database structure:
```bash
appwrite deploy
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this boilerplate for your projects!

## 🆘 Support

- [Appwrite Documentation](https://appwrite.io/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

**Happy coding!** 🎉
