<template>
  <div class="error-page">
    <div>
      <h1 class="title">すみません、<br />エラーのようです...</h1>
      <p>リロードするとこうなります</p>
    </div>
    <nuxt-link to="/">はじめに戻る</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style>
.error-page {
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
