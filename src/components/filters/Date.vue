<template>
  <div class="wrapper-date-filter">
    <date-range-picker
      ref="picker"
      class="input"
      :ranges="false"
      :locale-data="{ firstDay: 1, format: 'DD-MM-YYYY HH:mm:ss' }"
      v-model="dateRange"
    >
      <template v-slot:input="picker" style="min-width: 350px;">
        {{ currentDate(picker) }}
        <i class="fas icon fa-calendar-alt right"></i>
      </template>
      <template v-slot:footer="props" style="min-width: 350px;">
        <div class="footer-picker">
          <btn @click="onFilter(props)">Filter</btn>
        </div>
      </template>
    </date-range-picker>
  </div>
</template>

<script>
import Btn from "../Button";
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import moment from "moment";

export default {
  name: "date",

  components: {
    Btn,
    DateRangePicker
  },

  data() {
    return {
      dateRange: {
        startDate: "",
        endDate: ""
      },
      moment
    };
  },

  methods: {
    onFilter(props) {
      const { clickApply } = props;
      clickApply();
      this.$emit("input", {
        startDate: this.dateRange.startDate.toISOString(),
        endDate: this.dateRange.endDate.toISOString()
      });
    },
    currentDate(picker) {
      return picker.startDate && picker.endDate
        ? `${moment(picker.startDate).format("DD.MM.Y")} - ${moment(
            picker.endDate
          ).format("DD.MM.Y")}`
        : "Date";
    }
  },

  created() {}
};
</script>

<style lang="scss">
.daterangepicker {
  background: #fff;
  width: 542px;
  .row {
    margin: 0;
    text-align: center;
  }
}

.vue-daterange-picker {
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

  .reportrange-text {
    padding: 0;
    border: none;
  }

  .footer-picker {
    padding: 10px;
    background: #fff;
    border-top: 1px solid #e0e0e0;
    display: flex;
    margin-left: 15px;
    margin-right: 15px;

    .btn {
      margin-left: auto;
    }
  }
}
</style>

<style lang="scss" scoped>
.wrapper-date-filter {
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.right {
      right: 10px;
    }
  }
}
</style>