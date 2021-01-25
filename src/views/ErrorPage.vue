<template>
  <div class="error">
    <h1>Error 404</h1>
  </div>
</template>
<script>
export default {
  name: "PageNotFound",
};
</script>
<style lang="scss">
@import "./src/scss/_main.scss";

.error {
  height: 90vh;
  width: 100vw;
  background-color: black;
  h1 {
    text-align: center;
    line-height: 80vh;
    font-size: 20vh;
    color: $primary-color;
  }
}
@media (max-width: 600px) {
  .error {
    h1 {
      font-size: 6em;
    }
  }
}
</style>
