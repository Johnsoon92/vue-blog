// 状态
const state = {
    headMenus: [],
    headIndex: 0,
}

// 通常，在getters中设置计算属性
const getters = {
  sideMenus(state) {
    return state.headMenus && state.headMenus.length ? state.headMenus[state.headIndex].children : []
  },
}

// 动作
const actions = {
  setHeadMenus({commit}, menus) {
    commit('setHeadMenus', menus)
  },
}

// 变更
const mutations = {
  setHeadMenus(state, menus) {
    state.headMenus = menus
  },
}

export default {
  state,
  mutations,
  getters,
  actions,
}
