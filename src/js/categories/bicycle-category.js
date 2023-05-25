import { createMarkup } from '../markups/create-markup-bike';
import { bikes } from '../storages/bikes-storage';
import { swiper } from '../slider';

const list = document.querySelector('.js-bicycle-list');

createMarkup(bikes, list);

// list.addEventListener('click', onClick);
