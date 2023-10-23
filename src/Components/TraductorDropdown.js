import React, { useContext } from 'react'
import { traductorContext } from '../context/traductorContext'

const TraductorDropdown = () => {
  const { language , setLanguage} = useContext(traductorContext)

  const languageImageMap = {
    'ARG': 'argentina.png',
    'USA': 'ingles.png',
    'BRA': 'portugues.png',
    'FRA': 'frances.png'
  };

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  }
  return (
    <div className="dropdown">
      <button className=" mi-boton dropdown-toggle" type="button" id="dropdownMenuButton1" style={{active: 'false', border:'none', background:'none'}} data-bs-toggle="dropdown" aria-expanded="false">
        <img src={process.env.PUBLIC_URL + `./images/${languageImageMap[language]}`} alt='ARG'/>
      </button>
      <ul className="dropdown-menu"  style={{minWidth: '20px'}} id="#traductorDropdown" aria-labelledby="dropdownMenuButton1" >
        <li><a className="dropdown-item" href="#" onClick={() => handleChangeLanguage('ARG')}><img src={process.env.PUBLIC_URL + './images/argentina.png'} alt={language}/></a></li>
        <li><a className="dropdown-item" href="#" onClick={() => handleChangeLanguage('USA')}><img src={process.env.PUBLIC_URL + './images/ingles.png'} alt={language}/></a></li>
        <li><a className="dropdown-item" href="#" onClick={() => handleChangeLanguage('BRA')}><img src={process.env.PUBLIC_URL + './images/portugues.png'} alt={language}/></a></li>
        <li><a className="dropdown-item" href="#" onClick={() => handleChangeLanguage('FRA')}><img src={process.env.PUBLIC_URL + './images/frances.png'} alt={language}/></a></li>
      </ul>
    </div>
  )
}

export default TraductorDropdown