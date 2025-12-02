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
  { id: 1, name: 'മലർ നിവേദ്യം (Malar Nivedhyam)', description: '', price: 30, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 2, name: 'വെള്ളനിവേദ്യം (Vella Nivedhyam)', price: 30, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 3, name: 'അപ്പനിവേദ്യം (Appa Nivedhyam)', price: 600, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 4, name: 'ഒറ്റനിവേദ്യം (Otta Nivedhyam)', price: 250, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 5, name: 'വിളക്ക് (Vilakku)', price: 25, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 6, name: 'നെയ്‌വിളക്ക് (Ney Vilakku)', price: 30, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 7, name: 'കെടാവിളക്ക് (Keda Vilakku)', price: 50, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 8, name: 'ചുറ്റുവിളക്ക് (Chuttu Vilakku)', price: 1000, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 9, name: 'നവരാത്രി വിളക്ക് (Navaratri Vilakku)', price: 19000, deity: 'BHAGAVATHY', image: '/assets/pooja_icons/diya.png' },
  // SIVA
  { id: 10, name: 'പായസം (Payasam)', price: 60, deity: 'SIVA', image: '/assets/pooja_icons/diya.png' },
  { id: 11, name: 'ഇരട്ടിപ്പായസം (Irattipayasam)', price: 500, deity: 'SIVA', image: '/assets/pooja_icons/diya.png' },
  { id: 12, name: 'പാൽപ്പായസം (Palpayasam)', price: 100, deity: 'SIVA', image: '/assets/pooja_icons/diya.png' },
  // VISHNU
  { id: 13, name: 'തുളസിമാല (Tulasi Mala)', price: 25, deity: 'VISHNU', image: '/assets/pooja_icons/diya.png' },
  { id: 14, name: 'തെച്ചിമാല (Techi Mala)', price: 125, deity: 'VISHNU', image: '/assets/pooja_icons/diya.png' },

  // GANAPATHY
  { id: 15, name: 'ഉണ്ടമാല (Unda Mala)', price: 150, deity: 'GANAPATHY', image: '/assets/pooja_icons/diya.png' },
  { id: 16, name: 'പൂക്കുലമാല (Pookkula Mala)', price: 100, deity: 'GANAPATHY', image: '/assets/pooja_icons/diya.png' },

  // AYYAPPA
  { id: 17, name: 'മഞ്ഞ ചോറ് (Manja Choru)', price: 50, deity: 'AYYAPPA', image: '/assets/pooja_icons/diya.png' },
  { id: 18, name: 'മഞ്ഞപ്പൊടി ആടൽ (Manjappodi Adal)', price: 50, deity: 'AYYAPPA', image: '/assets/pooja_icons/diya.png' },

  // GENERAL
  { id: 19, name: 'മാല പൂജ (Mala Pooja)', price: 10, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 20, name: 'താക്കോൽ പൂജ (Thakol Pooja)', price: 25, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 21, name: 'ഒരു ദിവസപൂജ (Oru Divasapooja)', price: 750, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 22, name: 'ത്രികാല പൂജ (Thrikala Pooja)', price: 3500, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 23, name: 'വാഹന പൂജ (Two Wheeler)', price: 30, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 24, name: 'വാഹന പൂജ (Three Wheeler)', price: 40, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 25, name: 'വാഹന പൂജ (Other Vehicles)', price: 60, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 26, name: 'നക്ഷത്രപൂജ (Nakshatra Pooja)', price: 250, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 27, name: 'ഗണപതി ഹോമം (Ganapathi Homam)', price: 100, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 28, name: 'അഷ്ടദ്രവ്യ ഗണപതിഹോമം (Ashtadravya Ganapathi Homam)', price: 400, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 29, name: 'സുദർശന ഹോമം (Sudarshana Homam)', price: 1000, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 30, name: 'പുഷ്പാഞ്ജലി (Pushpanjali)', price: 20, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 31, name: 'വലിയ പുഷ്പാഞ്ജലി (Valiya Pushpanjali)', price: 3000, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 32, name: 'പുഷ്‌പാർച്ചന (Pushparchana)', price: 20, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 33, name: 'കളഭം ചാർത്തൽ (Kalabham Charthal)', price: 400, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 34, name: 'ത്രിമധുരം (Thrimadhuram)', price: 10, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 35, name: 'ഭഗവതി സേവ (Bhagavathi Seva)', price: 250, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 36, name: 'അരിയിലെഴുത്ത് (Ariyilezhuthu)', price: 100, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 37, name: 'തോറ്റം (Thottam)', price: 750, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 38, name: 'ഇളനീർ അഭിഷേകം (Ilaneer Abhishekam)', price: 50, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 39, name: 'പാൽ അഭിഷേകം (Pal Abhishekam)', price: 50, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 40, name: 'ശംഖ് അഭിഷേകം (Shankh Abhishekam)', price: 30, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 41, name: 'കെട്ടുനിറ (Kettunira)', price: 20, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 42, name: 'ചോറൂണ് (Choroon)', price: 250, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 43, name: 'സ്വയംവരപുഷ്പാഞ്ജലി (Swayamvara Pushpanjali)', price: 100, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 44, name: 'ഭാഗ്യസൂക്തപുഷ്പാഞ്ജലി (Bhagyasooktha Pushpanjali)', price: 50, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 45, name: 'സഹസ്രനാമപുഷ്പാഞ്ജലി (Sahasranama Pushpanjali)', price: 50, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 46, name: 'ഐക്യമത്യസൂക്ത പുഷ്പാഞ്ജലി (Aikyamathyasooktha Pushpanjali)', price: 50, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 47, name: 'രക്തപുഷ്പാഞ്ജലി (Rakta Pushpanjali)', price: 200, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 48, name: 'രക്ഷസിനുപൂജ (Rakshasinu Pooja)', price: 150, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 49, name: 'രക്ഷസിനു പാൽപായസം (Rakshasinu Palpayasam)', price: 60, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },
  { id: 50, name: 'രക്ഷസിനു വിളക്ക് (Rakshasinu Vilakku)', price: 30, deity: 'GENERAL', image: '/assets/pooja_icons/diya.png' },

];
