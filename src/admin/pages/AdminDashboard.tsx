import React, { useState } from 'react';
import { 
  Box, 
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PlaceIcon from '@mui/icons-material/Place';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// Import CMS components
import ImageSliderManager from '../components/ImageSliderManager';
import AboutSectionManager from '../components/AboutSectionManager';
import AnnouncementsManager from '../components/AnnouncementsManager';
import PoojaSectionManager from '../components/PoojaSectionManager';
import NewsSectionManager from '../components/NewsSectionManager';
import DonationSectionManager from '../components/DonationSectionManager';
import GallerySectionManager from '../components/GallerySectionManager';
import ContactSectionManager from '../components/ContactSectionManager';
import NearbySectionManager from '../components/NearbySectionManager';
import OnlineBookingManager from '../components/OnlineBookingManager';
import DailyPoojaManager from '../components/DailyPoojaManager';
import SpecialPoojaManager from '../components/SpecialPoojaManager';
import FestivalPoojaManager from '../components/FestivalPoojaManager';
import VazhipadListManager from '../components/VazhipadListManager';

const drawerWidth = 280;

interface MenuSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems?: { id: string; label: string }[];
}

const menuSections: MenuSection[] = [
  {
    id: 'overview',
    label: 'Dashboard Overview',
    icon: <DashboardIcon />
  },
  {
    id: 'home',
    label: 'Home Section',
    icon: <HomeIcon />,
    subItems: [
      { id: 'home-slider', label: 'Image Slider' },
      { id: 'home-about', label: 'About Section' },
      { id: 'home-pooja', label: 'Pooja Section' },
      { id: 'home-news', label: 'News Section' },
      { id: 'home-donation', label: 'Donation Section' },
      { id: 'home-gallery', label: 'Gallery Section' },
      { id: 'home-nearby', label: 'Nearby Section' },
      { id: 'home-contact', label: 'Contact Section' }
    ]
  },
  {
    id: 'pooja',
    label: 'Pooja Section',
    icon: <TempleHinduIcon />,
    subItems: [
      { id: 'pooja-booking', label: 'Online Booking' },
      { id: 'pooja-daily', label: 'Daily Poojas' },
      { id: 'pooja-special', label: 'Special Poojas' },
      { id: 'pooja-festival', label: 'Festival Poojas' },
      { id: 'pooja-vazhipad', label: 'Vazhipad List' }
    ]
  },
  {
    id: 'news',
    label: 'News Section',
    icon: <AnnouncementIcon />,
    subItems: [
      { id: 'news-announcements', label: 'Announcements' },
      { id: 'news-news', label: 'News' },
      { id: 'news-upcoming', label: 'Upcoming Events' },
      { id: 'news-past', label: 'Past Events' },
      { id: 'news-notices', label: 'Notices' }
    ]
  },
  {
    id: 'donation',
    label: 'Donation Section',
    icon: <VolunteerActivismIcon />,
    subItems: [
      { id: 'donation-online', label: 'Online Donation' },
      { id: 'donation-annadanam', label: 'Annadanam' },
      { id: 'donation-renovation', label: 'Renovation' },
      { id: 'donation-festival', label: 'Festival Support' }
    ]
  },
  {
    id: 'gallery',
    label: 'Gallery Section',
    icon: <PhotoLibraryIcon />,
    subItems: [
      { id: 'gallery-photos', label: 'Photos' },
      { id: 'gallery-videos', label: 'Videos' },
      { id: 'gallery-events', label: 'Events' },
      { id: 'gallery-premises', label: 'Premises' }
    ]
  },
  {
    id: 'nearby',
    label: 'Nearby Section',
    icon: <PlaceIcon />,
    subItems: [
      { id: 'nearby-beaches', label: 'Beaches' },
      { id: 'nearby-temples', label: 'Temples' },
      { id: 'nearby-viewpoints', label: 'Viewpoints' },
      { id: 'nearby-heritage', label: 'Heritage' },
      { id: 'nearby-boating', label: 'Boating' },
      { id: 'nearby-activities', label: 'Activities' }
    ]
  },
  {
    id: 'contact',
    label: 'Contact Section',
    icon: <ContactPhoneIcon />,
    subItems: [
      { id: 'contact-office', label: 'Office Details' },
      { id: 'contact-map', label: 'Map' },
      { id: 'contact-info', label: 'Information' },
      { id: 'contact-feedback', label: 'Feedback' }
    ]
  }
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`admin-tabpanel-${index}`}
//       aria-labelledby={`admin-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
//     </div>
//   );
// }

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState('overview');
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const handleSectionClick = (sectionId: string) => {
    if (menuSections.find(s => s.id === sectionId)?.subItems) {
      setOpenSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
    } else {
      setSelectedSection(sectionId);
    }
  };

  const handleSubItemClick = (subItemId: string) => {
    setSelectedSection(subItemId);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'overview':
        return (
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Welcome to the CMS Dashboard
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              Manage your temple website content from here. Select a section from the sidebar menu to begin editing.
            </Typography>
          </Box>
        );
      case 'home-slider':
      case 'slider':
        return <ImageSliderManager />;
      case 'home-about':
      case 'about':
        return <AboutSectionManager />;
      case 'home-pooja':
      case 'pooja':
        return <PoojaSectionManager />;
      case 'home-news':
      case 'news':
        return <NewsSectionManager />;
      case 'home-donation':
      case 'donation':
        return <DonationSectionManager />;
      case 'home-gallery':
      case 'gallery':
        return <GallerySectionManager />;
      case 'home-nearby':
      case 'nearby':
        return <NearbySectionManager />;
      case 'home-contact':
      case 'contact':
        return <ContactSectionManager />;
      case 'news-announcements':
        return <AnnouncementsManager />;
      case 'pooja-booking':
        return <OnlineBookingManager />;
      case 'pooja-daily':
        return <DailyPoojaManager />;
      case 'pooja-special':
        return <SpecialPoojaManager />;
      case 'pooja-festival':
        return <FestivalPoojaManager />;
      case 'pooja-vazhipad':
        return <VazhipadListManager />;
      default:
        return (
          <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              {menuSections.find(s => s.id === selectedSection.split('-')[0])?.label || 'Content Manager'}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Content management for this section is coming soon...
            </Typography>
          </Box>
        );
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Top App Bar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: '#d4af37', 
          color: '#000' 
        }}
      >
        <Toolbar>
          <DashboardIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Temple CMS Admin Dashboard
          </Typography>
          <IconButton color="inherit" onClick={handleLogout} title="Logout">
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Left Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#fafafa',
            borderRight: '2px solid #d4af37'
          },
        }}
      >
        <Toolbar /> {/* Spacer for AppBar */}
        <Box sx={{ overflow: 'auto', pt: 2 }}>
          <List>
            {menuSections.map((section) => (
              <React.Fragment key={section.id}>
                <ListItemButton
                  selected={selectedSection === section.id || selectedSection.startsWith(section.id + '-')}
                  onClick={() => handleSectionClick(section.id)}
                  sx={{
                    mx: 1,
                    mb: 0.5,
                    borderRadius: 2,
                    '&.Mui-selected': {
                      bgcolor: '#d4af37',
                      color: '#000',
                      fontWeight: 700,
                      '&:hover': {
                        bgcolor: '#e5c158',
                      },
                      '& .MuiListItemIcon-root': {
                        color: '#000',
                      }
                    },
                    '&:hover': {
                      bgcolor: 'rgba(212, 175, 55, 0.1)',
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {section.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={section.label} 
                    primaryTypographyProps={{ 
                      fontSize: '0.9rem',
                      fontWeight: selectedSection === section.id || selectedSection.startsWith(section.id + '-') ? 700 : 500
                    }}
                  />
                  {section.subItems && (
                    openSections[section.id] ? <ExpandLess /> : <ExpandMore />
                  )}
                </ListItemButton>

                {section.subItems && (
                  <Collapse in={openSections[section.id]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {section.subItems.map((subItem) => (
                        <ListItemButton
                          key={subItem.id}
                          selected={selectedSection === subItem.id}
                          onClick={() => handleSubItemClick(subItem.id)}
                          sx={{
                            pl: 6,
                            mx: 1,
                            mb: 0.5,
                            borderRadius: 2,
                            '&.Mui-selected': {
                              bgcolor: 'rgba(212, 175, 55, 0.3)',
                              fontWeight: 600,
                              '&:hover': {
                                bgcolor: 'rgba(212, 175, 55, 0.4)',
                              }
                            },
                            '&:hover': {
                              bgcolor: 'rgba(212, 175, 55, 0.05)',
                            }
                          }}
                        >
                          <ListItemText 
                            primary={subItem.label}
                            primaryTypographyProps={{ 
                              fontSize: '0.85rem',
                              fontWeight: selectedSection === subItem.id ? 600 : 400
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#f5f5f5',
          p: 3,
          minHeight: '100vh'
        }}
      >
        <Toolbar /> {/* Spacer for AppBar */}
        <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
