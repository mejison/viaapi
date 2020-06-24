<template>
  <div class="navigations">
    <div class="nav-items">
      <div class="nav-item" v-for="(setting, index) in settings" :key="index">
        <div class="d-flex align-items-center">
          <div class="image" v-if="setting.image">
            <img :src="self[setting.image]" alt="image" />
          </div>
          <span class="label">{{ self[setting.title] }}</span>
          <a
            href="#"
            class="toggle"
            v-if="setting.childrens && setting.childrens.length"
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
        <div class="nav-childrens lang-item" :class="{'open': toggles[index]}">
          <div
            class="children-item"
            v-for="(navChildren, indexChildren) in setting.childrens"
            :key="indexChildren"
            @click.prevent="navChildren.callback"
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
        flag: "/assets/images/english-flag.png"
      },
      turkishLang: {
        name: "Turkish",
        flag: "/assets/images/turkish-flag.png"
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
    ...mapActions("auth", ["changeLang"]),
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
      return this.me && this.me.lang && this.me.lang.name;
    },
    currentFlag() {
      return this.me && this.me.lang && this.me.lang.flag;
    },
    ...mapState("auth", ["me"])
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
  margin-left: 25px;
}
</style>