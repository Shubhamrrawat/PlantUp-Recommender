import React, { useState } from 'react';
import { PlantFormData } from '../types';

interface PlantFormProps {
  onSubmit: (data: PlantFormData) => void;
  isLoading: boolean;
}

const PlantForm: React.FC<PlantFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<PlantFormData>({
    sunlight: '',
    soil: '',
    watering: '',
    airQuality: '',
    easeOfCare: '',
    preferences: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 animate-fade-in">
      <h2 className="text-2xl font-roboto-condensed mb-6 text-primary">Find Your Perfect Plant</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="sunlight" className="block text-sm font-medium mb-1">Sunlight Availability</label>
            <select 
              id="sunlight" 
              name="sunlight" 
              value={formData.sunlight} 
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select sunlight level</option>
              <option value="full_sun">Full Sun (6+ hours direct sunlight)</option>
              <option value="partial_sun">Partial Sun (4-6 hours direct sunlight)</option>
              <option value="partial_shade">Partial Shade (2-4 hours direct sunlight)</option>
              <option value="full_shade">Full Shade (Less than 2 hours direct sunlight)</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="soil" className="block text-sm font-medium mb-1">Soil Type</label>
            <select 
              id="soil" 
              name="soil" 
              value={formData.soil} 
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select soil type</option>
              <option value="sandy">Sandy</option>
              <option value="clay">Clay</option>
              <option value="loamy">Loamy</option>
              <option value="chalky">Chalky</option>
              <option value="peaty">Peaty</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="watering" className="block text-sm font-medium mb-1">Watering Capacity</label>
            <select 
              id="watering" 
              name="watering" 
              value={formData.watering} 
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select watering level</option>
              <option value="frequent">Frequent (Daily)</option>
              <option value="moderate">Moderate (Weekly)</option>
              <option value="minimal">Minimal (Every few weeks)</option>
              <option value="drought_tolerant">Drought Tolerant (Rarely)</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="airQuality" className="block text-sm font-medium mb-1">Air Quality</label>
            <select 
              id="airQuality" 
              name="airQuality" 
              value={formData.airQuality} 
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select air quality</option>
              <option value="excellent">Excellent (Clean, outdoor air)</option>
              <option value="good">Good (Indoor with good ventilation)</option>
              <option value="average">Average (Typical indoor air)</option>
              <option value="poor">Poor (Dry, stuffy indoor air)</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="easeOfCare" className="block text-sm font-medium mb-1">Ease of Care</label>
            <select 
              id="easeOfCare" 
              name="easeOfCare" 
              value={formData.easeOfCare} 
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select care level</option>
              <option value="very_easy">Very Easy (Almost indestructible)</option>
              <option value="easy">Easy (Low maintenance)</option>
              <option value="moderate">Moderate (Regular attention needed)</option>
              <option value="difficult">Difficult (Requires specific conditions)</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="preferences" className="block text-sm font-medium mb-1">Additional Preferences (Optional)</label>
            <textarea 
              id="preferences" 
              name="preferences" 
              value={formData.preferences} 
              onChange={handleChange}
              placeholder="E.g., pet-friendly, air-purifying, flowering, etc."
              className="form-input h-full min-h-[80px]"
            ></textarea>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="btn-primary flex items-center space-x-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Finding Perfect Plants...</span>
              </>
            ) : (
              <span>Find My Perfect Plant</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlantForm;