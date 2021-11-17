<template>
  <section class="listing" :class="{'carted':showCart}">
    <h1>Products</h1>
    <div class="cards">
      <Card
        v-for="(prod, i) in inventory" :key="i"
        :prod="prod"
        :idX="i"
        :addToCart="addToCart"
      />
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Products',
  props: ['showCart', 'inventory', 'addToCart'],
  components: {
    Card
  }
}
</script>
