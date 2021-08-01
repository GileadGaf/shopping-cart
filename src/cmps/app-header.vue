<template>
  <header class="app-header">
    <nav class="main-nav">
      <template class="left-header">
      <router-link to="/"> <img src="../assets/icons/home.png" /></router-link>
      | <router-link to="/About">ABOUT US</router-link> |
    </template>
    <template class="right-header">
      <router-link to="/Cart">
      My cart
      (<span class="num-of-items">{{cartSize}}</span>)
      </router-link
      >
      </template>
    </nav>
  </header>
</template>

<script>
export default {
computed:{
  cartSize(){
    return this.$store.getters.cartSize;
  }
}
}
</script>

<style>
</style>