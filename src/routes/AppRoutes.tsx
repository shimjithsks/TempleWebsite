import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Home from '../pages/Home';
import About from '../pages/About';
import Poojas from '../pages/Poojas';
import Gallery from '../pages/Gallery';
import Donate from '../pages/Donate';
import Nearby from '../pages/Nearby';
import Contact from '../pages/Contact';

// Pooja pages
import DailyPoojas from '../pages/poojas/Daily';
import SpecialPoojas from '../pages/poojas/Special';
import FestivalPoojas from '../pages/poojas/Festival';
import VazhipadList from '../pages/poojas/Vazhipad';
import PoojaBooking from '../pages/poojas/Booking';

// Donate pages
import OnlineDonation from '../pages/donate/Online';
import Annadanam from '../pages/donate/Annadanam';
import TempleRenovation from '../pages/donate/Renovation';
import FestivalContribution from '../pages/donate/Festival';

// Gallery pages
import GalleryPhotos from '../pages/gallery/Photos';
import GalleryVideos from '../pages/gallery/Videos';
import GalleryEvents from '../pages/gallery/Events';
import GalleryPremises from '../pages/gallery/Premises';

// News pages
import NewsOverview from '../pages/NewsOverview';
import TempleNews from '../pages/news/News';
import Announcements from '../pages/news/Announcements';
import UpcomingEvents from '../pages/news/Upcoming';
import PastEvents from '../pages/news/Past';
import Notices from '../pages/news/Notices';

// About pages
import TempleHistory from '../pages/about/History';
import Deities from '../pages/about/Deities';
import Festivals from '../pages/about/Festivals';
import TempleAdministration from '../pages/about/Administration';
import TempleRules from '../pages/about/Rules';

// Nearby pages
import TouristPlaces from '../pages/nearby/TouristPlaces';
import Beaches from '../pages/nearby/Beaches';
import Boating from '../pages/nearby/Boating';
import Viewpoints from '../pages/nearby/Viewpoints';
import Heritage from '../pages/nearby/Heritage';
import NearbyTemples from '../pages/nearby/Temples';
import Activities from '../pages/nearby/Activities';

// Contact pages
import ContactInfo from '../pages/contact/Info';
import ContactMap from '../pages/contact/Map';
import Feedback from '../pages/contact/Feedback';
import OfficeNumbers from '../pages/contact/Office';
import CartPage from '../pages/Cart';

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Poojas Routes */}
      <Route path="/poojas" element={<Poojas />} />
      <Route path="/poojas/daily" element={<DailyPoojas />} />
      <Route path="/poojas/special" element={<SpecialPoojas />} />
      <Route path="/poojas/festival" element={<FestivalPoojas />} />
      <Route path="/poojas/vazhipad" element={<VazhipadList />} />
      <Route path="/poojas/booking" element={<PoojaBooking />} />
      
      {/* Donate Routes */}
      <Route path="/donate" element={<Donate />} />
      <Route path="/donate/online" element={<OnlineDonation />} />
      <Route path="/donate/annadanam" element={<Annadanam />} />
      <Route path="/donate/renovation" element={<TempleRenovation />} />
      <Route path="/donate/festival" element={<FestivalContribution />} />
      
      {/* Gallery Routes */}
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery/photos" element={<GalleryPhotos />} />
      <Route path="/gallery/videos" element={<GalleryVideos />} />
      <Route path="/gallery/events" element={<GalleryEvents />} />
      <Route path="/gallery/premises" element={<GalleryPremises />} />
      
      {/* News/Events Routes */}
      <Route path="/news" element={<NewsOverview />} />
      <Route path="/news/news" element={<TempleNews />} />
      <Route path="/news/announcements" element={<Announcements />} />
      <Route path="/news/upcoming" element={<UpcomingEvents />} />
      <Route path="/news/past" element={<PastEvents />} />
      <Route path="/news/notices" element={<Notices />} />
      
      {/* About Routes */}
      <Route path="/about" element={<About />} />
      <Route path="/about/history" element={<TempleHistory />} />
      <Route path="/about/deities" element={<Deities />} />
      <Route path="/about/festivals" element={<Festivals />} />
      <Route path="/about/administration" element={<TempleAdministration />} />
      <Route path="/about/rules" element={<TempleRules />} />
      
      {/* Nearby Routes */}
      <Route path="/nearby" element={<Nearby />} />
      <Route path="/nearby/tourist-places" element={<TouristPlaces />} />
      <Route path="/nearby/beaches" element={<Beaches />} />
      <Route path="/nearby/boating" element={<Boating />} />
      <Route path="/nearby/viewpoints" element={<Viewpoints />} />
      <Route path="/nearby/heritage" element={<Heritage />} />
      <Route path="/nearby/temples" element={<NearbyTemples />} />
      <Route path="/nearby/activities" element={<Activities />} />
      
      {/* Contact Routes */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/info" element={<ContactInfo />} />
      <Route path="/contact/map" element={<ContactMap />} />
      <Route path="/contact/feedback" element={<Feedback />} />
      <Route path="/contact/office" element={<OfficeNumbers />} />

      {/* Cart Route */}
      <Route path="/cart" element={<CartPage />} />

    </Routes>
    </>
  );
}
