import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import './inicio.css'; // Importa tu archivo CSS
import '../main.scss';

const Resumen = () => {
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
      <div className="app-card mx-auto my-md-4">
      <div className="app-card-body">
        <div className="container-lg py-4 py-lg-0">
          <div className="row pb-4 pb-md-0">
            <div className="col-12 col-md-6 p-4 p-sm-5">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Quisque euismod massa ac augue egestas, in eleifend libero ultrices.
                 Proin eleifend arcu quis nisl luctus ultricies. 
                 Curabitur lacinia auctor felis, a aliquet nulla facilisis vel.
                 Integer varius ullamcorper aliquet. 
                 Pellentesque habitant morbi tristique senectus et netus et malesuada
                 fames ac turpis egestas. Sed quis tortor in justo tincidunt cursus id a ligula. 
                 Curabitur tincidunt urna non nunc blandit ultrices.
                </p>
            </div>
            <div className="col-12 col-md-6 p-4 p-sm-5">
              <div className="card-resume">
                <h3 className="subtitle">Armá tu matriz</h3>
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between">
                    <span>Cantidad de Matrices</span>
                    <span>2</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Alcance nacional</span>
                    <span>1</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Alcance provincial</span>
                    <span>1</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Alcance municipal</span>
                    <span>1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-between align-items-center pb-4">
            <div className="col-auto ps-4 ps-sm-5">
              <a href="#" className="text-link-eleg">Ayuda</a>
            </div>
            <div className="col-auto pe-4 pe-sm-5">
            <NavLink to="/wizard" style={{ textDecoration: 'none' }}>
              <a href="wizard-steep-1.html" className="btn btn-eleg">Continuar</a>
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Resumen;
