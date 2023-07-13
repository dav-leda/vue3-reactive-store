

import { reactive } from 'vue'

interface Product {
  id: string
  title: string
  price: number
}

interface CartItem extends Product {
  qty: number
  total: number
}

export const cartStore = reactive({

  cart: [] as CartItem[],
  
  cartTotal(): number {
    return this.cart.reduce(
      (total: number, item: { qty: number }) => total + item.qty, 0
    )
  },

  cartTotalPrice(): number {
    return this.cart.reduce(
      (total: number, item: { total: number }) => total + item.total, 0
    )
  },
  
  productInCart(id: string): CartItem | undefined {
    return this.cart.find(
      (product: { id: string }) => product.id === id
    )
  },

  addToCart(product: Product): void {
    const inCart = this.productInCart(product.id)
    if (inCart) {
      inCart.qty++; inCart.total = inCart.price * inCart.qty
    } else {
      this.cart.push({...product, qty: 1, total: product.price})
    }
  }
})
