import React from 'react';

const SearchBar = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Filtra por nombre"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
