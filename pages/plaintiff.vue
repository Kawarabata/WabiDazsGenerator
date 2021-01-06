<template>
  <div class="plaintiff-page">
    <div class="heading">
      <h1 class="title">原告</h1>
      <h2>plaintiff</h2>
    </div>
    <p>あなたの怒り度を入力してください</p>
    <star-rating
      :show-rating="false"
      active-color="#b53827"
      class="star-rating"
      @rating-selected="setAngerRate"
    />
    <button-link
      v-if="angerRate"
      location="/defendant"
      label="次へ"
      color="red"
    />
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

<style scoped lang="postcss">
.plaintiff-page {
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
