const mutations = {
  barDisply: state => {
    state.barPosition = !state.barPosition
  },
  wrapperDisply: state => {
    state.wrapper = !state.wrapper
  },
  themeChange: state => {
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
  },
  boxDisplay: state => {
    state.box = !state.box
  },
  boxType: (state, type) => {
    state.boxType = type
  },
  searchAnimation: state => {
    state.searchDelete = !state.searchDelete
  }
}

export default mutations
