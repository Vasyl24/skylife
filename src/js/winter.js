import { createMarkup } from './markups/create-markup-winter';
import { snowboards } from '../../snowboard-storage.json';
import './card-modal/card-modal-winter';

const { all } = snowboards;
const cards = document.querySelector('.js-snowboards-list');

// const pagination = document.querySelector('.pagination');
createMarkup(all, cards);
