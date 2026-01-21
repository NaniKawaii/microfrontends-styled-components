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
  padding: 10px 14px;
  background: linear-gradient(135deg, var(--btn-bg), var(--btn-bg-soft));
  color: var(--btn-fg);
  border: 1px solid var(--border-soft);
  border-radius: 999px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  font-weight: 600;
  letter-spacing: 0.2px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform 120ms ease, filter 120ms ease;
  &:hover { transform: translateY(-1px); filter: brightness(1.02); }
  &:active { transform: scale(0.98); }
`
const Icon = styled.span`
  font-size: 14px;
  line-height: 1;
`

type Props = { name: string; price: number }

export default function ProductCard({ name, price }: Props) {
  return (
    <Item>
      <Name>{name}</Name>
      <Price>${price.toFixed(2)}</Price>
      <Button>
        <Icon>＋</Icon>
        Agregar
      </Button>
    </Item>
  )
}
