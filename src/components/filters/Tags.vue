<template>
  <div class="wrapper-tags">
    <div :class="{'active': checked && checked.length}">
      <input-field
        :placeholder="`${placeholder} ${checked && checked.length ? '•' + checked.length : ''}`"
        icon-position="right"
        icon="fa-tags"
        @focus="onFocus"
        v-model="searchQuery"
      />
    </div>

    <div class="options" :class="{'show': canShow || isEmtpyResult}">
      <div
        class="item-option"
        v-for="(search, index) in optionsFined"
        :key="index"
        :class="{'active': isSelectedCheckBox(search)}"
        @click.stop.prevent="onSelectTag($event, search)"
      >
        <span>{{ search.label }}</span>
        <a href="#" class="remove-btn">
          <i class="fa fa-times"></i>
        </a>
      </div>
      <div class="item-option add-new-label" v-if="isEmtpyResult">Not found</div>
      <div class="filter-btn" v-if="checked && checked.length">
        <btn @click="onClear" type="outline primary small">Clear</btn>
        <btn @click="onFilter" type="primary small">Filter</btn>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "../InputField";
import Btn from "../Button";

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
    },
    placeholder: {
      type: String,
      default: "Add Tag"
    }
  },

  components: {
    InputField,
    Btn
  },

  data() {
    return {
      selected: this.value,
      optionsAll: this.options,
      searchQuery: "",
      checked: []
    };
  },

  watch: {
    value() {
      this.selected = this.value;
    }
  },

  created() {
    document.addEventListener("click", this.clickOnBody);
  },

  methods: {
    onClear() {
      this.checked = [];
      this.$emit("input", []);
    },
    onFocus() {},
    onFilter() {
      this.searchQuery = "";
      this.$emit("input", this.checked);
    },
    clickOnBody(event) {
      let target = event.target;
      if (target.closest(".wrapper-tags")) {
        return;
      }
      this.searchQuery = "";
    },
    isSelectedCheckBox(option) {
      return this.checked.find(item => item.label == option.label);
    },
    onSelectTag(toggle, option) {
      const exist = this.checked.find(item => item.label == option.label);
      if (!exist) {
        this.checked = [...this.checked, option];
      } else {
        this.checked = this.checked.filter(item => {
          return item.label != option.label;
        });
      }
    },
    getOptionIndexByName(option) {
      return this.optionsAll.findIndex(item => item.label == option.label);
    },
    saveAndClose() {
      this.selected = [...this.selected, ...this.checked];
      this.reset();
      this.$emit("input", this.selected);
      this.checked = [];
    },
    reset() {
      this.searchQuery = "";
    },
    onClickRemove(option) {
      this.selected = this.selected.filter(select => {
        return select.label != option.label;
      });
    },
    isSelected(option) {
      return this.selected.find(item => {
        return item.label == option.label;
      });
    }
  },

  computed: {
    canSaveAndClose() {
      return this.checked.length;
    },
    isEmtpyResult() {
      return this.searchQuery != "" && !this.optionsFined.length;
    },
    canShow() {
      return this.optionsFined.length;
    },
    optionsFined() {
      return this.optionsAll.filter(item => {
        return (
          this.searchQuery &&
          item.label.toLowerCase().indexOf(this.searchQuery.toLowerCase()) + 1
        );
      });
    }
  }
};
</script>

<style lang="scss">
.active {
  .wrapper-input {
    .icon {
      color: #444;
    }

    ::-webkit-input-placeholder {
      color: #444;
    }

    ::-moz-placeholder {
      color: #444;
    }

    :-ms-input-placeholder {
      color: #444;
    }

    :-moz-placeholder {
      color: #444;
    }
  }
}
</style>

<style lang="scss" scoped>
.wrapper-tags {
  width: 100%;
  position: relative;

  .options {
    position: absolute;
    z-index: 2;
    background: #fff;
    display: none;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    left: 0;
    right: 0;
    top: 40px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    display: flex;

    .filter-btn {
      display: none;
    }

    &.show {
      display: flex !important;
      flex-wrap: wrap;
      padding: 10px;
      min-width: 350px;

      .filter-btn {
        border-top: 1px solid #e0e0e0;
        width: 100%;
        padding-top: 10px;
        display: flex;
        margin-top: 19px;

        .btn {
          margin-left: auto;
        }
      }
    }

    .item-option {
      padding: 5px 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      background: #e0e0e0;
      border-radius: 13px;
      margin: 5px;
      width: fit-content;
      padding: 3px 29px;
      justify-content: space-between;

      .remove-btn {
        width: 20px;
        height: 20px;
        display: none;
        justify-content: center;
        border-radius: 50%;
        margin-left: 13px;
        align-items: center;
        background: #74b1c1;
        text-decoration: none;
        color: #444;
        font-size: 10px;
      }

      &.active {
        padding-right: 3px;
        .remove-btn {
          display: flex;
        }
      }

      &.add-new-label {
        background: unset;
        padding: 0;

        span {
          margin-left: 10px;
        }
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