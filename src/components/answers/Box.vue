<template>
  <div class="wrapper-answers-box">
    <div class="answers-box">
      <div class="answers-item" v-for="(answer, index) in answersSorted" :key="index">
        <div class="drug">
          <i v-html="icons['drug']"></i>
        </div>
        <div>
          <correct />
        </div>
        <input-field
          class="answer-input"
          v-model="answer.answer"
          :placeholder="`Answer #${index + 1}`"
        />
        <a href="#" class="btn-delete" @click.prevent="onClickRemove(answer)">
          <i class="fas fa-trash-alt"></i>
        </a>
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
      answersSorted: this.answers,
      icons
    };
  },

  methods: {
    onClickAddAnswer() {
      this.answersSorted = [
        ...this.answersSorted,
        {
          answer: "",
          correct: false
        }
      ];
    },
    onClickRemove(answer) {
      console.log("remove", answer);
    }
  },

  watch: {
    answers() {
      this.answersSorted = this.answers;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-answers-box {
  .answers-item {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

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