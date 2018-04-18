import { switchLanguage } from '@/i18n/i18n.config';

export default {
  name: 'head-top',
  props: [
    'page'
  ],
  mounted() {
    console.log(this.showNavList);
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      showNavList: window.innerWidth > 1024,
      showUserList: window.innerWidth < 1025,
      showLanguageList: window.innerWidth < 1025,
      currLang: localStorage._lang === 'zh-CN' ? '简体中文' : 'English',
    };
  },
  methods: {
    switchLang(id) {
      switchLanguage(id);
    },
  }
};
