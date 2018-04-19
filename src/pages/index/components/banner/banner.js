import { swiper, swiperSlide } from 'vue-awesome-swiper';
import slide1 from './assets/banner.png';
import mobile_slide1 from './assets/banner-mobile.png';

export default {
  name: 'banner',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      items: [
        {
          slide: window.innerWidth > 1024 ? slide1 : mobile_slide1,
          id: 0,
        },
      ],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000,
        },
        speed: 500,
        pagination: {
          el: '.pagination',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
}
