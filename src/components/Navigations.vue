<template>
  <div class="navigations">
    <div class="nav-items">
      <div
        class="nav-item"
        :class="{'active': nav.names && nav.names.includes($route.name)}"
        v-for="(nav, index) in navs"
        :key="index"
      >
        <div class="nav-item-row" @click.stop.prevent="onHandleClickNav(nav, index)">
          <i class="fas nav-icon" :class="{[nav.icon]: true}"></i>
          <span class="label">{{ nav.title }}</span>
          <a href="#" class="toggle" v-if="nav.childrens && nav.childrens.length">
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
            <router-link :to="navChildren.url" :class="{'active': $route.name == nav.name}">
              <span class="dot">&bull;</span>
              {{ navChildren.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import langs from "@/mixins/langs";

export default {
  name: "navigations",

  mixins: [langs],

  data() {
    return {
      navs: [],
      toggles: []
    };
  },

  created() {
    this.reset();
    this.setNavs();
  },

  watch: {
    lang() {
      this.setNavs();
    }
  },

  methods: {
    setNavs() {
      this.navs = [
        {
          title: `Trivia ${this.__("Questions")}`,
          url: "/app",
          icon: "fa-language",
          names: ["questions", "questions-tk", "questions-en"],
          childrens: [
            {
              title: "Turkish",
              url: "/app/turkish",
              name: "questions-tk"
            },
            {
              title: "English",
              url: "/app",
              name: "questions-en"
            }
          ]
        },
        {
          title: this.__("Tags"),
          url: "/app/tags",
          icon: "fa-tags",
          name: "tags",
          names: ["tags"]
        }
      ];
    },
    onHandleToggle(index) {
      this.toggles = this.toggles.map((item, indexRow) =>
        indexRow == index ? !item : item
      );
    },
    onHandleClickNav(nav, index) {
      if (!nav.names.includes(this.$route.name)) {
        this.$router.push(nav.url);
      }

      if (nav.childrens && nav.childrens.length) {
        this.toggles = this.toggles.map((item, indexRow) =>
          indexRow == index ? !item : item
        );
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