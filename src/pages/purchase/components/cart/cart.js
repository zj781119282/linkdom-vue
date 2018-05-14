import getData from 'service/getData'
import loading from '@/components/loading/loading.vue';

export default {
  name: 'cart',
  components: {
    loading,
  },
  data() {
    return {
      price: '$9999.99',
      quantity: 1,
      loaded: false,
    }
  },
  computed: {
    total() {
      return `$${this.price.substr(1) * this.quantity}`
    }
  },
  methods: {
    update() {
      location.reload();
    },
    getCart() {
      getData().getCart().then(res => {
        console.log(res)
        this.loaded = true;
      });
    },
  },
  mounted() {
    this.getCart();
  },
}
