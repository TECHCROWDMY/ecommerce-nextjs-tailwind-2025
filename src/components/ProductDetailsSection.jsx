'use client'

// Product Details section
import { Star } from 'lucide-react';

const ProductDetailsSection = ({ product }) => {
  return (
    <div className="w-full lg:w-1/2 lg:pl-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
      <div className="flex items-center gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
        <span className="text-gray-600">(150 Reviews)</span>
      </div>
      <p className="text-4xl font-bold text-indigo-600 mb-6">${product.price.toFixed(2)}</p>
      <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
      <button
        // onClick={() => onAddToCart(product)}
        className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200 w-full md:w-auto"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailsSection;