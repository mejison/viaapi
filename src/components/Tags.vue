<template>
  <div class="wrapper-tags">
    <input-field
      :placeholder="placeholder"
      icon-position="right"
      icon="fa-tags"
      v-model="searchQuery"
    />

    <div class="options" :class="{'show': canShow || isEmtpyResult}">
      <div
        class="item-option"
        v-for="(search, index) in optionsFined"
        :key="index"
        @click.stop.prevent="onSelectTag($event, search)"
      >
        <check-box
          :key="`checkbox-${index}`"
          :value="!!isSelectedCheckBox(search)"
          @click.stop.prevent="onSelectTag($event, search)"
        />
        <span>{{ search.name }}</span>
      </div>
      <div class="item-option add-new-label" @click.stop.prevent="addTag" v-if="isEmtpyResult">
        <i class="fa fa-plus"></i>
        <span>Add New</span>
      </div>
      <div
        class="item-option"
        @click.stop.prevent="saveAndClose"
        v-if="canSaveAndClose"
      >SAVE &amp; CLOSE</div>
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
import InputField from "./InputField";
import CheckBox from "./CheckBox";

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
    CheckBox
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

  created() {},

  methods: {
    isSelectedCheckBox(option) {
      return this.checked.find(item => item.name == option.name);
    },
    onSelectTag(toggle, option) {
      const exist = this.checked.find(item => item.name == option.name);
      if (!exist) {
        this.checked = [...this.checked, option];
      } else {
        this.checked = this.checked.filter(item => {
          return item.name != option.name;
        });
      }
    },
    addTag() {
      this.optionsAll = [
        ...this.optionsAll,
        {
          name: this.searchQuery
        }
      ];

      this.selected = [
        ...this.selected,
        {
          name: this.searchQuery
        }
      ];
      this.searchQuery = "";
      this.$emit("input", this.selected);
    },
    getOptionIndexByName(option) {
      return this.optionsAll.findIndex(item => item.name == option.name);
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
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    left: 0;
    right: 0;
    top: 40px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    padding: 5px 0;

    &.show {
      display: flex;
    }

    .item-option {
      padding: 5px 10px;
      cursor: pointer;
      display: flex;
      align-items: center;

      &.add-new-label {
        span {
          margin-left: 10px;
        }
      }

      span {
        margin-left: 30px;
      }

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