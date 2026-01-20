import styled from 'styled-components'
import type { ComponentType, ComponentPropsWithoutRef } from 'react'

export const Box: ComponentType<ComponentPropsWithoutRef<'div'>> = styled.div`
  display: grid;
  gap: 12px;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--color-surface);
  padding: 16px;
  box-shadow: var(--shadow-lg);
`

export const Title: ComponentType<ComponentPropsWithoutRef<'h2'>> = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
`

export const Line: ComponentType<ComponentPropsWithoutRef<'div'>> = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-muted);
`

export const Button: ComponentType<ComponentPropsWithoutRef<'button'>> = styled.button`
  padding: 8px 12px;
  background: var(--btn-bg);
  color: var(--btn-fg);
  border: none;
  border-radius: var(--radius);
`
