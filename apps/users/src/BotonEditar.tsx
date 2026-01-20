import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 8px 12px;
  background: var(--btn-bg);
  color: var(--btn-fg);
  border: none;
  border-radius: var(--radius);
`

type Props = { onClick?: () => void; children?: React.ReactNode }

export default function BotonEditar({ onClick, children }: Props) {
  return <Button onClick={onClick}>{children ?? 'Editar'}</Button>
}
