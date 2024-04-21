import React, { useState } from 'react';
import IndexPage from './pages/index';
import SearchPage from './pages/search';

const App = () => {
  const [currentPage, setCurrentPage] = useState('search'); // ['search', 'trends', 'sentiment']

  return (
      <div className='App'>
        <SearchPage />
        <IndexPage />
      </div>
  );
};

export default App;
