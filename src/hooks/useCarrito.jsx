import {useState, useEffect} from 'react'
import useProductos from './useProductos'

const useCarrito = () => {
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if(carrito.length > 0){
      const total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
      setTotal(total)
    } else {
      setTotal(0)
    }
  }, [carrito])

  const agregarProducto = (agregar) => {
    // Verificar si hay stock suficiente para agregar el producto y si no hay, no agregarlo. Además, si ya está en el carrito, sumarle la cantidad
    const existe = carrito.find(prod => prod.id === agregar.id)
    if(existe){
      if(existe.cantidad < existe.stock){
        setCarrito(carrito.map(prod => prod.id === agregar.id ? {...existe, cantidad: existe.cantidad + 1} : prod))
      }
    }
    else {
      if(agregar.stock > 0){
        setCarrito([...carrito, {...agregar, cantidad: 1}])
      }
    }
  }

  // Enviar los productos a la api cuando se haga click en el botón de pagar
  const pagar = async () => {
    // usar try catch para manejar los errores de la api
    try {
      const data = await fetch('http://localhost:3000/pagar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(carrito)
      })
      const resultado = await data.json()
      console.log(resultado)
      setCarrito([])
      setTotal(0)
    } catch (error) {
      console.log('No puedo mostrar el error de la API') // Es porque la respuesta es HTML y no JSON
    }
  }

  return {
    total,
    agregarProducto,
    pagar
  }
}

export default useCarrito