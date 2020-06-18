<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "card"
};
</script>

<style lang="scss" scoped>
.card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 60px 80px;
}
</style>