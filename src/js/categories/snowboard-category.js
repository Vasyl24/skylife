import { createMarkup } from '../markups/create-markup-snowboard';
import { snowboards } from '../../../snowboard-storage.json';
import { swiper } from '../slider';

const { preview } = snowboards;
const list = document.querySelector('.js-snowboard-list');

createMarkup(preview, list);

// list.addEventListener('click', onClick);
