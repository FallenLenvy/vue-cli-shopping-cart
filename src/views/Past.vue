<template>
  <section class="past">
    <h1>Past Orders</h1>
    <table>
      <colgroup>
        <col style="width: 78px" />
      </colgroup>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Total</th>
      </tr>
      <tr>
        <td class="table-img"><img :src="require('@/assets/imgs/carrot.png')" alt="Carrot" /></td>
        <td>Carrot</td>
        <td>₹11</td>
        <td>1</td>
        <td>₹11</td>
      </tr>
      <tr>
        <td class="table-img"><img :src="require('@/assets/imgs/spinach.png')" alt="Spinach" /></td>
        <td>Spinach</td>
        <td>₹12</td>
        <td>20</td>
        <td>₹240</td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: 'Past',
  props: ['showCart', 'show'],
  mounted () {
    this.show(this.showCart)
  }
}
</script>
