import { createStore } from 'vuex'

// function updateLocalStorage (cart) {
//   localStorage.setItem('cart', JSON.stringify(cart))
// }

export default createStore({
  state: {
    cart: {},
    cartHistory: [
      { 2: 1, 4: 13 },
      { 2: 2, 3: 3, 4: 1 }
    ]
  },
  getters: {
    cartObject: state => {
      return state.cart
    },
    cartHistoryObject: state => {
      return state.cartHistory
    }
  },
  mutations: {
    updateLocalStorage (state, cart) {
      state.cart = cart
      localStorage.setItem('cart', JSON.stringify(state.cart))
      // updateLocalStorage(state.cart)
    },
    updateCartFromLocalStorage (state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
