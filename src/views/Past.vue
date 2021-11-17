<template>
  <section class="past" :class="{ carted: showCart }">
    <h1>Past Orders</h1>
    <table>
      <colgroup>
        <col style="width: 78px" />
      </colgroup>
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody v-for="(cartH, i) in cartHistory" :key="i">
        <tr v-for="(val, idX, j) in cartH" :key="j">
          <td class="table-img">
            <img :src="require('@/assets/imgs/'+inventory[idX].i+'.png')" :alt="inventory[idX].n" />
          </td>
          <td>{{ inventory[idX].n }}</td>
          <td>₹{{ inventory[idX].p }}</td>
          <td>{{ val }}</td>
          <td>₹{{ inventory[idX].p * val }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'Past',
  props: ['showCart', 'inventory'],
  computed: {
    cartHistory () {
      return this.$store.getters.cartHistoryObject
    }
  },
  mounted () {
    document.querySelectorAll('.past table tr').forEach((val, i) => {
      if (i % 2 === 0) {
        val.classList.add('slightDark')
      }
    })
  }
}
</script>
