import { createMarkup } from './markups/create-markup-summer';
import { bikes } from './storages/bikes-storage';

const cards = document.querySelector('.js-bikes-list');
// const card = document.querySelector('.js-bikes-item');
// const pagination = document.querySelector('.pagination');
createMarkup(bikes, cards);

// let perPage;
// if (window.innerWidth >= 768) {
//   perPage = 3;
// } else {
//   perPage = 4;
// }
// refs.shoppingListWrapper.innerHTML = '';

// if (!card.length) {
//   refs.paginationContainer.classList.add('visually-hidden');
//   refs.imageForEmpty.classList.remove('visually-hidden');
//   refs.textForEmpty.classList.remove('visually-hidden');
//   refs.contentWrap.style.height = 'auto';
// } else
// if (card.length <= 12) {
//   pagination.classList.add('visually-hidden');

//   refs.shoppingListWrapper.insertAdjacentHTML(
//     'beforeend',
//     shoppingListMarkup(
//       getItemsFromLocaleStorage.slice(
//         perPage * pageNumber - perPage,
//         perPage * pageNumber
//       )
//     )
//   );
// } else {
//   refs.shoppingListWrapper.insertAdjacentHTML(
//     'beforeend',
//     shoppingListMarkup(
//       getItemsFromLocaleStorage.slice(
//         perPage * pageNumber - perPage,
//         perPage * pageNumber
//       )
//     )
//   );
// }
// console.log(bikes.child);
