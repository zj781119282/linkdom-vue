import getData from 'service/getData'

export default {
  name: 'cart',
  data() {
    return {
      price: '$9999.99',
      quantity: 1,
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
      });
    },
  },
  mounted() {
    this.getCart();
  },
}
