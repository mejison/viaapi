<template>
  <div class="navigations">
    <div class="nav-items">
      <div class="nav-item" v-for="(setting, index) in settings" :key="index">
        <div class="nav-item-row" @click.stop.prevent="onHandleToggle(index)">
          <div class="image" v-if="setting.image">
            <img :src="self[setting.image]" alt="image" />
          </div>
          <span class="label">{{ self[setting.title] }}</span>
          <a href="#" class="toggle" v-if="setting.childrens && setting.childrens.length">
            <span v-if=" ! toggles[index]" key="down">
              <i class="fas fa-angle-down"></i>
            </span>
            <span v-else key="up">
              <i class="fas fa-angle-up"></i>
            </span>
          </a>
        </div>
        <div class="nav-childrens lang-item" :class="{'open': toggles[index]}">
          <div
            class="children-item"
            v-for="(navChildren, indexChildren) in setting.childrens"
            :key="indexChildren"
            @click.stop.prevent="navChildren.callback"
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
import { mapState, mapActions } from "vuex";

export default {
  name: "settings",

  data() {
    return {
      self: this,
      englishLang: {
        name: "English",
        flag: "/assets/images/english-flag.png",
        iso: "en"
      },
      turkishLang: {
        name: "Turkish",
        flag: "/assets/images/turkish-flag.png",
        iso: "tk"
      },
      settings: [
        {
          title: "currentLng",
          image: "currentFlag",
          childrens: [
            {
              title: "English",
              callback: () => {
                this.setLang(this.englishLang);
              }
            },
            {
              title: "Turkish",
              callback: () => {
                this.setLang(this.turkishLang);
              }
            }
          ]
        }
      ],
      toggles: []
    };
  },

  created() {
    this.reset();
  },

  methods: {
    ...mapActions("app", ["changeLang"]),
    onHandleToggle(index) {
      this.toggles = this.toggles.map((item, indexRow) =>
        indexRow == index ? !item : item
      );
    },
    reset() {
      this.toggles = [...new Array(this.settings.length).map(() => false)];
    },
    setLang(lang) {
      this.changeLang(lang);
      this.reset();
    }
  },

  computed: {
    currentLng() {
      return this.lang && this.lang.name;
    },
    currentFlag() {
      return this.lang && this.lang.flag;
    },
    ...mapState("app", ["lang"])
  }
};
</script>

<style lang="scss" scoped>
.image {
  object-fit: cover;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;

  img {
    height: 100%;
  }
}

.lang-item {
  .children-item {
    padding: 5px 15px;
  }
}
</style>