<template>
  <div class="wrapper-question-edit" :class="{'show': canShow}">
    <div class="question-header">
      <a href="#" class="close-btn" @click="$emit('close')">
        <i class="fas fa-times"></i>
      </a>
      <div class="actions">
        <div class="action">
          <btn type="secondary small outline danger">Reject</btn>
        </div>
        <div class="action">
          <btn type="primary small">Approve</btn>
        </div>
      </div>
    </div>
    <div class="question-body">
      <h1 class="title">Question</h1>
      <div class="form-group">
        <text-field v-model="question.question" placeholder="Type name here ..." />
      </div>
      <answers-box :answers="question.answers" />
      <div class="properties">
        <div class="tags">
          <h3>TAG</h3>
        </div>
        <div class="difficulty">
          <h3>DIFFICULTY</h3>
          <range-slider />
        </div>
      </div>
      <div class="buttons">
        <btn type="primary outline" @click="$emit('close')">Close</btn>
        <btn-dropdown
          @click="currentOption.callback"
          type="primary"
          v-model="currentOption"
          :options="optionsDropdown"
        ></btn-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "./Button";
import TextField from "./Textarea";
import AnswersBox from "./answers/Box";
import BtnDropdown from "./BtnDropdown";
import RangeSlider from "./RangeSlider";

export default {
  name: "question-edit",

  components: {
    Btn,
    TextField,
    AnswersBox,
    BtnDropdown,
    RangeSlider
  },

  props: {
    question: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      currentOption: {},
      optionsDropdown: [
        {
          name: "SAVE &amp; ADD NEW QUESTION",
          callback: this.callbackSaveWithCreate
        },
        {
          name: "SAVE",
          callback: this.callbackSave
        }
      ]
    };
  },

  created() {
    document.addEventListener("click", this.clickOnBody);
  },

  methods: {
    callbackSave() {
      console.log("save");
    },
    callbackSaveWithCreate() {
      console.log("save with create");
    },
    clickOnBody(event) {
      let target = event.target;

      if (
        target.closest(".wrapper-question-edit") ||
        target.classList.contains("edit-btn")
      ) {
        return;
      }
      this.reset();
    },
    reset() {
      this.$emit("close");
    }
  },

  computed: {
    canShow() {
      return !!Object.keys(this.question).length;
    }
  }
};
</script>

<style lang="scss" scoped>
$with-box: 563px;

.wrapper-question-edit {
  position: fixed;
  z-index: 11;
  right: -$with-box;
  top: 0;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  min-width: $with-box;
  transition: right 0.3s;
  overflow: auto;

  &.show {
    right: 0;
  }

  .question-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    padding: 10px 20px;

    .close-btn {
      color: #bdbdbd;
      font-size: 16px;
      margin-left: 10px;
    }

    .actions {
      display: flex;

      .action {
        margin: 0 10px;

        &:last-child {
          margin-right: 0;
        }

        .btn {
          width: 100%;
          min-width: 86px;
          padding: 5px 15px;
        }
      }
    }
  }

  .question-body {
    padding: 20px;

    .title {
      margin: 0 0 12px 0;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
    }

    .properties {
      display: flex;
      justify-content: space-between;
      margin-bottom: 80px;

      .tags,
      .difficulty {
        width: 50%;
      }

      .tags {
      }

      .difficulty {
      }

      h3 {
        font-weight: 600;
        font-weight: 600;
        font-size: 14px;
        color: #444444;
        margin-bottom: 10px;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>