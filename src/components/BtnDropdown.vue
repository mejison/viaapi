<template>
  <div class="wrapper-dropdown-btn">
    <button class="btn" :class="type" @click.stop.prevent="onHandleClick">
      <div class="content" v-html="selected.name"></div>
      <div class="drop-icon" @click.stop.prevent="onToggle">
        <i class="fas fa-chevron-down" v-if="toggle" :key="`toggle-open`"></i>
        <i class="fas fa-chevron-up" v-else :key="`toggle-close`"></i>
      </div>
    </button>
    <div class="options" :class="{'show': toggle}">
      <a
        href="#"
        class="option-item"
        v-for="(option, index) in options"
        @click="onSelect(option)"
        :key="index"
        v-html="option.name"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "btn",

  props: {
    type: {
      default: "primary"
    },
    value: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default: () => {
        [];
      }
    }
  },

  created() {
    if (this.options) {
      this.selected = this.options[0];
    }

    document.addEventListener("click", this.clickOnBody);
  },

  data() {
    return {
      toggle: false,
      selected: {}
    };
  },

  methods: {
    clickOnBody(e) {
      let target = e.target;
      if (target) {
        if (target.closest(".wrapper-dropdown-btn")) {
          return;
        }
      }
      this.reset();
    },
    onSelect(option) {
      this.selected = option;
      this.$emit("input", this.selected);
      this.reset();
    },
    reset() {
      this.toggle = false;
    },
    onToggle() {
      this.toggle = !this.toggle;
    },
    onHandleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-dropdown-btn {
  position: relative;
  z-index: 1;

  .btn {
    display: flex;
    align-items: center;
    padding: 0;

    .content {
      text-align: center;
      width: 100%;
      padding: 0 15px;
    }

    .drop-icon {
      margin-left: auto;
      border-left: 1px solid #fff;
      padding: 10px 15px;
    }
  }

  .options {
    position: absolute;
    z-index: -323;
    min-width: 270px;
    right: 0;
    top: -100%;
    height: 0;
    overflow: hidden;
    transition: all 0.3s;
    opacity: 0;
    padding: 5px 0;
    border-radius: 3px;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 3px;
    background: #ffffff;
    margin-bottom: 20px;

    .option-item {
      margin: 6px 20px;
      display: block;
      text-decoration: none;

      &:hover {
        font-weight: 600;
      }
    }

    &.show {
      height: unset;
      z-index: 2;
      opacity: 1;
      top: calc(100% + 5px);
    }
  }
}
</style>