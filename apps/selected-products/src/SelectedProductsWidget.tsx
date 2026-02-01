import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--color-surface);
  padding: 14px;
  box-shadow: var(--shadow-lg);
`

const Title = styled.h3`
  margin: 0 0 12px 0;
  color: var(--color-text);
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-soft);
  &:last-child {
    border-bottom: none;
  }
`

const Name = styled.span`
  font-weight: 500;
`

const Price = styled.span`
  color: var(--color-muted);
`

const RemoveButton = styled.button`
  background: #ff4757;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 12px;
`

export default function SelectedProductsWidget() {
  const { selectedProducts, removeProduct, clear } = (window as any).cartStore()

  return (
    <Container>
      <Title>Productos Seleccionados</Title>
      {selectedProducts.length === 0 ? (
        <p>No hay productos seleccionados.</p>
      ) : (
        <>
          <List>
            {selectedProducts.map((product) => (
              <Item key={product.id}>
                <Name>{product.name}</Name>
                <Price>${product.price.toFixed(2)}</Price>
                <RemoveButton onClick={() => removeProduct(product.id)}>
                  Remover
                </RemoveButton>
              </Item>
            ))}
          </List>
          <button onClick={clear} style={{ marginTop: 12 }}>
            Vaciar lista
          </button>
        </>
      )}
    </Container>
  )
}