<template>
  <div class="about">
    <h1>What about??</h1>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style lang="scss">
@import "./src/scss/_main.scss";
.about {
  background-color: black;
  width: 100vw;
  height: 90vh;
  h1 {
    color: green;
    line-height: 40vh;
    text-align: center;
    font-size: 3em;
    border-bottom: 1px solid $primary-color;
  }
}
@media (max-width: 600px) {
  .about {
    h1 {
      color: $primary-color;
    }
  }
}
@media (min-width: 600px) and (max-width: 900px) {
  .about {
    h1 {
      color: $primary-color;
    }
  }
}
</style>
