const actions = {
  bardisply ({ commit }) {
    commit('bardisply')
    commit('wrapperdisply')
  },
  wrapperdisply ({ commit }) {
    commit('wrapperdisply')
  }
}

export default actions
