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
  speekingNumChange: (state, num) => {
    state.speekingNum = num
  },
  updateLocalStorage: state => {
    localStorage.setItem('messagecontent', JSON.stringify(state.messagecontent))
  },
  updateUsertalk: state => {
    state.userList.forEach((list, index) => {
      var contentIetm = list.messagecontent
      list['context'] = contentIetm[contentIetm.length - 1].text
    })
  },
  scrollRemove: (state, e) => {
    e.parentElement.scrollTop = e.offsetHeight - e.parentElement.offsetHeight
  }
}

export default mutations
