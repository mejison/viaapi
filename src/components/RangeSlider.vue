<template>
  <div class="wrapper-range-slider">
    <input type="range" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper-range-slider {
  border-radius: 3px;

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    background: #e0e0e0;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 20px;
    background: #74b1c1;
    cursor: pointer;
    margin-top: -5px;
    margin-bottom: -5px;
    border-radius: 3px;
  }

  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 20px;
    background: #74b1c1;
    cursor: pointer;
    margin-top: -5px;
    margin-bottom: -5px;
    border-radius: 3px;
  }

  input[type="range"]::-ms-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 20px;
    background: #74b1c1;
    cursor: pointer;
    margin-top: -5px;
    margin-bottom: -5px;
    border-radius: 3px;
  }
}
</style>