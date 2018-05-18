import { swiper, swiperSlide } from 'vue-awesome-swiper';

import slide1 from './assets/WechatIMG278.png'
import slide2 from './assets/WechatIMG283.png'
import slide3 from './assets/WechatIMG287.png'

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
          slide: slide3,
            id: 2,
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
};
