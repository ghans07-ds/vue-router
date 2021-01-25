<template>
  <div class="nav">
    <i
      class="fa fa-bars"
      :class="{ hidden: isMenuBarIcon }"
      @click="showMenuBar"
    ></i>
    <i
      class="fa fa-close"
      :class="{ hidden: !isMenuBarIcon }"
      @click="closeMenuBar"
    ></i>
    <div class="website-logo">
      <div class="logo">Vue-router</div>
    </div>
    <div class="website-option" :class="{ hidden: openMenuBar }">
      <ul>
        <li @click="closeMenuBar"><router-link to="/">home</router-link></li>
        <li @click="closeMenuBar">
          <router-link to="/login">login</router-link>
        </li>
        <li @click="closeAbout">
          <router-link to="/about">about</router-link>
        </li>
        <li @click="closeMenuBar">
          <router-link to="/register">register</router-link>
        </li>
      </ul>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      openMenuBar: true,
      isMenuBarIcon: false,
    };
  },
  methods: {
    showMenuBar() {
      this.openMenuBar = false;
      this.isMenuBarIcon = true;
    },
    closeMenuBar() {
      this.openMenuBar = true;
      this.isMenuBarIcon = false;
    },
    closeAbout() {
      console.log("sdf");
      this.openMenuBar = true;
      this.isMenuBarIcon = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./src/scss/_main.scss";
.nav {
  i {
    visibility: hidden;
  }
  width: 100vw;
  height: 10vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "wl wo";
  background-color: $secondary-color;
  .website-logo {
    grid-area: wl;
    .logo {
      height: 100%;
      line-height: 10vh;
      margin-left: 6vw;
      font-size: 5em;
      color: $primary-color;
    }
  }
  .website-option {
    grid-area: wo;
    z-index: 0;
    ul {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;

      li {
        list-style-type: none;
        margin-left: 3vw;
        a {
          text-decoration: none;
          color: $primary-color;
          font-size: 2em;

          &.router-link-exact-active {
            color: white;
          }
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .nav {
    i {
      visibility: visible;
    }
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "wl";
    i.fa-bars {
      @include font-awesome;
    }
    i.fa-close {
      @include font-awesome;
    }
    i.hidden {
      visibility: hidden;
    }
    .website-logo {
      .logo {
        text-align: center;
        margin-left: 0;
        font-size: 4em;
      }
    }
    .website-option {
      position: absolute;
      top: 10vh;
      // border: 1px solid white;
      height: 100vh;
      width: 100vw;
      background-color: black;
      // z-index: -10;
      ul {
        display: inline-block;
        width: 100%;
        // border: 1px solid white;
        li {
          margin-left: 0;
          font-size: 1.2em;
          padding: 9px;
          text-align: center;
          // border: 1px solid white;
        }
      }
    }
    .hidden {
      z-index: -10;
    }
  }
}
</style>
