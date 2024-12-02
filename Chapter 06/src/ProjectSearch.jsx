import React, { useState } from 'react';

function ProjectSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement search logic, including interactions with backend services.
    onSearch(searchTerm);
  };

  return (
    <div>
      <h2>Search Projects</h2>
      <input
        type="text"
        placeholder="Search Term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default ProjectSearch;
