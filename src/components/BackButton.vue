<template>
  <a href="#" @click.prevent="onClickBackHandle">
    <i class="fas fa-arrow-left"></i>
    {{ label }}
  </a>
</template>

<script>
export default {
  name: "back-btn",

  props: {
    link: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Back"
    }
  },

  methods: {
    onClickBackHandle() {
      if (this.link) {
        this.$router.push(this.link);
        return;
      }
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: #74b1c1;
  font-size: 14px;
}
</style>