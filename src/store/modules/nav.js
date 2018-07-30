// 状态
const state = {
    headMenus: [],
    headIndex: '',
}

// 通常，在getters中设置计算属性
const getters = {
  sideMenus(state) {
    let sideMenus = []
    state.headMenus.forEach(menu => {
      if (menu.index === state.headIndex) {
        sideMenus = menu.children
      }
      if (menu.children && menu.children.length) {
        menu.children.forEach(submenu => {
          if (submenu.index === state.headIndex) {
            sideMenus = submenu.children
          }
        })
      }
    })
    return sideMenus
  },
}

// 动作
const actions = {
  setHeadMenus({commit}, menus) {
    commit('setHeadMenus', menus)
  },
  setHeadIndex({commit}, headIndex) {
    commit('setHeadIndex', headIndex)
  },
}

// 变更
const mutations = {
  setHeadMenus(state, menus) {
    state.headMenus = menus
  },
  setHeadIndex(state, headIndex) {
    state.headIndex = headIndex
  },
}

export default {
  state,
  mutations,
  getters,
  actions,
}
