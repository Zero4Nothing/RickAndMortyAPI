import React from 'react'

function CharacterCard({ image, name }) {
  return (
    <div className="card mb-3 m-auto shadow" style={{ maxWidth: "400px" }}>
      <img src={image} className="img-fluid m-auto p-4" alt="..." />
      <h4 className="card-title text-center pb-3">{name}</h4>

    </div>
  )
}

export default CharacterCard
