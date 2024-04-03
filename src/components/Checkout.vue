<template>
  <div>
    <h1>Checkout</h1>
    <table class="table table-hover" v-if="cart.length > 0">
      <caption class="text-right h3">
        <b>Total: </b>
        <price :value="Number(cartTotal)"></price>
      </caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-right">Price</th>
          <th scope="col" class="text-right">Sub-total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in checkoutCart" :key="item.product.id">
          <td class="text-center">
            <div class="btn-group">
              <button @click="$emit('add', item.product)" class="btn btn-info">+</button>
              <button @click="$emit('delete', index)" class="btn btn-outline-info">-</button>
            </div>
          </td>
          <th scope="row">{{ item.product.name }}</th>
          <th class="text-center">{{ item.qty }}</th>
          <th class="text-right">{{ Number(item.product.price) }}</th>
          <th class="text-right">{{ Number(item.product.price * item.qty) }}</th>
        </tr>
      </tbody>
    </table>
    <p>Thank you for your order.</p>
    <router-link class="btn btn-sm btn-outline-info text-dark" to="/">Back to Shop</router-link>
  </div>
</template>

<script>
import Price from "./Price.vue";

export default {
  name: "checkout",
  data: function () {
    return {
      checkoutCart: null,
    };
  },
  props: ["cart", "cartTotal"],
  components: {
    Price,
  },
  mounted: function () {
    this.checkoutCart = this.cart;
  },
};
</script>
