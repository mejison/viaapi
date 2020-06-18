<template>
  <button class="btn" :class="type">
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
  }
};
</script>