
export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  BOOKING = 'booking',
  CONTACT = 'contact',
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
