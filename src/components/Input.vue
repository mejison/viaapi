<template>
  <div class="wrapper-input">
    <i v-if="icon" class="fas icon" :class="{[icon]: true, [iconPosition]: true}"></i>
    <input
      :type="type"
      class="input"
      :class="{'is-invalid': invalid, 'indented': iconPosition == 'left' && icon}"
      v-model="payload"
      :placeholder="placeholder"
      @input="onHandleInput"
    />
  </div>
</template>

<script>
export default {
  name: "input",

  props: {
    icon: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    },
    invalid: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left"
    }
  },

  data() {
    return {
      payload: this.value
    };
  },

  methods: {
    onHandleInput() {
      this.$emit("input", this.payload);
    }
  },

  watch: {
    vlaue() {
      this.payload = this.value;
    }
  }
};
</script>

<style lang="scss">
$color-placeholder: #bdbdbd;
$font-size: 14px;

.wrapper-input {
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #bdbdbd;

    &.left {
      left: 10px;
    }

    &.right {
      right: 10px;
    }
  }

  .input {
    font-family: Nunito;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    color: #bdbdbd;
    border-radius: 3px;
    width: 100%;
    padding: 9px 10px;
    font-size: 14px;
    transition: border 0.3s;

    &.indented {
      padding-left: 32px;
    }

    &.is-invalid,
    &.input.is-invalid:focus {
      border: 1px solid #dc3545;
    }

    &:focus {
      outline: none;
      border: 1px solid #74b1c1;
    }
  }
  ::placeholder {
    color: $color-placeholder;
  }

  :-ms-input-placeholder {
    color: $color-placeholder;
  }

  ::-ms-input-placeholder {
    color: $color-placeholder;
  }
}
</style>