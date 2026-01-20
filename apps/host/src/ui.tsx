import styled from 'styled-components'
import type { ComponentType, ComponentPropsWithoutRef } from 'react'

export const Page: ComponentType<ComponentPropsWithoutRef<'div'>> = styled.div`
  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 24px;
  padding: 24px;
  font-family: var(--font-family);
`

export const Header: ComponentType<ComponentPropsWithoutRef<'header'>> = styled.header`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-soft);
`

export const Title: ComponentType<ComponentPropsWithoutRef<'h1'>> = styled.h1`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.4px;
  background: linear-gradient(90deg, var(--color-text), #4a4a4a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

export const Content: ComponentType<ComponentPropsWithoutRef<'main'>> = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
`

export const Panel: ComponentType<ComponentPropsWithoutRef<'section'>> = styled.section`
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--color-surface);
  padding: 20px;
  box-shadow: var(--shadow-lg);
`

export const Placeholder: ComponentType<ComponentPropsWithoutRef<'div'>> = styled.div`
  height: 200px;
  background: #eee;
  border-radius: var(--radius);
`

export const SectionTitle: ComponentType<ComponentPropsWithoutRef<'h2'>> = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--color-text);
`

export const ProductsTheme: ComponentType<ComponentPropsWithoutRef<'div'>> = styled.div`
  --btn-bg: #0b5fff;
  --btn-fg: #ffffff;
`

export const UsersTheme: ComponentType<ComponentPropsWithoutRef<'div'>> = styled.div`
  --btn-bg: #7e22ce;
  --btn-fg: #ffffff;
`

export const CartTheme: ComponentType<ComponentPropsWithoutRef<'div'>> = styled.div`
  --btn-bg: #0f766e;
  --btn-fg: #ffffff;
`
