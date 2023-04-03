import React from 'react'
import LogoPersonajes from '../../components/logoPersonajes/LogoPersonajes'
import SearchBar from '../../components/searchBar/SearchBar'
import ListCard from '../../components/ListCard/ListCard'
import Paginador from '../../components/paginador/Paginador'
import { useData } from '../../hooks/useData'
import { useState } from 'react'

function Capitulos() {
  const [search,setSearch]=useState("")
  const { info, data,prevPage,nextPage } = useData({ keyword: "episode", name:search})


  const changeSearch=(e)=>{
    setSearch(e.target.value)}

  return (
    <div>
        <LogoPersonajes/>
        <h1 className="text-center text-dark">Capítulos</h1>
        <SearchBar changeSearch={changeSearch} />
        <ListCard data={data}/>
        <Paginador prev={info?.prev} next={info?.next} handledPrev={prevPage} handledNext={nextPage}/>
    </div>
  )
}

export default Capitulos
