<template>
  <nuxt-link
    :to="location"
    :class="['button-link', { red: isRed, black: isBlack }]"
  >
    {{ label }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    location: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    isRed() {
      return this.color === 'red'
    },
    isBlack() {
      return this.color === 'black'
    },
  },
}
</script>

<style scoped lang="postcss">
.button-link {
  display: block;
  padding: 12px 16px;
  background-color: #722319;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.1em;

  &::after {
    content: url('../assets/images/triangle.svg');
  }

  &.red {
    background-color: #b53827;
  }

  &.black {
    background-color: #434e48;
  }
}
</style>
