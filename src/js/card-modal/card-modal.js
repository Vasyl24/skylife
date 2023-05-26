import { createMarkup } from './modal-markup';
// import { bikes } from '../storages/bikes-storage';
import { bikes } from '../../../storage.json';

const modal = document.querySelector('.js-bicycle-list');
modal.addEventListener('click', onClick);

function onClick(evt) {
  // console.log(evt.target.parentNode);
  const modalCard = evt.target.parentNode;
  const modalCardId = modalCard.dataset.id;
  console.log(modalCardId);

  if (modalCard.classList.contains('js-bike-item')) {
    const { id } = evt.target.closest('.js-bike-item').dataset;
    const product = findProduct(Number(id));
    createMarkup(product);
    //   getcardId(modalCardId)
    //     .then(obj => {
  }

  function findProduct(productId) {
    //   const productId = Number(elem.closest('.js-card').dataset.id);
    return bikes.find(({ id }) => id === productId);
  }

  // const addcard = document.querySelector('#js-card-modal-btn');
  //   const inStorage = basketArr.some(({ _id }) => _id === obj._id);
  //   const authText = document.querySelector('.js-card-modal-authorized');
  // const textBuy = document.querySelector('.card-modal-buy');
  // textBuy.style.display = 'none';

  //   const user = auth.currentUser;
  //   onAuthStateChanged(auth, user => {
  //     if (!user) {
  //       // const uid = user.uid;
  //       textBuy.style.display = 'none';
  //       addcard.style.display = 'none';
  //       authText.style.display = 'block';
  //     }
  //   });

  // if (inStorage) {
  //   addcard.addEventListener('click', addToCart);

  //   addcard.classList.remove('js-add');
  //   addcard.classList.add('js-remove');
  //   // textBuy.style.display = 'block';
  // } else {
  //   addcard.addEventListener('click', addToCart);

  //   addcard.classList.add('js-add');
  //   addcard.classList.remove('js-remove');
  //   // textBuy.style.display = 'none';
  // }

  // function addToCart(evt) {
  //   const btnAdd = evt.target.classList.contains('js-add');
  //   // const inStorage = basketArr.some(({ _id }) => _id === obj._id);

  //   if (btnAdd) {
  //     evt.target.classList.remove('js-add');
  //     evt.target.classList.add('js-remove');
  //     // textBuy.style.display = 'block';

  //     //   if (inStorage) {
  //     //     return;
  //     //   }
  //     //   basketArr.push(obj);
  //     //   localStorage.setItem('cards', JSON.stringify(basketArr));
  //   } else {
  //     evt.target.classList.remove('js-remove');
  //     evt.target.classList.add('js-add');

  // textBuy.style.display = 'none';

  //   basketArr.map(localcard => {
  // if (localcard._id === obj._id) {
  //   basketArr.splice(basketArr.indexOf(localcard), 1);
  //   localStorage.setItem('cards', JSON.stringify(basketArr));
  // }
  //   });
  // }
  // }
  // })
  // .catch(err => console.log(err));
}
