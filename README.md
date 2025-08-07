# Elnuby Group Corporate Website

A modern, professional corporate website for Elnuby Group built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Fast Loading**: Built with Vite for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper focus states
- **Interactive**: Smooth animations and transitions using Framer Motion

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **TypeScript** - Type safety (optional)

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ProudSection.jsx
│   ├── GroupSection.jsx
│   ├── ActivitiesSection.jsx
│   ├── MissionVisionSection.jsx
│   ├── PartnersSection.jsx
│   └── ProjectCard.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Career.jsx
│   └── Contact.jsx
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Design Features

### Pages
- **Home Page**: Hero carousel, company overview, achievements, services, mission & vision, partners
- **About Page**: Detailed company story, values, leadership
- **Projects Page**: Filterable project gallery with categories
- **Career Page**: Job listings with application forms
- **Contact Page**: Contact form, map, office locations

### Components
- **Modern Navbar**: Transparent background, smooth transitions, mobile responsive
- **Hero Carousel**: Auto-rotating slides with call-to-action buttons
- **Interactive Cards**: Hover effects and animations
- **Timeline**: Company milestones and achievements
- **Partners Carousel**: Auto-rotating partner logos
- **Contact Forms**: Professional forms with validation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-project
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
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Key Features

### Home Page Sections
1. **Hero Section**: Full-screen carousel with company messaging
2. **About Section**: Company introduction with statistics
3. **Proud Section**: Achievements and milestones timeline
4. **Group Section**: Company structure and divisions
5. **Activities Section**: Services and construction activities
6. **Mission & Vision**: Company values and principles
7. **Partners Section**: Partner logos carousel

### Interactive Elements
- **Smooth Scrolling**: Between sections and pages
- **Hover Animations**: Cards and buttons
- **Scroll Animations**: Elements animate on scroll
- **Carousel Controls**: Manual and auto-rotation
- **Form Validation**: Contact and application forms
- **Mobile Menu**: Responsive navigation

### Performance Optimizations
- **Lazy Loading**: Components load as needed
- **Optimized Images**: Placeholder system for images
- **Minimal Dependencies**: Only essential packages
- **Fast Build**: Vite for rapid development
- **Code Splitting**: Automatic route-based splitting

## 🎨 Customization

### Colors
The website uses a blue-based color scheme that can be easily customized in the Tailwind configuration:

```css
/* Primary colors */
--blue-600: #2563eb
--blue-700: #1d4ed8
--blue-800: #1e40af
--blue-900: #1e3a8a
```

### Content
- Update company information in component files
- Replace placeholder images with actual project photos
- Modify contact information and addresses
- Update partner logos and information

### Styling
- Modify `src/index.css` for global styles
- Update component-specific styles in each component
- Customize animations in Framer Motion components

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **Focus States**: Visible focus indicators
- **Alt Text**: Placeholder for images
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Compatible with assistive technologies

## 🔧 Development

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

### Adding New Components
1. Create component in `src/components/`
2. Import and use in pages
3. Add animations with Framer Motion

### Styling
- Use Tailwind CSS classes
- Add custom styles in `src/index.css`
- Use Framer Motion for animations

## 📦 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Deploy automatically on push
3. Custom domain configuration

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy from Git

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder to server
3. Configure server for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- Email: info@elnuby.com
- Phone: +971 4 123 4567

---

**Built with ❤️ for Elnuby Group**
