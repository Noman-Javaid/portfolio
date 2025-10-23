# Portfolio Website - M Noman Javaid

A stunning, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases professional experience, projects, skills, and contact information in a beautiful and responsive design.

## 🚀 Features

- **Modern Design**: Beautiful gradient effects, glass morphism, and smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Performance**: Fast loading times with Next.js optimizations
- **Smooth Animations**: Engaging user experience with subtle animations
- **Interactive Components**: Expandable project cards, mobile navigation, and more

## 📋 Sections

1. **Hero/Banner**: Eye-catching introduction with personal branding
2. **About**: Professional summary and key highlights
3. **Experience**: Detailed work history at STACK360
4. **Projects**: Showcase of 9+ major projects with expandable details
5. **Skills**: Comprehensive technical skills organized by category
6. **Education**: Academic background
7. **Contact**: Multiple ways to get in touch with contact form
8. **Footer**: Quick links and social media connections

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository** (or you're already in it):
   ```bash
   cd /Users/nomanjavaid/Documents/projects/portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   └── sections/
│       ├── Hero.tsx         # Hero/Banner section
│       ├── About.tsx        # About section
│       ├── Experience.tsx   # Experience section
│       ├── Projects.tsx     # Projects showcase
│       ├── Skills.tsx       # Skills section
│       ├── Education.tsx    # Education section
│       └── Contact.tsx      # Contact form and info
├── data/
│   └── portfolio.ts         # All content data
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🎨 Customization

To customize this portfolio for yourself:

1. **Update personal information**:
   - Edit `/data/portfolio.ts` to update your information
   - Modify `personalInfo`, `experience`, `projects`, `skills`, and `education` objects

2. **Change colors**:
   - Edit `tailwind.config.ts` to modify the color scheme
   - Update gradient colors in components

3. **Add/Remove sections**:
   - Modify `/app/page.tsx` to add or remove sections
   - Create new components in `/components/sections/`

4. **Update metadata**:
   - Edit `/app/layout.tsx` to change SEO information

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Heroku
- Railway

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contact

- **Email**: javaidn96@gmail.com
- **Phone**: +92 324 4345157
- **Location**: Lahore, Pakistan

## 📄 License

This project is open source and available for personal use.

---

Made with ❤️ using Next.js & Tailwind CSS

