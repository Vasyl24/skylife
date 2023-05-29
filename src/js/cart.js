import icon from '../images/icon.svg';
import image from '../images/empty-cart.png';

// if (window.location.pathname === '/shopping-cart.html') {
//   refs.headerHomeBtn.classList.remove('current');
//   refs.headerShoppingListBtn.classList.add('current');
// }

const slPage = document.querySelector('.js-sl');
const emptyCart = `<div class="empty-cart">
    <p class="sl-message">Ця сторінка порожня, додайте якийсь товар в кошик, щоб замовити.</p>
    <img src="${image}" alt="products" width="300"/>
  </div>`;

// Getting data from local Storage
let slProductsData = JSON.parse(localStorage.getItem('products')) ?? [];

slPage.innerHTML = emptyCart;

function renderSlPage() {
  //   console.log(!slProductsData);
  //   console.log(!slProductsData.length);
  if (!slProductsData.length) {
    slPage.innerHTML = emptyCart;
  } else {
    slPage.innerHTML = createCardMarkup(slProductsData);
    const removeBtn = slPage.querySelectorAll('.js-remove-product');
    removeBtn.forEach(btn =>
      btn.addEventListener('click', removeProductFromCart)
    );
  }
  //   if (slProductsData) {
  //     slPage.innerHTML = createCardMarkup(slProductsData);
  //     const removeBtn = slPage.querySelectorAll('.js-remove-product');
  //     removeBtn.forEach(btn =>
  //       btn.addEventListener('click', removeProductFromCart)
  //     );
  //   } else {
  //     slPage.innerHTML = emptyCart;
  //   }
}
renderSlPage();

//  Removing a product from shopping list
function removeProductFromCart(event) {
  const slCard = event.target.closest('.sl-card');

  slCard.classList.add('removing');
  slCard.addEventListener('transitionend', () => {
    //   slCard.addEventListener('click', () => {
    const slProductId = slCard.dataset.id;
    slProductsData.some(localProduct => {
      if (localProduct.id === Number(slProductId)) {
        slProductsData.splice(slProductsData.indexOf(localProduct), 1);
        localStorage.setItem('products', JSON.stringify(slProductsData));
      }
    });
    if (!slProductsData.length) {
      slPage.innerHTML = emptyCart;
    } else {
      renderSlPage();
    }
  });
}
// Creating markup function

function createCardMarkup(productsData) {
  return productsData
    .map(({ id, img, name, price, description }) => {
      // const amazonUrl = buy_links[0].url;
      // const iBooksUrl = buy_links[1].url;
      // const productshopUrl = buy_links[4].url;

      return `<li class="sl-card" data-id=${id}>
      <img src="${img}" alt="${name}" width="290" height="170" class="sl-product-img">
      <div class="sl-product-info">
          <h3 class="sl-product-title">${name}</h3>
          <h2 class="sl-product-cat">${price}</h2>
          <p class="sl-product-descr">${description}</p>
          <div class="sl-aut-shops">
            <p class="sl-product-author">${name}</p>
            <ul class="sl-eshops">
              <li><a target="_blank" href="#">
                      <svg class="sl-amazon" width="32px" height="11px">
                      <use href="#"></use></svg></a></li>
              <li><a target="_blank" href="#"><svg class="sl-ibooks" width="16px" height="16px">
                      <use href="#"></use></svg></a></li>
              <li><a target="_blank" href="#"><svg class="sl-bookshop" width="16px" height="16px">
                      <use href="#"></use></svg></a></li>
            </ul>
          </div>
      </div>
      <button type="button" class="trash-btn js-remove-product">
      <svg width="16px" height="16px">
      <use href="${icon}#icon-trash"></use></svg>
      </button>
      
    </li>`;
    })
    .join('');
}
