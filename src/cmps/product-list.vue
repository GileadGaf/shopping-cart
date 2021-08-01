<template>
  <section class="product-list">
    <div class="product-list-container" v-for="product in products" :key="product._id">
      <product-preview :product="product"/>
    </div>
  </section>
  
</template>

<script>
export default {
  created () {
    this.products = this.$store.getters.products
  },
  data() {
    return {
      products: null
    }
  },
}
</script>