import React from "react";
import fondo from "../../assets/BackgroundImgDesktop";

function Home() {
  return (
    <>
      <main
        class="px-3"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <h1 className="text-center">
          El mejor lugar para ver tu serie favorita.
        </h1>
      </main>
    </>
  );
}
