import React from "react";
import LogoPersonajes from "../../components/logoPersonajes/LogoPersonajes";
import SearchBar from "../../components/searchBar/SearchBar";
import FiltrosPersonajes from '../../components/filtrosPersonajes/FiltrosPersonajes';
import ListCard from '../../components/ListCard/ListCard';
import Paginador from '../../components/paginador/Paginador';
import { useData } from "../../hooks/useData";
import { useState } from "react";
function Personajes() {
  const [search,setSearch]=useState("")
  const { info, data,prevPage,nextPage } = useData({ keyword: "character",name:search})

  const changeSearch=(e)=>{
    setSearch(e.target.value)}

  return (
    <div>
      <LogoPersonajes />
      <h1 className="text-center text-dark">Personajes</h1>
      <SearchBar changeSearch={changeSearch} />

      <FiltrosPersonajes />
      <ListCard data={data}/>
      <Paginador prev={info?.prev} next={info?.next} handledPrev={prevPage} handledNext={nextPage}/>

    </div>
  );
}

export default Personajes;
