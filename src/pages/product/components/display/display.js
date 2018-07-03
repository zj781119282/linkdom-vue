import { swiper, swiperSlide } from 'vue-awesome-swiper';

import slide1_b from './../../../../assets/LinkDam-black-01.png'
import slide2_b from './../../../../assets/LinkDam-black-02.png'
import slide3_b from './../../../../assets/LinkDam-black-03.png'
import slide1_w from './../../../../assets/LinkDam-white-01.png'
import slide2_w from './../../../../assets/LinkDam-white-02.png'
import slide3_w from './../../../../assets/LinkDam-white-03.png'



export default {
  name: 'display',
  components: {
    swiper,
    swiperSlide,
  },
  props: [
    'color',
  ],
  data() {
    return {
      currentItem: slide1_b,
      items: [
        {
          slide: slide1_b,
          color: '黑色',
          id: 1,
        },
        {
          slide: slide2_b,
          color: '黑色',
          id: 2,
        },
        {
          slide: slide3_b,
          color: '黑色',
          id: 3,
        },
        {
          slide: slide1_w,
          color: '白色',
          id: 4,
        },
        {
          slide: slide2_w,
          color: '白色',
          id: 5,
        },
        {
          slide: slide3_w,
          color: '白色',
          id: 6,
        },
      ],
      swiperOption: {
        slidesPerView: 3.5,
        loop: false,
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.displaySwiper.swiper;
    },
  },
  watch: {
    color(nv) {
      if (nv == '黑色') {
        this.currentItem = slide1_b;
      } else {
        this.currentItem = slide1_w;
      }
    }
  },
};
