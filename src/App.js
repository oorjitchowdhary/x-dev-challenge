import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import IndexPage from './pages/index';
import AboutPage from './pages/about';
import SearchBar from './components/SearchBar'; // Update the path as necessary
import axios from 'axios'; 
import React, { useState } from 'react';



const App = () => {
  const [topics, setTopics] = useState(null);

  const handleSearch = async (query) => {
    try {
      // Send a GET request to your backend API with the search query
      const response = await axios.get(`https://your-backend-api.com/search?q=${query}`);
      setTopics(response.data.slice(0, 10)); // Get top 10 topics

      // Handle the response data as needed
      console.log('Search results:', response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <Router>
      <div className='App'>
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route exact path='/' element={<IndexPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <div>
        {topics !== null && ( // Render top 10 topics only when topics are available
          <div>
            <h2>Top 10 Topics</h2>
            <ul>
              {topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      </div>
    </Router>
  );
};

export default App;
