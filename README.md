# Invest Forward - Startup Consulting Website

A modern, professional website for Invest Forward, a UK-based startup consulting company. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

### Pages & Sections
- **Homepage** - Hero section, value proposition, services overview, case studies preview, blog highlights, and CTA
- **Services** - Detailed service offerings with pricing and how-we-work process
- **About** - Company story, team profiles with expertise, and core values
- **Case Studies** - Success stories with detailed individual case study pages
- **Blog** - Resource articles with individual post pages
- **FAQs** - Comprehensive FAQ section organized by category
- **Contact** - Contact form, contact information, and additional FAQs

### Technical Features
- Responsive design (mobile, tablet, desktop)
- SEO-optimized with metadata
- TypeScript for type safety
- Tailwind CSS for styling
- Reusable React components
- Dynamic routing for blog posts and case studies
- Contact form (frontend only - integrate with backend service)
- Newsletter signup form
- Navigation with mobile menu

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with navigation & footer
│   ├── page.tsx                 # Homepage
│   ├── about/page.tsx           # About page
│   ├── blog/
│   │   ├── page.tsx             # Blog listing
│   │   └── [slug]/page.tsx      # Individual blog post
│   ├── case-studies/
│   │   ├── page.tsx             # Case studies listing
│   │   └── [id]/page.tsx        # Individual case study
│   ├── contact/page.tsx         # Contact page
│   ├── faqs/page.tsx            # FAQs page
│   ├── services/page.tsx        # Services page
│   └── globals.css              # Global styles
├── components/                   # Reusable React components
│   ├── Navigation.tsx           # Header navigation
│   ├── Footer.tsx               # Footer
│   ├── HeroSection.tsx          # Hero section component
│   ├── ServiceCard.tsx          # Service card component
│   ├── CaseStudyCard.tsx        # Case study card component
│   ├── BlogCard.tsx             # Blog post card component
│   ├── ContactForm.tsx          # Contact form component
│   └── FAQAccordion.tsx         # FAQ accordion component
├── config/
│   └── site.ts                  # Site configuration, company info, services
├── data/                         # Static data
│   ├── blog.ts                  # Blog posts data
│   ├── caseStudies.ts           # Case studies data
│   ├── faqs.ts                  # FAQ data
│   └── team.ts                  # Team members data
└── public/                       # Static assets
```

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## 📋 Prerequisites

- Node.js 18+ or equivalent
- npm, yarn, pnpm, or bun package manager

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### 3. Edit Content

All static content is stored in the `src/data/` directory:
- **Blog posts** - `src/data/blog.ts`
- **Case studies** - `src/data/caseStudies.ts`
- **FAQs** - `src/data/faqs.ts`
- **Team members** - `src/data/team.ts`
- **Company info & services** - `src/config/site.ts`

### 4. Build for Production
```bash
npm run build
npm start
```

## 🎨 Customization

### Update Company Information
Edit `src/config/site.ts`:
```typescript
export const siteConfig = {
  name: "Invest Forward",
  company: {
    name: "Invest Forward Ltd",
    email: "hello@investforward.co.uk",
    phone: "+44 (0) 20 XXXX XXXX",
    // ... more config
  },
  // ...
};
```

### Add Blog Posts
Edit `src/data/blog.ts`:
```typescript
export const blogPosts = [
  {
    id: "unique-id",
    title: "Post Title",
    slug: "post-title",
    excerpt: "Short excerpt",
    content: "Full content",
    author: "Author Name",
    date: "2024-12-25",
    category: "Category",
    readTime: 5
  },
  // ... more posts
];
```

### Customize Colors
Edit `tailwind.config.ts` to change the color scheme. The site currently uses blue (#2563EB).

### Add Images
Place images in the `public/` directory and reference them in components.

## 📞 Contact Form Integration

The contact form is currently frontend-only. To make it functional, integrate with:
- **Email service**: Resend, SendGrid, or Mailgun
- **CMS**: Firebase, Supabase, or Airtable
- **Form backend**: Formspree or similar service

Update the `handleSubmit` function in `src/components/ContactForm.tsx`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live at `your-domain.vercel.app`

### Custom Domain
In Vercel project settings, add your custom domain (e.g., `investforward.co.uk`)

### Other Deployment Options
- **Netlify**: Not recommended for dynamic routes
- **Railway**: Supports Next.js with ease
- **Self-hosted**: Use `npm run build` and `npm start`

## 📱 SEO & Meta Tags

Each page has SEO-optimized metadata. Edit the `metadata` exports in page files:
```typescript
export const metadata = {
  title: 'Page Title | Invest Forward',
  description: 'Page description for SEO',
};
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Important Notes

1. **UK Ltd Company**: Update company number and registered address in `src/config/site.ts`
2. **Contact Form**: Replace placeholder email handling with real backend
3. **Images**: Add company logo and team photos to `public/` directory
4. **Newsletter**: Implement newsletter subscription backend integration
5. **Analytics**: Add Google Analytics or Vercel Analytics
6. **Privacy Policy & Terms**: Add these pages for compliance

## 🔐 Legal Compliance (UK)

Required for UK Ltd company:
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] GDPR compliance for forms
- [ ] Cookie consent (if applicable)
- [ ] Company registration details (in footer)
- [ ] Data protection terms for contact forms

## 📊 Analytics & Tracking

Add to your `src/app/layout.tsx`:
```typescript
// Google Analytics
import { GoogleAnalytics } from '@next/third-parties/google'

// Then in the layout:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

## 🆘 Support & Development

For questions or modifications:
1. Review the Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
2. Check Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
3. Update server deployment configurations as needed

## 📄 License

This is a custom project for Invest Forward Ltd.

---

## 🎯 Next Steps for Launch

1. [ ] Update company information in `src/config/site.ts`
2. [ ] Add company logo to `public/` directory
3. [ ] Replace team member images and bios
4. [ ] Update blog posts and case studies with real data
5. [ ] Integrate contact form with backend service (Resend, SendGrid, etc.)
6. [ ] Add Google Analytics or Vercel Analytics
7. [ ] Create Privacy Policy and Terms of Service pages
8. [ ] Set up custom domain on Vercel
9. [ ] Test all pages and forms in production
10. [ ] Monitor performance and user engagement

For questions or support, contact: hello@investforward.co.uk
