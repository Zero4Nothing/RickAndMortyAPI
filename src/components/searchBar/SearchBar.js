import React from 'react';

const SearchBar = ({changeSearch}) => {
  return (
    <input
    onChange={changeSearch}
    type="text"
    className="form-control w-50 m-auto mb-3   "
    placeholder="Filtra por nombre"
  />
  );
};

export default SearchBar;
