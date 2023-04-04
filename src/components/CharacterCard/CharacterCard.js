import React from 'react'

function CharacterCard({ image, name, id, status, species, type, gender, origin, location, created }) {
  return (
    <div className="card mb-3 m-auto shadow d-flex justify-content-space p-4 bg-light" >

      <div className="col-12 row">
        <div className="col-md-6 ">
          <img src={image} className="img-fluid m-auto p-4 rounded-circle align-self-center" alt="..." />
        </div>
        <div className="col-md-6">
          <h4 className="card-title text-center pb-3">{name.toUpperCase()}</h4>
          <p>ID PERSONAJE: {id}</p>
          <p>ESTADO: {status}</p>
          <p>ESPECIE: {species}</p>
          <p>TIPO: {type}</p>
          <p>GÉNERO: {gender}</p>
          <p>ORÍGEN: {origin}</p>
          <p>LOCACIÓN: {location}</p>
          <p>CREADO EN: {created}</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
