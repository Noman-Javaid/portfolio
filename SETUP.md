# Portfolio Setup Guide 🚀

Welcome to your stunning new portfolio website!

## ✅ What's Been Created

Your portfolio includes:

- ✨ **Beautiful Hero Section** with animated background and your profile info
- 📝 **About Section** with professional summary and key highlights
- 💼 **Experience Section** showcasing your work at STACK360
- 🚀 **Projects Section** featuring all 9 major projects with expandable details
- 🛠️ **Skills Section** with categorized technical skills
- 🎓 **Education Section** displaying your academic background
- 📧 **Contact Section** with form and contact information
- 🔗 **Responsive Header** with smooth navigation
- 📱 **Mobile-friendly** design that works on all devices

## 🎨 Design Features

- Modern gradient effects
- Glass morphism UI elements
- Smooth scroll animations
- Hover effects and transitions
- Interactive expandable project cards
- Responsive mobile menu
- Beautiful color scheme (primary blue & accent purple)

## 🏃‍♂️ Quick Start

The development server is already running! Open your browser and visit:

**http://localhost:3000**

## 🛑 Stop the Server

To stop the development server, press `Ctrl + C` in the terminal.

## 🔄 Restart the Server

```bash
npm run dev
```

## 📝 Customization

All your content is stored in `/data/portfolio.ts`. You can easily update:

- Personal information (name, email, phone, etc.)
- Experience details
- Projects (add/remove/edit)
- Skills
- Education
- Social media links

## 🎨 Color Customization

To change the color scheme, edit `tailwind.config.ts`:

```typescript
primary: {
  // Change these values to your preferred colors
  500: '#0ea5e9',  // Main primary color
  600: '#0284c7',  // Darker shade
}
accent: {
  500: '#8b5cf6',  // Accent color
  600: '#7c3aed',  // Darker shade
}
```

## 🌐 Deployment

### Deploy to Vercel (Easiest)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Your portfolio will be live in minutes!

## 📚 Additional Commands

- `npm run build` - Create production build
- `npm start` - Run production server
- `npm run lint` - Check for code issues

## 🎯 Next Steps

1. ✅ Review your portfolio at http://localhost:3000
2. ✅ Customize colors and content in `/data/portfolio.ts`
3. ✅ Add your own profile image (optional)
4. ✅ Test on different devices/browsers
5. ✅ Deploy to Vercel or your preferred platform

## 📧 Need Help?

If you encounter any issues:
- Check the terminal for error messages
- Review the README.md for detailed information
- Ensure all dependencies are installed: `npm install`

## 🎉 You're All Set!

Your portfolio is ready to impress! Make any final tweaks you'd like, then deploy it to share with the world.

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS

