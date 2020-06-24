<template>
  <div class="sidebar">
    <router-link class="logo" to="/">
      <img src="/assets/images/logo.png" alt="logo" />
    </router-link>
    <div class="nav">
      <navigations />
      <settings-profile />
    </div>
  </div>
</template>

<script>
import Navigations from "./Navigations";
import SettingsProfile from "./SettingsProfile";

export default {
  name: "sidebar",

  components: {
    Navigations,
    SettingsProfile
  }
};
</script>