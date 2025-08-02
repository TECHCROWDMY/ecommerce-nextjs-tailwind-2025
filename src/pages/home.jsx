'use client'

import Hero from '@/components/Hero';
import mockProducts from '@/data/mockProducts';
import ProductCard from '@/components/ProductCard';

const Home = () => {

  const handleCardClick = (product) => {
    // setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out;
            opacity: 0;
            animation-fill-mode: forwards;
          }
          .animate-fade-in-up.delay-100 {
            animation-delay: 0.1s;
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <main>
        <Hero />
        <div className="container mx-auto px-4 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts.map(product => (
                <ProductCard key={product.id} product={product} onCardClick={handleCardClick} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
