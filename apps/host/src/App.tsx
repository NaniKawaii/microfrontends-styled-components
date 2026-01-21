import React, { Suspense } from 'react'
import {
  Page,
  Header,
  Title,
  Content,
  Panel,
  Placeholder,
  SectionTitle,
  ProductsTheme,
  UsersTheme,
  CartTheme,
  RightCol
} from './ui.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import { GlobalStyle } from './global.tsx'
const PerfilUsuario = React.lazy(() => import('users/PerfilUsuario'))
const BotonEditar = React.lazy(() => import('users/BotonEditar'))

const ProductsWidget = React.lazy(() => import('products/ProductsWidget'))
const CartWidget = React.lazy(() => import('cart/CartWidget'))

export default function App() {
  return (
    <Page>
      <GlobalStyle />
      <Header>
        <Title>Nashla</Title>
      </Header>
      <Content>
        <Panel>
          <ErrorBoundary fallback={<Placeholder />}>
            <Suspense fallback={<Placeholder />}>
              <ProductsTheme>
                <SectionTitle>Productos</SectionTitle>
                <ProductsWidget />
              </ProductsTheme>
            </Suspense>
          </ErrorBoundary>
        </Panel>
      </Content>
      <RightCol>
        <Panel>
          <ErrorBoundary fallback={<Placeholder />}>
            <Suspense fallback={<Placeholder />}>
              <UsersTheme>
                <SectionTitle>Usuarios</SectionTitle>
                <PerfilUsuario />
                <div style={{ marginTop: 12 }}>
                  <BotonEditar />
                </div>
              </UsersTheme>
            </Suspense>
          </ErrorBoundary>
        </Panel>
        <Panel>
          <ErrorBoundary fallback={<Placeholder />}>
            <Suspense fallback={<Placeholder />}>
              <CartTheme>
                <SectionTitle>Carrito</SectionTitle>
                <CartWidget />
              </CartTheme>
            </Suspense>
          </ErrorBoundary>
        </Panel>
      </RightCol>
    </Page>
  )
}
