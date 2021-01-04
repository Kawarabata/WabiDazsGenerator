<template>
  <div class="judgement-page">
    <div>
      <h1 class="title">判決！</h1>
      <h2>{{ rateAverage }}個の詫びダッツ！</h2>
    </div>
    <nuxt-link to="/">はじめに戻る</nuxt-link>
  </div>
</template>

<script>
export default {
  validate({ store }) {
    return store.state.angerRate !== 0 && store.state.regretRate !== 0
  },
  computed: {
    angerRate() {
      return this.$store.state.angerRate
    },
    regretRate() {
      return this.$store.state.regretRate
    },
    rateAverage() {
      return Math.round((this.angerRate + this.regretRate) / 2)
    },
  },
}
</script>

<style>
.judgement-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}

.link {
  display: block;
  font-weight: 300;
  font-size: 32px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
