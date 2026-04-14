export interface HouseModel {
  id: string;
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
  category: 'Industrial' | 'Residencial' | 'Turismo';
  size?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  phone?: string;
}

export enum SectionId {
  HOME = 'home',
  MODELS = 'models',
  WAREHOUSES = 'warehouses',
  GALLERY = 'gallery',
  ABOUT = 'about',
  AI_ADVISOR = 'ai-advisor',
  CONTACT = 'contact'
}