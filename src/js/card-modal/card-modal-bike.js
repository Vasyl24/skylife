import { createMarkup } from './modal-markup';
import { bikes } from '../../../bike-storage.json';

const { men } = bikes;
const basketArr = JSON.parse(localStorage.getItem('products')) ?? [];

const modal = document.querySelector('.js-bicycle-list');
modal.addEventListener('click', onClick);

function onClick(evt) {
  const modalCard = evt.target;
  // const cardId = evt.target.closest('.js-bike-item').dataset.id;
  const cardId =
    evt.target.dataset.id ?? evt.target.closest('.js-card').dataset.id;
  const product = findProduct(Number(cardId));

  if (modalCard.classList.contains('js-target')) {
    // const cardId =
    //   evt.target.dataset.id ?? evt.target.closest('.js-card').dataset.id;
    // const product = findProduct(Number(cardId));

    createMarkup(product);
  }

  function findProduct(productId) {
    return men.find(({ id }) => id === productId);
  }

  const addProduct = document.querySelector('#js-card-modal-btn');
  const textBuy = document.querySelector('.card-modal-buy');
  const inStorage = basketArr.some(({ id }) => id === Number(cardId));

  textBuy.style.display = 'none';

  if (inStorage) {
    addProduct.addEventListener('click', addToCart);

    addProduct.classList.remove('js-add');
    addProduct.classList.add('js-remove');
    textBuy.style.display = 'block';
  } else {
    addProduct.addEventListener('click', addToCart);

    addProduct.classList.add('js-add');
    addProduct.classList.remove('js-remove');
    textBuy.style.display = 'none';
  }

  function addToCart(evt) {
    const btnAdd = evt.target.classList.contains('js-add');
    const inStorage = basketArr.some(({ id }) => id === Number(cardId));

    if (btnAdd) {
      evt.target.classList.remove('js-add');
      evt.target.classList.add('js-remove');
      textBuy.style.display = 'block';

      if (inStorage) {
        return;
      }
      basketArr.push(product);
      localStorage.setItem('products', JSON.stringify(basketArr));
    } else {
      evt.target.classList.remove('js-remove');
      evt.target.classList.add('js-add');

      textBuy.style.display = 'none';

      basketArr.map(localProduct => {
        if (localProduct.id === Number(cardId)) {
          basketArr.splice(basketArr.indexOf(localProduct), 1);
          localStorage.setItem('products', JSON.stringify(basketArr));
        }
      });
    }
  }
}
