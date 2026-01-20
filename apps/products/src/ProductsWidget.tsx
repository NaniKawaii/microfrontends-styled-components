import React from 'react'
import ProductList from './components/ProductList'

const products = [
  { id: 1, name: 'Producto A', price: 12.99 },
  { id: 2, name: 'Producto B', price: 8.5 },
  { id: 3, name: 'Producto C', price: 22.0 }
]

export default function ProductsWidget() {
  return (
    <ProductList products={products} />
  )
}
