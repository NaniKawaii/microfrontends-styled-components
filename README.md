cat << 'EOF' > README.md
# Arquitectura de Microfrontends con React y Module Federation

Este proyecto implementa una arquitectura de microfrontends utilizando React, Vite, Module Federation y Styled Components. El objetivo es demostrar cómo una aplicación frontend puede dividirse en módulos independientes, desacoplados y escalables, manteniendo una integración dinámica desde una aplicación contenedora.

Cada microfrontend se desarrolla y ejecuta de forma autónoma, mientras que el Host (Shell) los consume en tiempo de ejecución mediante remoteEntry.js.

---

## Visión general de la arquitectura

La solución está compuesta por los siguientes módulos:

- Host (Shell): aplicación principal que integra los microfrontends.
- Microfrontend de Productos: módulo independiente desarrollado en React.
- Microfrontend de Usuarios: módulo independiente desarrollado en React.
- Microfrontend de Carrito: módulo adicional para demostrar extensibilidad.
- Microfrontend de Productos Seleccionados: módulo que muestra la lista de productos seleccionados desde el microfrontend de productos.

Cada microfrontend expone su funcionalidad usando Module Federation y puede desplegarse sin afectar al resto del sistema.

**Funcionalidad adicional**: El microfrontend de Productos Seleccionados se actualiza automáticamente cuando se hace clic en el botón "Agregar" de un producto en el microfrontend de Productos, demostrando comunicación entre microfrontends mediante un store compartido.

---

## Estructura del proyecto

apps/
- host/        aplicación contenedora
- products/    microfrontend de Productos
- users/       microfrontend de Usuarios
- cart/        microfrontend de Carrito
- selected-products/  microfrontend de Productos Seleccionados

Esta estructura permite trabajar y desplegar cada aplicación de manera independiente.

---

## Requisitos del entorno

- Node.js 18 o superior
- npm
- Puertos disponibles:
  - Host: 5000
  - Products: 5001
  - Cart: 5002
  - Users: 5003
  - Selected-products: 5004

---

## Instalación

Las dependencias se instalan por separado en cada aplicación:

cd apps/host && npm install
cd apps/products && npm install
cd apps/users && npm install
cd apps/cart && npm install
cd apps/selected-products && npm install

---

## Ejecución recomendada (build + preview)

Este flujo simula un entorno cercano a producción.

### 1. Construir y servir los microfrontends

Productos:
cd apps/products
npm run build
npm run preview -- --port=5001

Carrito:
cd apps/cart
npm run build
npm run preview -- --port=5002

Usuarios:
cd apps/users
npm run build
npm run preview -- --port=5003

Productos Seleccionados:
cd apps/selected-products
npm run build
npm run preview -- --port=5004

### 2. Levantar el Host

cd apps/host
npm run dev

Abrir en el navegador:
http://localhost:5000

El Host cargará los microfrontends automáticamente cuando estén disponibles.

---

## Desarrollo con Vite (modo dev)

Durante el desarrollo también es posible ejecutar cada módulo en modo dev usando:

npm run dev

Es importante mantener los puertos configurados correctamente para que el Host pueda resolver los remotos (5000-5004).

---

## Aislamiento de estilos con Styled Components

Cada microfrontend utiliza Styled Components para garantizar aislamiento de estilos:

- Las clases incluyen hashes únicos.
- No existe CSS global compartido entre microfrontends.
- Se evitan colisiones de estilos entre módulos.
- El Host define un tema base y cada microfrontend puede extenderlo localmente.

Este enfoque favorece la independencia entre equipos y reduce efectos colaterales.

---

## Análisis técnico

- Styled Components permite encapsular estilos por componente y evitar conflictos entre microfrontends.
- El uso de CSS global incrementa el riesgo de sobrescrituras inesperadas.
- Los hashes automáticos garantizan unicidad de selectores en runtime.
- Cada equipo puede trabajar de forma independiente sin afectar al resto del sistema.

---

## Solución de problemas comunes

- Error: Cannot find module 'xxx/remoteEntry.js'
  Verificar que el microfrontend correspondiente esté ejecutándose y usando el puerto correcto.

- Importaciones con extensión .tsx
  Evitar incluir la extensión en los imports internos.

- Errores de tipos en Styled Components
  Tipar explícitamente las exportaciones como ComponentType cuando sea necesario.

---

## Scripts disponibles

En cada aplicación:

- dev: desarrollo con Vite
- build: build de producción
- preview: servir la carpeta dist (usar --port)

---

## Entrega

- Repositorio con los proyectos host, products, users, cart y selected-products.
- Documento PDF con capturas del Host integrando los microfrontends y el análisis técnico.
EOF
