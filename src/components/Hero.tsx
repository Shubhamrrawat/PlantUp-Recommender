import React from 'react';
import { Leaf, Droplets, Sun, Wind } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-8 rounded-lg shadow-md mb-8 animate-fade-in">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-roboto-condensed font-bold text-primary mb-4">
            Find Your Perfect Plant Match
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Answer a few questions about your growing environment and preferences, 
            and we'll recommend the ideal plants that will thrive in your space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-background p-6 rounded-lg shadow-sm transition-transform hover:transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Sun size={48} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium text-primary text-center mb-2">Sunlight</h3>
            <p className="text-center text-gray-700">Match plants to your available light conditions</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg shadow-sm transition-transform hover:transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M8 20V7c0-4 4-4 4-4s4 0 4 4v13" />
                <path d="M8 14h8" />
                <path d="M8 4h7" />
                <path d="M13 20v-3" />
                <path d="M7 20a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2H7z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-primary text-center mb-2">Soil Type</h3>
            <p className="text-center text-gray-700">Find plants that thrive in your soil composition</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg shadow-sm transition-transform hover:transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Droplets size={48} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium text-primary text-center mb-2">Watering</h3>
            <p className="text-center text-gray-700">Discover plants that match your watering habits</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg shadow-sm transition-transform hover:transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Wind size={48} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium text-primary text-center mb-2">Air Quality</h3>
            <p className="text-center text-gray-700">Select plants that can handle your air conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;