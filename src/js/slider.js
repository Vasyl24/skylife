import Swiper from 'swiper';
import 'swiper/swiper.min.css';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,
  spaceBetween: 10,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  // },
});
export { swiper };
