import headTop from '@/components/header/header.vue';
import foot from '@/components/footer/footer.vue';
import loading from '@/components/loading/loading.vue';
import banner from './components/banner/banner.vue';
import section_1 from './components/section_1.vue';
import section_2 from './components/section_2.vue';
import section_3 from './components/section_3.vue';
import section_4 from './components/section_4.vue';
import section_5 from './components/section_5.vue';
import section_6 from './components/section_6.vue';
import section_7 from './components/section_7.vue';
import section_8 from './components/section_8.vue';
import section_9 from './components/section_9.vue';
import section_10 from './components/section_10.vue';
import section_11 from './components/section_11.vue';
import purchase from './components/purchase.vue';

export default {
  name: 'index',
  components: {
    headTop,
    foot,
    banner,
    loading,
    section_1,
    section_2,
    section_3,
    section_4,
    section_5,
    section_6,
    section_7,
    section_8,
    section_9,
    section_10,
    section_11,
    purchase,
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
