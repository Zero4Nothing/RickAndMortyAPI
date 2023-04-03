import React from "react";
import LogoPersonajes from "../../components/logoPersonajes/LogoPersonajes";
import SearchBar from "../../components/searchBar/SearchBar";
import FiltrosPersonajes from '../../components/filtrosPersonajes/FiltrosPersonajes';
import ListCard from '../../components/ListCard/ListCard';
import Spinner from '../../components/spinner/Spinner'
import Paginador from '../../components/paginador/Paginador';
import { useData } from "../../hooks/useData";
import { useState } from "react";
function Personajes() {
  const [name, setName] = useState("")
  const [state, setState] = useState("")
  const [gender,setGender]=useState("")
  const { info, data, prevPage, nextPage, isLoading } = useData({ keyword: "character", name: name, status: state,gender:gender })

  const changeSearch = (e) => {
    setName(e.target.value)
  }
  const handleChangeState = (e) => {
    setState(e.target.value)
  }
  const handleChangeGender = (e) => {
    setGender(e.target.value)
  }

  const handledClearFilter=()=>{
    setState("")
    setGender("")
    setName("")
  }
  

  return (
    <div>
      <LogoPersonajes />
      <h1 className="text-center text-dark">Personajes</h1>
      <SearchBar changeSearch={changeSearch} name={name}/>
      <FiltrosPersonajes handleChangeState={handleChangeState} handleChangeGender={handleChangeGender} handledClearFilter={handledClearFilter}/>
      {isLoading ? <Spinner /> : <>
        <ListCard data={data} />
        <Paginador prev={info?.prev} next={info?.next} handledPrev={prevPage} handledNext={nextPage} /></>}

    </div>
  );
}

export default Personajes;
