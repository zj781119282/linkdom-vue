import Cookies from 'js-cookie';
import { mapMutations } from 'vuex';

import loginForm from '@/components/login-form/login-form.vue';
import {
  LOGIN_STATUS,
  USER_ACCOUNT,
} from '@/store/mutations-type';

export default {
  name: 'signin',
  components: {
    loginForm,
  },
  data() {
    return {
      account: '',
      password: '',
      error: '',
    }
  },
  methods: {
    ...mapMutations({
      LOGIN_STATUS,
      USER_ACCOUNT,
    }),
    hideErrorBlock() {
      this.error = '';
    },
    signin() {
      if (!this.account || !this.password) {
        this.error = this.$t('LOGIN.SIGNIN.ERROR');
        return;
      }
      this.hideErrorBlock();
      Cookies.set('isLogged', true, { expires: 1 });
      Cookies.set('account', this.account, { expires: 1 });
      this[LOGIN_STATUS](true);
      this[USER_ACCOUNT](this.account);
      this.$router.push('/index');
    },
  },
}
