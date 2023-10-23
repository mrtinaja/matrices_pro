import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TraductorDropdown from './TraductorDropdown';

function NavBar() {
  return (

<nav class="navbar navbar-expand-lg navbar-light bg-light m-2">
    <div class="container">
        <a className="navbar-brand" href="/"><img src={process.env.PUBLIC_URL + './images/logo-eleg-matriz-pro.svg'} alt='Logo'/></a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav  fw-lighter ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-black" href="/matrices">MATRICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/empresas">EMPRESAS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/plantas">PLANTAS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">ICON</a>
            </li>
          </ul>
          <TraductorDropdown />
        </div>
  </div>
</nav>
  );
}

export default NavBar;
