import React, { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3001/products")
        setProducts(response.data)
      } catch (error) {
        console.error("Erro ao buscar produtos:", error)
      } finally {
        setLoading(false)
      }
    }

    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:3001/products")
    //     setProducts(response.data)
    //   } catch (error) {
    //     console.error("Erro ao buscar produtos:", error)
    //   } finally {
    //     setLoading(false)
    //   }
    // }

    fetchProducts()
  }, [])

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name}: ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
