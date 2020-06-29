<template>
  <div class="wrapper-dropdown-filter">
    <div class="input-dropdown" @click.stop.prevent="onToggle" :class="{'active': active}">
      <span>
        {{ placeholder }}
        <span v-if="active">&bull;{{ active }}</span>
      </span>
      <a href="#" class="dropdown-icon">
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
    <div class="dropdown-list" v-if="toggle">
      <div
        class="item-dropdown"
        v-for="(option, index) in options"
        :key="index"
        @click.stop.prevent="onToggleCheck(index)"
      >
        <checkbox :value="payload[index]" />
        <span class="label-dropdown">{{ option.label }}</span>
      </div>
      <div class="item-dropdown" @click.stop.prevent="onClickFilter">
        <btn class="small">Filter</btn>
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
    this.payload = this.options.map(() => false);
  },

  watch: {
    value() {
      this.payload = this.options.map(item => {
        let find = this.value.find(row => row.value == item.value);
        return find ? true : false;
      });
    }
  },

  methods: {
    onToggleCheck(index) {
      this.payload[index] = !this.payload[index];
      this.payload = [...this.payload];
    },
    clickOnBody(event) {
      let target = event.target;
      if (target.closest(".wrapper-dropdown-filter")) {
        return;
      }
      this.toggle = false;
    },
    onClickFilter() {
      this.toggle = false;

      const selected = this.options.filter((item, index) => {
        return this.payload[index];
      });

      this.$emit("input", selected);
    },
    onToggle() {
      this.toggle = !this.toggle;
    }
  },

  computed: {
    active() {
      return this.payload.filter(item => item).length;
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

    &.active {
      color: #444;
    }

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