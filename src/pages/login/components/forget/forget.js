import loginForm from '@/components/login-form/login-form.vue';

export default {
  name: 'forget',
  components: {
    loginForm,
  },
  data() {
    return {
      account: '',
      captcha: '',
      ems: '',
      password: '',
      re_password: '',
      error: '',
    }
  },
  methods: {
    hideErrorBlock() {
      this.error = '';
    },
    confirm() {
      if (!this.account) {
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
      if (!this.ems) {
        this.error = this.$t('LOGIN.SIGNUP.ERROR_EMS');
        return;
      }
      this.hideErrorBlock();
      this.$router.push('/login/signin');
    }
  },
}
