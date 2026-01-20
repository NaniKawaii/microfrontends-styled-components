# Microfrontends con React, Styled Components y Module Federation

## Arquitectura
- Host (Shell): integra los microfrontends
- Microfrontend 1: Productos (React)
- Microfrontend 2: Usuarios (React)
- Opcional: Carrito (React)

Estructura
- apps/host: aplicación contenedora
- apps/products: módulo de Productos
- apps/users: módulo de Usuarios
- apps/cart: módulo de Carrito

## Requisitos
- Node.js 18+ y npm
- Puertos libres:
  - Host: 5000
  - Products: 5001
  - Users: 5003
  - Cart: 5002 (opcional)

## Instalación
- Instalar dependencias por aplicación:
  - apps/host: npm install
  - apps/products: npm install
  - apps/users: npm install
  - apps/cart: npm install

## Ejecución rápida (recomendado)
1) Construir y servir remotos (Products y Users; Cart opcional)

```bash
cd apps/products
npm run build
npm run preview -- --port 5001
```

```bash
cd apps/users
npm run build
npm run preview -- --port 5003
```

```bash
cd apps/cart
npm run build
npm run preview -- --port 5002
```

2) Levantar el Host (Shell)

```bash
cd apps/host
npm run dev
# Abrir http://localhost:5000
```

Notas
- El Host consume los remotos desde sus remoteEntry.js en los puertos indicados.
- Puedes iniciar el Host antes; cargará los remotos cuando estén disponibles.

## Desarrollo con Vite (modo dev)
- También puedes usar `npm run dev` en cada microfrontend en lugar de `preview`.
- Asegúrate de mantener los mismos puertos para que el Host resuelva los remotos.

## Verificación de aislamiento (Styled Components)
- Cada microfrontend usa Styled Components; las clases llevan hash único.
- No hay CSS global compartido; se evita colisión entre nombres comunes (Button/Card).
- El Shell aplica un tema base, y cada módulo puede ajustar variables en su contenedor.

## Preguntas (análisis)
- ¿Qué problema resuelve Styled Components en microfrontends?
  - Aislar estilos por componente; evitar fugas y colisiones entre equipos/módulos.
- ¿Qué pasaría si se usara CSS global?
  - Alta probabilidad de overrides no deseados, dependencia implícita y regresiones.
- ¿Cómo ayuda el hash de clases generado automáticamente?
  - Garantiza unicidad de selectores, manteniendo predecible el estilo en runtime.
- ¿Styled Components favorece la independencia entre equipos?
  - Sí; cada equipo decide su estilo local, sin bloquear ni romper al resto.

## Solución de problemas
- “Cannot find module 'xxx/remoteEntry.js'”:
  - Verifica que el remoto correspondiente esté en `preview` o `dev` y en el puerto correcto.
- Importes con `.tsx`:
  - Evita usar extensión `.tsx` en rutas internas; usa `./Componente` para TypeScript.
- Tipos de Styled Components:
  - Si TS avisa “inferred type not portable”, anota exportaciones como `ComponentType` de React.

## Scripts útiles
- apps/*: 
  - dev: arranca Vite
  - build: construye producción
  - preview: sirve dist (usar con `--port`)

## Entrega
- Repositorio: subir los cuatro proyectos (host/products/users/cart).
- PDF: incluir capturas del Host con ambos microfrontends integrados y respuestas del análisis.

