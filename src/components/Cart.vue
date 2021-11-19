<template>
  <section class="cart" :class="{'inView': modelValue}">
    <div class="header">
      <div>Cart</div>
      <img src="../assets/imgs/harvest.png" alt="cart" />
      <span @click="$emit('update:modelValue', false)">X</span>
    </div>
    <table>
      <colgroup>
        <col style="width: 78px" />
        <col />
        <col />
        <col />
        <col />
        <col style="width: 50px" />
      </colgroup>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Total</th>
        <th></th>
      </tr>
      <tr v-for="(q, idX, i) in cart" :key="i">
        <td class="table-img">
          <img
            :src="require('@/assets/imgs/'+inventory[idX].i+'.png')"
            :alt="inventory[idX].n"
          />
        </td>
        <td>{{ inventory[idX].n }}</td>
        <td>₹{{ inventory[idX].p }}</td>
        <td>{{ q }}</td>
        <td>₹{{ (q * inventory[idX].p).toFixed(2) }}</td>
        <td><button @click="remove(idX)">X</button></td>
      </tr>
    </table>
    <p v-if="!Object.keys(cart).length" class="empty">No items in cart</p>
    <div class="footer">
      <div><strong>Total: </strong>₹{{ cartTotal() }}</div>
      <button @click="checkOut" :disabled="JSON.stringify(cart) === JSON.stringify({})">Checkout</button>
    </div>
  </section>
</template>

<script>

export default {
  props: ['modelValue', 'remove', 'removeAll', 'inventory', 'cart'],
  methods: {
    cartTotal () {
      let total = 0.0
      for (const idX in this.cart) {
        total += this.cart[idX] * this.inventory[idX].p
      }
      return total.toFixed(2)
    },
    checkOut () {
      // set(ref(db, 'Subject/Test'), 'new text is here').then(() => {
      //   console.log('Data sent succesfully')
      // }).catch((error) => {
      //   console.log(error)
      // })
      this.$store.commit('addCartToHistory', this.cart)
      this.removeAll()
      // this.$root.$emit('historyUpdated')
    }
  }
}
</script>
