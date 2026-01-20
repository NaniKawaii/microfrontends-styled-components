import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--color-surface);
  padding: 14px;
  box-shadow: var(--shadow-lg);
`

const Name = styled.div`
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
`

const Price = styled.div`
  color: var(--color-muted);
`

const Button = styled.button`
  margin-top: 12px;
  padding: 8px 12px;
  background: var(--btn-bg);
  color: var(--btn-fg);
  border: none;
  border-radius: var(--radius);
`

type Props = { name: string; price: number }

export default function ProductCard({ name, price }: Props) {
  return (
    <Item>
      <Name>{name}</Name>
      <Price>${price.toFixed(2)}</Price>
      <Button>Agregar</Button>
    </Item>
  )
}
