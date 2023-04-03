import React from 'react'

function CharacterCard({image,name}) {
  return (
    <div class="card mb-3" style={{maxWidth: "540px"}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src={image} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">.</p>
          <p class="card-text"><small class="text-muted"></small></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CharacterCard
