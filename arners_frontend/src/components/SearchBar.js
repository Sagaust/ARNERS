import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Handle the search logic here
    // You could call an API or filter an array of courses, masterclasses, and events
    console.log(`Searching for ${searchTerm}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search courses, masterclasses, events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
