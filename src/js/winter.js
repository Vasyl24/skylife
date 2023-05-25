import { createMarkup } from './markups/create-markup-winter';
import { snowboards } from './storages/snowboards-storage';

const cards = document.querySelector('.js-snowboards-list');
// const card = document.querySelector('.js-bikes-item');
// const pagination = document.querySelector('.pagination');
createMarkup(snowboards, cards);
