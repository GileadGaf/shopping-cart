<template>
  <section v-if="products.length" class="product-list">
    <div
      class="product-list-container"
      v-for="product in products"
      :key="product._id"
    >
      <product-preview :product="product" />
    </div>
  </section>
</template>

<script>
import productPreview from '@/cmps/product-preview'
export default {
  components: {
    productPreview,
  },
 computed: {
   products() {
     console.log(this.$store.state.productStore.products );
     return this.$store.state.productStore.products 
   }
 }
};
</script>