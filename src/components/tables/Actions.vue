<template>
  <div class="wrapper-actions">
    <a href="#" @click.stop.prevent="onToggle" class="three-dots">
      <i v-html="icons['threeDots']" class="three-dots"></i>
    </a>
    <div class="actions" :class="{'show': toggle}">
      <div class="action" @click="onClickDelete">
        <i class="fas fa-trash-alt"></i>
        {{ __('Delete') }}
      </div>
    </div>
  </div>
</template>

<script>
import icons from "@/icons";
import langs from "@/mixins/langs";

export default {
  name: "table-actions",

  data() {
    return {
      icons,
      toggle: false
    };
  },

  mixins: [langs],

  created() {
    this.reset();
    document.addEventListener("click", this.clickOnBody);
  },

  methods: {
    clickOnBody(e) {
      if (e.target.classList) {
        if (
          e.target.classList.contains("action") ||
          e.target.classList.contains("three-dots")
        ) {
          return;
        }
      }
      this.reset();
    },
    onToggle() {
      this.toggle = !this.toggle;
    },
    reset() {
      this.toggle = false;
    },
    onClickDelete() {
      this.reset();
      this.$emit("delete");
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-actions {
  position: relative;

  .actions {
    position: absolute;
    display: none;
    right: -50%;
    z-index: 10;
    flex-direction: column;
    border: 1px solid #e0e0e0;
    background: #fff;
    box-sizing: border-box;
    border-radius: 3px;

    &.show {
      display: flex;
    }

    .action {
      padding: 6px 20px 7px 20px;
      display: flex;
      align-items: center;
      color: #444444;
      font-size: 14px;
      cursor: pointer;

      i {
        margin-right: 5px;
      }
    }
  }
}
</style>