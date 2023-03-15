import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Footer from './components/footer/Footer';


function App() {
  return (
   <>
   
   <Navbar/>
   <Footer/>
   
   </>
  );
}

export default App;
