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

  props: {
    placeholder: {
      type: String,
      default: "Date"
    }
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
        : this.placeholder;
    }
  },

  created() {}
};
</script>

<style lang="scss">
.daterangepicker {
  background: #fff;
  width: 542px;
  font-family: Nunito;
  top: 40px;

  .month {
    color: #444;
    font-size: 14px !important;
    font-family: Nunito;
  }

  tbody {
    th {
      font-family: Nunito;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      text-align: center;
      color: #444444;
    }

    td:not(.off) {
      font-family: Nunito;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      text-align: center;
      color: #444444;
    }
  }

  .row {
    margin: 0;
    text-align: center;
  }

  td.in-range {
    background: #f2f2f2;
  }

  td.active:hover {
    background: transparent;
    color: #444;
  }

  td.start-date,
  td.end-date {
    &:before {
      content: "";
      top: 50%;
      left: 50%;
      z-index: -1;
      transform: translate(-50%, -50%);
      position: absolute;
      background: #e0e0e0;
      display: block;
      height: 28px;
      width: 28px;
      border-radius: 50%;
    }
  }

  td.start-date {
    &:after {
      content: "";
      top: 50%;
      left: 30px;
      z-index: -2;
      transform: translate(-50%, -50%);
      position: absolute;
      background: #f2f2f2;
      width: 30px;
      height: 30px;
    }
  }

  td.end-date {
    &:after {
      content: "";
      top: 50%;
      left: 5px;
      z-index: -2;
      transform: translate(-50%, -50%);
      position: absolute;
      background: #f2f2f2;
      width: 30px;
      height: 30px;
    }
  }

  td.start-date,
  td.end-date {
    color: #74b1c1 !important;
    position: relative;
    z-index: 2;
    background: transparent;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold !important;
    font-size: 12px;
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