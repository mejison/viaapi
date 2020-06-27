<template>
  <label class="wrapper-checkbox">
    <input type="checkbox" v-model="payload" :checked="payload" @change="onChange" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "correct",

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    value() {
      this.payload = this.value;
    }
  },

  data() {
    return {
      payload: this.value
    };
  },

  methods: {
    onChange() {
      this.$emit("input", this.payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-checkbox {
  display: block;
  position: relative;
  margin-bottom: 30px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  width: 40px;
}

/* Hide the browser's default checkbox */
.wrapper-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
}

/* On mouse-over, add a grey background color */
.wrapper-checkbox:hover input ~ .checkmark {
  background: #e0e0e0;
}

/* When the checkbox is checked, add a blue background */
.wrapper-checkbox input:checked ~ .checkmark {
  background-color: #e0e0e0;
}

.wrapper-checkbox input:not(:checked) ~ .checkmark {
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 12px;
    height: 2px;
    background: #bdbdbd;
    border-radius: 3px;
  }
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.wrapper-checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.wrapper-checkbox .checkmark:after {
  left: 10px;
  top: 5px;
  width: 8px;
  height: 14px;
  border: solid #74b1c1;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
}
</style>