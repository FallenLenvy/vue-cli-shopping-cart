<template>
  <section class="listing">
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
  props: ['showCart', 'show', 'inventory', 'addToCart'],
  mounted () {
    this.show(this.showCart)
  },
  components: {
    Card
  }
}
</script>
