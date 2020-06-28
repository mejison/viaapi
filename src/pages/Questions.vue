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
            <dropdown-filter
              placeholder="Difficulty"
              v-model="filter.difficulty"
              :options="difficultyOptions"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group">
            <input-field placeholder="Date" icon="fa-calendar-alt" icon-position="right" />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="form-group">
            <input-field placeholder="Tags" icon="fa-tags" icon-position="right" />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="form-group">
            <dropdown-filter placeholder="Status" v-model="filter.status" :options="statusOptions" />
          </div>
        </div>
      </div>
    </div>
    <div class="questions-table">
      <questions-table :columns="columns" :data="dataTable" @select-question="onSelectQuestion" />
      <question-edit
        :show="isShowQuestionSideBar"
        :question="{...current}"
        @close="onCloseEdit"
        @save="onHandleSave"
        @save-with-create="onHandleSaveWithCreateNew"
      />
    </div>
  </div>
</template>

<script>
import {
  InputField,
  QuestionsTable,
  QuestionEdit,
  SearchFilter,
  DropdownFilter
} from "@/components";

export default {
  name: "questions-page",

  components: {
    InputField,
    QuestionsTable,
    QuestionEdit,
    SearchFilter,
    DropdownFilter
  },

  data() {
    return {
      isShowQuestionSideBar: false,
      filter: {
        query: "",
        difficulty: [],
        status: []
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
      ],
      difficultyOptions: [
        {
          label: "1",
          value: 1
        },
        {
          label: "2",
          value: 2
        },
        {
          label: "3",
          value: 3
        },
        {
          label: "4",
          value: 4
        },
        {
          label: "5",
          value: 5
        }
      ],
      statusOptions: [
        {
          label: "Active",
          value: "active"
        },
        {
          label: "Inactive",
          value: "inactive"
        },
        {
          label: "Waiting Approval",
          value: "waiting-approval"
        },
        {
          label: "Deleted",
          value: "deleted"
        },
        {
          label: "All",
          value: "all"
        }
      ]
    };
  },

  methods: {
    onHandleSave(question) {
      this.save(question);
    },
    onHandleSaveWithCreateNew(question) {
      this.save(question);
      this.newQuestion(question);
    },
    save(question) {
      if (question.id) {
        this.update(question);
        return;
      }

      const lastItem = this.items[this.items.length - 1];
      question.id = lastItem.id + 1;
      this.create(question);
    },
    create(question) {
      this.items = [question, ...this.items];
    },
    update(question) {
      this.items = this.items.map(item => {
        if (question.id == item.id) {
          return question;
        }
        return item;
      });
    },
    onCloseEdit() {
      this.current = {};
      this.setQuestionSidebar(false);
    },
    newQuestion() {
      this.current = {
        question: "",
        date: this.nowDate,
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
      return this.items.filter(item => {
        if (this.filter.query) {
          return item.question.indexOf(this.filter.query) + 1;
        }
        return true;
      });
    },
    nowDate() {
      let now = new Date();
      let month = now.getMonth() + 1;
      if (month < 9) {
        month = `0${month}`;
      }
      return `${now.getDate()}.${month}.${now.getFullYear()}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.questions-table {
  margin-bottom: 50px;
}
</style>