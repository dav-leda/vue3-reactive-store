<template>
  <div class="m-1 p-1 border">

    <h1>Componente 2</h1>
  
    <p>Cantidad de productos: {{ total }}</p>
    <p>Precio total: $ {{ totalPrice }}</p>

  </div>

</template>

<script setup lang="ts">

import { computed } from 'vue'
import { cartStore } from '../stores/cartStore'

const total = computed<number>(() => cartStore.cartTotal())
const totalPrice = computed<number>(() => cartStore.cartTotalPrice())

</script>
../stores/cartStore