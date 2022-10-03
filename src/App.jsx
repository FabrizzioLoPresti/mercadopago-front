import { useState } from 'react'
import Navegacion from './components/Navegacion'
import ListadoProductos from './components/ListadoProductos'
import useCarrito from './hooks/useCarrito'
import './App.css'

function App() {
  
  const { total, agregarProducto, pagar } = useCarrito()

  return (
    <div className="App">
      <Navegacion 
        total={total}
        pagar={pagar}
      />
      <ListadoProductos 
        agregarProducto={agregarProducto}
      />
    </div>
  )
}

export default App
