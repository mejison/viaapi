<template>
  <div class="navigations">
    <div class="nav-items">
      <div
        class="nav-item"
        :class="{'active': $route.name == nav.name}"
        v-for="(nav, index) in navs"
        :key="index"
      >
        <div class="d-flex align-items-center" @click.prevent="onHandleClickNav(nav)">
          <i class="fas nav-icon" :class="{[nav.icon]: true}"></i>
          <span class="label">{{ nav.title }}</span>
          <a
            href="#"
            class="toggle"
            v-if="nav.childrens && nav.childrens.length"
            @click.stop.prevent="onHandleToggle(index)"
          >
            <span v-if=" ! toggles[index]" key="down">
              <i class="fas fa-angle-down"></i>
            </span>
            <span v-else key="up">
              <i class="fas fa-angle-up"></i>
            </span>
          </a>
        </div>
        <div class="nav-childrens" :class="{'open': toggles[index]}">
          <div
            class="children-item"
            v-for="(navChildren, indexChildren) in nav.childrens"
            :key="indexChildren"
          >
            <span class="dot">&bull;</span>
            {{ navChildren.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigations",

  data() {
    return {
      navs: [
        {
          title: "Trivia Questions",
          url: "/app",
          name: "questions",
          icon: "fa-language",
          childrens: [
            {
              title: "Turkish",
              url: "turkish"
            },
            {
              title: "English",
              url: "english"
            }
          ]
        },
        {
          title: "Tags",
          url: "/app/tags",
          icon: "fa-tags",
          name: "tags"
        }
      ],
      toggles: []
    };
  },

  created() {
    this.reset();
  },

  methods: {
    onHandleToggle(index) {
      this.toggles = this.toggles.map((item, indexRow) =>
        indexRow == index ? !item : item
      );
    },
    onHandleClickNav(nav) {
      if (this.$route.name != nav.name) {
        this.$router.push(nav.url);
      }
    },
    reset() {
      this.toggles = [...new Array(this.navs.length).map(() => false)];
      this.toggles[0] = true;
    }
  },

  computed: {}
};
</script>