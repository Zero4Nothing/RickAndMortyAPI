import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Personajes from "./pages/personajes/Personajes";
import Capitulos from "./pages/capitulos/Capitulos";
import Generador from "./pages/generador/Generador";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/capitulos" element={<Capitulos />} />
        <Route path="/generador" element={<Generador />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
