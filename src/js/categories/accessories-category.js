import { createMarkup } from '../markups/create-markup-accessory';
import { accessories } from '../../../accessory-storage.json';
import { swiper } from '../slider';
import '../card-modal/card-modal-accessory';

const { summer } = accessories;
const list = document.querySelector('.js-accessory-list');

createMarkup(summer, list);

// list.addEventListener('click', onClick);
