<template>
  <div class="navigations">
    <div class="nav-items">
      <div class="nav-item active" v-for="(setting, index) in settings" :key="index">
        <div class="nav-item-row">
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
        <div class="nav-childrens" :class="{'open': toggles[index]}">
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
import { mapState } from "vuex";

export default {
  name: "settings",

  data() {
    return {
      self: this,
      settings: [
        {
          title: "userName",
          image: "userImage",
          childrens: [
            {
              title: "Logout",
              name: "logout",
              callback: this.onLogout
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
    ...mapState("auth", ["logout"]),
    onLogout() {
      this.logout();
      this.$router.push("/");
    },
    onHandleToggle(index) {
      this.toggles = this.toggles.map((item, indexRow) =>
        indexRow == index ? !item : item
      );
    },
    reset() {
      this.toggles = [...new Array(this.settings.length).map(() => false)];
    }
  },

  computed: {
    userName() {
      return this.me && this.me.name;
    },
    userImage() {
      return this.me && this.me.image;
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
    width: 100%;
    height: 100%;
  }
}

.children-item {
  padding: 10px 15px;
}
</style>