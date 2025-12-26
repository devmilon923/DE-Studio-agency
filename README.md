# DE STUDIO - Creative Agency Website

A modern, fully responsive agency website showcasing brand identity, web design, and development services. Built with Next.js, React, and Framer Motion for stunning animations.

## 🌐 Live Demo

**Live Website:** [https://de-studio.vercel.app](https://de-studio.vercel.app)

## 📦 Repository

**Clone the Repository:**

```bash
git clone https://github.com/devmilon923/DE-Studio-agency.git
cd DE-Studio-agency
```

## 📋 Project Overview

### Objectives

- **Frontend-Only Design**: Beautifully crafted frontend interface for an agency website
- **JSON-Driven Content**: All dynamic content (projects, testimonials, team members, FAQs) is managed through JSON data structures
- **Reusable Components**: Modular component architecture for easy extension and customization
- **Easy Maintenance**: Clean code structure with separated concerns for simple updates and maintenance
- **Modern Tech Stack**: Built with cutting-edge technologies for optimal performance and user experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🛠 Tech Stack

- **Framework**: Next.js 16+ with TypeScript
- **UI Library**: React 19+
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist Font Family

## 📁 Project Structure

```
agency-website/
├── app/
│   ├── components/
│   │   ├── CustomCursor.tsx         # Custom mouse cursor component
│   │   ├── FAQSection.tsx           # FAQ accordion section
│   │   └── [other sections]
│   ├── modal/
│   │   ├── modal.tsx                # Contact modal form
│   │   └── ContactModalButton.tsx   # Modal trigger button
│   ├── layout.tsx                   # Root layout with metadata
│   ├── page.tsx                     # Home page (server component)
│   └── globals.css                  # Global styles
├── public/                          # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## 🎨 Key Features

### Server & Client Components Architecture

- **Server Components**: Main page and sections render on the server for better performance
- **Client Components**: Interactive elements (modal, animations, FAQ) use client components with proper state management

### Interactive Elements

- ✨ Custom animated cursor
- 🎭 Smooth page transitions with Framer Motion
- 📋 Expandable FAQ accordion
- 💬 Contact modal form
- 🖼️ Project showcase grid
- 👥 Team member profiles
- ⭐ Client testimonials

### Data Management

All dynamic content is managed through JSON structures within component files:

- Projects data
- Testimonials
- Team members
- FAQs
- Services

## 📝 Customization Guide

### Update Project Data

Edit the data objects in `app/page.tsx`:

```tsx
const projects = [
  {
    title: "Your Project",
    category: "Your Category",
    image: "image-url",
  },
  // ... more projects
];
```

### Modify Colors & Styling

Update Tailwind CSS classes or create custom CSS in `app/globals.css`

### Add New Sections

Create new components in `app/components/` and import them in `app/page.tsx`

## 🔒 Performance & SEO

- Server-side rendering for better SEO
- Optimized metadata with Open Graph support
- Image optimization with Next.js Image
- Fast page transitions with Framer Motion
- Mobile-first responsive design

## 📱 Responsive Design

- Desktop-first approach
- Fully responsive from mobile to 4K displays
- Touch-friendly interface elements

## 🚀 Deployment

The website is optimized for Vercel deployment:

```bash
npm run build
vercel deploy
```

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Contact

**Email**: hello@destudio.design

For more information, visit: [https://de-studio.vercel.app](https://de-studio.vercel.app)

---

**Built with ❤️ by DE STUDIO**
