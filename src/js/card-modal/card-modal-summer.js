import { createMarkup } from './modal-markup';
import { bikes } from '../../../bike-storage.json';

const { men, women, children } = bikes;
const arr = [];

const modalSummer = document.querySelector('.js-bikes-list');
modalSummer.addEventListener('click', onClick);

men.map(bike => arr.push(bike));
women.map(bike => arr.push(bike));
children.map(bike => arr.push(bike));

function onClick(evt) {
  console.log(evt.target.parentNode);
  const modalCard = evt.target.parentNode;

  if (modalCard.classList.contains('js-bike-item-summer')) {
    const { id } = evt.target.closest('.js-bike-item-summer').dataset;
    const product = findProduct(Number(id));
    createMarkup(product);
  }

  function findProduct(productId) {
    return arr.find(({ id }) => id === productId);
  }
}
