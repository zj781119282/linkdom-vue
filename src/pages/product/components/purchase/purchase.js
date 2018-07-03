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
      color: '',
      loaded: true,
    };
  },
  computed: {
    ...mapState([
      'isLogged',
    ]),
  },
  methods: {
    purchase() {
      if (!this.color) return;
      if (!this.isLogged) {
        this.$router.push('/login/signin');
        return;
      }

      this.loaded = false;
      const params = {
        productId: this.product.id,
        count: 1,
      };
      postData().addToCart(params).then(res => {
        this.loaded = true;
        this.$router.push('/purchase/cart');
      });
    },
    changeColor(item) {
      this.color = item;
      this.$emit('changeColor', item)
    },
  },
};
