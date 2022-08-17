<template>
  <div class="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
export default {
  data: () => ({}),
  components: {
    NavBar,
  },
};
</script>

<style></style>
