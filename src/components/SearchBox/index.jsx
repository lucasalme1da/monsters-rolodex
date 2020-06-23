import React from 'react';
import './style.css'

const SearchBox = ({ placeholder, handleSearch }) => (
  <input
    autoFocus
    type="search"
    placeholder={placeholder}
    onChange={handleSearch}
  />
);

export default SearchBox;