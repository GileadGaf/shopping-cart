<template>
  <header>
      <div class="logo">
         <h1> Shopping</h1>
      </div>
      <section>
        <h3>You currently have {{cartSize}} products in your store </h3>
      </section>
       <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/cart">My cart</router-link>
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