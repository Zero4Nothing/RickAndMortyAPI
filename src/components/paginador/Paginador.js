import React from 'react'
import { useState } from 'react'
import {BsFillCaretLeftFill, BsFillCaretRightFill} from 'react-icons/bs'
import './Paginador.css'

function Paginador({prev, next, handledPrev, handledNext}) {
const [page, setPage]= useState(1)
const prevPageHandled = () => {
    handledPrev()
    setPage(prevPage=> prevPage - 1)

}
const nextPageHandled = () => {
    handledNext()
    setPage(prevPage=> prevPage + 1)
}


  return (
    <div className="pagination" >
        {prev && <BsFillCaretLeftFill className='icon-page' onClick={prevPageHandled}/>}
        <p className='page'>{page}</p>
        {next && <BsFillCaretRightFill className='icon-page' onClick={nextPageHandled}/>}
    </div>
  )
}

export default Paginador
