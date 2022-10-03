import { useState } from 'react'
import useProductos from '../hooks/useProductos'
import useCarrito from '../hooks/useCarrito'

const Producto = ({prod, agregarProducto}) => {

  const {nombre, precio, stock} = prod
  const activo = stock > 0 ? true : false

  const venta = () => {
    agregarProducto(prod)
  }

  return (
    <div>
      <h1>{nombre}</h1>
      <p>Precio: {precio}</p>
      <p>Stock: {stock}</p>
      <button onClick={venta} disabled={!activo}>Comprar</button>
    </div>
  )
}

export default Producto