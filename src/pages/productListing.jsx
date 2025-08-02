'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import mockProducts from '@/data/mockProducts';

const ProductListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const results = mockProducts.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
    setFilteredProducts(results);
  };

  // This would typically be passed down from a parent component or a context
  // For now, it's a placeholder function to show how it might work
//   const handleAddToCart = (product: Product) => {
//     // Logic to add item to a cart (e.g., via a global state manager)
//     console.log(`Adding ${product.name} to cart.`);
//   };

//   const handleCardClick = (product: Product) => {
//     // Logic for what happens when a product card is clicked
//     console.log(`Product card for ${product.name} clicked.`);
//   };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Shop</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilteredProducts(mockProducts);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
          {/* Placeholder for Filters */}
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            Filters <svg className="w-4 h-4 inline-block ml-1 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          </button>
          {/* Placeholder for Sort By */}
          <div className="relative">
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 appearance-none">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              {/* Add more sorting options */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs (if you have a component for this) */}
      <div className="text-sm text-gray-500 mb-4">
        Dashboard / E-Commerce / Shop
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            // onCardClick={handleCardClick}
            // onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;