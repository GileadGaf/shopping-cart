<template>
  <section class="cart">
    <h2 class="title">My Cart</h2>
    <ul class="cart-list">
      <li
        v-for="product in cartProducts"
        :key="product._id"
        class="cart-preview"
      >
        <h3>{{ product.title }}</h3>
        <p>${{ product.price }}</p>
        <button
          class="btn-remove"
          :title="'remove ' + product.title + ' from cart'" @click="removeFromCart(product._id)"
        >
          ✖
        </button>
      </li>
    </ul>
    <p class="total-price">Total: ${{ cartTotal }}</p>
  </section>
</template>

<script>
export default {
  created() {
    this.loadCart();
  },
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    loadCart() {
      this.$store.dispatch({ type: "loadCart" });
    },
    removeFromCart(productId){
this.$store.dispatch({type:'removeFromCart',productId});
    }
  },
  components: {},
};
</script>
