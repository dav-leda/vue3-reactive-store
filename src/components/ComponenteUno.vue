<template>
  <div class="m-1 p-1 border">

    <h1>Componente 1</h1>
  
    <p>Carrito:</p>
    <pre>{{ cart }}</pre>

  </div>

</template>

<script setup lang="ts">

import type { Ref } from 'vue'
import { computed } from 'vue'
import { cartStore } from '../stores/cartStoreTS'

interface Product {
  id: string
  title: string
  price: number
}

interface CartItem extends Product {
  qty: number
  total: number
}

const cart: Ref<CartItem[]> = computed<CartItem[]>(() => cartStore.cartItems())


</script>
