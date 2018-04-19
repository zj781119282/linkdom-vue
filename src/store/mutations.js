import {
  LOGIN_STATUS,
  USER_ACCOUNT,
} from './mutations-type';

export default {
  [LOGIN_STATUS](state, bool) {
    state.isLogged = bool;
  },
  [USER_ACCOUNT](state, account) {
    state.account = account;
  },
};
