<template>
  <div class="container d-flex flex-column justify-content-center">
    <div class="spinner-border" role="status"></div>
    <p class="text-center"></p>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    text: String,
  },
};
</script>

<style></style>
