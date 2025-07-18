export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  brand: string;
  colors: string[];
  sizes: string[];
  featured?: boolean;
  newArrival?: boolean;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Vibrant Summer T-Shirt',
    price: 29.99,
    image: '/tshirt.svg',
    rating: 5,
    brand: 'Brand One',
    colors: ['red', 'blue', 'green'],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
    newArrival: true,
  },
  {
    id: '2',
    name: 'Casual Button-Up Shirt',
    price: 39.99,
    image: '/shirt.svg',
    rating: 4,
    brand: 'Brand Two',
    colors: ['blue', 'gray'],
    sizes: ['M', 'L', 'XL'],
    featured: true,
  },
  {
    id: '3',
    name: 'Cozy Hoodie',
    price: 49.99,
    image: '/hoodie.svg',
    rating: 5,
    brand: 'Brand Three',
    colors: ['gray', 'black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
  },
  {
    id: '4',
    name: 'Slim Fit Jeans',
    price: 59.99,
    image: '/jeans.svg',
    rating: 4,
    brand: 'Brand Four',
    colors: ['blue', 'black'],
    sizes: ['S', 'M', 'L', 'XL'],
    newArrival: true,
  },
  {
    id: '5',
    name: 'Comfortable Sneakers',
    price: 79.99,
    image: '/sneakers.svg',
    rating: 5,
    brand: 'Brand Five',
    colors: ['white', 'black'],
    sizes: ['M', 'L', 'XL'],
    newArrival: true,
  },
  {
    id: '6',
    name: 'Stylish Cap',
    price: 19.99,
    image: '/cap.svg',
    rating: 4,
    brand: 'Brand One',
    colors: ['red', 'blue', 'black'],
    sizes: ['M', 'L'],
    newArrival: true,
  },
  {
    id: '7',
    name: 'Trendy Sunglasses',
    price: 24.99,
    image: '/sunglasses.svg',
    rating: 5,
    brand: 'Brand Two',
    colors: ['black'],
    sizes: [],
  },
  {
    id: '8',
    name: 'Modern Watch',
    price: 99.99,
    image: '/watch.svg',
    rating: 4,
    brand: 'Brand Three',
    colors: ['black', 'silver'],
    sizes: [],
  },
  {
    id: '9',
    name: 'Elegant Handbag',
    price: 89.99,
    image: '/handbag.svg',
    rating: 5,
    brand: 'Brand Four',
    colors: ['pink', 'black'],
    sizes: [],
  },
]; 