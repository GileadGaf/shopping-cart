<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>


<script>
import appHeader from "@/cmps/app-header";

export default {
  components: {
    appHeader,
  },
  async created() {
   await this.$store.dispatch({ type: "loadProducts" });
   console.log('hello');
  },
};
</script>
