import React from 'react'
import styled from 'styled-components'

const Card = styled.li`
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--color-surface);
  padding: 14px;
  box-shadow: var(--shadow-lg);
`

const Nombre = styled.div`
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
`

const Precio = styled.div`
  color: var(--color-muted);
`

type Props = { nombre: string; precio: number }

export default function CardProducto({ nombre, precio }: Props) {
  return (
    <Card>
      <Nombre>{nombre}</Nombre>
      <Precio>${precio.toFixed(2)}</Precio>
    </Card>
  )
}
