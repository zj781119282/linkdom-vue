import Cookies from 'js-cookie';
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

import { switchLanguage } from '@/i18n/i18n.config';
import {
  LOGIN_STATUS,
  USER_ACCOUNT,
} from '@/store/mutations-type';

export default {
  name: 'head-top',
  props: [
    'page'
  ],
  data() {
    return {
      windowWidth: window.innerWidth,
      showNavList: window.innerWidth > 1024,
      showUserList: window.innerWidth < 1025,
      showLanguageList: window.innerWidth < 1025,
      currLang: localStorage._lang === 'zh-CN' ? '简体中文' : 'English',
    };
  },
  computed: {
    ...mapState([
      'isLogged',
      'account',
    ]),
  },
  methods: {
    ...mapMutations({
      LOGIN_STATUS,
      USER_ACCOUNT,
    }),
    logout() {
      Cookies.remove('isLogged');
      Cookies.remove('phone');
      Cookies.remove('userId');
      Cookies.remove('xtoken');
      this[LOGIN_STATUS](false);
      this[USER_ACCOUNT]('');
      location.reload();
    },
    switchLang(id) {
      switchLanguage(id);
    },
  }
};
