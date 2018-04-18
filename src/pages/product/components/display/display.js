import { swiper, swiperSlide } from 'vue-awesome-swiper';

import slide1 from './assets/prod-test1.jpg'
import slide2 from './assets/prod-test2.jpg'

export default {
  name: 'display',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      currentItem: slide1,
      items: [
        {
          slide: slide1,
            id: 0,
        },
        {
          slide: slide2,
            id: 1,
        },
        {
          slide: slide1,
            id: 2,
        },
        {
          slide: slide2,
            id: 3,
        },
        {
          slide: slide1,
            id: 4,
        },
        {
          slide: slide2,
            id: 5,
        },
      ],
      swiperOption: {
        slidesPerView: 3.5,
        loop: true,
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.displaySwiper.swiper;
    },
  },
};
