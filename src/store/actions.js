const actions = {
  bardisply ({ commit }) {
    commit('bardisply')
    commit('wrapperdisply')
  },
  wrapperdisply ({ commit }) {
    commit('wrapperdisply')
  },
  themechange ({ commit }) {
    commit('themechange')
  }
}

export default actions
