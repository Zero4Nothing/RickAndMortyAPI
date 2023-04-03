/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function Card({ img, name, species, episode, air_date }) {
    return (
        <div className="card m-auto mt-4 p-4 p-4 shadow" style={{ width: "15rem",height:"max-content" }}>
            {
                img ? <img className="card-img-top" src={img} alt="Card image cap" /> : null
            }
            <div className="card-body">
                <h5>{name}</h5>
                <p className="card-text small">{species}</p>
                {
                    air_date?<p className="card-text small">{air_date}</p>:null

                }
          </div>
        </div>

    )
}

export default Card
