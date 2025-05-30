import { PlantFormData, ApiResponse } from '../types';

const GEMINI_API_KEY = "AIzaSyAwRW0-uMHxv3jkgIf6364kWKDaMnN4P7c";
const GOOGLE_API_KEY = "AIzaSyDE8Dx0b8Gf2I8Xpudq9MLn_vC7NqgIQ_U";
const SEARCH_ENGINE_ID = "b6c614d999dca4c88";

export const getPlantRecommendation = async (formData: PlantFormData) => {
  try {
    const prompt = `You are a plant expert assistant. Based on the following growing conditions, recommend ONE perfect plant that would thrive in these conditions. Each time this prompt is run with the same conditions, suggest a DIFFERENT plant that would also work well (do not repeat previous suggestions). Respond in JSON format with these fields: name (common name), scientificName, description (100-150 words about the plant), and careTips (100-150 words of specific care instructions).

    Growing Conditions:
    - Sunlight: ${formData.sunlight}
    - Soil Type: ${formData.soil}
    - Watering Needs: ${formData.watering}
    - Air Quality: ${formData.airQuality}
    - Ease of Care: ${formData.easeOfCare}
    ${formData.preferences ? `- Additional Preferences: ${formData.preferences}` : ''}
    
    Respond with ONLY valid JSON, no additional text.`;

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + GEMINI_API_KEY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95
        }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to get plant recommendation');
    }

    const data: ApiResponse = await response.json();
    const plantText = data.candidates[0].content.parts[0].text;
    
    const jsonMatch = plantText.match(/\{[\s\S]*\}/);
    
    if (!jsonMatch) {
      throw new Error('Invalid response format');
    }
    
    return JSON.parse(jsonMatch[0]);
  } catch (error) {
    console.error('Error getting plant recommendation:', error);
    throw error;
  }
};

export const searchPlantImage = async (plantName: string) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(plantName + " plant")}&searchType=image&num=1`
    );

    if (!response.ok) {
      throw new Error('Failed to get plant image');
    }

    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      return data.items[0].link;
    } else {
      // Return a default plant image instead of throwing an error
      return "https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg";
    }
  } catch (error) {
    console.error('Error fetching plant image:', error);
    // Return the same default image in case of any error
    return "https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg";
  }
};