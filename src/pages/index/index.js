import headTop from '@/components/header/header.vue';
import foot from '@/components/footer/footer.vue';
import banner from './components/banner/banner.vue';

export default {
  name: 'index',
  mounted() {
    console.log('index mounted...')
  },
  components: {
    headTop,
    foot,
    banner,
  },
};
