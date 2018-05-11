import postData from 'service/postData'

export default {
  name: 'phone-captcha',
  props: [
    'phone',
    'countryCode',
  ],
  data() {
    return {
      send: false,
      countdown: 60,
      captcha: '',
    }
  },
  methods: {
    getVerifyCode() {
      if (this.send || !this.phone) return;
      const params = {
        countryCode: this.countryCode,
        phone: this.phone,
      };
      postData().getRegisterVerifyCode(params).then(res => {
        this.send = true;
        this.calcTime();
      });
    },
    calcTime() {
      const _this = this;
      const interval = setInterval(() => {
        _this.countdown--;
        if (this.countdown < 0) {
          clearInterval(interval);
          _this.send = false;
          _this.countdown = 60;
        }
      }, 1000);
    },
    emitCaptcha() {
      this.$emit('captcha', this.captcha);
    },
  },
}
