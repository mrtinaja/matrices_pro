import React from 'react';
import Navbar from '../Components/Navbar';
import '../main.scss';

const Inicio = () => {
  return (
    <div>
      <Navbar />
      <div className="app-lead-light shadow wizard position-relative">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="title">Armá tu matriz paso a paso</h1>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-3">
                <div className="steep-bubble active" >
                  <div className="static-tooltip">
                    <span>Crear Empresa</span>
                    <div className="bubble"></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3">
                <div className="steep-bubble">
                  <div className="static-tooltip">
                    <span>Crear Planta</span>
                    <div className="bubble"></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3">
                <div className="steep-bubble">
                  <div className="static-tooltip">
                    <span>Crear Matriz</span>
                    <div className="bubble"></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3">
                <div className="steep-bubble">
                  <div className="static-tooltip">
                    <span>Agregar Temas</span>
                    <div className="bubble"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-card mx-auto mt-5 mb-4 py-0 px-4 px-xl-0">
        <div className="app-card-body bg-light align-items-center d-flex">
          <div className="container-lg py-4 py-lg-0">
            <div className="row pb-4 pb-md-0">
              <div className="col-12 p-4 p-sm-5 text-center">
                <p>Aún no hay Empresas creadas, click para Crear la primera</p>
                <button type="button" className="btn btn-eleg mx-auto" data-bs>
                  Crear Empresa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center p-4">
          <div className="col-auto">
            <a href="#" className="text-link-eleg">
              Ayuda
            </a>
          </div>
        </footer>
      </div>
      <div className="modal fade" id="empresaModal" tabIndex="-1" aria-labelledby="empresaModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-size-1">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-6" id="empresaModalLabel">
                Crear Empresa
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="col-12 px-lg-5 has-validation">
                <label htmlFor="inputEmpresa" className="form-label">
                  Ingrese el nombre de la Empresa
                </label>
                <input type="text" className="form-control" id="inputEmpresa" />
              </div>
            </div>
            <div className="modal-footer border-0">
              <button type="button" className="btn btn-eleg mx-auto" onClick={() => {}}>
                Crear Empresa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Inicio;
