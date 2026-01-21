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
  background: linear-gradient(90deg, #ec4899, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

export const Content: ComponentType<ComponentPropsWithoutRef<'main'>> = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
`

export const RightCol: ComponentType<ComponentPropsWithoutRef<'div'>> = styled.div`
  grid-column: 2;
  display: grid;
  gap: 24px;
`

export const Panel: ComponentType<ComponentPropsWithoutRef<'section'>> = styled.section`
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--color-surface);
  padding: 22px;
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
  --btn-bg: #ec4899;
  --btn-fg: #ffffff;
  --btn-bg-soft: #f9a8d4;
`

export const UsersTheme: ComponentType<ComponentPropsWithoutRef<'div'>> = styled.div`
  --btn-bg: #c084fc;
  --btn-fg: #ffffff;
  --btn-bg-soft: #e9d5ff;
`

export const CartTheme: ComponentType<ComponentPropsWithoutRef<'div'>> = styled.div`
  --btn-bg: #fb7185;
  --btn-fg: #ffffff;
  --btn-bg-soft: #fecdd3;
`
