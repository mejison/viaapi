<template>
  <div class="wrapper-select">
    <select v-model="payload" class="select" @change="onChange">
      <option value>{{ placeholder }}</option>
      <option
        :value="option[label].value"
        v-for="(option, index) in options"
        :key="index"
      >{{ option[label].name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "dropdown",

  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: "Dropdown"
    },
    invalid: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      payload: ""
    };
  },

  methods: {
    onChange() {
      this.$emit("input", this.payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-select {
  .select {
    width: 100%;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #bdbdbd;
    padding: 8px 9px;

    &.is-invalid,
    &.input.is-invalid:focus {
      border: 1px solid #dc3545;
    }

    &:focus {
      outline: none;
      border: 1px solid #74b1c1;
    }
  }
}
</style>