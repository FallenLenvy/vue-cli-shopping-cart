import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {},
    cartHistory: [
      { 0: 1, 1: 13 },
      { 2: 2, 3: 3, 4: 1, 5: 2 }
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
    updateLocalStorageFromCart (state, cart) {
      state.cart = cart
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateCartFromLocalStorage (state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    },
    addCartToHistory (state, cart) {
      state.cartHistory.push({ ...cart })
      localStorage.setItem('cartHistory', JSON.stringify(state.cartHistory))
    },
    updateCartHistoryFromLocalStorage (state) {
      const cartHistory = localStorage.getItem('cartHistory')
      if (cartHistory) {
        state.cartHistory = JSON.parse(cartHistory)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
