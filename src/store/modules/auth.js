import api from '@/api/auth'

const auth = {
  namespaced: true,
  state: {
    me: {

    },
  },
  actions: {
    login({ commit }, data) {
      return api.login(data).then(response => {
        console.log(response)
        commit('setMe', {})
      })
    }
  },
  mutations: {
    setMe(state, data) {
      state.me = data
    }
  },
}

export default auth