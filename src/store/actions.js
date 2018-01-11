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
  speekingNumChange ({ commit }, num) {
    commit('speekingNumChange', num)
  },
  updateLocalStorage ({ commit }) {
    commit('updateLocalStorage')
    commit('updateUsertalk')
  },
  scrollRemove ({ commit }, e) {
    commit('scrollRemove', e)
  }
}

export default actions
