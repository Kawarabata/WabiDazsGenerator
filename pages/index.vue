<template>
  <div class="home">
    <img src="~/assets/images/logo.png" alt="詫びダッツGenerator" />
    <p>
      “些細なことだけど許せない”
      <br />
      そんなときはHäagen-Dazsで解決しましょう
      <br />
      怒りと反省の度合いに応じて
      <br />
      お詫びにふさわしい数を計算します
    </p>
    <button-link
      location="/explanation"
      label="START"
      @click.native="resetState"
    />
  </div>
</template>

<script>
export default {
  methods: {
    resetState() {
      this.$store.commit('resetState')
    },
  },
}
</script>

<style scoped lang="postcss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 450px;

  & img {
    width: 250px;
  }

  & p {
    text-align: left;
  }
}
</style>
