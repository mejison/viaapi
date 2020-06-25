<template>
  <div class="wrapper-pagination">
    <div class="pagination">
      <a href="#" class="prev" @click.prevent="onClickPrev">
        <i class="fas fa-chevron-left"></i>
      </a>
      <div class="pages" v-for="(page, indexPage) in pages" :key="indexPage">
        <div
          class="page"
          @click="onClickPage(indexPage + 1)"
          :class="{'active':  (indexPage + 1) == current}"
        >{{ indexPage + 1 }}</div>
      </div>
      <a href="#" class="next" @click.prevent="onClickNext">
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
    <div class="rows-per-page">
      <span>Rows Per Page:</span>
      <select class="per-page-select" @change="onChangePerPage">
        <option
          :checked="perPage == perPageIndex"
          v-for="(perPageIndex, index) in perPageOptions"
          :key="index"
        >{{ perPageIndex }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "table-pagination",

  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 15
    }
  },

  data() {
    return {
      perPageOptions: [10, 15, 25, 30, 50]
    };
  },

  methods: {
    onChangePerPage(page) {
      this.$emit("change-per-page", page);
    },
    onChange(page) {
      this.page = page;
    },
    onClickPage(page) {
      this.$emit("change-page", page);
    },
    onClickNext() {
      if (this.current != this.pages.length) {
        this.$emit("change-page", this.current + 1);
      }
    },
    onClickPrev() {
      if (this.current != 1) {
        this.$emit("change-page", this.current - 1);
      }
    }
  },

  computed: {
    pages() {
      return [...new Array(Math.ceil(this.total / this.perPage))];
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-pagination {
  display: flex;
  align-items: center;
  border-top: 1px solid #e0e0e0;

  .pagination {
    display: flex;
    padding: 10px;
    align-items: center;
    margin-right: 75px;

    .next,
    .prev {
      color: #bdbdbd;
      padding: 5px 10px;
      display: inline-block;
      user-select: none;
    }

    .pages {
      display: flex;
      align-items: center;

      .page {
        display: inline-block;
        margin: 0 2px;
        font-size: 14px;
        text-align: center;
        color: #bdbdbd;
        cursor: pointer;
        padding: 1px 7px;
        user-select: none;

        &.active {
          display: flex;
          color: #74b1c1;
          background: #e0e0e0;
          border-radius: 3px;
        }
      }
    }
  }

  .rows-per-page {
    color: #bdbdbd;

    .per-page-select {
      margin-left: 31px;
      font-size: 14px;
      border: none;
      color: #444444;

      &:focus {
        outline: none;
        border: none;
      }
    }
  }
}
</style>