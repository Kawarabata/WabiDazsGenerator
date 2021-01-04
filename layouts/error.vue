<template>
  <div class="error-page">
    <template v-if="error.statusCode === 404">
      <h1 class="title">すみません、<br />エラーのようです...</h1>
      <p>リロードするとこうなります</p>
      <nuxt-link to="/">はじめに戻る</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style>
.error-page {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
