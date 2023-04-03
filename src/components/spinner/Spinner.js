import React from 'react'
import "./Spinner.css"

function Spinner() {
  return (
    <div className='spinnerContainer'>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Spinner
