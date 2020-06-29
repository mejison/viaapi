<template>
  <div class="wrapper-question-edit" :class="{'show': show}">
    <vue-custom-scrollbar class="scroll-area" :settings="settings">
      <div>
        <div class="question-header">
          <a href="#" class="close-btn" @click="$emit('close')">
            <i class="fas fa-times"></i>
          </a>
          <div class="actions">
            <div class="action">
              <btn type="secondary small outline danger">{{ __('Reject') }}</btn>
            </div>
            <div class="action">
              <btn type="primary small">{{ __('Approve') }}</btn>
            </div>
          </div>
        </div>
        <div class="question-body">
          <h1 class="title">{{ __('Question') }}</h1>
          <div class="form-group">
            <text-field v-model="question.question" :placeholder="__('Question')" />
          </div>
          <answers-box v-model="question.answers" />
          <div class="properties">
            <div class="tags">
              <h3>{{ __('TAG') }}</h3>
              <tags :options="optionsTags" v-model="question.tags">
                <template v-slot:option="{ select }">
                  <span>{{ select.name }}</span>
                </template>
              </tags>
            </div>
            <div class="difficulty">
              <h3>{{ __('Difficulty') }}</h3>
              <range-slider :min="0" :max="12" :step="1" v-model="question.difficulty" />
            </div>
          </div>
          <div class="buttons">
            <btn type="primary outline" @click="$emit('close')">{{ __('Close') }}</btn>
            <btn-dropdown
              @click="onSelectDropdown"
              type="primary"
              v-model="currentOption"
              :options="optionsDropdown"
            ></btn-dropdown>
          </div>
        </div>
      </div>
    </vue-custom-scrollbar>
  </div>
</template>

<script>
import Btn from "./Button";
import TextField from "./Textfield";
import AnswersBox from "./answers/Box";
import BtnDropdown from "./BtnDropdown";
import RangeSlider from "./RangeSlider";
import Tags from "./Tags";
import vueCustomScrollbar from "vue-custom-scrollbar";
import langs from "@/mixins/langs";

export default {
  name: "question-edit",

  components: {
    vueCustomScrollbar,
    Btn,
    TextField,
    AnswersBox,
    BtnDropdown,
    RangeSlider,
    Tags
  },

  mixins: [langs],

  props: {
    show: {
      type: Boolean,
      default: false
    },
    question: {
      type: Object,
      default: () => ({})
    }
  },

  destroyed() {},

  data() {
    return {
      settings: {},
      optionsTags: [],
      currentOption: {},
      optionsDropdown: [],
      selectedDifficulty: 5
    };
  },

  created() {
    document.addEventListener("click", this.clickOnBody);
    this.selectedTags = [this.optionsTags[0], this.optionsTags[1]];
    this.setDropDownOptions();
  },

  watch: {
    lang() {
      this.setDropDownOptions();
    }
  },

  methods: {
    setDropDownOptions() {
      this.optionsDropdown = [
        {
          name: this.__("SAVE &amp; ADD NEW QUESTION"),
          callback: this.callbackSaveWithCreate
        },
        {
          name: this.__("SAVE"),
          callback: this.callbackSave
        }
      ];
    },
    onSelectDropdown() {
      if (this.currentOption && this.currentOption.callback) {
        this.currentOption.callback();
        this.$emit("close");
      }
    },
    callbackSave() {
      this.$emit("save", this.question);
    },
    callbackSaveWithCreate() {
      this.$emit("save-with-create", this.question);
    },
    clickOnBody(event) {
      let target = event.target;

      if (
        target.closest(".wrapper-question-edit") ||
        target.classList.contains("edit-btn") ||
        target.closest(".new-question-btn")
      ) {
        return;
      }
      this.reset();
    },
    reset() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
$with-box: 563px;

.scroll-area {
  position: relative;
  width: 100%;
  height: 100%;
}

.wrapper-question-edit {
  position: fixed;
  z-index: 11;
  right: -$with-box;
  top: 0;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  min-width: $with-box;
  max-width: $with-box;
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
        margin-right: 10px;
      }

      .difficulty {
        margin-left: 10px;
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