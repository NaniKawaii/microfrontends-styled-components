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
  padding: 10px 14px;
  background: linear-gradient(135deg, var(--btn-bg), var(--btn-bg-soft));
  color: var(--btn-fg);
  border: 1px solid var(--border-soft);
  border-radius: 999px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  font-weight: 600;
  letter-spacing: 0.2px;
  transition: transform 120ms ease, filter 120ms ease;
  &:hover { transform: translateY(-1px); filter: brightness(1.02); }
  &:active { transform: scale(0.98); }
`
