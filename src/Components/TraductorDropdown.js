import React from 'react'

const TraductorDropdown = () => {
  


  return (
    <div className="dropdown">
    <button className=" mi-boton dropdown-toggle" type="button" id="dropdownMenuButton1" style={{active: 'false', border:'none', background:'none'}} data-bs-toggle="dropdown" aria-expanded="false">
      <img src={process.env.PUBLIC_URL + './images/argentina.png'} alt='ARG'/>
    </button>
    <ul className="dropdown-menu"  style={{minWidth: '20px'}} id="#traductorDropdown" aria-labelledby="dropdownMenuButton1" >
      <li><a className="dropdown-item" href="#"><img src={process.env.PUBLIC_URL + './images/argentina.png'} alt='ARG'/></a></li>
      <li><a className="dropdown-item"  href="#"><img src={process.env.PUBLIC_URL + './images/ingles.png'} alt='USA'/></a></li>
      <li><a className="dropdown-item" href="#"><img src={process.env.PUBLIC_URL + './images/portugues.png'} alt='BRA'/></a></li>
      <li><a className="dropdown-item" href="#"><img src={process.env.PUBLIC_URL + './images/frances.png'} alt='FRA'/></a></li>
    </ul>
  </div>
  )
}

export default TraductorDropdown