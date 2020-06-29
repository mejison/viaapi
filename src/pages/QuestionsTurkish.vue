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
              :placeholder="__('Difficulty')"
              v-model="filter.difficulty"
              :options="difficultyOptions"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group">
            <date-filter :placeholder="__('Date')" v-model="filter.date" />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="form-group">
            <tags-filter :placeholder="__('Tags')" v-model="filter.tags" :options="tagsOptions" />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="form-group">
            <dropdown-filter
              :placeholder="__('Status')"
              v-model="filter.status"
              :options="statusOptions"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="questions-table">
      <questions-table
        :columns="columns"
        :data="dataTable"
        @select-question="onSelectQuestion"
        @delete="onDeleteRow"
      />
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
  // InputField,
  QuestionsTable,
  QuestionEdit,
  SearchFilter,
  DropdownFilter,
  TagsFilter,
  DateFilter
} from "@/components";

import langs from "@/mixins/langs";

import moment from "moment";

export default {
  name: "questions-page",

  components: {
    // InputField,
    DateFilter,
    QuestionsTable,
    QuestionEdit,
    SearchFilter,
    DropdownFilter,
    TagsFilter
  },

  mixins: [langs],

  data() {
    return {
      isShowQuestionSideBar: false,
      moment,
      filter: {
        query: "",
        difficulty: [],
        status: [],
        tags: [],
        date: {
          startDate: "",
          endDate: ""
        }
      },
      current: {},
      columns: [],
      items: [
        {
          id: 2,
          question:
            "2003 yılında Euro Vizyon Şarkı yarışmasında ülkemizi temsil eden ve yarışmada birinci gelen sanatçımız kimdir?",
          date: "25.05.2020",
          difficulty: 1,
          status: "active",
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
          status: "active",
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
          status: "active",
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
          status: "active",
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
          status: "active",
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
          status: "inactive",
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
          id: 68,
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
          id: 69,
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
          id: 70,
          question: "“Cevdet Bey ve Oğulları” eseri kime aittir?",
          date: "25.05.2020",
          difficulty: 1,
          status: "inactive",
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
          id: 71,
          question: "“Cevdet Bey ve Oğulları” eseri kime aittir?",
          date: "25.05.2020",
          difficulty: 1,
          status: "waiting-approval",
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
      ],
      tagsOptions: [
        {
          label: "Matematik",
          value: "Matematik"
        },
        {
          label: "Genel Kültür",
          value: "Genel Kültür"
        },
        {
          label: "Müzik",
          value: "Müzik"
        },
        {
          label: "Tarih",
          value: "Tarih"
        },
        {
          label: "Sinema",
          value: "Sinema"
        },
        {
          label: "Edebiyat",
          value: "Edebiyat"
        }
      ],
      deleted: []
    };
  },

  methods: {
    setColumn() {
      this.columns = [
        {
          name: "ID",
          sortable: true,
          field: "id"
        },
        {
          name: this.__("Question"),
          field: "question"
        },
        {
          name: this.__("Date"),
          sortable: true,
          field: "date"
        },
        {
          name: this.__("Difficulty"),
          sortable: true,
          field: "difficulty",
          center: true
        }
      ];
    },
    onDeleteRow(item) {
      this.deleted = [...this.deleted, item];
    },
    onHandleSave(question) {
      this.save(question);
    },
    onHandleSaveWithCreateNew(question) {
      this.save(question);

      setTimeout(() => {
        this.newQuestion(question);
      }, 500);
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

  mounted() {
    this.setColumn();
  },

  watch: {
    lang() {
      this.setColumn();
    }
  },

  computed: {
    dataTable() {
      return this.items.filter(item => {
        let search = true,
          difficulty = true,
          status = true,
          tags = true,
          date = true,
          deleted = true;

        if (this.filter.query) {
          search =
            item.question
              .toLowerCase()
              .indexOf(this.filter.query.toLowerCase()) + 1;
        }

        if (this.filter.difficulty.length) {
          difficulty = this.filter.difficulty.some(row => {
            return row.value == item.difficulty;
          });
        }

        if (this.filter.status.length) {
          status = this.filter.status.some(row => {
            return row.value == item.status;
          });
        }

        if (this.filter.tags.length) {
          tags = this.filter.tags.every(row => {
            return item.tags.find(tag => tag.name == row.value);
          });
        }

        if (this.filter.date.startDate && this.filter.date.endDate) {
          let { startDate, endDate } = this.filter.date,
            current = moment(item.date, "DD.MM.Y");

          startDate = moment(startDate);
          endDate = moment(endDate);

          date = startDate.diff(current) < 0 && endDate.diff(current) > 0;
        }

        if (this.deleted.length) {
          deleted = !this.deleted.find(row => row.id == item.id);
        }

        return search && difficulty && status && tags && date && deleted;
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