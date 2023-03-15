/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/IconoRickMorty.png'

function Navbar() {
    return (
        <div className="navbarContainer"> 
        <img src={logo} alt="logo de Rick and Morty" />

            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link to="/personajes" className="nav-link" href="#">Personajes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/capitulos" className="nav-link" href="#">Capítulos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/generador" className="nav-link ">Generador</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
