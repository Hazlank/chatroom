const mutations = {
  bardisply: state => {
    state.barPosition = state.barPosition === 'translateX(-300px)' ? 'translateX(0)' : 'translateX(-300px)'
  },
  wrapperdisply: state => {
    state.wrapper = !state.wrapper
  }
}

export default mutations
