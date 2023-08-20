import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper1 = new Swiper('.swiper-1', {
  direction: 'horizontal',
  // slidesPerView: 4,
  loop: true,
  // spaceBetween: 20,
  slidesPerView: 2,
  spaceBetween: 20,
  width: 610,

  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    //   width: 295,
    // },
    // // when window width is >= 480px
    // 480: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    //   width: 610,
    // },
    // when window width is >= 640px
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
      width: 925,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      width: 1240,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
  speed: 600,
});

const swiper2 = new Swiper('.swiper-2', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  width: 610,

  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    //   width: 295,
    // },
    // // when window width is >= 480px
    // 480: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    //   width: 610,
    // },
    // when window width is >= 640px
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
      width: 925,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      width: 1240,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },

  speed: 600,
});

const swiper3 = new Swiper('.swiper-3', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  width: 610,

  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    //   width: 295,
    // },
    // // when window width is >= 480px
    // 480: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    //   width: 610,
    // },
    // when window width is >= 640px
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
      width: 925,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      width: 1240,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next-3',
    prevEl: '.swiper-button-prev-3',
  },

  speed: 600,
});

export { swiper1 };
export { swiper2 };
export { swiper3 };
