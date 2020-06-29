<template>
  <div class="wrapper-table">
    <table class="table">
      <thead>
        <tr>
          <th>
            <checkbox @input="onSelectAll($event)" />
          </th>
          <th v-for="(column, index) in columns" :key="index">
            <div>
              {{ column.name }}
              <a href="#" @click="onClickSort(column)">
                <i v-html="icons['arrows']"></i>
              </a>
            </div>
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in dataMaped" :key="`row-${index}`">
          <td>
            <checkbox v-model="selected[index]" />
          </td>
          <td
            v-for="(col, indexCol) in columns"
            :class="{'center': col.center}"
            :key="`col-${indexCol}`"
          >{{ row[col.field] }}</td>
          <td>
            <btn type="secondary small outline edit-btn" @click="onClickEdit(row)">edit</btn>
          </td>
          <td>
            <table-actions @delete="onClickDelete(row)" />
          </td>
        </tr>
        <tr v-if=" ! dataMaped.length">
          <td colspan="7" class="empty-message text-center">Not found.</td>
        </tr>
      </tbody>
    </table>
    <div class="table-footer">
      <table-pagination
        :current="pagination.page"
        :total="pagination.total"
        :per-page="pagination.per_page"
        @change-page="onChangePage"
        @change-per-page="onChangePerPage"
      />
    </div>
  </div>
</template>

<script>
import Btn from "../Button";
import icons from "@/icons";
import TablePagination from "./Pagination";
import TableActions from "./Actions";
import Checkbox from "../CheckBox";

export default {
  name: "question-table",

  components: {
    Btn,
    TablePagination,
    TableActions,
    Checkbox
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
    return {
      icons,
      pagination: {
        page: 1,
        per_page: 10,
        total: this.data.length
      },
      selected: []
    };
  },

  watch: {
    data() {
      this.pagination.total = this.data.length;
    }
  },

  created() {
    this.selected = this.data.map(() => {
      return false;
    });
  },

  computed: {
    dataMaped() {
      const startSlice = Math.ceil(
        this.pagination.per_page * (this.pagination.page - 1)
      );

      return this.data.slice(startSlice, startSlice + this.pagination.per_page);
    }
  },

  methods: {
    onSelectAll(toggle) {
      this.selected = this.selected = this.data.map(() => {
        return !toggle;
      });
    },
    onClickEdit(question) {
      this.$emit("select-question", question);
    },
    onClickSort(field) {
      console.log(field);
    },
    onClickDelete(item) {
      this.$emit("delete", item);
    },
    onChangePerPage(per_page) {
      this.pagination = {
        ...this.pagination,
        per_page
      };
    },
    onChangePage(page) {
      this.pagination = {
        ...this.pagination,
        page
      };
    }
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
        padding: 12px 25px 6px 25px;

        white-space: nowrap;

        div {
          display: flex;
          align-items: center;

          a {
            height: 28px;

            i {
              margin-left: 5px;
              color: #e0e0e0;
              vertical-align: middle;
            }
          }
        }
      }

      tr {
        vertical-align: middle;
      }
    }

    tbody {
      td {
        padding: 5px 25px;
        border-top: 1px solid #e0e0e0;

        &.center {
          text-align: center;
        }
      }

      .empty-message {
        color: #bdbdbd;
        padding: 10px 25px;
      }
    }

    .edit-btn {
      padding: 5px 30px;
    }
  }
}
</style>