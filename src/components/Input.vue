<template>
  <div>
    <input :type="type" class="input" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "input",

  props: {
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    }
  }
};
</script>

<style lang="scss">
$color-placeholder: #bdbdbd;
$font-size: 14px;

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
</style>