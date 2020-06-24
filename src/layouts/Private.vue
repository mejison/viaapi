<template>
  <div class="page">
    <div>
      <navbar />
      <sidebar />
    </div>
    <div class="dashboard">
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