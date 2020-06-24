import api from '@/api/auth'

const auth = {
  namespaced: true,
  state: {
    me: {
      name: "Bircan Tuner",
      image: "/assets/images/avatar.png",
      lang: {
        name: "English",
        flag: "/assets/images/english-flag.png",
      }
    },
  },
  actions: {
    login({ commit }, data) {
      return api.login(data).then(response => {
        console.log(response)
        commit('setMe', {})
      })
    },
    changeLang({ commit }, lang) {
      commit('setLang', lang);
    }
  },
  mutations: {
    setLang(state, lang) {
      state.me = {
        ...state.me,
        lang: lang
      }
    },
    setMe(state, data) {
      state.me = data
    }
  },
}

export default auth