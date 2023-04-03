import React from 'react'
import { useCharacter } from '../../hooks/useCharacter'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import { useState } from 'react'
import Spinner from '../../components/spinner/Spinner'

function Generador() {
  const [number, setNumber] = useState()
  const { character, isLoading } = useCharacter(number)

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 671) + 1
    setNumber(randomNumber)
  }
  console.log(number)

  return (
    <>
      {isLoading ? <Spinner/> : <div className='d-flex align-items-center text-center'>
        <div className="m-auto">
          <h1 className='pt-3'>Generador Automático</h1>
          <p>Presiona el botón para generar un personaje aleatorio</p>
          {character && 
          <CharacterCard 
          image={character.image} 
          name={character.name}  
          id={character.id}
          status={character.status}
          species={character.species}
          type={character.type}
          gender={character.gender}
          origin={character.origin.name}
          location={character.location.name}
          created={character.created}
          
          
          />}
          <button className="btn btn-outline-secondary shadow" onClick={generateRandomNumber}>Generar</button>

        </div>
      </div>}


    </>

  )
}

export default Generador
