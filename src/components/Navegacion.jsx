import { useState, useEffect } from 'react'
import useCarrito from '../hooks/useCarrito'

const Navegacion = ({total, pagar}) => {

  return (
    <nav className='navbar'>
      <div className="logo">MercadoLibre</div>
      <div>
        <p>Carrito: {total}</p>
        <button onClick={pagar}>Pagar</button>
      </div>
    </nav>
  )
}

export default Navegacion