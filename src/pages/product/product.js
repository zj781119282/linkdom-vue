import getData from 'service/getData'
import headTop from '@/components/header/header.vue';
import foot from '@/components/footer/footer.vue';
import display from './components/display/display.vue';
import purchase from './components/purchase/purchase.vue';

export default {
  name: 'product',
  components: {
    headTop,
    foot,
    display,
    purchase,
  },
  data() {
    return {
      product: {},
    }
  },
  methods: {
    getProductInfo() {
      getData().getProductInfo().then(res => {
        this.product = res.data;
      })
    },
  },
  mounted() {
    this.getProductInfo();
  },
};
