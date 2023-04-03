/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
/* import { Link } from "react-router-dom"; */
import logo from "../../assets/IconoRickMorty.png";
import { Link } from "react-router-dom";
/* React.createElemet("nav", { style: "background-color:#e3f2fd" });*/
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-light text-bg-dark sticky-top shadow"
        aria-label="Eighth navbar example"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container d-flex align-items-center">
          
          <Link to="/"><img className="mr-auto" src={logo} alt="logo de Rick and Morty" /></Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="ml-auto justify-content-end collapse navbar-collapse"
            id="navbarsExample07"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item m-auto">
                <Link className="nav-link " aria-current="page" to="/personajes">
                  Personajes
                </Link>
              </li>
              <li className="nav-item m-auto">
                <Link to="/capitulos" className="nav-link">
                  Capítulos
                </Link>
              </li>
              <li className="nav-item m-auto">
              <Link to="/generador" className="nav-link">
                Generador
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;