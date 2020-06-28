<template>
  <div class="wrapper-dropdown-filter">
    <div class="input-dropdown" @click.stop.prevent="onToggle">
      <span>{{ placeholder }}</span>
      <a href="#" class="dropdown-icon">
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
    <div class="dropdown-list" v-if="toggle">
      <div class="item-dropdown" v-for="(option, index) in options" :key="index">
        <checkbox />
        <span class="label-dropdown">{{ option.label }}</span>
      </div>
      <div class="item-dropdown" @click.stop.prevent="onClickFilter">
        <btn>Filter</btn>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "../CheckBox";
import Btn from "../Button";

export default {
  name: "filter-dropdown",

  components: {
    Checkbox,
    Btn
  },

  props: {
    placeholder: {
      type: String,
      default: "Dropdown"
    },
    value: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      toggle: false,
      payload: this.value
    };
  },

  created() {
    document.addEventListener("click", this.clickOnBody);
  },

  watch: {
    value() {
      this.payload = this.value;
    }
  },

  methods: {
    isChecked() {},
    clickOnBody(event) {
      let target = event.target;
      if (target.closest(".wrapper-dropdown-filter")) {
        return;
      }
      this.toggle = false;
    },
    onClickFilter() {
      this.toggle = false;
      this.$emit("input", this.payload);
    },
    onToggle() {
      this.toggle = !this.toggle;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-dropdown-filter {
  position: relative;
  z-index: 1;

  .input-dropdown {
    font-family: Nunito;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    color: #bdbdbd;
    border-radius: 3px;
    width: 100%;
    padding: 9px 15px 9px 10px;
    font-size: 14px;
    transition: border 0.3s;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    .dropdown-icon {
      color: #bdbdbd;
    }
  }

  .dropdown-list {
    position: absolute;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 0px 0px 3px 3px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    .item-dropdown {
      display: flex;
      margin-bottom: 10px;
      cursor: pointer;

      &:last-child {
        margin-bottom: 0;
      }

      .btn {
        width: 100%;
      }

      &:hover {
        font-weight: 600;
      }

      .label-dropdown {
        margin-left: 35px;
        display: inline-block;
      }
    }
  }
}
</style>