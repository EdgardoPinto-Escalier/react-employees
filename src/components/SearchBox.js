import React from 'react';


const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2'>
      <input 
        className='pa2'
        type="search" 
        placeholder='Search Employees'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;