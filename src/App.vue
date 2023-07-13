
<template>
  <div class="app-vue">
    
    <h1>App.vue</h1>

    <ComponenteUno/>
    <ComponenteDos/>

    <ProductCard
      v-for="product in state.products" :key="product.id"
      :product="product"
    />

  </div>
</template>

<script setup lang="ts">

import { reactive, watchEffect } from 'vue'

import ComponenteUno from './components/ComponenteUno.vue'
import ComponenteDos from './components/ComponenteDos.vue'
import ProductCard from './components/ProductCard.vue'

const { VITE_API_URL: baseUrl } = import.meta.env
const endpoint = baseUrl + '/products'

interface Product {
  id: string
  title: string
  price: number
}

const state = reactive({
  products: [] as Product[]
})


watchEffect(async () => {
  try {
    state.products = await (await fetch(endpoint)).json()
  } catch (err) {
    console.log(err)
  }
})

</script>


