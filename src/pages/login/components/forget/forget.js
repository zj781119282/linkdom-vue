import loginForm from '@/components/login-form/login-form.vue';
import phoneInput from '@/components/phone-input/phone-input.vue'
import phoneCaptcha from '@/components/phone-captcha/phone-captcha.vue'

export default {
  name: 'forget',
  components: {
    loginForm,
    phoneInput,
    phoneCaptcha,
  },
  data() {
    return {
      phone: '',
      captcha: '',
      password: '',
      re_password: '',
      error: '',
    }
  },
  methods: {
    hideErrorBlock() {
      this.error = '';
    },
    getCountryCode(item) {
      this.countryCode = item.id;
      this.hideErrorBlock();
    },
    getPhone(phone) {
      this.phone = phone;
      this.hideErrorBlock();
    },
    confirm() {
      if (!this.phone) {
        this.error = this.$t('LOGIN.SIGNUP.ERROR_ACCOUNT');
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
      if (!this.captcha) {
        this.error = this.$t('LOGIN.SIGNUP.ERROR_CAPTCHA');
        return;
      }
      this.hideErrorBlock();
      this.$router.push('/login/signin');
    }
  },
}
