<template>
	<section class="product-preview">
		<img :src="product.img" class="product-img" />
		<p class="product-price">{{ product.price }}</p>
		<p class="product-title">{{ product.title }}</p>
		<button @click.stop="addToCart" class="product-add-to-cart">ADD TO CART</button>
	</section>
</template>

<script>
export default {
	props: {
		product: {
			type: Object
		},
	},
  methods: {
    addToCart() {
      console.log('addToCart');
      this.$store.commit({type:'addToCart', product})
    }
  },

}
</script>
