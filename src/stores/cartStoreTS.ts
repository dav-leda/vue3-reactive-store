

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

  state: {
    cart: [] as CartItem[],
  },

  cartItems(): CartItem[] {
    return this.state.cart
  },

  cartTotal(): number {
    return this.state.cart.length
  },

  cartTotalPrice(): number {
    return this.state.cart.reduce(sumTotal, 0)
  },
  
  productInCart(id: string): CartItem | undefined {
    return this.state.cart.find((p: { id: string }) => p.id === id)
  },

  addToCart(product: Product): void {
    
    const inCart = this.productInCart(product.id)
    
    if (inCart) {
      inCart.qty++
      inCart.total = inCart.price * inCart.qty

    } else {
      this.state.cart.push({...product, qty: 1, total: product.price})
    }
  }
})


function sumTotal(total: number, product: CartItem): number {
  return total + product.total
}