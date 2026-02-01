import { create } from 'zustand'

type Product = { id: number; name: string; price: number }

interface CartState {
  selectedProducts: Product[]
  addProduct: (product: Product) => void
  removeProduct: (id: number) => void
  clear: () => void
}

export const cartStore = create<CartState>((set) => ({
  selectedProducts: [],
  addProduct: (product) =>
    set((state) => ({
      selectedProducts: [...state.selectedProducts, product]
    })),
  removeProduct: (id) =>
    set((state) => ({
      selectedProducts: state.selectedProducts.filter((p) => p.id !== id)
    })),
  clear: () => set({ selectedProducts: [] })
}))

export const useCartStore = () => cartStore