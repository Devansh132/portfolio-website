# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases my skills, experience, projects, and provides a professional way to connect with potential employers and clients.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: 
  - Hero section with animated background
  - Skills showcase with progress bars
  - Project gallery with detailed descriptions
  - Experience timeline
  - Contact form with email integration
  - Certifications display
- **Performance Optimized**: Built with Vite for fast development and production builds
- **SEO Friendly**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Email Integration**: EmailJS
- **Animations**: Custom CSS animations and particle effects

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section
│   ├── Certifications.tsx # Certifications display
│   ├── Contact.tsx        # Contact form
│   ├── CursorTrail.tsx    # Custom cursor effects
│   ├── Experience.tsx     # Work experience timeline
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── LoadingScreen.tsx  # Loading animation
│   ├── ParticleBackground.tsx # Animated background
│   ├── Projects.tsx       # Projects showcase
│   ├── ScrollToTop.tsx    # Scroll to top button
│   └── Skills.tsx         # Skills section
├── App.tsx                # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Your name, title, and introduction
- `src/components/About.tsx` - Your bio and personal details
- `src/components/Experience.tsx` - Your work experience
- `src/components/Projects.tsx` - Your projects
- `src/components/Skills.tsx` - Your skills
- `src/components/Certifications.tsx` - Your certifications
- `src/components/Contact.tsx` - Contact information

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Component-specific styles are in each component file
- Global styles are in `src/index.css`

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service
3. Update the EmailJS configuration in `src/components/Contact.tsx`

## 🚀 Deployment

This project is optimized for deployment on Vercel, Netlify, or any static hosting service.

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
