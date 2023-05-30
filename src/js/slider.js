import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
export { swiper };
