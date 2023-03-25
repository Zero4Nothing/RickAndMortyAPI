import React from "react";
import LogoPersonajes from "../../components/logoPersonajes/LogoPersonajes";
import SearchBar from "../../components/searchBar/SearchBar";

function Personajes() {
  return (
    <div>
      <LogoPersonajes />
      <h1 className="text-center text-dark">Personajes</h1>
      <SearchBar />
    </div>
  );
}

export default Personajes;
