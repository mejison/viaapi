<template>
  <div class="public-layout">
    <div class="side left">
      <i v-html="icons['logo']"></i>
    </div>
    <div class="side right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import icons from "@/icons";

export default {
  name: "public-layout",

  data() {
    return {
      icons
    };
  }
};
</script>

<style lang="scss" scoped>
.public-layout {
  display: flex;
  height: 100%;
  justify-content: space-between;

  .side {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e5e5e5;

    &.left {
      min-width: 500px;
      background: #74b1c1;
      background-image: url("/assets/images/sidebar-bg.png");
    }

    &.right {
      width: 100%;
    }
  }
}
</style>