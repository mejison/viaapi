import moment from "moment";

import {
  QuestionsTable,
  QuestionEdit,
  SearchFilter,
  DropdownFilter,
  TagsFilter,
  DateFilter
} from "@/components";


const question = {
  components: {
    DateFilter,
    QuestionsTable,
    QuestionEdit,
    SearchFilter,
    DropdownFilter,
    TagsFilter
  },

  data() {
    return {
      moment,
      sort: false,
      isShowQuestionSideBar: false,
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
      deleted: [],
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
      let data = this.items.filter(item => {
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
      })

      if (this.sort) {
        data = data.sort((a, b) => {
          return this.sort.type == 'asc' ? (a[this.sort.field] > b[this.sort.field] ? -1 : 1) : (a[this.sort.field] > b[this.sort.field] ? 1 : -1)
        })
      }

      return data
    },
    nowDate() {
      let now = new Date();
      let month = now.getMonth() + 1;
      if (month < 9) {
        month = `0${month}`;
      }
      return `${now.getDate()}.${month}.${now.getFullYear()}`;
    }
  },

  methods: {
    onSort(field) {
      this.sort = field
      const columns = this.columns.map(column => {
        column.type = ''
        return column.field != field.field ? column : field
      });
      this.columns = [...columns]
    },
    setColumn() {
      this.columns = [
        {
          name: "ID",
          sortable: true,
          field: "id",
          type: '',
          style: 'max-width: 30px'
        },
        {
          name: this.__("Question"),
          sortable: true,
          field: "question",
          type: '',
          style: 'max-width: 350px'
        },
        {
          name: this.__("Date"),
          sortable: true,
          type: '',
          field: "date"
        },
        {
          name: this.__("Difficulty"),
          sortable: true,
          field: "difficulty",
          type: '',
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
  }
}

export default question;