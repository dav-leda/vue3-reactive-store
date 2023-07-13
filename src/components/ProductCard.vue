<template>
  <article class="m-1 p-1 border">

    <h1>{{ product?.title }}</h1>
    <p>$ {{ product?.price }}</p>
    
    <button @click="addToCart">Add to cart</button>
    
    <p>total: {{ total }}</p>
    
  </article>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import type { PropType } from 'vue'
import { cartStore } from '../stores/cartStore'

interface Product {
  id: string
  title: string
  price: number
}

const { product } = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

const total = computed(() => cartStore.cartTotal())

const addToCart = () => cartStore.addToCart(product)

</script>../stores/cartStore