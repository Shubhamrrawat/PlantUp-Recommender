import React, { useState } from 'react';
import PlantForm from '../components/PlantForm';
import PlantResult from '../components/PlantResult';
import { PlantFormData, PlantRecommendation } from '../types';
import { getPlantRecommendation, searchPlantImage } from '../services/api';

const Home: React.FC = () => {
  const [plantRecommendation, setPlantRecommendation] = useState<PlantRecommendation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFormSubmit = async (formData: PlantFormData) => {
    try {
      setIsLoading(true);
      setPlantRecommendation({ 
        name: '', 
        scientificName: '', 
        description: '', 
        careTips: '', 
        imageUrl: '', 
        loading: true 
      });

      const plantData = await getPlantRecommendation(formData);
      const imageUrl = await searchPlantImage(plantData.scientificName || plantData.name);
      
      setPlantRecommendation({
        ...plantData,
        imageUrl: imageUrl || '',
        loading: false
      });
    } catch (error) {
      console.error('Error getting plant recommendation:', error);
      setPlantRecommendation(null);
      alert('Failed to get plant recommendation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <PlantForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        
        {plantRecommendation && (
          <PlantResult plant={plantRecommendation} />
        )}
      </div>
    </div>
  );
};

export default Home;