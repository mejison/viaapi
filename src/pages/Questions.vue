<template>
  <div class="questions-page">
    <div class="filter">
      <div class="row">
        <div class="col-lg-7">
          <div class="form-group">
            <search-filter v-model="filter.query" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2">
          <div class="form-group">
            <dropdown placeholder="Difficulty" />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group">
            <Input placeholder="Date" icon="fa-calendar-alt" icon-position="right" />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="form-group">
            <Input placeholder="Tags" icon="fa-tags" icon-position="right" />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="form-group">
            <dropdown placeholder="Status" />
          </div>
        </div>
      </div>
    </div>
    <div class="questions-table">
      <questions-table :columns="columns" :data="dataTable" @select-question="onSelectQuestion" />
      <question-edit
        :show="isShowQuestionSideBar"
        :question="current"
        @close="onCloseEdit"
        @save="onHandleSave"
        @save-with-create="onHandleSaveWithCreate"
      />
    </div>
  </div>
</template>

<script>
import {
  Input,
  Dropdown,
  QuestionsTable,
  QuestionEdit,
  SearchFilter
} from "@/components";

export default {
  name: "questions-page",

  components: {
    Input,
    Dropdown,
    QuestionsTable,
    QuestionEdit,
    SearchFilter
  },

  data() {
    return {
      isShowQuestionSideBar: false,
      filter: {
        query: ""
      },
      current: {},
      columns: [
        {
          name: "ID",
          sortable: true,
          field: "id"
        },
        {
          name: "QUESTION",
          field: "question"
        },
        {
          name: "DATE",
          sortable: true,
          field: "date"
        },
        {
          name: "DIFFICULTY",
          sortable: true,
          field: "difficulty",
          center: true
        }
      ],
      items: [
        {
          id: 2,
          question:
            "2003 yılında Euro Vizyon Şarkı yarışmasında ülkemizi temsil eden ve yarışmada birinci gelen sanatçımız kimdir?",
          date: "25.05.2020",
          difficulty: 1,
          answers: [
            {
              answer: "Ajda Pekkan",
              correct: false,
              order: 1
            },
            {
              answer: "Sertap Erener",
              correct: true,
              order: 2
            },
            {
              answer: "Grup Athena",
              correct: false,
              order: 3
            }
          ],
          tags: [
            {
              name: "Müzik"
            },
            {
              name: "Genel Kültür"
            }
          ]
        },
        {
          id: 11,
          question:
            "Tsunami felaketinde en fazla zarar gören Güney Asya ülkesi aşağıdakilerden hangisidir?",
          date: "25.05.2020",
          difficulty: 2,
          answers: [
            {
              answer: "Ajda Pekkan",
              correct: false,
              order: 1
            },
            {
              answer: "Sertap Erener",
              correct: true,
              order: 2
            },
            {
              answer: "Grup Athena",
              correct: false,
              order: 3
            }
          ],
          tags: [
            {
              name: "Müzik"
            },
            {
              name: "Genel Kültür"
            }
          ]
        },
        {
          id: 22,
          question: "Üç büyük dince kutsal sayılan şehir hangisidir?",
          date: "25.05.2020",
          difficulty: 4,
          answers: [
            {
              answer: "Ajda Pekkan",
              correct: false,
              order: 1
            },
            {
              answer: "Sertap Erener",
              correct: true,
              order: 2
            },
            {
              answer: "Grup Athena",
              correct: false,
              order: 3
            }
          ],
          tags: [
            {
              name: "Müzik"
            },
            {
              name: "Genel Kültür"
            }
          ]
        },
        {
          id: 23,
          question: "Aspirinin hammadesi nedir?",
          date: "25.05.2020",
          difficulty: 4,
          answers: [
            {
              answer: "Ajda Pekkan",
              correct: false,
              order: 1
            },
            {
              answer: "Sertap Erener",
              correct: true,
              order: 2
            },
            {
              answer: "Grup Athena",
              correct: false,
              order: 3
            }
          ],
          tags: [
            {
              name: "Müzik"
            },
            {
              name: "Genel Kültür"
            }
          ]
        },
        {
          id: 34,
          question: "Aşağıdaki ülkelerden hangisinin nüfusu daha fazladır?",
          date: "25.05.2020",
          difficulty: 2,
          answers: [
            {
              answer: "Ajda Pekkan",
              correct: false,
              order: 1
            },
            {
              answer: "Sertap Erener",
              correct: true,
              order: 2
            },
            {
              answer: "Grup Athena",
              correct: false,
              order: 3
            }
          ],
          tags: [
            {
              name: "Müzik"
            },
            {
              name: "Genel Kültür"
            }
          ]
        },
        {
          id: 37,
          question: "“Cevdet Bey ve Oğulları” eseri kime aittir?",
          date: "25.05.2020",
          difficulty: 1,
          answers: [
            {
              answer: "Ajda Pekkan",
              correct: false,
              order: 1
            },
            {
              answer: "Sertap Erener",
              correct: true,
              order: 2
            },
            {
              answer: "Grup Athena",
              correct: false,
              order: 3
            }
          ],
          tags: [
            {
              name: "Müzik"
            },
            {
              name: "Genel Kültür"
            }
          ]
        },
        {
          id: 46,
          question: "“Cevdet Bey ve Oğulları” eseri kime aittir?",
          date: "25.05.2020",
          difficulty: 2,
          answers: [
            {
              answer: "Ajda Pekkan",
              correct: false,
              order: 1
            },
            {
              answer: "Sertap Erener",
              correct: true,
              order: 2
            },
            {
              answer: "Grup Athena",
              correct: false,
              order: 3
            }
          ],
          tags: [
            {
              name: "Müzik"
            },
            {
              name: "Genel Kültür"
            }
          ]
        },
        {
          id: 52,
          question: "“Cevdet Bey ve Oğulları” eseri kime aittir?",
          date: "25.05.2020",
          difficulty: 4,
          answers: [
            {
              answer: "Ajda Pekkan",
              correct: false,
              order: 1
            },
            {
              answer: "Sertap Erener",
              correct: true,
              order: 2
            },
            {
              answer: "Grup Athena",
              correct: false,
              order: 3
            }
          ],
          tags: [
            {
              name: "Müzik"
            },
            {
              name: "Genel Kültür"
            }
          ]
        },
        {
          id: 67,
          question: "“Cevdet Bey ve Oğulları” eseri kime aittir?",
          date: "25.05.2020",
          difficulty: 1,
          answers: [
            {
              answer: "Ajda Pekkan",
              correct: false,
              order: 1
            },
            {
              answer: "Sertap Erener",
              correct: true,
              order: 2
            },
            {
              answer: "Grup Athena",
              correct: false,
              order: 3
            }
          ],
          tags: [
            {
              name: "Müzik"
            },
            {
              name: "Genel Kültür"
            }
          ]
        }
      ]
    };
  },

  methods: {
    onHandleSave(question) {
      console.log("onHandleSave", question);
    },
    onHandleSaveWithCreate(question) {
      console.log("onHandleSaveWithCreate", question);
    },
    save() {},
    onCloseEdit() {
      this.current = {};
      this.setQuestionSidebar(false);
    },
    newQuestion() {
      this.current = {
        question: "",
        answers: [
          {
            answer: "",
            correct: false
          }
        ],
        tags: [],
        difficulty: 5
      };
      this.setQuestionSidebar(true);
    },
    setQuestionSidebar(toggle) {
      this.isShowQuestionSideBar = toggle;
    },
    onSelectQuestion(question) {
      this.current = question;
      this.setQuestionSidebar(true);
    }
  },

  computed: {
    dataTable() {
      return this.items;
    }
  }
};
</script>

<style lang="scss" scoped>
.questions-table {
  margin-bottom: 50px;
}
</style>