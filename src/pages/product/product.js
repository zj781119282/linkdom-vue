import getData from 'service/getData'
import headTop from '@/components/header/header.vue';
import foot from '@/components/footer/footer.vue';
import loading from '@/components/loading/loading.vue';
import display from './components/display/display.vue';
import purchase from './components/purchase/purchase.vue';

export default {
  name: 'product',
  components: {
    headTop,
    foot,
    loading,
    display,
    purchase,
  },
  data() {
    return {
      product: {},
      loaded: false,
      color: '黑色',
    }
  },
  methods: {
    getProductInfo() {
      getData().getProductInfo().then(res => {
        let color = res.data.color;
        color = color.substring(1, color.length - 1).split(',');
        color.forEach((item, index) => {
          color[index] = item.substring(1, item.length - 1);
        });
        this.product = res.data;
        this.product.color = color;
        this.loaded = true;
      })
    },
    changeColor(item) {
      this.color = item;
    },
  },
  created() {
    this.getProductInfo();
  },
};
