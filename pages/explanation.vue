<template>
  <div class="explanation-page">
    <img src="~/assets/images/logo.png" alt="詫びダッツGenerator" />
    <ol>
      <li>
        <h2>STEP 1</h2>
        <p>怒っている人が原告として怒りの度合いを星で表してください。</p>
      </li>
      <li>
        <h2>STEP 2</h2>
        <p>怒られている人が被告として反省の度合いを星で表してください。</p>
      </li>
      <li>
        <h2>STEP 3</h2>
        <p>
          双方が入力を終えるとお詫びにふさわしいHäagen-Dazsの個数が判決として示されます。
          被告は判決に従い<span class="emphasized">速やかに</span
          >原告にアイスを渡してください。
        </p>
      </li>
      <li>
        <h2>STEP 4</h2>
        <p>
          お詫びを受け取った原告は被告を許し、<span class="emphasized"
            >今後蒸し返してはいけません。</span
          >
        </p>
      </li>
    </ol>
    <h3>注意</h3>
    <p>被告と原告はお互いの入力を見てはいけません。</p>
    <br />
    <p>
      被告はお詫びのアイスを<span class="emphasized">食べてはいけません。</span
      ><br />
      食べたければ自分用に買ってください。
    </p>
    <div class="button-wrapper">
      <button-link
        location="/plaintiff"
        label="上記に同意してすすむ"
        class="button-link"
        @click.native="resetState"
      />
    </div>
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

<style scoped lang="postcss">
.explanation-page {
  & img {
    display: block;
    width: 124px;
    margin: 0 auto 28px;
  }

  & ol {
    margin-bottom: 24px;
  }

  & li + li {
    margin-top: 12px;
  }

  & h2,
  & h3 {
    font-size: 16px;
    color: #722319;
  }

  & p {
    font-size: 12px;
    text-align: left;
    letter-spacing: 1px;
  }

  & .emphasized {
    font-weight: bold;
    color: #722319;
  }

  & .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
}
</style>
