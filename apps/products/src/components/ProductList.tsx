import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
`

type Product = { id: number; name: string; price: number }

type Props = { products: Product[] }

export default function ProductList({ products }: Props) {
  return (
    <List>
      {products.map((p) => (
        <ProductCard key={p.id} name={p.name} price={p.price} />
      ))}
    </List>
  )
}
