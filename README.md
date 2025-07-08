# Natnael Darsema - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a comprehensive showcase of projects, skills, and professional experience.

## ✨ Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark Mode Toggle** - Switch between light and dark themes
- **Interactive Project Filtering** - Filter projects by category (Full-Stack, Frontend)
- **Enhanced Contact Form** - With form validation and submission feedback
- **SEO Optimized** - Meta tags, structured data, and Open Graph support
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance** - Optimized images, lazy loading, and fast load times
- **Modern UI/UX** - Smooth animations and professional design

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Custom emoji icons and SVG
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── About.tsx          # About section component
│   │   ├── Blog.tsx           # Blog articles section
│   │   ├── Contact.tsx        # Contact form component
│   │   ├── DarkModeToggle.tsx # Dark mode toggle
│   │   ├── Footer.tsx         # Footer component
│   │   ├── LoadingSpinner.tsx # Loading spinner
│   │   ├── Navbar.tsx         # Navigation component
│   │   ├── ProjectCard.tsx    # Individual project card
│   │   ├── Resume.tsx         # Resume/experience section
│   │   ├── Skills.tsx         # Skills showcase
│   │   ├── StructuredData.tsx # SEO structured data
│   │   └── Testimonials.tsx   # Client testimonials
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── metadata.ts            # SEO metadata
│   └── page.tsx               # Main page component
└── public/                    # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

- Update personal details in `src/app/page.tsx` (hero section)
- Modify the About section in `src/app/components/About.tsx`
- Update contact information in `src/app/components/Contact.tsx`

### Projects

- Edit project data in `src/app/page.tsx` (projects array)
- Add/remove project categories as needed
- Update project images in the `public/` folder

### Skills

- Modify skills data in `src/app/components/Skills.tsx`
- Adjust skill levels and categories

### SEO

- Update metadata in `src/app/metadata.ts`
- Modify structured data in `src/app/components/StructuredData.tsx`
- Replace placeholder URLs with your actual domain

### Styling

- Customize colors in `tailwind.config.js`
- Modify global styles in `src/app/globals.css`
- Update component-specific styles

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **Railway**: Deploy directly from GitHub
- **DigitalOcean App Platform**: Connect your repository

## 📧 Contact Form Integration

The contact form is currently set up with a placeholder. To make it functional, you can integrate with:

- **EmailJS**: For direct email sending
- **Formspree**: For form handling
- **Your own backend API**: For custom functionality

## 🔧 Additional Features to Implement

- [ ] Blog CMS integration (e.g., Contentful, Sanity)
- [ ] Analytics (Google Analytics, Vercel Analytics)
- [ ] Newsletter subscription
- [ ] Project search functionality
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Performance monitoring

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: natnael.darsema@gmail.com
- **GitHub**: [@Nati-darse](https://github.com/Nati-darse)
- **LinkedIn**: [Natnael Darsema](https://linkedin.com/in/nathnael-darsema)

---

Made with ❤️ by Natnael Darsema
