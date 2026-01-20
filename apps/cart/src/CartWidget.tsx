import React, { useState } from 'react'
import { Box, Title, Line, Button } from './components/ui'

export default function CartWidget() {
  const [count, setCount] = useState(0)
  return (
    <Box>
      <Title>Carrito</Title>
      <Line>
        <div>Items</div>
        <div>{count}</div>
      </Line>
      <Button onClick={() => setCount((c) => c + 1)}>Sumar</Button>
      <Button onClick={() => setCount(0)}>Vaciar</Button>
    </Box>
  )
}
