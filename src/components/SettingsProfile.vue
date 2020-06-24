<template>
  <div class="settings-profile navigations">
    <div class="profile">
      <languages-switcher />
      <settings />
    </div>
  </div>
</template>

<script>
import LanguagesSwitcher from "./LanguagesSwitcher";
import Settings from "./Settings";

export default {
  name: "settings-profile",

  components: {
    LanguagesSwitcher,
    Settings
  },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.settings-profile {
  height: 100%;
  display: flex;
  flex-direction: column;

  .profile {
    margin-top: auto;
    padding-bottom: 70px;
    transform: translateY(1px);
  }
}
</style>