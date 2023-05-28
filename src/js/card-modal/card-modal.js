import { createMarkup } from './modal-markup';
import { bikes } from '../../../bike-storage.json';

const { men } = bikes;

const modal = document.querySelector('.js-bicycle-list');
modal.addEventListener('click', onClick);

function onClick(evt) {
  // console.log(evt.target.parentNode);
  const modalCard = evt.target.parentNode;

  if (modalCard.classList.contains('js-bike-item')) {
    const { id } = evt.target.closest('.js-bike-item').dataset;
    const product = findProduct(Number(id));
    createMarkup(product);
  }

  function findProduct(productId) {
    return men.find(({ id }) => id === productId);
  }
}
