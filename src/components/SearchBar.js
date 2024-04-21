import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import woeids from "../utils/woeid";

const getTrends = async (woeid) => {
  await fetch('http://localhost:5000/api/trends?query=' + woeid)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error searching:', error));
};

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);

    // Check if the length of the query is at least 2 characters
    if (value.length >= 2) {
      // Filter cities based on the current query
      const filteredCities = Object.entries(woeids).filter(([cityName, _]) =>
        cityName.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]); // Clear suggestions if query length is less than 2
    }
  };

  const handleCityClick = (cityName, woeid) => {
    setQuery(cityName); // Set the city name in the input field
    setSuggestions([]);
    getTrends(woeid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since we're using the city name directly, we need to find the WOEID based on the city name
    const woeid = woeids[query];
    getTrends(woeid);
    setQuery('');
    setSuggestions([]);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Search for a city"
          variant="outlined"
          size="small"
          value={query}
          onChange={handleChange}
          fullWidth={true}
          InputProps={{
            sx: {
              borderRadius: '20px',
              backgroundColor: '#f3f3f3',
              width: '700px',
            },
            style: {
              padding: '1px',
            },
          }}
        />
      </form>
      {suggestions.length > 0 && (
        <Paper
          elevation={3}
          sx={{
            marginTop: '8px',
            width: '675px',
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
