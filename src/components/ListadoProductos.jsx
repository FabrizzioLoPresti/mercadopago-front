import { useState, useEffect } from 'react'
import useProductos from '../hooks/useProductos'
import Producto from './Producto'

const ListadoProductos = ({agregarProducto}) => {

  const {productos} = useProductos()

  return (
    <div className='listado'>
      {productos.map(prod => (
        <Producto
          key={prod.id}
          prod={prod}
          agregarProducto={agregarProducto}
        />
      ))}
    </div>
  )
}

export default ListadoProductos