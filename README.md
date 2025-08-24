# GlobalRecruit - International Recruitment Agency Website

A modern, responsive website for GlobalRecruit, a specialized international recruitment agency connecting exceptional talent with leading companies worldwide.

## Features

- **Landing Page**: Hero section, agency introduction, services overview, and call-to-action
- **About Page**: Agency mission, values, global presence, and international recruitment expertise
- **Contact Page**: Contact form with Calendly integration for scheduling consultations
- **Job Application Page**: Professional candidate application form with CV upload
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Smooth animations, hover effects, and professional styling

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scheduling**: React Calendly
- **Styling**: Custom CSS with Tailwind utilities

## Color Scheme

- **Background**: #19022c (Dark Purple)
- **Primary Accent**: #6c1293 (Purple)
- **Secondary Accent**: #35358B (Blue-Purple)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── page.js              # Landing page
│   ├── about/page.jsx       # About page
│   ├── contact/page.jsx     # Contact page
│   ├── job-application/page.jsx  # Job application form
│   └── layout.js            # Root layout
├── components/
│   └── Layout/
│       ├── Navbar.jsx       # Navigation component
│       ├── Footer.jsx       # Footer component
│       └── LayoutWrapper.jsx # Layout wrapper
└── globals.css              # Global styles
```

## Key Components

- **Navbar**: Responsive navigation with recruitment agency branding
- **Hero Section**: Compelling headline and call-to-action for international recruitment
- **Services Overview**: Global talent sourcing, executive recruitment, overseas placements
- **Process Steps**: Discovery, Sourcing, and Placement workflow
- **Contact Form**: Integrated with Calendly for consultation scheduling
- **Job Application**: Professional form with file upload and confirmation

## Customization

The website is built with modularity in mind, making it easy to:
- Update content and messaging
- Modify color schemes
- Add new pages or sections
- Integrate additional recruitment tools

## Deployment

The website can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Custom servers

## Support

For questions or support, please contact the development team or refer to the Next.js documentation.
