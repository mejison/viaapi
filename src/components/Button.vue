<template>
  <button class="btn" :class="type" @click="onHandleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "btn",

  props: {
    type: {
      default: "primary"
    }
  },

  methods: {
    onHandleClick() {
      this.$emit("click");
    }
  }
};
</script>