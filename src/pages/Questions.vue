<template>
  <div class="questions-page">
    <div class="filter">
      <div class="row">
        <div class="col-lg-7">
          <div class="form-group">
            <Input placeholder="Search" icon="fa-search" />
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
      <question-edit :question="current" @close="onCloseEdit" />
    </div>
  </div>
</template>

<script>
import { Input, Dropdown, QuestionsTable, QuestionEdit } from "@/components";

export default {
  name: "questions-page",

  components: {
    Input,
    Dropdown,
    QuestionsTable,
    QuestionEdit
  },

  data() {
    return {
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
              correct: false
            },
            {
              answer: "Sertap Erener",
              correct: true
            },
            {
              answer: "Grup Athena",
              correct: false
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
              correct: false
            },
            {
              answer: "Sertap Erener",
              correct: true
            },
            {
              answer: "Grup Athena",
              correct: false
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
              correct: false
            },
            {
              answer: "Sertap Erener",
              correct: true
            },
            {
              answer: "Grup Athena",
              correct: false
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
              correct: false
            },
            {
              answer: "Sertap Erener",
              correct: true
            },
            {
              answer: "Grup Athena",
              correct: false
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
              correct: false
            },
            {
              answer: "Sertap Erener",
              correct: true
            },
            {
              answer: "Grup Athena",
              correct: false
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
              correct: false
            },
            {
              answer: "Sertap Erener",
              correct: true
            },
            {
              answer: "Grup Athena",
              correct: false
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
              correct: false
            },
            {
              answer: "Sertap Erener",
              correct: true
            },
            {
              answer: "Grup Athena",
              correct: false
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
              correct: false
            },
            {
              answer: "Sertap Erener",
              correct: true
            },
            {
              answer: "Grup Athena",
              correct: false
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
              correct: false
            },
            {
              answer: "Sertap Erener",
              correct: true
            },
            {
              answer: "Grup Athena",
              correct: false
            }
          ]
        }
      ]
    };
  },

  methods: {
    onCloseEdit() {
      this.current = {};
    },
    onSelectQuestion(question) {
      this.current = question;
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