# Portfolyo - Personal Portfolio Website

A modern, responsive portfolio website built with React showcasing iOS development projects, music production, and game development work.

## 🚀 Features

- **Modern Design**: Clean, Apple-inspired UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Blog Section**: Share your thoughts on iOS development, music, and game dev
- **Portfolio Showcase**: Filter and display projects by category
- **Contact Form**: Easy way for visitors to get in touch
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library
- **CSS3** - Custom styling with CSS variables

## 📦 Installation

1. **Clone the repository** (or you're already in it)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   The site will be running at `http://localhost:3000`

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolyo/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global app styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🎨 Customization

### Update Your Information

1. **Personal Info**: Edit the content in `src/components/Hero.jsx`
2. **About Section**: Modify `src/components/About.jsx`
3. **Projects**: Update the projects array in `src/components/Portfolio.jsx`
4. **Blog Posts**: Edit the blogPosts array in `src/components/Blog.jsx`
5. **Contact Info**: Update email and social links in components

### Styling

- Global variables are defined in `src/index.css`
- Each component has its own CSS file
- Color scheme uses CSS variables for easy theming

### Colors

The site uses a dark theme with accent colors:
- Blue: `#007AFF` - Primary accent
- Purple: `#AF52DE` - Secondary accent
- Orange: `#FF9500` - Tertiary accent
- Green: `#34C759` - Success/positive

## 🚀 Deployment

### Deploy to Netlify

1. Build your project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Vite and configure build settings

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 To-Do

- [ ] Add actual project images
- [ ] Implement blog post data from CMS or markdown files
- [ ] Add form backend for contact submissions
- [ ] Add dark/light theme toggle
- [ ] Implement search functionality for blog
- [ ] Add animations with Framer Motion
- [ ] Add SEO meta tags
- [ ] Implement analytics

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork it and customize it for your own use!

## 📄 License

MIT License - feel free to use this project for your own portfolio.

## 👨‍💻 Author

**Bugra**
- iOS Developer
- Music Producer
- Game Dev Enthusiast

---

Made with ❤️ using React

