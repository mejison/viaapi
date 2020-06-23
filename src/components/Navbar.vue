<template>
  <div class="navbar">
    <div class="navbar-nav">
      <div class="title">{{ $route.meta.title }}</div>
      <btn>New Question</btn>
    </div>
  </div>
</template>

<script>
import { Btn } from "@/components";

export default {
  name: "navbar",

  components: {
    Btn
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 220px;
  width: calc(100% - 220px);
  height: 70px;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  display: flex;

  .navbar-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 36px;
    padding-right: 20px;

    .title {
      font-weight: bold;
      font-size: 20px;
      color: #444444;
    }
  }
}
</style>