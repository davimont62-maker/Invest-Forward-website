# Invest Forward - Startup Consulting Website

## Project Overview
Professional website for Invest Forward, a UK-based startup consulting company. Built with Next.js 15+, TypeScript, and Tailwind CSS.

## Key Pages & Features
- **Homepage** - Hero section, value proposition, CTA
- **Services** - Consulting packages and offerings
- **Team/About** - Company information and team profiles
- **Case Studies** - Client testimonials and success stories
- **Blog** - Resources and insights
- **Contact** - Contact form for inquiries
- **FAQs** - Common questions section

## Tech Stack
- Next.js 15+ with App Router
- TypeScript
- Tailwind CSS
- ESLint

## Setup & Running
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Building for Production
```bash
npm run build
npm run start
```

## Deployment
Deploy to Vercel:
1. Push to GitHub repository
2. Connect Vercel to the repo
3. Vercel automatically builds and deploys

## Customization Notes
- Update `src/config/site.ts` for company information
- Replace placeholder images in `public/images/`
- Customize colors in `tailwind.config.ts`
- Update blog posts in `src/data/blog.ts`
- Modify FAQ content in `src/data/faqs.ts`
