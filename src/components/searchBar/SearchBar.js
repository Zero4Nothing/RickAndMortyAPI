import React from 'react';

const SearchBar = ({changeSearch,name}) => {
  return (
    <input
    onChange={changeSearch}
    type="text"
    value={name}
    className="form-control w-50 m-auto mb-3   "
    placeholder="Filtra por nombre"
  />
  );
};

export default SearchBar;
