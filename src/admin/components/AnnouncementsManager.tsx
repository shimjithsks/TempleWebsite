import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Grid,
  IconButton,
  Alert,
  Snackbar,
  Chip
} from '@mui/material';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
}

const AnnouncementsManager = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'announcements'));
      const fetchedAnnouncements: Announcement[] = [];
      querySnapshot.forEach((doc) => {
        fetchedAnnouncements.push({ id: doc.id, ...doc.data() } as Announcement);
      });
      setAnnouncements(fetchedAnnouncements.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    } catch (error) {
      console.error('Error fetching announcements:', error);
      showSnackbar('Failed to load announcements', 'error');
    }
  };

  const handleAddAnnouncement = () => {
    const newAnnouncement: Announcement = {
      id: `temp_${Date.now()}`,
      title: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
      priority: 'medium'
    };
    setAnnouncements([newAnnouncement, ...announcements]);
  };

  const handleUpdateAnnouncement = (id: string, field: keyof Announcement, value: string) => {
    setAnnouncements(announcements.map(ann => 
      ann.id === id ? { ...ann, [field]: value } : ann
    ));
  };

  const handleSaveAnnouncement = async (announcement: Announcement) => {
    setLoading(true);
    try {
      const docId = announcement.id.startsWith('temp_') ? `announcement_${Date.now()}` : announcement.id;
      await setDoc(doc(db, 'announcements', docId), {
        title: announcement.title,
        content: announcement.content,
        date: announcement.date,
        priority: announcement.priority
      });
      showSnackbar('Announcement saved successfully', 'success');
      await fetchAnnouncements();
    } catch (error) {
      console.error('Error saving announcement:', error);
      showSnackbar('Failed to save announcement', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAnnouncement = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this announcement?')) return;
    
    setLoading(true);
    try {
      await deleteDoc(doc(db, 'announcements', id));
      showSnackbar('Announcement deleted successfully', 'success');
      await fetchAnnouncements();
    } catch (error) {
      console.error('Error deleting announcement:', error);
      showSnackbar('Failed to delete announcement', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showSnackbar = (message: string, severity: 'success' | 'error') => {
    setSnackbar({ open: true, message, severity });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'info';
      default: return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Announcements Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddAnnouncement}
          sx={{ bgcolor: '#d4af37', color: '#000', '&:hover': { bgcolor: '#e5c158' } }}
        >
          Add Announcement
        </Button>
      </Box>

      <Grid container spacing={3}>
        {announcements.map((announcement) => (
          <Grid item xs={12} key={announcement.id}>
            <Paper sx={{ p: 3, border: '2px solid #ddd' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <TextField
                    fullWidth
                    label="Title"
                    value={announcement.title}
                    onChange={(e) => handleUpdateAnnouncement(announcement.id, 'title', e.target.value)}
                    placeholder="Enter announcement title"
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Date"
                    type="date"
                    value={announcement.date}
                    onChange={(e) => handleUpdateAnnouncement(announcement.id, 'date', e.target.value)}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Content"
                    value={announcement.content}
                    onChange={(e) => handleUpdateAnnouncement(announcement.id, 'content', e.target.value)}
                    multiline
                    rows={3}
                    placeholder="Enter announcement content"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
                    <Typography variant="body2">Priority:</Typography>
                    <Chip 
                      label="High" 
                      color={announcement.priority === 'high' ? 'error' : 'default'}
                      onClick={() => handleUpdateAnnouncement(announcement.id, 'priority', 'high')}
                      sx={{ cursor: 'pointer' }}
                    />
                    <Chip 
                      label="Medium" 
                      color={announcement.priority === 'medium' ? 'warning' : 'default'}
                      onClick={() => handleUpdateAnnouncement(announcement.id, 'priority', 'medium')}
                      sx={{ cursor: 'pointer' }}
                    />
                    <Chip 
                      label="Low" 
                      color={announcement.priority === 'low' ? 'info' : 'default'}
                      onClick={() => handleUpdateAnnouncement(announcement.id, 'priority', 'low')}
                      sx={{ cursor: 'pointer' }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={() => handleSaveAnnouncement(announcement)}
                    disabled={loading || !announcement.title || !announcement.content}
                    sx={{ bgcolor: '#66bb6a', '&:hover': { bgcolor: '#4caf50' } }}
                  >
                    Save
                  </Button>
                  {!announcement.id.startsWith('temp_') && (
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDeleteAnnouncement(announcement.id)}
                      disabled={loading}
                    >
                      Delete
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AnnouncementsManager;