import { createMarkup } from '../markups/create-markup-bike';
import { bikes } from '../../../bike-storage.json';
import { swiper } from '../slider';
import '../card-modal/card-modal-bike';

const { men } = bikes;
const list = document.querySelector('.js-bicycle-list');

createMarkup(men, list);
