import {getUserInfo, getUserMenu} from '../../service'
import nav from './nav'
// 状态
const state = {
    userInfo: {},
    userMenu: [],
}

// 通常，在getters中设置计算属性
const getters = {

}

// 动作
const actions = {
  getUserInfo({commit}) {
    getUserInfo().then(userInfo => {
      commit('setUserInfo', userInfo)
    }).catch(err => {
      console.log(err)
    })
  },
  getUserMenu({commit}) {
    getUserMenu().then(userMenu => {
      commit('setUserMenu', userMenu)
      commit('setHeadMenus', userMenu, {root: true})
    }).catch(err => {
      console.log(err)
    })
  },
}

// 变更
const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  setUserMenu(state, userMenu) {
    state.userMenu = userMenu
  },
}

export default {
  state,
  mutations,
  getters,
  actions,
}
