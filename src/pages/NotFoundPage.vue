<template>
  <div class="not-found-page">
    <div class="image"></div>
    <h1>404</h1>
    <h3>Sayfa Bulunamadl!</h3>
    <div class="go-to-home">
      <btn @click="onHandleClick">Anasayfaya Dön</btn>
    </div>
  </div>
</template>

<script>
import { Btn } from "@/components";
export default {
  name: "not-found-page",

  components: {
    Btn
  },

  methods: {
    onHandleClick() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.not-found-page {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .go-to-home {
    display: inline-block;
    margin: 40px auto auto auto;
    margin-bottom: auto;
  }

  .image {
    background-image: url("/assets/images/404-bg.png");
    min-height: 426px;
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-bottom: auto;
  }

  height: 100%;
  background: #e5e5e5;

  h1,
  h3 {
    font-family: Nunito;
    font-style: normal;
    color: #444444;
    text-align: center;
  }

  h1 {
    font-weight: bold;
    font-size: 60px;
    letter-spacing: -0.065em;
  }

  h3 {
    font-size: 26px;
    font-style: normal;
    font-weight: normal;
  }
}
</style>