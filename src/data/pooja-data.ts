export interface Pooja {
  id: number;
  name: string;
  description?: string;
  price: number;
  deity: 'BHAGAVATHY' | 'SIVA' | 'VISHNU' | 'GANAPATHY' | 'AYYAPPA' | 'GENERAL';
  image: string;
}

export const poojas: Pooja[] = [
  // BHAGAVATHY
  { id: 1, name: 'SHAKTHEYA POOJA', description: '(TUESDAY,FRIDAY,SUNDAY)', price: 400, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 2, name: 'SHATHRUSAMHARA HOMAM', price: 300, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 3, name: 'BHAGAVATHY SEVA', price: 300, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 4, name: 'ONE TIME POOJA', price: 250, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 5, name: 'GURUTHY(SMALL)', description: 'TUESDAY,FRIDAY,SUNDAY', price: 120, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 6, name: 'SWAYAMVARA PUSHPANJALI', price: 120, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 7, name: 'THAKKOL POOJA', price: 100, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 8, name: 'PAALPAYASAM', price: 100, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 9, name: 'GANAPATHY HOMAM', price: 100, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },

  // SIVA
  { id: 10, name: 'PINVILAKKU', price: 100, deity: 'SIVA', image: '/assets/pooja_icons/diya.png' },
  { id: 11, name: 'KOOVLA MALA', price: 100, deity: 'SIVA', image: '/assets/pooja_icons/diya.png' },
  { id: 12, name: 'JALAABHISHEKAM', price: 150, deity: 'SIVA', image: '/assets/pooja_icons/diya.png' },

  // VISHNU
  { id: 13, name: 'THULASI MALA', price: 100, deity: 'VISHNU', image: '/assets/pooja_icons/diya.png' },
  { id: 14, name: 'VISHNU SAHASRANAMAM', price: 200, deity: 'VISHNU', image: '/assets/pooja_icons/diya.png' },

  // GANAPATHY
  { id: 15, name: 'NARANGA MALA', price: 100, deity: 'GANAPATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 16, name: 'MODAKAM', price: 150, deity: 'GANAPATHY', image: '/assets/pooja_icons/diya.png' },

  // AYYAPPA
  { id: 17, name: 'NEERAJANAM', price: 100, deity: 'AYYAPPA', image: '/assets/pooja_icons/diya.png' },
  { id: 18, name: 'ELLU PAYASAM', price: 120, deity: 'AYYAPPA', image: '/assets/pooja_icons/diya.png' },

  // GENERAL
  { id: 19, name: 'Vahana Pooja (2 & 3 Wheelers)', price: 250, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 20, name: 'Vahana Pooja (4 Wheelers)', price: 400, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
];
