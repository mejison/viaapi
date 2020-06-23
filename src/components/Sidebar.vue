<template>
  <div class="sidebar">
    <router-link class="logo" to="/">
      <img src="/assets/images/logo.png" alt="logo" />
    </router-link>
    <div class="nav">
      <navigations />
    </div>
  </div>
</template>

<script>
import Navigations from "./Navigations";

export default {
  name: "sidebar",

  components: {
    Navigations
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  width: 220px;
  height: 100%;
  transform: translateY(-1px);
  box-shadow: 5px 0 6px -5px rgba(0, 0, 0, 0.2);

  .logo {
    min-width: 220px;
    height: 70px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
    }
  }

  .nav {
    background-color: #74b1c1;
    height: 100%;
    padding-top: 30px;
  }
}
</style>