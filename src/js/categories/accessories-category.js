import { createMarkup } from '../markups/create-markup-accessory';
import { accessories } from '../storages/accessories-storage';
import { swiper } from '../slider';

const list = document.querySelector('.js-accessory-list');

createMarkup(accessories, list);

// list.addEventListener('click', onClick);
