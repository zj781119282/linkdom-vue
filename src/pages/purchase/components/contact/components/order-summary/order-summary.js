import getData from 'service/getData'
import loading from '@/components/loading/loading.vue';

export default {
  name: 'order-summary',
  components: {
    loading,
  },
  data() {
    return {
      showProductList: window.innerWidth > 1024,
      product: {},
      loaded: false,
    }
  },
  methods: {
    getCart() {
      getData().getCart().then(res => {
        console.log(res.data)
        this.loaded = true;
      });
    },
  },
  mounted() {
    this.getCart();
  },
}
