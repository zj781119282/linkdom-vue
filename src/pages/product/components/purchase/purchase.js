import { mapState } from 'vuex';

export default {
  name: 'purchase',
  props: [
    'product',
  ],
  data() {
    return {
      choseColor: 0,
    };
  },
  computed: {
    ...mapState([
      'isLogged',
      'account',
    ]),
  },
  methods: {
    purchase() {
      if (!this.isLogged) {
        this.$router.push('/login/signin');
      } else {
        this.$router.push('/purchase/cart');
      }
    },
  },
};
