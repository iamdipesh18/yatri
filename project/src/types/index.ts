export interface TrekDestination {
  id: string;
  name: string;
  location: string;
  difficulty: 'Easy' | 'Moderate' | 'Difficult' | 'Extreme';
  duration: string;
  altitude: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  highlights: string[];
}