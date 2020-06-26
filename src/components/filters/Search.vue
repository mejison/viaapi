<template>
  <div class="wrapper-search-filter" :class="{'active': canActive}">
    <Input placeholder="Search" icon="fa-search" v-model="payload" @input="onInput" />
    <a href="#" @click.stop="onClose" class="close-btn" v-show="canActive">
      <i class="fas fa-times"></i>
    </a>
  </div>
</template>

<script>
import Input from "../Input";

export default {
  name: "search",

  components: {
    Input
  },

  props: {
    value: {
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

  computed: {
    canActive() {
      return this.payload;
    }
  },

  methods: {
    reset() {
      this.payload = "";
    },
    onInput() {
      this.$emit("input", this.payload);
    },
    onClose() {
      this.reset();
      this.onInput();
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-search-filter {
  position: relative;

  .close-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    color: #444444;
  }
}
</style>