import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DemoBanner from "./components/DemoBanner";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";
import { OrderProvider } from "./context/OrderContext";
import { SearchProvider } from "./context/SearchContext";

// Modern, clean font for body text and UI elements
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Elegant serif font for headings and branding
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Clean monospace font for code and technical content
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ShopVibe - Premium Online Store | Fashion, Electronics & More",
  description: "Discover premium products across various categories. From fashion to home decor, we've got you covered. Free shipping on orders over $75.",
  keywords: "online store, fashion, electronics, home decor, premium products, shopping, e-commerce",
  authors: [{ name: "ShopVibe Team" }],
  creator: "ShopVibe",
  publisher: "ShopVibe",
  robots: "index, follow",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shopvibe.com",
    siteName: "ShopVibe",
    title: "ShopVibe - Premium Online Store",
    description: "Discover premium products across various categories. From fashion to home decor, we've got you covered.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShopVibe - Premium Online Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopVibe - Premium Online Store",
    description: "Discover premium products across various categories. From fashion to home decor, we've got you covered.",
    images: ["/og-image.jpg"],
    creator: "@shopvibe",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8B5CF6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <AuthProvider>
          <OrderProvider>
            <WishlistProvider>
              <CartProvider>
                <SearchProvider>
                  <DemoBanner />
                  <Header />
                  <main className="bg-[#f8f9ff]">
                    {children}
                  </main>
                  <Footer />
                </SearchProvider>
              </CartProvider>
            </WishlistProvider>
          </OrderProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
