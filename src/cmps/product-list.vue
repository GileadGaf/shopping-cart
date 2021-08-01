<template>
  <section class="product-list">
    <div class="product-list-container" v-for="product in products" :key="product._id">
      <product-preview :product="product"/>
    </div>
  </section>
  
</template>

<script>
import productPreview from '@/cmps/product-preview';
export default {
  props: {
    products: {
      type: Array,
    },
  },
  created () {
  },
  data() {
    return {
    }
  },
  components:{
    productPreview
  }
}
</script>