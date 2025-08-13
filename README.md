# 🛍️ ShopVibe - Premium Online Store

A modern, responsive e-commerce platform built with Next.js 15, featuring a beautiful UI and comprehensive shopping experience.

## ✨ Features

### 🏠 **Core Pages**
- **Home Page** - Hero section with featured products and special offers
- **Shop** - Complete product catalog with advanced filtering
- **Product Details** - Individual product pages with full specifications
- **Shopping Cart** - Dynamic cart with quantity management
- **User Account** - Profile management and order history
- **Search** - Powerful product search functionality

### 🎨 **User Experience**
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive UI** - Smooth animations and hover effects
- **Loading States** - Professional loading indicators
- **404 Page** - Custom not found page with navigation
- **Breadcrumbs** - Clear navigation paths

### 🛒 **Shopping Features**
- **Product Filtering** - Filter by price, color, size, and brand
- **Search Functionality** - Real-time product search
- **Cart Management** - Add, remove, and update quantities
- **Product Variants** - Color and size selection
- **Related Products** - Smart product recommendations

### 📱 **Additional Pages**
- **About Us** - Company story and team information
- **Contact** - Contact form with multiple communication options
- **FAQs** - Comprehensive frequently asked questions
- **Account Management** - User profile and settings

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd online-store
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
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **State Management:** React Context API
- **Icons:** Custom SVG illustrations
- **Fonts:** [Geist](https://vercel.com/font) font family

## 📁 Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── SectionHeader.tsx
├── context/            # React Context providers
│   └── CartContext.tsx
├── data/              # Static data and types
│   └── products.ts
├── about/             # About page
├── account/           # User account pages
├── cart/              # Shopping cart
├── contact/           # Contact page
├── faqs/              # FAQ page
├── product/[id]/      # Dynamic product pages
├── search/            # Search functionality
├── shop/              # Product catalog
├── globals.css        # Global styles
├── layout.tsx         # Root layout
├── loading.tsx        # Loading component
├── not-found.tsx      # 404 page
└── page.tsx           # Home page
```

## 🎯 Key Features Breakdown

### 🛍️ **Shopping Cart**
- Persistent cart state across pages
- Add/remove items with quantity control
- Real-time price calculations
- Tax and shipping calculations

### 🔍 **Search & Filtering**
- Real-time product search
- Advanced filtering options
- Sort by price, popularity, newest
- Category-based browsing

### 📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions
- Accessible navigation

### 🎨 **UI/UX**
- Modern gradient designs
- Smooth animations
- Interactive hover effects
- Professional loading states

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Deployment Options

- **Netlify:** Connect GitHub repository
- **Railway:** Deploy with `railway up`
- **Docker:** Use the included Dockerfile

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Vercel](https://vercel.com/) for hosting and deployment
- Custom SVG illustrations for product images

---

**Built with ❤️ using Next.js 15 and Tailwind CSS**
