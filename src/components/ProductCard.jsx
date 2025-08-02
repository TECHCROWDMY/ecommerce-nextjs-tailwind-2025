// components/ProductCard.tsx

import Link from 'next/link';

// Product Card Component - Displays a single product with an image, name, price, and add-to-cart button.
const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} passHref>
      <div
        className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <img src={product.images[0]} alt={product.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;