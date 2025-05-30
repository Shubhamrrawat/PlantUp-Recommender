export interface PlantFormData {
  sunlight: string;
  soil: string;
  watering: string;
  airQuality: string;
  easeOfCare: string;
  preferences: string;
}

export interface PlantRecommendation {
  name: string;
  scientificName: string;
  description: string;
  careTips: string;
  imageUrl: string;
  loading?: boolean;
}

export interface ApiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}