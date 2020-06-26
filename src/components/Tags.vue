<template>
  <div class="wrapper-tags">
    <input-field
      placeholder="Etiket Ekle"
      icon-position="right"
      icon="fa-tags"
      v-model="searchQuery"
    />

    <div class="options" :class="{'show': canShow}">
      <div
        class="item-option"
        v-for="(search, index) in optionsFined"
        :key="index"
        @click.stop="onClickSelect(search)"
      >{{ search.name }}</div>
    </div>

    <div class="selected">
      <div class="select-item" v-for="(select, index) in selected" :key="index">
        <slot name="option" v-bind:select="select"></slot>
        <a href="#" class="btn-close" @click.stop.prevent="onClickRemove(select)">
          <i class="fa fa-times"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "./Input";

export default {
  name: "tags",

  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },

  components: {
    InputField
  },

  created() {},

  data() {
    return {
      selected: this.value,
      searchQuery: ""
    };
  },

  methods: {
    onClickSelect(option) {
      this.selected = [...this.selected, option];
      this.reset();
      this.$emit("input", this.selected);
    },
    reset() {
      this.searchQuery = "";
    },
    onClickRemove(option) {
      this.selected = this.selected.filter(select => {
        return select.name != option.name;
      });
    },
    isSelected(option) {
      return this.selected.find(item => {
        return item.name == option.name;
      });
    }
  },

  computed: {
    canShow() {
      return this.optionsFined.length;
    },
    optionsFined() {
      return this.options.filter(item => {
        return (
          this.searchQuery &&
          item.name.indexOf(this.searchQuery) + 1 &&
          !this.isSelected(item)
        );
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-tags {
  width: 100%;
  position: relative;

  .options {
    position: absolute;
    z-index: 2;
    background: #fff;
    display: none;
    border-radius: 3px;
    left: 0;
    right: 0;
    top: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    padding: 5px 0;

    &.show {
      display: flex;
    }

    .item-option {
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        font-weight: 600;
      }
    }
  }

  .selected {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  .select-item {
    display: flex;
    background: #e0e0e0;
    border-radius: 13px;
    padding: 3px 3px 3px 14px;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    margin-bottom: 5px;
    margin-right: 5px;

    .count {
      font-weight: 600;
    }

    .btn-close {
      width: 20px;
      text-decoration: none;
      height: 20px;
      display: inline-block;
      top: calc(50% - 20px / 2);
      background: #74b1c1;
      margin-left: 14px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
    }
  }
}
</style>