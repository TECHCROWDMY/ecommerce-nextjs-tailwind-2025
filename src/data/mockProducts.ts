// data/mockProducts.ts

import Product from "@/util/product";

// Mock product data to display on the page. In a real application, you would fetch this from an API.
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Classic T-Shirt",
    slug: "classic-t-shirt", // Added slug
    price: 29.99,
    images: [
      "https://placehold.co/600x400/F0F9FF/0C4A6E?text=T-Shirt+Front",
      "https://placehold.co/600x400/F0F9FF/0C4A6E?text=T-Shirt+Back",
      "https://placehold.co/600x400/F0F9FF/0C4A6E?text=T-Shirt+Detail",
    ],
    description: "A comfortable and stylish t-shirt for everyday wear, perfect for any casual occasion. Made from 100% premium cotton for a soft feel and lasting quality.",
  },
  {
    id: 2,
    name: "Denim Jeans",
    slug: "denim-jeans", // Added slug
    price: 69.99,
    images: [
      "https://placehold.co/600x400/D0F0C0/1E40AF?text=Jeans+Front",
      "https://placehold.co/600x400/D0F0C0/1E40AF?text=Jeans+Back",
      "https://placehold.co/600x400/D0F0C0/1E40AF?text=Jeans+Detail",
    ],
    description: "Durable and fashionable denim jeans with a modern fit. Features a classic five-pocket design and a comfortable stretch fabric for all-day wear.",
  },
  {
    id: 3,
    name: "Leather Jacket",
    slug: "leather-jacket", // Added slug
    price: 149.99,
    images: [
      "https://placehold.co/600x400/FFF8E1/8B5CF6?text=Jacket+Front",
      "https://placehold.co/600x400/FFF8E1/8B5CF6?text=Jacket+Side",
      "https://placehold.co/600x400/FFF8E1/8B5CF6?text=Jacket+Zipper",
    ],
    description: "A timeless leather jacket that adds an edge to any outfit. Crafted from high-quality genuine leather with a smooth lining for maximum comfort.",
  },
  {
    id: 4,
    name: "Sneakers",
    slug: "sneakers", // Added slug
    price: 89.99,
    images: [
      "https://placehold.co/600x400/F3E5F5/6A1B9A?text=Sneakers+Side",
      "https://placehold.co/600x400/F3E5F5/6A1B9A?text=Sneakers+Top",
      "https://placehold.co/600x400/F3E5F5/6A1B9A?text=Sneakers+Sole",
    ],
    description: "Lightweight and comfortable sneakers perfect for a casual look. The breathable mesh upper and cushioned sole provide support and style.",
  },
  {
    id: 5,
    name: "Backpack",
    slug: "backpack", // Added slug
    price: 49.99,
    images: [
      "https://placehold.co/600x400/E0F7FA/00838F?text=Backpack+Closed",
      "https://placehold.co/600x400/E0F7FA/00838F?text=Backpack+Open",
      "https://placehold.co/600x400/E0F7FA/00838F?text=Backpack+Pocket",
    ],
    description: "A spacious backpack with multiple compartments for all your essentials. Features padded shoulder straps and a durable, water-resistant material.",
  },
  {
    id: 6,
    name: "Smart Watch",
    slug: "smart-watch", // Added slug
    price: 199.99,
    images: [
      "https://placehold.co/600x400/E8F5E9/2E7D32?text=Watch+Screen",
      "https://placehold.co/600x400/E8F5E9/2E7D32?text=Watch+Side",
      "https://placehold.co/600x400/E8F5E9/2E7D32?text=Watch+Back",
    ],
    description: "Stay connected with this feature-rich smart watch. Track your fitness, receive notifications, and monitor your health with its advanced sensors.",
  },
];

export default mockProducts;