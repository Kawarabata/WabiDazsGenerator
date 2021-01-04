export const state = () => ({
  angerRate: 0,
  regretRate: 0,
})

export const mutations = {
  setAngerRate(state, angerRate) {
    state.angerRate = angerRate
  },

  setRegretRate(state, regretRate) {
    state.regretRate = regretRate
  },

  resetState(state) {
    state.angerRate = 0
    state.regretRate = 0
  },
}
