import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white h-navbar shadow-md flex items-center px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo1.svg" alt="PlantUp Logo" className="h-10 w-10" />
          <h1 className="brand-text font-bold text-black">PlantUp</h1>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#" className="text-gray-700 hover:text-primary transition-colors">HOME</a></li>
          <li><a href="#" className="text-gray-700 hover:text-primary transition-colors">PRODUCTS</a></li>
          <li><a href="#" className="text-gray-700 hover:text-primary transition-colors">ABOUT US</a></li>
          <li><a href="#" className="text-gray-700 hover:text-primary transition-colors">CONTACTS</a></li>
        </ul>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;