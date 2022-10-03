import {useState, useEffect} from 'react'

const useProductos = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    const obtenerProductos = async () => {
      const data = await fetch('http://localhost:3000/productos')
      const resultado = await data.json()
      setProductos(resultado)
    }
    obtenerProductos()
  }, [])

  return {
    productos,
  }
}

export default useProductos