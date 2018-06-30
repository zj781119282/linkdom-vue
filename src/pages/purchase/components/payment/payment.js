export default {
  name: 'payment',
  data() {
    return {
      order: {},
      address: {},
      product: {},
      payMethod: 0,
    }
  },
  methods: {
    initPaypal(total) {
      paypal.Button.render({
        env: 'sandbox',
        client: {
          sandbox: 'demo_sandbox_client_id'
        },
        payment: function (data, actions) {
          return actions.payment.create({
            transactions: [{
              amount: {
                total,
                currency: 'HKD'
              }
            }]
          });
        },
        onAuthorize: function (data, actions) {
          return actions.payment.execute()
            .then(function () {
              window.alert('Thank you for your purchase!');
            });
        }
      }, '#paypal-btn');
    },
  },
  mounted() {
    this.order = this.$route.params.order;
    this.address = this.order.address;
    this.product = this.order.product;
    const totalPrice = this.product.price * this.product.discount * this.order.count;
    this.initPaypal(totalPrice);
  },
}
