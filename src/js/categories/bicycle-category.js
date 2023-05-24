import { createMarkup } from './create-markup';
import { bikes } from '../storages/bikes-storage';
import Swiper from 'swiper';
// import 'swiper/css';
import 'swiper/swiper.min.css';

const list = document.querySelector('.js-bicycle-list');

createMarkup(bikes, list);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // width: 1280,
  spaceBetween: 30,
  // height: 280,
});

// list.addEventListener('click', onClick);
