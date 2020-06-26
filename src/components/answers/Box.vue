<template>
  <div class="wrapper-answers-box">
    <div class="drap-and-drop" v-drag-and-drop:options="dragAndDropOptions" @change="onChangeOrder">
      <div class="answers-box" @reordered="reordered">
        <div
          class="answers-item"
          v-for="(answer, index) in answersSorted"
          :key="index"
          :data-id="index"
        >
          <div class="drug">
            <i v-html="icons['drug']"></i>
          </div>
          <div>
            <correct />
          </div>
          <input-field class="answer-input" v-model="answer.answer" placeholder="Answer" />
          <a href="#" class="btn-delete" @click.stop.prevent="onClickRemove(answer, index)">
            <i class="fas fa-trash-alt"></i>
          </a>
        </div>
      </div>
    </div>
    <a href="#" class="add-btn" @click.prevent="onClickAddAnswer">
      <i class="fas fa-plus"></i>
      Add New Answer
    </a>
    <div class="line"></div>
  </div>
</template>

<script>
import InputField from "../Input";
import Correct from "./Correct";
import icons from "@/icons";

export default {
  components: {
    InputField,
    Correct
  },

  props: {
    answers: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      answersSorted: this.sortByOrder(this.answers),
      icons,
      dragAndDropOptions: {
        dropzoneSelector: ".answers-box",
        draggableSelector: ".answers-item",
        handlerSelector: null,
        reactivityEnabled: true,
        multipleDropzonesItemsDraggingEnabled: true,
        showDropzoneAreas: true
      }
    };
  },

  methods: {
    sortByOrder(answers) {
      return answers.sort((curr, next) => {
        return curr.sort > next.next ? -1 : 1;
      });
    },
    onChangeOrder() {
      console.log("change order");
    },
    reordered(event) {
      const [elementId] = event.detail.ids;
      const targetIndex = event.detail.index;
      this.moveElementByIndex(elementId, targetIndex);
    },
    moveElementByIndex(elementId, targetIndex) {
      let element = this.answersSorted[elementId];

      let filtered = this.answersSorted.filter((item, index) => {
        return index != elementId;
      });

      let newSorted = [],
        item = {};

      for (let index = 0; index < this.answersSorted.length; index++) {
        item = filtered[index] ? filtered[index] : false;

        if (index == targetIndex) {
          if (item) {
            newSorted = [...newSorted, element, item];
          }

          if (!item) {
            newSorted = [...newSorted, element];
          }
          continue;
        }

        if (item) {
          newSorted = [...newSorted, item];
        }
      }

      this.answersSorted = [...newSorted];
    },
    onClickAddAnswer() {
      this.answersSorted = [
        ...this.answersSorted,
        {
          answer: "",
          correct: false
        }
      ];
    },
    onClickRemove(answer, index) {
      if (this.answersSorted.length > 1) {
        this.answersSorted = this.answersSorted.filter((item, row) => {
          return row != index;
        });
      }
    }
  },

  watch: {
    answers() {
      this.answersSorted = this.answers;
    }
  }
};
</script>

<style lang="scss">
.wrapper-input .input {
  color: #444444;
}

.item-dropzone-area {
  width: 100%;
  height: 40px;
  border-radius: 3px;
  background: #bdbdbd;
}
</style>

<style lang="scss" scoped>
.wrapper-answers-box {
  .answers-item {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:active,
    &:focus {
      border: none;
      outline: none;
    }

    .answer-input {
      width: 100%;
    }

    .btn-delete {
      margin-left: 14px;
      font-size: 16px;
      color: #bdbdbd;
    }

    .drug {
      margin-right: 10px;
      cursor: pointer;
    }
  }

  .add-btn {
    text-decoration: none;
    margin-left: 60px;
    font-size: 14px;
    color: #444444;
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;

    i {
      font-weight: 900;
      font-size: 16px;
      margin-right: 5px;
    }
  }

  .line {
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 23px;
  }
}
</style>