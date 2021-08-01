<template>
  <div class="home">
    <img class="hero" src="../assets/imgs/shopping.jpg" />
    <template class="first-row">
      <h1 class="main-title">Our Products</h1>
      <h3>My Cart (<span></span>items)</h3>
    </template>
    <product-list/>
  </div>
</template>

<script>

import productList from '@/cmps/product-list'
export default {
  name: 'home',
  components: {
productList
  },
}
</script>
