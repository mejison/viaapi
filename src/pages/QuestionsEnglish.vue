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
        @sort="onSort"
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
import langs from "@/mixins/langs";
import question from "@/mixins/question";

export default {
  name: "questions-page",

  mixins: [langs, question],

  data() {
    return {
      items: [
        {
          id: 2,
          question:
            "Who is our artist who represented our country in the Eurovision Song contest in 2003 and came first in the contest?",
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
            "Which of the following is the South Asian country that suffered the most in the tsunami disaster?",
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
          question: "Which city is considered sacred to three great religions?",
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
          question: "What is the raw material of aspirin?",
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
          question: "Which of the following countries has a higher population?",
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
          question: 'Who does the work "Cevdet Bey and Sons" belong to?',
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
          question: 'Who does the work "Cevdet Bey and Sons" belong to?',
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
          question: 'Who does the work "Cevdet Bey and Sons" belong to?',
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
          question: 'Who does the work "Cevdet Bey and Sons" belong to?',
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
          question: 'Who does the work "Cevdet Bey and Sons" belong to?',
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
          question: 'Who does the work "Cevdet Bey and Sons" belong to?',
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
          question: 'Who does the work "Cevdet Bey and Sons" belong to?',
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
          question: 'Who does the work "Cevdet Bey and Sons" belong to?',
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
      ]
    };
  }
};
</script>