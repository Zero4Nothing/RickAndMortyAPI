import React from "react";
import fondo from "./../../assets/BackgroundImgDesktop.png";

function Main() {
  const styles = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
  };

  return (
    <div>
      <main className="px-3" style={styles}>
        <h1 className="text-center">
          El mejor lugar para ver tu serie favorita.
        </h1>
      </main>
    </div>
  );
}

export default Main;
