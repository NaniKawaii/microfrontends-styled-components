import React from 'react'
import styled from 'styled-components'

const Card = styled.section`
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--color-surface);
  padding: 16px;
  box-shadow: var(--shadow-lg);
  display: grid;
  grid-template-columns: 64px 1fr auto;
  gap: 16px;
  align-items: center;
`

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #bbb, #ddd);
`

const Name = styled.div`
  font-weight: 700;
  color: var(--color-text);
`

const Email = styled.div`
  color: var(--color-muted);
`

const Tag = styled.span`
  font-size: 12px;
  color: var(--color-muted);
  background: #f1f1f1;
  border: 1px solid var(--border-soft);
  border-radius: 999px;
  padding: 4px 8px;
`

export default function PerfilUsuario() {
  return (
    <Card>
      <Avatar />
      <div>
        <Name>Luiggi</Name>
        <Email>luiggi@example.com</Email>
        <Tag>Usuario</Tag>
      </div>
    </Card>
  )
}
