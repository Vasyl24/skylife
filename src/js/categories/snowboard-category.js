import { createMarkup } from '../markups/create-markup-snowboard';
import { snowboards } from '../storages/snowboards-storage';
import { swiper } from '../slider';

const list = document.querySelector('.js-snowboard-list');

createMarkup(snowboards, list);

// list.addEventListener('click', onClick);
