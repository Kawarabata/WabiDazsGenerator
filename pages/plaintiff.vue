<template>
  <div class="plaintiff-page">
    <div>
      <h1 class="title">原告</h1>
      <h2>怒り度</h2>
      <star-rating
        :show-rating="false"
        :rounded-corners="true"
        active-color="#d7003a"
        @rating-selected="setAngerRate"
      />
    </div>
    <nuxt-link v-if="angerRate" to="/defendant">被告へ</nuxt-link>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating,
  },
  computed: {
    angerRate() {
      return this.$store.state.angerRate
    },
  },
  methods: {
    setAngerRate(angerRate) {
      this.$store.commit('setAngerRate', angerRate)
    },
  },
}
</script>

<style>
.plaintiff-page {
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
