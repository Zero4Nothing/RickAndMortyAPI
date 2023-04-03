import React from 'react'
import {useCharacter} from '../../hooks/useCharacter'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import { useState } from 'react'

function Generador() {
  const [number,setNumber]=useState()
  const{character} = useCharacter(number)

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 671) + 1
    setNumber(randomNumber)
  }
  console.log(number)

  return (
    <div>
      <h1>Generador automático</h1>
      <p>Presiona el botón para generar un personaje aleatorio</p>
      {character && <CharacterCard image={character.image} name={character.name}/>}
      <button class="btn btn-success" onClick={generateRandomNumber}>Generar</button>
    </div>
  )
}

export default Generador
