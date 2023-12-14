import React, { useState } from 'react';
import httpClient from '../http-common';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    console.log('Search query:', searchQuery);
    try {
      const response = await httpClient.get(`/search?query=${searchQuery}`);
      console.log('Search results:', response.data);
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search clocks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
