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
  },
  userNumChange ({ commit, num }) {
    commit('themechange', num)
  }
}

export default actions
