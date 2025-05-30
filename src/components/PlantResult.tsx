import React from 'react';
import { PlantRecommendation } from '../types';

interface PlantResultProps {
  plant: PlantRecommendation | null;
}

const PlantResult: React.FC<PlantResultProps> = ({ plant }) => {
  if (!plant) return null;
  
  if (plant.loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 animate-fade-in mt-8 flex justify-center items-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          <p className="mt-4 text-primary font-medium">Loading your perfect plant...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 animate-fade-in mt-8">
      <h2 className="text-2xl font-medium mb-4 text-primary">Your Perfect Plant Match</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">{plant.name}</h3>
            <p className="text-gray-600 italic mb-4">{plant.scientificName}</p>
            <div className="mb-4">
              <h4 className="font-medium text-primary mb-2">About this Plant</h4>
              <p className="text-black">{plant.description}</p>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Care Tips</h4>
              <p className="text-black">{plant.careTips}</p>
            </div>
          </div>
        </div>
        
        <div className="order-first md:order-last">
          {plant.imageUrl && (
            <div className="rounded-lg overflow-hidden shadow-md h-64 md:h-full">
              <img 
                src={plant.imageUrl} 
                alt={plant.name} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantResult;