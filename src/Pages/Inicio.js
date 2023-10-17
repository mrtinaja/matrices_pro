import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import Navbar from '../Components/Navbar'
import './inicio.css'; // Importa tu archivo CSS
import '../main.scss'

const Inicio = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-container">
        <img src={process.env.PUBLIC_URL + './images/bg-heading-01.png'} alt="Heading" className="bg-image" />
        <div className="container text-container">
          <div className="row">
            <div className="col">
              <h2 className="title">¡Hola usuario!</h2>
              <p className="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
            </div>
          </div>
        </div>
      </div>
      <div className="app-card-body">
  <div className="container-lg py-4 py-lg-0">
    <div className="row pb-4 pb-md-0">
    <div className="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
            <h1 className="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
            <Link to="/resumen" className="btn btn-eleg btn-large">Comenzar</Link> {/* Usa Link en lugar de <a> */}
          </div>
      <div className="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
        
        <div className="tutorial-intro">
          <div className="tutorial-intro-txt">
          <h3 className="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
            <a href="#" className="btn btn-eleg btn-large mx-auto">Ver Video</a>
          </div>
          <img src={process.env.PUBLIC_URL + './images/desktop-laptop.png'} alt="" className="tutorial-intro-img" />
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    
  );
}

export default Inicio;
