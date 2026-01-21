import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: linear-gradient(135deg, var(--btn-bg), var(--btn-bg-soft));
  color: var(--btn-fg);
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid var(--border-soft);
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

type Props = { onClick?: () => void; children?: React.ReactNode }

export default function BotonComprar({ onClick, children }: Props) {
  return (
    <Button onClick={onClick}>
      <Icon>🛍️</Icon>
      {children ?? 'Comprar'}
    </Button>
  )
}
