/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div className="navbarContainer"> 
        <img />
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="#">Personajes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Capítulos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ">Generador</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
