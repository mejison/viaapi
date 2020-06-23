<template>
  <div>
    <div>
      <navbar />
      <sidebar />
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar } from "@/components";

export default {
  name: "private",

  components: {
    Navbar,
    Sidebar
  },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: 220px;
  padding: 30px;
  padding-top: 100px;
}
</style>