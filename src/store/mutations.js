const mutations = {
  bardisply: state => {
    state.barPosition = state.barPosition === 'translateX(-270px)' ? 'translateX(0)' : 'translateX(-270px)'
  },
  wrapperdisply: state => {
    state.wrapper = !state.wrapper
  },
  themechange: state => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark'
  },
  userNumChange: (state, num) => {
    state.userNum = num
  }
}

export default mutations
