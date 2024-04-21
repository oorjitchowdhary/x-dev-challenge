import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import woeids from "../utils/woeid";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const getTrends = async (woeid) => {
    try {
      const response = await fetch(`http://localhost:5000/api/trends?query=${woeid}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);

    if (value.length >= 2) {
      const filteredCities = Object.entries(woeids).filter(([cityName, _]) =>
        cityName.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  };

  const handleCityClick = (cityName, woeid) => {
    setQuery(cityName);
    setSuggestions([]);
    getTrends(woeid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const woeid = woeids[query];
    getTrends(woeid);
    setQuery('');
    setSuggestions([]);
  };

  return (
    <Box position="absolute" top={20} left="30%" transform="translateX(-50%)" zIndex={999}>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Search for a city"
          variant="outlined"
          size="small"
          value={query}
          onChange={handleChange}
          fullWidth
          InputProps={{
            sx: {
              borderRadius: '20px',
              backgroundColor: '#f3f3f3',
              width: '40vw'
            },
            style: {
              padding: '10px',
            },
          }}
        />
      </form>
      {suggestions.length > 0 && (
        <Paper
          elevation={3}
          sx={{
            marginTop: '8px',
            width: '100%',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
          }}
        >
          {suggestions.map(([cityName, woeid], index) => (
            <StyledMenuItem
              key={index}
              onClick={() => handleCityClick(cityName, woeid)}
              sx={{
                '& .MuiTypography-root': {
                  fontSize: '14px',
                  fontWeight: 500,
                },
              }}
            >
              {cityName}
            </StyledMenuItem>
          ))}
        </Paper>
      )}
    </Box>
  );
};

export default SearchBar;
