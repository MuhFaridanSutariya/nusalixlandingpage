# 🚀 Nusalix Tech - Technology Solutions Website

Modern, responsive website showcasing innovative technology solutions in Data Management, AI, and Software Development.

![Nusalix Tech](./public/preview.png)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with glass morphism effects
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- ⚡ **High Performance** - Built with Next.js 15 and optimized for speed
- 🌟 **Interactive Animations** - Smooth transitions with Framer Motion
- 🔧 **Logo Showcase** - Animated logo carousels for different tech stacks
- 📧 **Contact Integration** - WhatsApp and email contact options
- 🎯 **SEO Optimized** - Meta tags and structured data
- 🌙 **Professional Gradient** - Beautiful color schemes throughout

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + [Tabler Icons](https://tabler-icons.io/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Theme**: [Next Themes](https://github.com/pacocoursey/next-themes)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Abdulrivai/nusalixlandingpage.git
cd nusalixlandingpage
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

### 4. Open your browser

Visit [http://localhost:9000](http://localhost:9000) to see the website.

## 📁 Project Structure

```
nusalixlandingpage/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── logo-sections.tsx
│   │   │   ├── contact-section.tsx
│   │   │   └── footer.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   └── LogoLoop.tsx
│   ├── hooks/
│   ├── lib/
│   └── styles/
├── public/
│   ├── logos/
│   │   ├── ai/
│   │   ├── development/
│   │   └── data-management/
│   └── images/
├── .gitignore
├── components.json
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎯 Key Sections

### 🏠 Hero Section
- Animated gradient backgrounds
- Call-to-action buttons
- Professional introduction

### 👥 About Section
- Company overview
- Mission and values
- Team highlights

### 🔧 Services Section
- **Data Management** - MongoDB, PostgreSQL, Redis, ChromaDB
- **Artificial Intelligence** - TensorFlow, PyTorch, OpenAI, Gemini
- **Software Development** - React, Next.js, Node.js, FastAPI
- **IoT Solutions** - Arduino, Raspberry Pi, ESP32
- **Game Development** - Unity, Unreal Engine
- **Branding & Design** - Creative solutions

### 🏢 Logo Showcase
- Animated logo carousels with GSAP
- Categorized by technology type
- Smooth scrolling animations
- Hover effects and transitions

### 📞 Contact Section
- WhatsApp integration with pre-filled messages
- Email copy functionality
- Multiple contact options
- Business information display

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "your-primary-color",
        secondary: "your-secondary-color",
        // ...
      }
    }
  }
}
```

### Logo Sections
Add/modify logos in `src/components/sections/logo-sections.tsx`:

```tsx
const yourLogos = [
  { 
    node: <img src="/logos/your-logo.svg" alt="Your Logo" className="w-12 h-12" />, 
    title: "Your Technology", 
    href: "#" 
  },
  // ...
];
```

## 📱 Contact Integration

### WhatsApp
- Direct chat links with pre-filled messages
- Multiple contact scenarios (general, quotes, partnerships)
- Phone number: +62 853 9193 8708

### Email
- Copy email functionality
- Professional contact information: nusalixtech@gmail.com
- Business hours and locations

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically
4. Server will run on custom port 9000

### Other Platforms

```bash
# Build for production
npm run build

# Start production server (port 9000)
npm start
```

## 📈 Performance Features

- ⚡ **Next.js 15** latest features and optimizations
- 🖼️ **Image optimization** for logos and graphics
- 📦 **Code splitting** for better performance
- 🎯 **SEO friendly** with proper meta tags
- 🔄 **Incremental Static Regeneration** support
- 📊 **Vercel Analytics** integration

## 🎨 Animation Features

- **Framer Motion** for component animations
- **GSAP** for advanced timeline animations
- **CSS Transforms** for hover effects
- **Tailwind Animate** utilities
- **Custom keyframes** and transitions

## 🧩 UI Components

Built with comprehensive Radix UI primitives:
- Dialogs, Dropdowns, Tooltips
- Form controls with validation
- Navigation menus
- Progress indicators
- And many more...

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Nusalix Tech**
- 📧 Email: nusalixtech@gmail.com
- 📱 Phone: +62 853 9193 8708
- 🌐 Website: [Your Website URL]
- 📍 Location: Kalimantan Timur, Indonesia

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Lucide](https://lucide.dev/) for consistent icons

---

**Made with ❤️ by Nusalix Tech Team**