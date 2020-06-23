<template>
  <div class="blank-wrapper">
    <card class="blank">
      <back-btn label="Login" class="btn-back" />

      <h1 class="blank-header">Forgot Password</h1>
      <h5 class="blank-subheader">Please enter your registered email</h5>

      <form class="blank-form">
        <div class="form-group">
          <label>Email</label>
          <Input placeholder="Email" />
        </div>

        <div class="d-flex">
          <btn class="ml-auto">Send</btn>
        </div>
      </form>
    </card>
  </div>
</template>

<script>
import { Card, Btn, Input, BackBtn } from "@/components";

export default {
  name: "Forgot",

  components: {
    Card,
    Btn,
    Input,
    BackBtn
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.btn-back {
  margin-bottom: 27px;
  display: inline-block;
}

.blank {
  padding-top: 13px;
}
</style>