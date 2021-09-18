import React from 'react'
import { Link } from 'react-router-dom'
import background from '../assets/img/background.jpg';

const home = () => {
  return (
    <div className="hero">
      <nav>
        <h2>COVID 19</h2>
        <div className="menu">
          <button><Link to='/login'>Inicia Sesión</Link></button>
          <button><Link to='/signup'>Registrate</Link></button>
          
        </div>
   
      </nav>
      <div align="center">
        <h2 >BIENVENIDOS</h2>
      
      </div>
      
        <img src={background} width="100%" height="459"
        />
      
      
    </div>
    
    
    
  )
}

export default home