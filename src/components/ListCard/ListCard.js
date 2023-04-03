import Card from '../Card/Card'
import React from 'react'
function ListCard({ data }) {
  return (

    <>
    {!data && <p className="text-center text-dark">No hay resultados</p>}
      <div class="container">
        <div class="row row-cols-4">
        {data && data.map(item => (
            <Card
              key={item.id}
              img={item.image}
              name={item.name}
              species={item.species}
              episode={item.episode}
              air_date={item.air_date}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ListCard