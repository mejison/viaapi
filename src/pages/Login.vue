<template>
  <div class="login-wrapper">
    <card class="login">
      <h1 class="login-header">Welcome !</h1>
      <h5 class="login-subheader">Please login with your username</h5>

      <form class="login-form">
        <div class="form-group">
          <label>Username</label>
          <Input placeholder="Username" />
        </div>

        <div class="form-group">
          <div class="d-flex justify-content-between">
            <label>Password</label>
            <router-link to="/forgot-password" class="primary">Forgot Password?</router-link>
          </div>
          <Input placeholder="Password" />
        </div>

        <div class="d-flex">
          <btn class="ml-auto">Login</btn>
        </div>
      </form>
    </card>
    <div class="login-footer">
      <router-link to="/terms">Terms</router-link>
      <span class="dot">&bull;</span>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
import { Card, Btn, Input } from "@/components";

export default {
  name: "",

  components: {
    Card,
    Btn,
    Input
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  .login {
    min-width: 480px;

    .login-subheader,
    .login-header {
      color: #444444;
    }

    .login-header {
      font-weight: bold;
      font-size: 26px;
    }

    .login-subheader {
      font-size: 14px;
      font-weight: normal;
    }

    .login-form {
      margin-top: 54px;
    }
  }

  .login-footer {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    .dot {
      margin: 0 14px;
      font-size: 12px;
      color: #444444;
    }
  }
}
</style>