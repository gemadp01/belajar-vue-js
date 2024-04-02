<template>
  <nav class="navbar navbar-light bg-light fixed-top">
    <div class="navbar-text ml-auto d-flex">
      <button class="btn btn-sm btn-outline-success" @click="$emit('toggle')">
        <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
      </button>
      <div class="dropdown ml-2" v-if="cart.length > 0">
        <button class="btn btn-success btn-sm dropdown-toggle" type="button" id="dropdownCart" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="badge badge-pill badge-success">{{ cartQty }}</span>
          <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
          <price :value="Number(cartTotal)"></price>
        </button>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownCart">
          <div v-for="(item, index) in cart" :key="index">
            <div class="dropdown-item-text text-nowrap text-right">
              <span class="badge bg-pill bg-warning align-text-top">
                {{ item.qty }}
              </span>
              {{ item.product.name }}
              <price :value="item.product.price * item.qty"></price>
              <a href="#" class="badge bg-danger text-white text-decoration-none" @click.stop="$emit('delete', index)">-</a>
              <!-- <b>{{ item.product.price * item.qty | currencyFormat(item.product.price) }}</b> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Price from "./Price.vue";

export default {
  name: "navbar",
  components: {
    Price,
  },
  props: ["cart", "cartQty", "cartTotal"],
};
</script>
