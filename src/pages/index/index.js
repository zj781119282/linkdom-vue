import headTop from '@/components/header/header.vue';
import foot from '@/components/footer/footer.vue';
import loading from '@/components/loading/loading.vue';
import banner from './components/banner/banner.vue';

export default {
  name: 'index',
  components: {
    headTop,
    foot,
    banner,
    loading,
  },
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  },
};
