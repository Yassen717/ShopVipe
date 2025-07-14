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
    <div className="min-h-screen bg-gradient-to-br from-background via-epic to-cool flex flex-col items-center justify-center p-0">
      <header className="w-full py-12 flex flex-col items-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-epic to-cool drop-shadow-lg animate-gradient-x">
          Epic Online Store
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-foreground/80 font-medium animate-pulse-fast">
          Colorful. Animated. Unforgettable.
        </p>
      </header>
      <main className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 py-8">
        {products.map((product, idx) => (
          <div
            key={product.name}
            className={`group relative rounded-3xl p-6 bg-gradient-to-br ${product.color} shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:rotate-[-2deg] animate-bounce-slow`}
          >
            <div className="absolute -top-8 -right-8 opacity-30 blur-2xl w-32 h-32 rounded-full bg-white pointer-events-none" />
            <Image
              src={product.image}
              alt={product.name}
              width={120}
              height={120}
              className="mx-auto drop-shadow-xl group-hover:scale-110 transition-transform duration-300 animate-spin-slow"
            />
            <h2 className="mt-6 text-2xl font-bold text-white drop-shadow-sm animate-fade-in">
              {product.name}
            </h2>
            <p className="mt-2 text-lg text-white/90 animate-fade-in">
              {product.price}
            </p>
            <button className="mt-6 w-full py-2 rounded-xl bg-white/90 text-background font-bold text-lg shadow-lg transition hover:bg-foreground hover:text-epic animate-pulse-fast">
              Buy Now
            </button>
          </div>
        ))}
      </main>
      <footer className="w-full py-8 flex flex-col items-center gap-2 animate-fade-in">
        <p className="text-foreground/70 text-sm">&copy; {new Date().getFullYear()} Epic Online Store. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-primary hover:underline">Instagram</a>
          <a href="#" className="text-accent hover:underline">Twitter</a>
          <a href="#" className="text-epic hover:underline">Contact</a>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
