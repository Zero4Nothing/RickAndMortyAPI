/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
/* import { Link } from "react-router-dom"; */
import logo from "../../assets/IconoRickMorty.png";
/* React.createElement("nav", { style: "background-color:#e3f2fd" });*/
function Navbar() {
  return (
    <>
      {/* <div className="navbarContainer"> 
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
        </div> */}

      <nav
        className="navbar navbar-expand-lg bg-light text-bg-dark"
        aria-label="Eighth navbar example"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container d-flex">
          {/*<a class="navbar-brand" href="#">
            Container</a>*/}
          <img src={logo} alt="logo de Rick and Morty" />
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

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Personajes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Capítulos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Generador</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
