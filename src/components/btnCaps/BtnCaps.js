import React from "react";
import "./BtnCaps.css";
import { Link } from "react-router-dom";

function BtnCaps() {
  return (

    <>
      <div className="button-container">
        <Link to="/capitulos" >
          <button className="button">Ver capítulos</button>
        </Link>
      </div>

    </>
  );
}

export default BtnCaps;
