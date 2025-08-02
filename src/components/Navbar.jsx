'use client'
// Navbar Component - A responsive navigation bar with a logo, links, and icons.

import { useState } from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

const Navbar = () => {

  const [cartItems, setCartItems] = useState([]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
          <a href="#" className="text-2xl font-bold text-indigo-600 ml-4 md:ml-0">ShopWave</a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200">Home</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200">Shop</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200">About</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200">Contact</a>
        </div>

        {/* Icons for User, Search, and Cart */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
            <Search className="h-6 w-6" />
          </button>
          <button className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
            <User className="h-6 w-6" />
          </button>
          <button className="relative text-gray-600 hover:text-indigo-600 transition-colors duration-200">
            <ShoppingCart className="h-6 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when isMenuOpen is true) */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-50 px-4 py-2 shadow-inner transition-all duration-300 ease-in-out`}>
        <div className="flex flex-col space-y-2">
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-200 px-3 rounded-md transition-colors duration-200">Home</a>
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-200 px-3 rounded-md transition-colors duration-200">Shop</a>
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-200 px-3 rounded-md transition-colors duration-200">About</a>
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-200 px-3 rounded-md transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;