const app = {
  namespaced: true,
  state: {
    lang: {
      name: "English",
      flag: "/assets/images/english-flag.png",
      iso: "en",
    },
    langs: [
      {
        label: 'English',
        iso: 'en'
      },
      {
        label: 'Turkish',
        iso: 'tk',
      },
    ]
  },
  actions: {
    changeLang({ commit }, lang) {
      commit('setLang', lang)
    },
  },
  mutations: {
    setLang(state, lang) {
      state.lang = lang
    },
  },
}

export default app