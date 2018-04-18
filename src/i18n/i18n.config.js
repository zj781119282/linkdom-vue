import Vue from 'vue';
import VueI18n from 'vue-i18n';

// 引入英文文件
import header_en from './en-US/header.json';
import index_en from './en-US/index.json';
// 引入中文文件
import header_cn from './zh-CN/header.json';
import index_cn from './zh-CN/index.json';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: localStorage._lang === 'zh-CN' ? 'zh-CN' : 'en-US',
  messages: {
    'zh-CN': Object.assign(header_cn, index_cn),
    'en-US': Object.assign(header_en, index_en),
  }
});

/**
 * 切换语言并刷新页面
 * @param id {string}
 */
export const switchLanguage = (id) => {
  i18n.locale = id;
  localStorage._lang = id;
  location.reload();
}
