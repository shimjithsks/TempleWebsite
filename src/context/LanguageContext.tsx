import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ml';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'header.timings': 'Temple Timings: 5:00 AM – 8:00 PM',
    'header.email': 'info@srikottakovilakamtemple.com',
    'header.donate': 'Donate',
    'header.bookPooja': 'Book Pooja',
    'header.templeName': 'Sri Kotta-Kovilakam Kshethram',
    
    // Menu
    'menu.home': 'Home',
    'menu.poojas': 'Poojas',
    'menu.donate': 'Donate',
    'menu.gallery': 'Gallery',
    'menu.news': 'News / Event',
    'menu.about': 'About',
    'menu.nearby': 'Explore Nearby',
    'menu.contact': 'Contact',
    
    // Submenu - Poojas
    'submenu.dailyPoojas': 'Daily Poojas',
    'submenu.festivalPoojas': 'Festival Poojas',
    'submenu.specialPoojas': 'Special Poojas',
    'submenu.vazhipadList': 'Vazhipad List',
    'submenu.booking': 'Online Booking',
    
    // Submenu - Donate
    'submenu.donateOverview': 'Donate Overview',
    'submenu.onlineDonation': 'Online Donation',
    'submenu.annadanam': 'Annadanam',
    'submenu.renovationFund': 'Temple Renovation Fund',
    'submenu.festivalContribution': 'Festival Contribution',
    
    // Submenu - Gallery
    'submenu.galleryOverview': 'Gallery Overview',
    'submenu.photos': 'Photos',
    'submenu.videos': 'Videos',
    'submenu.events': 'Events',
    'submenu.templePremises': 'Temple Premises',
    
    // Submenu - News
    'submenu.newsOverview': 'News Overview',
    'submenu.templeNews': 'Temple News',
    'submenu.announcements': 'Announcements',
    'submenu.upcomingEvents': 'Upcoming Events',
    'submenu.pastEvents': 'Past Events',
    'submenu.notices': 'Notices / Circulars',
    
    // Submenu - About
    'submenu.aboutOverview': 'About Overview',
    'submenu.templeHistory': 'Temple History',
    'submenu.deities': 'Deities',
    'submenu.festivals': 'Festivals',
    'submenu.administration': 'Administration',
    'submenu.rulesTimings': 'Temple Rules & Timings',
    
    // Submenu - Nearby
    'submenu.nearbyOverview': 'Nearby Overview',
    'submenu.touristPlaces': 'Tourist Places',
    'submenu.beaches': 'Beaches',
    'submenu.boating': 'Boating',
    'submenu.viewpoints': 'Viewpoints',
    'submenu.heritageSites': 'Heritage Sites',
    'submenu.templesNearby': 'Temples Nearby',
    'submenu.activities': 'Activities',
    
    // Submenu - Contact
    'submenu.contactOverview': 'Contact Overview',
    'submenu.contactInfo': 'Contact Info',
    'submenu.mapDirections': 'Map / Directions',
    'submenu.feedbackForm': 'Feedback Form',
    'submenu.templeOffice': 'Temple Office Numbers',
    
    // Home Page - About Temple Section
    'home.aboutTemple': 'ABOUT TEMPLE',
    'home.aboutIntro': 'A Brief Introduction',
    'home.aboutDescription': 'Our temple stands as a beacon of devotion and spirituality, serving the community for generations. Experience divine peace and participate in our sacred rituals.',
    'home.learnMore': 'Learn More',
    'home.viewDetails': 'View Details',
    
    // About Temple Features
    'about.dailyPoojas': 'Daily Poojas',
    'about.dailyPoojasDesc': 'Traditional rituals performed twice daily',
    'about.festivals': 'Festivals',
    'about.festivalsDesc': 'Grand celebrations throughout the year',
    'about.annadanam': 'Annadanam',
    'about.annadanamDesc': 'Free meals served to devotees daily',
    'about.heritage': 'Heritage',
    'about.heritageDesc': '150+ years of divine service',
    
    // Pooja Centre
    'pooja.centre': 'POOJA CENTRE',
    'pooja.plan': 'Plan Your Devotional Day',
    'pooja.description': 'Browse pooja categories and book your offerings online with instant confirmation.',
    'pooja.book': 'Book a Pooja',
    'pooja.viewVazhipads': 'View Vazhipads',
    'pooja.daily': 'Daily Poojas',
    'pooja.dailyDesc': 'Regular poojas performed every day',
    'pooja.festival': 'Festival Poojas',
    'pooja.festivalDesc': 'Special poojas during festivals',
    'pooja.special': 'Special Poojas',
    'pooja.specialDesc': 'Book custom poojas online',
    'pooja.vazhipad': 'Vazhipad',
    'pooja.vazhipadDesc': 'Traditional offerings list',
    
    // Gallery
    'gallery.overview': 'GALLERY OVERVIEW',
    'gallery.explore': 'Explore Photos & Videos',
    'gallery.description': 'A glimpse of temple moments — festivals, premises, events and serene views.',
    'gallery.photos': 'Photos',
    'gallery.videos': 'Videos',
    'gallery.events': 'Events',
    'gallery.premises': 'Premises',
    'gallery.curated': 'Curated',
    'gallery.highlights': 'Highlights',
    'gallery.recent': 'Recent',
    'gallery.scenic': 'Scenic',
    'gallery.templeTour': 'Temple Tour',
    
    // Donation
    'donate.overview': 'DONATION OVERVIEW',
    'donate.support': 'Support Temple Causes',
    'donate.description': 'Your contribution helps maintain the temple and serve the community.',
    'donate.online': 'Online Donation',
    'donate.annadanam': 'Annadanam',
    'donate.renovation': 'Renovation Fund',
    'donate.festival': 'Festival Contribution',
    'donate.now': 'Donate Now',
    'donate.secure': 'Secure Payment',
    'donate.monthly': 'Monthly Donation',
    'donate.oneTime': 'One-Time Gift',
    
    // Nearby
    'nearby.overview': 'NEARBY OVERVIEW',
    'nearby.explore': 'Explore Nearby Attractions',
    'nearby.description': 'Beaches, temples, viewpoints and heritage spots around the temple.',
    'nearby.beaches': 'Beaches',
    'nearby.temples': 'Temples',
    'nearby.viewpoints': 'Viewpoints',
    'nearby.heritage': 'Heritage Sites',
    
    // Contact
    'contact.overview': 'CONTACT OVERVIEW',
    'contact.getInTouch': 'Get in Touch',
    'contact.description': 'Reach out to us for any queries, feedback, or spiritual guidance.',
    'contact.info': 'Contact Info',
    'contact.map': 'Map & Directions',
    'contact.feedback': 'Feedback',
    'contact.office': 'Office Hours',
    
    // Common
    'common.open': 'Open',
    'common.viewMore': 'View More →',
    'common.learnMore': 'Learn More',
    'common.explore': 'Explore',
    'common.readMore': 'Read More',
    'common.bookNow': 'Book Now',
    'common.viewAll': 'View All',
    'common.latest': 'Latest',
    'common.popular': 'Popular',
  },
  ml: {
    // Header
    'header.timings': 'ക്ഷേത്ര സമയം: രാവിലെ 5:00 – രാത്രി 8:00',
    'header.email': 'info@srikottakovilakamtemple.com',
    'header.donate': 'സംഭാവന',
    'header.bookPooja': 'പൂജ ബുക്ക് ചെയ്യുക',
    'header.templeName': 'ശ്രീ കോട്ട-കോവിലകം ക്ഷേത്രം',
    
    // Menu
    'menu.home': 'ഹോം',
    'menu.poojas': 'പൂജകൾ',
    'menu.donate': 'സംഭാവന',
    'menu.gallery': 'ഗാലറി',
    'menu.news': 'വാർത്ത / പരിപാടി',
    'menu.about': 'കുറിച്ച്',
    'menu.nearby': 'സമീപസ്ഥലങ്ങൾ',
    'menu.contact': 'ബന്ധപ്പെടുക',
    
    // Submenu - Poojas
    'submenu.dailyPoojas': 'ദിവസേന പൂജകൾ',
    'submenu.festivalPoojas': 'ഉത്സവ പൂജകൾ',
    'submenu.specialPoojas': 'പ്രത്യേക പൂജകൾ',
    'submenu.vazhipadList': 'വഴിപാട് പട്ടിക',
    'submenu.booking': 'ബുക്കിംഗ് / വഴിപാടുകൾ',
    
    // Submenu - Donate
    'submenu.donateOverview': 'സംഭാവന അവലോകനം',
    'submenu.onlineDonation': 'ഓൺലൈൻ സംഭാവന',
    'submenu.annadanam': 'അന്നദാനം',
    'submenu.renovationFund': 'ക്ഷേത്ര നവീകരണ ഫണ്ട്',
    'submenu.festivalContribution': 'ഉത്സവ സംഭാവന',
    
    // Submenu - Gallery
    'submenu.galleryOverview': 'ഗാലറി അവലോകനം',
    'submenu.photos': 'ഫോട്ടോകൾ',
    'submenu.videos': 'വീഡിയോകൾ',
    'submenu.events': 'പരിപാടികൾ',
    'submenu.templePremises': 'ക്ഷേത്ര സ്ഥലം',
    
    // Submenu - News
    'submenu.newsOverview': 'വാർത്ത അവലോകനം',
    'submenu.templeNews': 'ക്ഷേത്ര വാർത്തകൾ',
    'submenu.announcements': 'അറിയിപ്പുകൾ',
    'submenu.upcomingEvents': 'വരാനിരിക്കുന്ന പരിപാടികൾ',
    'submenu.pastEvents': 'കഴിഞ്ഞ പരിപാടികൾ',
    'submenu.notices': 'നോട്ടീസുകൾ / സർക്കുലറുകൾ',
    
    // Submenu - About
    'submenu.aboutOverview': 'അവലോകനം',
    'submenu.templeHistory': 'ക്ഷേത്ര ചരിത്രം',
    'submenu.deities': 'ദേവതകൾ',
    'submenu.festivals': 'ഉത്സവങ്ങൾ',
    'submenu.administration': 'ഭരണസമിതി',
    'submenu.rulesTimings': 'ക്ഷേത്ര നിയമങ്ങളും സമയവും',
    
    // Submenu - Nearby
    'submenu.nearbyOverview': 'സമീപസ്ഥലങ്ങൾ അവലോകനം',
    'submenu.touristPlaces': 'ടൂറിസ്റ്റ് സ്ഥലങ്ങൾ',
    'submenu.beaches': 'കടൽത്തീരങ്ങൾ',
    'submenu.boating': 'ബോട്ടിംഗ്',
    'submenu.viewpoints': 'വ്യൂപോയിന്റുകൾ',
    'submenu.heritageSites': 'പൈതൃക സ്ഥലങ്ങൾ',
    'submenu.templesNearby': 'സമീപത്തെ ക്ഷേത്രങ്ങൾ',
    'submenu.activities': 'പ്രവർത്തനങ്ങൾ',
    
    // Submenu - Contact
    'submenu.contactOverview': 'ബന്ധപ്പെടുക അവലോകനം',
    'submenu.contactInfo': 'ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ',
    'submenu.mapDirections': 'മാപ്പ് / വഴികൾ',
    'submenu.feedbackForm': 'ഫീഡ്‌ബാക്ക് ഫോം',
    'submenu.templeOffice': 'ക്ഷേത്ര ഓഫീസ് നമ്പറുകൾ',
    
    // Home Page - About Temple Section
    'home.aboutTemple': 'ക്ഷേത്രത്തെക്കുറിച്ച്',
    'home.aboutIntro': 'ഒരു ചെറിയ ആമുഖം',
    'home.aboutDescription': 'തലമുറകളായി സമൂഹത്തെ സേവിക്കുന്ന ഭക്തിയുടെയും ആധ്യാത്മികതയുടെയും വിളക്കുതൂണായി ഞങ്ങളുടെ ക്ഷേത്രം നിലകൊള്ളുന്നു. ദൈവിക സമാധാനം അനുഭവിക്കുകയും ഞങ്ങളുടെ വിശുദ്ധ ആചാരങ്ങളിൽ പങ്കെടുക്കുകയും ചെയ്യുക.',
    'home.learnMore': 'കൂടുതൽ അറിയുക',
    'home.viewDetails': 'വിശദാംശങ്ങൾ കാണുക',
    
    // About Temple Features
    'about.dailyPoojas': 'ദിവസേന പൂജകൾ',
    'about.dailyPoojasDesc': 'ദിവസവും രണ്ടുതവണ പരമ്പരാഗത ആചാരങ്ങൾ',
    'about.festivals': 'ഉത്സവങ്ങൾ',
    'about.festivalsDesc': 'വർഷം മുഴുവൻ മഹത്തായ ആഘോഷങ്ങൾ',
    'about.annadanam': 'അന്നദാനം',
    'about.annadanamDesc': 'ദിവസേന ഭക്തർക്ക് സൗജന്യ ഭക്ഷണം',
    'about.heritage': 'പാരമ്പര്യം',
    'about.heritageDesc': '150+ വർഷത്തെ ദൈവിക സേവനം',
    
    // Pooja Centre
    'pooja.centre': 'പൂജാ കേന്ദ്രം',
    'pooja.plan': 'നിങ്ങളുടെ ഭക്തി ദിനം ആസൂത്രണം ചെയ്യുക',
    'pooja.description': 'പൂജാ വിഭാഗങ്ങൾ ബ്രൗസ് ചെയ്യുകയും തൽക്ഷണ സ്ഥിരീകരണത്തോടെ ഓൺലൈനായി നിങ്ങളുടെ വഴിപാടുകൾ ബുക്ക് ചെയ്യുകയും ചെയ്യുക.',
    'pooja.book': 'പൂജ ബുക്ക് ചെയ്യുക',
    'pooja.viewVazhipads': 'വഴിപാടുകൾ കാണുക',
    'pooja.daily': 'ദിവസേന പൂജകൾ',
    'pooja.dailyDesc': 'എല്ലാ ദിവസവും നടക്കുന്ന പതിവ് പൂജകൾ',
    'pooja.festival': 'ഉത്സവ പൂജകൾ',
    'pooja.festivalDesc': 'ഉത്സവങ്ങളിൽ പ്രത്യേക പൂജകൾ',
    'pooja.special': 'പ്രത്യേക പൂജകൾ',
    'pooja.specialDesc': 'ഓൺലൈനായി കസ്റ്റം പൂജകൾ ബുക്ക് ചെയ്യുക',
    'pooja.vazhipad': 'വഴിപാട്',
    'pooja.vazhipadDesc': 'പരമ്പരാഗത വഴിപാട് പട്ടിക',
    
    // Gallery
    'gallery.overview': 'ഗാലറി അവലോകനം',
    'gallery.explore': 'ഫോട്ടോകളും വീഡിയോകളും കാണുക',
    'gallery.description': 'ക്ഷേത്ര നിമിഷങ്ങൾ - ഉത്സവങ്ങൾ, സ്ഥലങ്ങൾ, പരിപാടികൾ, ശാന്തമായ കാഴ്ചകൾ.',
    'gallery.photos': 'ഫോട്ടോകൾ',
    'gallery.videos': 'വീഡിയോകൾ',
    'gallery.events': 'പരിപാടികൾ',
    'gallery.premises': 'സ്ഥലങ്ങൾ',
    'gallery.curated': 'തിരഞ്ഞെടുത്തത്',
    'gallery.highlights': 'പ്രധാനം',
    'gallery.recent': 'സമീപകാല',
    'gallery.scenic': 'മനോഹരം',
    'gallery.templeTour': 'ക്ഷേത്ര പര്യടനം',
    
    // Donation
    'donate.overview': 'സംഭാവന അവലോകനം',
    'donate.support': 'ക്ഷേത്ര കാര്യങ്ങൾക്ക് പിന്തുണ നൽകുക',
    'donate.description': 'നിങ്ങളുടെ സംഭാവന ക്ഷേത്രം പരിപാലിക്കാനും സമൂഹത്തെ സേവിക്കാനും സഹായിക്കുന്നു.',
    'donate.online': 'ഓൺലൈൻ സംഭാവന',
    'donate.annadanam': 'അന്നദാനം',
    'donate.renovation': 'നവീകരണ ഫണ്ട്',
    'donate.festival': 'ഉത്സവ സംഭാവന',
    'donate.now': 'ഇപ്പോൾ സംഭാവന ചെയ്യുക',
    'donate.secure': 'സുരക്ഷിത പേയ്‌മെന്റ്',
    'donate.monthly': 'പ്രതിമാസ സംഭാവന',
    'donate.oneTime': 'ഒറ്റത്തവണ സംഭാവന',
    
    // Nearby
    'nearby.overview': 'സമീപസ്ഥലങ്ങൾ അവലോകനം',
    'nearby.explore': 'സമീപത്തെ ആകർഷണങ്ങൾ കാണുക',
    'nearby.description': 'ക്ഷേത്രത്തിന് ചുറ്റുമുള്ള കടൽത്തീരങ്ങൾ, ക്ഷേത്രങ്ങൾ, വ്യൂപോയിന്റുകൾ, പൈതൃക സ്ഥലങ്ങൾ.',
    'nearby.beaches': 'കടൽത്തീരങ്ങൾ',
    'nearby.temples': 'ക്ഷേത്രങ്ങൾ',
    'nearby.viewpoints': 'വ്യൂപോയിന്റുകൾ',
    'nearby.heritage': 'പൈതൃക സ്ഥലങ്ങൾ',
    
    // Contact
    'contact.overview': 'ബന്ധപ്പെടുക അവലോകനം',
    'contact.getInTouch': 'ബന്ധപ്പെടുക',
    'contact.description': 'എന്തെങ്കിലും ചോദ്യങ്ങൾ, ഫീഡ്‌ബാക്ക് അല്ലെങ്കിൽ ആത്മീയ മാർഗദർശനത്തിനായി ഞങ്ങളെ സമീപിക്കുക.',
    'contact.info': 'ബന്ധപ്പെടാനുള്ള വിവരം',
    'contact.map': 'മാപ്പും വഴികളും',
    'contact.feedback': 'ഫീഡ്‌ബാക്ക്',
    'contact.office': 'ഓഫീസ് സമയം',
    
    // Common
    'common.open': 'തുറക്കുക',
    'common.viewMore': 'കൂടുതൽ കാണുക →',
    'common.learnMore': 'കൂടുതൽ അറിയുക',
    'common.explore': 'പര്യവേക്ഷണം ചെയ്യുക',
    'common.readMore': 'കൂടുതൽ വായിക്കുക',
    'common.bookNow': 'ഇപ്പോൾ ബുക്ക് ചെയ്യുക',
    'common.viewAll': 'എല്ലാം കാണുക',
    'common.latest': 'പുതിയത്',
    'common.popular': 'ജനപ്രിയം',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
