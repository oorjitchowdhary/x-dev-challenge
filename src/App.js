import React from 'react';
import SearchPage from './pages/search';
import TrendsPage from './pages/trends';
import SentimentsPage from './pages/sentiments';
import { Typography } from '@mui/material';
import { TrendsProvider } from './contexts/trendsContext';

const App = () => {
  return (
    <TrendsProvider>
      <Typography variant='h3' align='center' style={{ fontWeight: 'bold', margin: '1rem' }}>&#129300; thoughts on what's happening</Typography>
      <SearchPage />
      <TrendsPage />
      <SentimentsPage />
    </TrendsProvider>
  );
};

export default App;
