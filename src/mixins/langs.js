import en from '@/langs/en'
import tk from '@/langs/tk'

import { mapState } from 'vuex';

export default {
  data() {
    return {
      langs: {
        en,
        tk,
      }
    }
  },
  computed: {
    ...mapState('app', ['lang']),
  },
  methods: {
    __(code) {
      if (this.lang) {
        const isoLang = this.lang.iso
        return this.langs[isoLang][code] ? this.langs[isoLang][code] : code
      }
      return code
    }
  }
}