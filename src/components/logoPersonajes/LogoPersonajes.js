import React from 'react'
import logoPersonajes from './../../assets/LetrasRickMorty.png'

function LogoPersonajes() {
  return (
    <div className="d-flex flex-column align-items-center">
      <img className="img-fluid mx-auto" src={logoPersonajes} alt="logo de Rick and Morty" style={{ maxWidth: '375px' }}/>
    </div>
  )
}

export default LogoPersonajes