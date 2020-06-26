<template>
  <div class="page">
    <div>
      <navbar @new-question="onHandleNewQuestion" />
      <sidebar />
    </div>
    <div class="dashboard">
      <router-view ref="page"></router-view>
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

  methods: {
    onHandleNewQuestion() {
      let page = this.$refs.page;
      if (page.newQuestion) {
        page.newQuestion();
      }
    }
  }
};
</script>