import { createMarkup } from './modal-markup';
import { snowboards } from '../../../snowboard-storage.json';

const { preview } = snowboards;
const basketArr = JSON.parse(localStorage.getItem('products')) ?? [];

const modal = document.querySelector('.js-snowboard-list');
modal.addEventListener('click', onClick);

function onClick(evt) {
  // console.log(evt.target.parentNode);
  const modalCard = evt.target.parentNode;
  const cardId = evt.target.closest('.js-snowboard-item').dataset.id;
  const product = findProduct(Number(cardId));

  if (modalCard.classList.contains('js-snowboard-item')) {
    createMarkup(product);
  }

  function findProduct(productId) {
    return preview.find(({ id }) => id === productId);
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
