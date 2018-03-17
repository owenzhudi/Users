import React from 'react';

const SearchBar = ({input, onSearchChange}) => {

  return (
    <div>
      <input type="search" className="form-control mr-sm-2 col col-lg-4" aria-label="Search" value={input} placeholder="Search" onChange={onSearchChange}/>
    </div>
  );
};

export default SearchBar;