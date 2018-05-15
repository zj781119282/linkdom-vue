import loading from '@/components/loading/loading.vue'
import loginForm from '@/components/login-form/login-form.vue';
import phoneInput from '@/components/phone-input/phone-input.vue'
import phoneCaptcha from '@/components/phone-captcha/phone-captcha.vue'
import postData from 'service/postData'

export default {
  name: 'signup',
  components: {
    loginForm,
    phoneInput,
    phoneCaptcha,
    loading,
  },
  data() {
    return {
      countryCode: '+86',
      phone: '',
      captcha: '',
      password: '',
      re_password: '',
      error: '',
      loaded: true,
    }
  },
  methods: {
    hideErrorBlock() {
      this.error = '';
    },
    pressEnter(ev) {
      if (ev.keyCode === 13) {
        this.signup();
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
    getCaptcha(captcha) {
      this.captcha = captcha;
    },
    signup() {
      if (!this.phone) {
        this.error = this.$t('LOGIN.SIGNUP.ERROR_ACCOUNT');
        return;
      }
      if (!this.captcha) {
        this.error = this.$t('LOGIN.SIGNUP.ERROR_CAPTCHA');
        return;
      }
      if (!this.password) {
        this.error = this.$t('LOGIN.SIGNUP.ERROR_PWD');
        return;
      }
      if (!this.re_password || this.re_password !== this.password) {
        this.error = this.$t('LOGIN.SIGNUP.ERROR_REPWD');
        return;
      }
      if (!this.loaded) return;
      this.loaded = false;
      const params = {
        countryCode: this.countryCode,
        phone: this.phone,
        code: this.captcha,
      };
      postData().verifyRegisterCode(params).then(res => {
        if (res.result) {
          const data = Object.assign({
            password: this.password,
          }, params);
          postData().register(data).then(response => {
            if (response.result) {
              this.hideErrorBlock();
              this.loaded = true;
              this.$router.push('/login/signin');
            } else {
              this.error = response.message;
              this.loaded = true;
            }
          });
        } else {
          this.error = res.message;
          this.loaded = true;
        }
      });
    },
    getCaptchaError(message) {
      this.error = message;
    },
  },
}
