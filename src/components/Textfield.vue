<template>
  <div class="wrapper-textarea">
    <textarea class="textarea" @input="onChange" v-model="payload" :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
export default {
  name: "textfield",

  props: {
    value: {
      type: String,
      defualt: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      payload: this.value
    };
  },

  watch: {
    value() {
      this.payload = this.value;
    }
  },

  methods: {
    onChange() {
      this.$emit("input", this.payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-textarea {
  .textarea {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: #444444;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    resize: none;
    min-height: 100px;
  }
}
</style>