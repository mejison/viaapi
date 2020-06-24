<template>
  <div class="wrapper-table">
    <div class="table-header"></div>
    <table class="table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th v-for="(column, index) in columns" :key="index">{{ column.name }}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="`row-${index}`">
          <td>
            <input type="checkbox" />
          </td>
          <td v-for="(col, indexCol) in columns" :key="`col-${indexCol}`">{{ row[col.field] }}</td>
          <td>
            <btn type="secondary small outline">edit</btn>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="table-footer"></div>
  </div>
</template>

<script>
import Btn from "../Button";

export default {
  name: "question-table",

  components: {
    Btn
  },

  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.wrapper-table {
  background: #fff;

  .table {
    width: 100%;

    thead {
      th {
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        text-align: left;
        color: #bdbdbd;
        padding: 15px 25px;
      }
    }

    tbody {
      td {
        padding: 5px 25px;
        border-top: 1px solid #e0e0e0;
      }
    }
  }
}
</style>