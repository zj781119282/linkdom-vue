import Cookies from 'js-cookie'
import { mapMutations } from 'vuex'

import postData from 'service/postData'
import loading from '@/components/loading/loading.vue'
import loginForm from '@/components/login-form/login-form.vue'
import phoneInput from '@/components/phone-input/phone-input.vue'
import { encode, decode } from 'service/encryption'
import {
  LOGIN_STATUS,
  USER_ACCOUNT,
} from '@/store/mutations-type';

export default {
  name: 'signin',
  components: {
    loginForm,
    phoneInput,
    loading,
  },
  data() {
    return {
      countryCode: '+86',
      phone: '',
      password: '',
      error: '',
      loaded: true,
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
    pressEnter(ev) {
      if (ev.keyCode === 13) {
        this.signin();
      }
      return;
    },
    getCountryCode(item) {
      this.countryCode = item.id;
      this.hideErrorBlock();
    },
    getPhone(phone) {
      this.phone = phone;
      this.hideErrorBlock();
    },
    signin() {
      if (!this.phone || !this.password) {
        this.error = this.$t('LOGIN.SIGNIN.ERROR');
        return;
      }
      if (!this.loaded) return;
      this.loaded = false;
      const params = {
        countryCode: this.countryCode,
        phone: this.phone,
        password: this.password,
      };
      postData().login(params).then(res => {
        if (res.result) {
          const data = res.data;
          this.hideErrorBlock();
          Cookies.set('isLogged', true, { expires: 1 });
          Cookies.set('phone', this.phone, { expires: 1 });
          Cookies.set('userId', data.userId, { expires: 1 });
          this[LOGIN_STATUS](true);
          this[USER_ACCOUNT](this.phone);
          this.loaded = true;
          this.$router.push('/index');
          const loginInfo = {
            timestamp: new Date().valueOf(),
            userId: data.userId,
            token: data.xToken,
          };
          Cookies.set('xtoken', encode(JSON.stringify(loginInfo)));
        } else {
          this.error = res.message;
        }
      });
    },
  },
}
