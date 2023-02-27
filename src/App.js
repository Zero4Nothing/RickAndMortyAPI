import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";

function App() {
  // Aqui se va a montar el fetch con API
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    // (funtion(){})() estructura IIFE

    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data.results);
    })();
  }, [api]);

  // Esto es el rendering de la app

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4 fw-bolder">
        Rick & Morty <span className="text-primary">TV SHOW</span>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
