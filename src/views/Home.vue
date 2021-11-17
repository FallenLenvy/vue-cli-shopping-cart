<template>
  <section class="banner">
    <img src="../assets/imgs/banner.jpg" alt="Banner" style="width: 100%" />
    <h1>Just Buy Some Good Food</h1>
  </section>

  <section class="listing" :class="{'carted':showCart}">
    <h1>Recommended</h1>
    <div class="cards">
      <Card
        v-for="(prod, i) in inventory.slice(0, 3)" :key="i"
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
  name: 'Home',
  props: ['showCart', 'inventory', 'addToCart'],
  components: {
    Card
  }
}
</script>
