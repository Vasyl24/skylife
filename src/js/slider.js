import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper1 = new Swiper('.swiper-1', {
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },

  width: 1240,
  speed: 600,
});

const swiper2 = new Swiper('.swiper-2', {
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },

  width: 1240,
  speed: 600,
});

const swiper3 = new Swiper('.swiper-3', {
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next-3',
    prevEl: '.swiper-button-prev-3',
  },

  width: 1240,
  speed: 600,
});

export { swiper1 };
export { swiper2 };
export { swiper3 };
// export { swiper };

// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   slidesPerView: 4,
//   loop: true,
//   spaceBetween: 20,

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   width: 1240,
//   speed: 600,
// });