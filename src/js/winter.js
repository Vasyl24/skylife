import { createMarkup } from './markups/create-markup-winter';
import { snowboards } from '../../snowboard-storage.json';

const { all } = snowboards;
const cards = document.querySelector('.js-snowboards-list');

// const pagination = document.querySelector('.pagination');
createMarkup(all, cards);
