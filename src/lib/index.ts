import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const ROUTE_PATHS = {
  HOME: '/',
} as const;

export interface ContactInfo {
  name: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  telegram: string;
  workingHours: string;
  experience: string;
  areas: string[];
  services: string[];
}

export const MASTER_DATA: ContactInfo = {
  name: 'Евгений',
  phone: '+79146711299',
  phoneDisplay: '+7 (914) 671-12-99',
  whatsapp: 'https://wa.me/79146711299',
  telegram: 'https://t.me/Repmasevg',
  workingHours: '08:00 – 24:00 (Ежедневно)',
  experience: '12 лет',
  areas: [
    'Краснодар',
    'Динская',
    'Елизаветинская',
    'Новая Адыгея',
    'Яблоновский',
    'Пригород'
  ],
  services: [
    'Ремонт духовых шкафов',
    'Ремонт варочных панелей',
    'Ремонт стиральных машин',
    'Ремонт посудомоечных машин',
    'Замена ТЭНа',
    'Ремонт модулей управления'
  ]
};

export const BRANDS = [
  'Bosch',
  'Samsung',
  'LG',
  'Electrolux',
  'Indesit',
  'Ariston',
  'Beko',
  'Candy',
  'Zanussi',
  'Whirlpool',
  'Gorenje',
  'Siemens',
  'AEG',
  'Miele',
  'Hansa',
  'Haier'
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
