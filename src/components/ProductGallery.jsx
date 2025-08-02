'use client'

import { useState } from "react";

const ProductGallery = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="flex flex-col gap-4 w-full lg:w-1/2">
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <img src={mainImage} alt={product.name} className="w-full h-auto object-cover max-h-[600px]" />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.name} thumbnail ${index + 1}`}
            className={`w-24 h-24 object-cover rounded-lg border-2 cursor-pointer transition-all duration-200
              ${mainImage === img ? 'border-indigo-600 scale-105' : 'border-gray-200 hover:border-indigo-400'}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;