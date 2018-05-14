import { mapState } from 'vuex';
import loading from '@/components/loading/loading.vue';
import postData from 'service/postData'

export default {
  name: 'purchase',
  components: {
    loading,
  },
  props: [
    'product',
  ],
  data() {
    return {
      choseColor: 0,
      loaded: true,
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
      } else if (this.loaded) {
        this.loaded = false;
        const params = {
          productId: this.product.id,
          count: 1,
        };
        postData().addToCart(params).then(res => {
          console.log(res)
          this.loaded = true;
          this.$router.push('/purchase/cart');
        });
      }
    },
  },
};
