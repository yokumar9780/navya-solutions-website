import { NavLink } from './types';

export const navLinks: NavLink[] = [
  { id: 'home', title: 'Home' },
  { id: 'consulting', title: 'Consulting' },
  { id: 'technology', title: 'Technology' },
  { id: 'outsourcing', title: 'Outsourcing' },
  { id: 'ai-innovation', title: 'AI Innovation' },
  { id: 'blog', title: 'Blog' },
  { id: 'about', title: 'About Us' },
];

export const companyInfo = {
  name: 'Navya Solutions AB',
  email: 'info@navyaSolutions.se',
  phone: '+46 739025821',
  address: {
    street: 'Salsavägen 19',
    postalCode: '424 54',
    city: 'Angered',
    full: 'Salsavägen 19, 424 54 Angered'
  },
  location: {
    lat: 57.789909735111,
    lng: 12.05005050471579
  }
};
