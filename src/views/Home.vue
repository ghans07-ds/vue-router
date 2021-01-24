<template>
  <div class="home">
    <div class="home-title">
      <div class="welcome-msg">
        <p id="main-title">Welcome&nbsp;<span>to,</span></p>
        <p id="secondary-title">Vue Router....</p>
      </div>
    </div>
    <div class="home-img">
      <div class="router-img">
        <img src="../assets/vue_router.jpg" alt="ha" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  // components: {},
};
</script>
<style lang="scss">
@import "./src/scss/_main.scss";

.home {
  height: 90vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "ht hi";

  .home-title {
    // border: 1px solid white;
    background-color: $secondary-color;
    grid-area: ht;
    // border: 1px solid white;

    .welcome-msg {
      margin-top: 24vh;
      margin-left: 7vw;
      // border: 1px solid white;
      // height: 15vh;
      #main-title {
        text-align: center;
        line-height: 15vh;
        color: #ffffff;
        font-size: 10em;
        span {
          font-size: 0.5em;
        }
      }
      #secondary-title {
        text-align: center;
        font-size: 4em;
        color: white;
      }
    }
  }
  .home-img {
    // border: 1px solid white;
    background-color: $secondary-color;
    grid-area: hi;
    .router-img {
      // border: 1px solid white;
      // margin-left: 5vh;
      margin-top: 10vh;
      width: 40vw;
      height: 60vh;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // border: 1px solid black;
  }
}
@media (max-width: 600px) {
  .home {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "ht"
      "hi";

    .home-title {
      // color: 1px solid white;
      width: 100vw;
      height: 4ovh;
      .welcome-msg {
        width: 100%;
        margin-top: 5vh;
        margin-left: 0;

        #main-title {
          font-size: 6em;
        }
        #secondary-title {
          font-size: 3em;
        }
      }
    }
    .home-img {
      .router-img {
        margin-top: 5vh;
        width: 100vw;
        height: 60vh;
        img {
          width: 100%;
          height: 80%;
          margin: 0 auto;
        }
      }
      // border: 1px solid black;
    }
  }
}
</style>
