<template>
  <header>
    <a class="menu" @click="showMenu = !showMenu"
      ><img src="@/assets/imgs/tomato.png" alt="Logo" />Menu</a
    >
    <div :class="{'inView':showMenu}">
      <router-link to="/"
        ><img src="@/assets/imgs/tomato.png" alt="Logo" />Home</router-link
      >
      <router-link to="/products">Products</router-link>
      <router-link to="/past">Past Orders</router-link>
    </div>
    <a @click="showCart = true">
      <img src="@/assets/imgs/harvest.png" alt="Cart" /> Cart ({{ totalItems() }})
    </a>
  </header>

  <router-view
    :showCart="showCart"
    :inventory="inventory"
    :addToCart="addToCart"
  />

  <Cart
    v-model="showCart"
    :remove="removeFromCart"
    :removeAll="removeAllFromCart"
    :inventory="inventory"
    :cart="cart"
  />

  <footer>
    <div>
      Icons made by
      <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </footer>
</template>

<script>
import Cart from '@/components/Cart.vue'
import food from '@/food.json'

export default {
  components: {
    Cart
  },
  data () {
    return {
      showMenu: false,
      showCart: false,
      inventory: food,
      cart: {}
    }
  },
  methods: {
    addToCart (idX, value) {
      if (!Object.prototype.hasOwnProperty.call(this.cart, idX)) {
        this.cart[idX] = 0
      }
      this.cart[idX] += value
      if (this.cart[idX] <= 0) delete this.cart[idX]
      this.$store.commit('updateLocalStorageFromCart', this.cart)
    },
    removeFromCart (idX) {
      delete this.cart[idX]
      this.$store.commit('updateLocalStorageFromCart', this.cart)
    },
    removeAllFromCart () {
      for (var item in this.cart) {
        if (Object.prototype.hasOwnProperty.call(this.cart, item)) {
          delete this.cart[item]
        }
      }
      this.$store.commit('updateLocalStorageFromCart', this.cart)
    },
    totalItems () {
      let total = 0
      for (const idX in this.cart) {
        total += this.cart[idX]
      }
      return total
    }
  },
  mounted () {
    this.$store.commit('updateCartFromLocalStorage')
    this.cart = this.$store.getters.cartObject
  }
}
</script>
