<template>
  <div class="blank-wrapper">
    <card class="blank">
      <h1 class="blank-header">Welcome !</h1>
      <h5 class="blank-subheader">Please login with your username</h5>

      <validation-observer v-slot="{ invalid, handleSubmit }">
        <form class="blank-form" @submit.prevent="handleSubmit(onSubmit)">
          <div class="form-group">
            <label>Username</label>
            <validation-provider name="Username" rules="required" v-slot="{ errors }">
              <input-field
                placeholder="Username"
                v-model="signin.username"
                :invalid="!!errors.length"
              />
            </validation-provider>
          </div>

          <div class="form-group">
            <div class="d-flex justify-content-between">
              <label>Password</label>
              <router-link to="/forgot-password" class="primary">Forgot Password?</router-link>
            </div>
            <validation-provider name="Password" rules="required" v-slot="{ errors }">
              <input-field
                placeholder="Password"
                v-model="signin.password"
                :invalid="!!errors.length"
              />
            </validation-provider>
          </div>

          <div class="d-flex">
            <btn class="ml-auto" :type="invalid ? 'disabled' : 'primary'">Login</btn>
          </div>
        </form>
      </validation-observer>
    </card>
    <div class="blank-footer">
      <router-link to="/terms">Terms</router-link>
      <span class="dot">&bull;</span>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
import { Card, Btn, InputField } from "@/components";
import { mapActions } from "vuex";

export default {
  name: "Login",

  components: {
    Card,
    Btn,
    InputField
  },

  data() {
    return {
      signin: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    ...mapActions("auth", ["login"]),
    onSubmit() {
      this.$router.push("/app");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>