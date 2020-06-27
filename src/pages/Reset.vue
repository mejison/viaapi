<template>
  <div class="blank-wrapper">
    <card class="blank">
      <back-btn label="Login" link="/" class="btn-back" />

      <h1 class="blank-header">Reset your Password</h1>
      <h5 class="blank-subheader">Almost done, just enter your new Password below.</h5>

      <form class="blank-form">
        <div class="form-group">
          <label>New Password</label>
          <input-field placeholder="New Password" />
        </div>

        <div class="form-group">
          <label>Comfirm Password</label>
          <input-field placeholder="Comfirm Password" />
        </div>

        <div class="d-flex">
          <btn class="ml-auto">Reset Password</btn>
        </div>
      </form>
    </card>
  </div>
</template>

<script>
import { Card, Btn, InputField, BackBtn } from "@/components";

export default {
  name: "Forgot",

  components: {
    Card,
    Btn,
    InputField,
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