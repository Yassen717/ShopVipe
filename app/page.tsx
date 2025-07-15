"use client";
import Image from "next/image";

const products = [
  {
    name: "Epic Sneakers",
    price: "$120",
    image: "/sneaker.png",
    color: "from-primary to-accent",
  },
  {
    name: "Cool Headphones",
    price: "$80",
    image: "/headphones.png",
    color: "from-cool to-secondary",
  },
  {
    name: "Colorful Backpack",
    price: "$60",
    image: "/backpack.png",
    color: "from-epic to-primary",
  },
  {
    name: "Vibrant Watch",
    price: "$150",
    image: "/watch.png",
    color: "from-secondary to-epic",
  },
];

export default function Home() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-16 px-4 rounded-b-3xl shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Discover Your Style,<br />Elevate Your Life</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">Explore our curated collection of premium products designed to enhance your everyday experiences. From fashion to home decor, we’ve got you covered.</p>
          <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full w-fit transition">Shop Now &rarr;</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto py-14 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Featured Products</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8 rounded-full" />
        {/* TODO: Add featured products grid here */}
      </section>

      {/* New Arrivals */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">New Arrivals</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8 rounded-full" />
        {/* TODO: Add new arrivals grid here */}
      </section>

      {/* Special Offers */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Special Offers</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8 rounded-full" />
        {/* TODO: Add special offers cards here */}
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-12 px-4 rounded-3xl max-w-6xl mx-auto my-12 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Subscribe to Our Newsletter</h2>
        <p className="text-center mb-6">Stay updated with our latest products, offers, and news. Get exclusive deals directly to your inbox!</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input type="email" placeholder="Enter your email address" className="rounded-full px-4 py-2 text-gray-800 w-full" />
          <button type="submit" className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 py-2 rounded-full transition">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
