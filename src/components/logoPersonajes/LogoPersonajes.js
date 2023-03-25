import React from 'react'
import logoPersonajes from './../../assets/LetrasRickMorty.png'
function LogoPersonajes() {
  return (
    <div className="d-flex flex-column align-items-center">
      <img className="mr-auto text-center" src={logoPersonajes} alt="logo de Rick and Morty" />
    </div>
  )
}

export default LogoPersonajes
