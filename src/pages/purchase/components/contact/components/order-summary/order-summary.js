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
      count: 0,
      price: 0,
      shipping: 12,
      loaded: false,
    }
  },
  computed: {
    subtotal() {
      return this.count * this.price;
    },
    sum() {
      return this.subtotal + this.shipping;
    },
  },
  methods: {
    getCart() {
      getData().getCart().then(res => {
        this.loaded = true;
        if (!res.result) {
          alert(res.message);
          return;
        }
        this.count = res.data.count;
        this.price = res.data.product.price * res.data.product.discount;
      });
    },
  },
  mounted() {
    this.getCart();
  },
}
