import React from 'react'
import { useCharacter } from '../../hooks/useCharacter'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import { useState } from 'react'

function Generador() {
  const [number, setNumber] = useState()
  const { character, isLoading } = useCharacter(number)

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 671) + 1
    setNumber(randomNumber)
  }
  console.log(number)

  // if (isLoading) {
  //   return <h1>Cargando...</h1>;
  // }

  // if (!character) {
  //   return null;
  // }

  return (
    <div className='d-flex align-items-center text-center'>
  <div className="m-auto">
    <h1 className='pt-3'>Generador Automático</h1>
    <p>Presiona el botón para generar un personaje aleatorio</p>
    {character && <CharacterCard image={character.image} name={character.name} />}
    <button className="btn btn-outline-secondary shadow" onClick={generateRandomNumber}>Generar</button>
  </div>
</div>
  )
}

export default Generador
