<template>
  <div class="defendant-page">
    <div class="heading">
      <h1 class="title">被告</h1>
      <h2>defendant</h2>
    </div>
    <p>あなたの反省度を入力してください</p>
    <star-rating
      :show-rating="false"
      active-color="#434E48"
      class="star-rating"
      @rating-selected="setRegretRate"
    />
    <button-link
      v-if="regretRate"
      location="/judgement"
      label="次へ"
      color="black"
    />
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

<style scoped lang="postcss">
.defendant-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;

  & .heading {
    margin-bottom: 52px;

    & .title {
      display: block;
      font-weight: bold;
      font-size: 40px;
      letter-spacing: 1px;
      text-align: center;
    }

    & h2 {
      font-size: 20px;
    }
  }

  & p {
    margin-bottom: 48px;
  }

  & .star-rating {
    margin-bottom: 52px;
  }

  & .link {
    display: block;
    font-weight: 300;
    font-size: 32px;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
}
</style>
