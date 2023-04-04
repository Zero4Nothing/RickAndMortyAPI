/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { listFilter, listGender } from './DataOption'

function FiltrosPersonajes({ handleChangeState, handleChangeGender, handledClearFilter }) {

    return (
        <div className='bg-light d-flex justify-content-evenly p-4 align-items-center'>
            <div className="form-group text-center" >
                <label className="p-3" for={listFilter[0].status}>Estado</label>
                <select placeholder="Estado" className="form-select form-select-lg mb-3" id="{listFilter[0].status}" name="{listFilter[0].status} " onChange={handleChangeState}>
                    {
                        listFilter.map((item) => (
                            <option key={item.id} value={item.status}>{item.status}</option>
                        ))
                    }
                </select>
            </div>
            <div className="form-group text-center">
                <label className="p-3" for={listGender[0].gender}>Género</label>
                <select className="form-select form-select-lg mb-3" id={listGender[0].gender} name={listGender[0].gender} onChange={handleChangeGender}>
                    {
                        listGender.map((item) => (
                            <option key={item.id} value={item.gender}>{item.gender}</option>
                        ))
                    }
                </select>
            </div>
            <button onClick={handledClearFilter} type="button" class="btn btn-outline-secondary btn-lg">Limpiar</button>
        </div>

        // <div className='d-flex justify-center '>
        //     { /* Button trigger modal */}
        //     <button type="button" className="btn btn-outline-secondary  w-50  m-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
        //         Filtros Avanzados
        //     </button>

        //     {/* Modal*/}
        //     <div className="modal fade justify-center" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //         <div className="modal-dialog modal-dialog-centered">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h5 className="modal-title" id="exampleModalLabel">Filtros</h5>
        //                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //                 </div>
        //                 <div className="modal-body d-flex d-col justify-content-evenly">

        //                     <div class="dropdown">
        //                         <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        //                             Especies
        //                         </button>
        //                         <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
        //                             <li><a className="dropdown-item" href="#">Action</a></li>
        //                             <li><a className="dropdown-item" href="#">Another action</a></li>
        //                             <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                         </ul>
        //                     </div>
        //                     <div class="dropdown">
        //                         <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        //                             Género
        //                         </button>
        //                         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        //                             <li><a className="dropdown-item" href="#">Action</a></li>
        //                             <li><a className="dropdown-item" href="#">Another action</a></li>
        //                             <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                         </ul>
        //                     </div>
        //                     <div class="dropdown">
        //                         <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        //                             Estado
        //                         </button>
        //                         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        //                             <li><a className="dropdown-item" href="#">Action</a></li>
        //                             <li><a className="dropdown-item" href="#">Another action</a></li>
        //                             <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                         </ul>
        //                     </div>




        //                 </div>
        //                 <div className="modal-footer">
        //                     <button type="button" className="btn btn-outline-primary">APLICAR</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}

export default FiltrosPersonajes
