import getData from 'service/getData'
import postData from 'service/postData'
import loading from '@/components/loading/loading.vue';

export default {
  name: 'cart',
  components: {
    loading,
  },
  data() {
    return {
      price: 0,
      quantity: 0,
      countOnServer: 0,
      product: {},
      loaded: false,
      addLoading: false,
    }
  },
  computed: {
    total() {
      return this.price * this.quantity;
    }
  },
  methods: {
    update() {
      location.reload();
    },
    getCart() {
      getData().getCart().then(res => {
        this.loaded = true;
        if (!res.result) {
          alert(res.message);
          return;
        }
        this.product = res.data.product;
        this.price = this.product.price * this.product.discount;
        this.quantity = res.data.count;
        this.countOnServer = res.data.count;
      });
    },
    clearing() {
      if (this.quantity === this.countOnServer) {
        this.$router.push('/purchase/contact');
      } else {
        this.addLoading = true;
        const params = {
          productId: 1,
          count: this.quantity - this.countOnServer,
        };
        postData().addToCart(params).then(res => {
          this.addLoading = false;
          this.$router.push('/purchase/contact');
        });
      }
    },
  },
  mounted() {
    this.getCart();
  },
}
