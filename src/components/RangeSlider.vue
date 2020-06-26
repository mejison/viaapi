<template>
  <div class="wrapper-range-slider">
    <slider :min="`${min}`" :max="`${max}`" v-model="payload"></slider>
  </div>
</template>

<script>
import Slider from "vue-custom-range-slider";

export default {
  name: "range-slider",

  components: {
    Slider
  },

  props: {
    value: {
      type: Number
    },
    min: {
      type: Number,
      defualt: 0
    },
    max: {
      type: Number,
      defualt: 100
    },
    step: {
      type: Number,
      defualt: 10
    }
  },

  data() {
    return {
      payload: `${this.value}`
    };
  },

  methods: {
    onChange() {
      this.$emit("input", this.payload);
    }
  },

  computed: {
    left() {
      return (this.payload / this.max) * 100;
    }
  }
};
</script>

<style lang="scss">
.slider {
  position: relative;
  margin-top: 25px;
  margin-bottom: 30px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.slider__label {
  position: absolute;
  top: -17px;
  padding: 2px 5px;
  font-size: 12px;
  text-align: center;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  margin-left: 1rem;
  min-width: 30px;
  white-space: nowrap;
  font-family: Nunito;
  font-weight: bold;
  font-size: 14px;
  color: #74b1c1;
}

.slider__label:after {
  content: "";
  position: absolute;
  bottom: -10px;
  height: 0;
  width: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: 5px solid transparent;
  border-top-color: #fff;
}
.slider__wrapper {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.slider__track {
  width: 100%;
  position: absolute;
  z-index: 0;
  height: 3px;
  background: #999;
}
.slider__track--rectangular {
  height: 8px;
  background: #e0e0e0;
  border-radius: 3px;
}

.slider__track-bottom,
.slider__track-top {
  content: "";
  width: 100%;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}
.slider__track-top {
  top: -6px;
  border-width: 0 0 6px 500px;
  border-color: transparent transparent #999 transparent;
}
.slider__track-bottom {
  top: 3px;
  border-width: 0 500px 6px 0;
  border-color: transparent #999 transparent transparent;
}
.slider__input {
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  background: none;
  padding: 0;
  z-index: 1;
  position: relative;
}
.slider__input:focus {
  outline: none;
}
.slider__input::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-radius: 0;
  border: none;
}
.slider__input::-webkit-slider-thumb {
  width: 20px;
  height: 16px;
  border-radius: 3px;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3px;
  background: #74b1c1;
}
.slider__input::-moz-range-thumb {
  width: 20px;
  height: 16px;
  border-radius: 3px;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5px;
  background: #74b1c1;
  border: none;
}
.slider__input::-ms-thumb {
  width: 20px;
  height: 16px;
  border-radius: 3px;
  margin-top: -5px;
  background: #74b1c1;
  cursor: pointer;
}
.slider__input:focus::-webkit-slider-runnable-track {
  background: transparent;
}
.slider__input::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-radius: 0;
}
.slider__input::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 10px 0;
  border-radius: 0;
  color: transparent;
}
.slider__input::-ms-fill-lower,
.slider__input::-ms-fill-upper {
  background: transparent;
  border: none;
  border-radius: 0;
}
</style>