import React from "react";
import LogoPersonajes from "../../components/logoPersonajes/LogoPersonajes";
import SearchBar from "../../components/searchBar/SearchBar";
import FiltrosPersonajes from '../../components/filtrosPersonajes/FiltrosPersonajes';
function Personajes() {
  return (
    <div>
      <LogoPersonajes />
      <h1 className="text-center text-dark">Personajes</h1>
      <SearchBar />
      <FiltrosPersonajes />
    </div>
  );
}

export default Personajes;
