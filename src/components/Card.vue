<template>
  <div class="card">
    <h2>{{ prod.n }}</h2>
    <img :src="require('@/assets/imgs/'+prod.i+'.png')" :alt="prod.n" />
    <p><strong>Type: </strong> {{ prod.t }}</p>
    <p><strong>Price: </strong> ₹{{ prod.p }}</p>
    <p><strong>Quantity: </strong> <input type="number" v-model="inp.q" /></p>
    <p class="foot"><button @click="addToCartBtn()">Add to cart</button></p>
  </div>
</template>

<script>
export default {
  props: ['prod', 'idX', 'addToCart'],
  data () {
    return {
      inp: {}
    }
  },
  methods: {
    addToCartBtn () {
      let value = 0
      if (Object.prototype.hasOwnProperty.call(this.inp, 'q')) {
        value = this.inp.q
        delete this.inp.q
      }
      this.addToCart(this.idX, value)
    }
  }
}
</script>
