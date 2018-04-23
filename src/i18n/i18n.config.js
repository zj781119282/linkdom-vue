import Vue from 'vue';
import VueI18n from 'vue-i18n';

// 引入英文文件
import header_en from './en-US/header.json';
import index_en from './en-US/index.json';
import product_en from './en-US/product.json';
import login_en from './en-US/login.json';
import purchase_en from './en-US/purchase.json';
import download_en from './en-US/download.json';
// 引入中文文件
import header_cn from './zh-CN/header.json';
import index_cn from './zh-CN/index.json';
import product_cn from './zh-CN/product.json';
import login_cn from './zh-CN/login.json';
import purchase_cn from './zh-CN/purchase.json';
import download_cn from './zh-CN/download.json';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: localStorage._lang || 'en-US',
  messages: {
    'zh-CN': Object.assign(header_cn, index_cn, product_cn, login_cn, purchase_cn, download_cn),
    'en-US': Object.assign(header_en, index_en, product_en, login_en, purchase_en, download_en),
  }
});

/**
 * 切换语言并刷新页面
 * @param id {string}
 */
export const switchLanguage = (id) => {
  i18n.locale = id;
  localStorage.setItem('_lang', id);
  location.reload();
}
