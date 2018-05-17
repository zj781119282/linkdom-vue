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
      phoneError: false,
      captchaError: false,
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
    getPhone(phone, hasError) {
      this.phone = phone;
      this.phoneError = hasError;
    },
    getCaptcha(captcha, hasError) {
      this.captcha = captcha;
      this.captchaError = hasError;
    },
    signup() {
      if (!this.loaded || this.phoneError || this.captchaError || this.errors.any()) return;
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
