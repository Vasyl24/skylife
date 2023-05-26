import { createMarkup } from '../markups/create-markup-bike';
// import { bikes } from '../storages/bikes-storage';
import { bikes } from '../../../storage.json';
import { swiper } from '../slider';
import '../card-modal/card-modal';

const list = document.querySelector('.js-bicycle-list');

createMarkup(bikes, list);

// list.addEventListener('click', onClick);
