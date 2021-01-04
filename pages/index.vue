<template>
  <div class="home">
    <h1 class="title">詫びダッツGenerator</h1>
    <nuxt-link to="/plaintiff" class="link" @click.native="resetState">
      裁判へGo
    </nuxt-link>
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

<style>
.home {
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
}
</style>
