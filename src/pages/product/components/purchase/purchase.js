import { mapState } from 'vuex';
import postData from 'service/postData'

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
        const params = {
          productId: this.product.id,
          count: 1,
        };
        postData().addToCart(params).then(res => {
          console.log(res)
          this.$router.push('/purchase/cart');
        });
      }
    },
  },
};
