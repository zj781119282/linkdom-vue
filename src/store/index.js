import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';

import mutations from './mutations';

Vue.use(Vuex);

const state = {
  isLogged: Cookies.get('isLogged'),
  account: Cookies.get('phone'),
};

export default new Vuex.Store({
  state,
  mutations,
});
