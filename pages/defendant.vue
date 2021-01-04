<template>
  <div class="defendant-page">
    <div>
      <h1 class="title">被告</h1>
      <h2>反省度</h2>
      <star-rating
        :show-rating="false"
        :rounded-corners="true"
        active-color="#435b84"
        @rating-selected="setRegretRate"
      />
    </div>
    <nuxt-link v-if="regretRate" to="/judgement">判決へ</nuxt-link>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating,
  },
  validate({ store }) {
    return store.state.angerRate !== 0
  },
  computed: {
    regretRate() {
      return this.$store.state.regretRate
    },
  },
  methods: {
    setRegretRate(regretRate) {
      this.$store.commit('setRegretRate', regretRate)
    },
  },
}
</script>

<style>
.defendant-page {
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
