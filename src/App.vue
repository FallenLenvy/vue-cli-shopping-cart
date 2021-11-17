<template>
  <header>
    <a class="menu" href="#"
      ><img src="@/assets/imgs/tomato.png" alt="Logo" />Menu</a
    >
    <div>
      <router-link to="/"
        ><img src="@/assets/imgs/tomato.png" alt="Logo" />Home</router-link
      >
      <router-link to="/products">Products</router-link>
      <router-link to="/past">Past Orders</router-link>
    </div>
    <a @click="cartVisible(true)">
      <img src="@/assets/imgs/harvest.png" alt="Cart" /> Cart ({{ totalItems() }})
    </a>
  </header>

  <router-view
    :showCart="showCart"
    :show="cartVisible"
    :inventory="inventory"
    :addToCart="addToCart"
  />

  <Cart
    v-if="showCart"
    :show="cartVisible"
    :remove="removeFromCart"
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
      showCart: true,
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
    },
    removeFromCart (idX) {
      delete this.cart[idX]
    },
    cartVisible (isVisible) {
      this.showCart = isVisible
      document.querySelectorAll('.listing, .past').forEach((element) => {
        if (isVisible) {
          element.classList.add('carted')
        } else {
          element.classList.remove('carted')
        }
      })
    },
    totalItems () {
      let total = 0
      for (const idX in this.cart) {
        total += this.cart[idX]
      }
      return total
    }
  }
}
</script>
