export type SectionKey =
  | 'poojas'
  | 'donate'
  | 'gallery'
  | 'news'
  | 'about'
  | 'nearby'
  | 'contact';

export interface SidebarLink {
  label: string;
  to: string;
}

export interface SidebarSectionConfig {
  title: string;
  description: string;
  tip?: string;
  links: SidebarLink[];
}

export const SIDEBAR_SECTIONS: Record<SectionKey, SidebarSectionConfig> = {
  poojas: {
    title: 'Pooja Sections',
    description:
      'Switch between daily, special, and festival offerings or manage your bookings in one place.',
    tip: 'Tip: Keep this panel handy to jump across pooja sections without scrolling back to the header.',
    links: [
      { label: 'Pooja Overview', to: '/poojas' },
      { label: 'Daily Poojas', to: '/poojas/daily' },
      { label: 'Special Poojas', to: '/poojas/special' },
      { label: 'Festival Poojas', to: '/poojas/festival' },
      { label: 'Vazhipad List', to: '/poojas/vazhipad' },
      { label: 'Booking / Offerings', to: '/poojas/booking' },
    ],
  },
  donate: {
    title: 'Donation Options',
    description:
      'Choose the fund or initiative you would like to support. Every contribution helps sustain temple services.',
    tip: 'Need help deciding? Reach out to the temple office for guidance on donation schemes.',
    links: [
      { label: 'Donate Overview', to: '/donate' },
      { label: 'Online Donation', to: '/donate/online' },
      { label: 'Annadanam', to: '/donate/annadanam' },
      { label: 'Temple Renovation Fund', to: '/donate/renovation' },
      { label: 'Festival Contribution', to: '/donate/festival' },
    ],
  },
  gallery: {
    title: 'Media Gallery',
    description:
      'Explore temple moments captured through photos, videos, events, and glimpses of the premises.',
    tip: 'New visuals are added after every major event. Check back often!',
    links: [
      { label: 'Gallery Overview', to: '/gallery' },
      { label: 'Photos', to: '/gallery/photos' },
      { label: 'Videos', to: '/gallery/videos' },
      { label: 'Events', to: '/gallery/events' },
      { label: 'Temple Premises', to: '/gallery/premises' },
    ],
  },
  news: {
    title: 'News & Events',
    description:
      'Stay updated with announcements, upcoming programs, and notices from the temple administration.',
    tip: 'Subscribe to alerts so you never miss an important circular or festival update.',
    links: [
      { label: 'News Overview', to: '/news' },
      { label: 'Temple News', to: '/news/news' },
      { label: 'Announcements', to: '/news/announcements' },
      { label: 'Upcoming Events', to: '/news/upcoming' },
      { label: 'Past Events', to: '/news/past' },
      { label: 'Notices / Circulars', to: '/news/notices' },
    ],
  },
  about: {
    title: 'About the Temple',
    description:
      'Learn about the temple history, deities, annual festivals, and key administrative information.',
    tip: 'Use these sections to brief devotees or visitors before they plan their visit.',
    links: [
      { label: 'About Overview', to: '/about' },
      { label: 'Temple History', to: '/about/history' },
      { label: 'Deities', to: '/about/deities' },
      { label: 'Festivals', to: '/about/festivals' },
      { label: 'Administration', to: '/about/administration' },
      { label: 'Temple Rules & Timings', to: '/about/rules' },
    ],
  },
  nearby: {
    title: 'Explore Nearby',
    description:
      'Discover nearby attractions, beaches, heritage spots, and activities to plan a complete trip.',
    tip: 'Share these recommendations with devotees traveling from afar.',
    links: [
      { label: 'Nearby Overview', to: '/nearby' },
      { label: 'Tourist Places', to: '/nearby/tourist-places' },
      { label: 'Beaches', to: '/nearby/beaches' },
      { label: 'Boating', to: '/nearby/boating' },
      { label: 'Viewpoints', to: '/nearby/viewpoints' },
      { label: 'Heritage Sites', to: '/nearby/heritage' },
      { label: 'Temples Nearby', to: '/nearby/temples' },
      { label: 'Activities', to: '/nearby/activities' },
    ],
  },
  contact: {
    title: 'Contact & Support',
    description:
      'Find contact information, directions, feedback forms, and important office numbers.',
    tip: 'Keep these details bookmarked for quick assistance or travel planning.',
    links: [
      { label: 'Contact Overview', to: '/contact' },
      { label: 'Contact Info', to: '/contact/info' },
      { label: 'Map / Directions', to: '/contact/map' },
      { label: 'Feedback Form', to: '/contact/feedback' },
      { label: 'Temple Office Numbers', to: '/contact/office' },
    ],
  },
};
