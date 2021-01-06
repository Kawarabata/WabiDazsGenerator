<template>
  <div class="judgement-page">
    <div class="heading">
      <h1 class="title">判決</h1>
      <h2>Judgement</h2>
    </div>
    <div class="judgement">
      <span class="prefix">原告は被告に</span>
      <span class="dazs">Häagen-Dazs</span>
      <h2>{{ rateAverage }}個</h2>
      <span class="suffix">渡してください</span>
    </div>
    <button-link location="/" label="仲直りしてはじめに戻る" />
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

<style scoped lang="postcss">
.judgement-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;

  & .heading {
    margin-bottom: 60px;

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

  & .judgement {
    width: 280px;

    & span,
    & h2 {
      display: block;
    }

    & .dazs,
    & h2 {
      font-size: 40px;
      font-weight: bold;
    }

    & .prefix {
      margin-bottom: 20px;
    }

    & .dazs {
      margin-bottom: 16px;
    }

    & h2 {
      display: flex;
      justify-content: center;
      white-space: nowrap;

      &::before {
        content: url('../assets/images/decoration_left.svg');
      }

      &::after {
        content: url('../assets/images/decoration_right.svg');
      }
    }

    & .suffix {
      margin-top: 20px;
      margin-bottom: 50px;
      text-align: right;
    }
  }
}
</style>
