
import React from 'react';
import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'personal-tax',
    title: 'Personal Tax Preparation',
    description: 'Expert tax planning and filing for individuals. We maximize your returns while ensuring full compliance with CRA regulations.',
    icon: '📄'
  },
  {
    id: 'bookkeeping',
    title: 'Professional Bookkeeping',
    description: 'Accurate and timely bookkeeping services for small to medium-sized businesses. Stay organized and ready for tax season.',
    icon: '📊'
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    description: 'Protect your legacy. We help with comprehensive estate planning to ensure your assets are distributed according to your wishes.',
    icon: '🏛️'
  },
  {
    id: 'consulting',
    title: 'Financial Consulting',
    description: 'Strategic advice to help you reach your financial goals, from retirement planning to investment tax implications.',
    icon: '💡'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    rating: 5,
    comment: "Professional and thorough. D-Co helped me navigate complex tax issues with ease.",
    date: "2 months ago"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Excellent bookkeeping service. They are very responsive and detailed in their work.",
    date: "4 months ago"
  }
];

export const CONTACT_INFO = {
  address: "1100 Central Pkwy W, Mississauga, ON L5C 4E5",
  phone: "(905) 555-0123",
  email: "info@dcomanagement.ca",
  hours: "Mon-Fri: 9:00 AM - 5:00 PM"
};
