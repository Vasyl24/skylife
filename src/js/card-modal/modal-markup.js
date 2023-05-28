import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import icon from '../../images/icon.svg';

function createMarkup(product) {
  const instance = basicLightbox.create(
    `<div class="card-modal">
    <img src="${product.img}" alt="${product.name}" class="card-modal-img"/>
    <div class='card-modal-details'>
        <h2 class="card-modal-title">${product.name}</h2>
        <h3 class="card-modal-author">${product.price}</h3>
        <ul class='icon-card-modal-list'>
        <li>
            <a href="#" target="_blank">
            <svg class='icon-card-modal'><use href="${icon}#icon-telegram"></use></svg>
            </a>
        </li>
        <li>
            <a href="#" target="_blank">
            <svg class='icon-card-modal'><use href="${icon}#icon-instagram"></use></svg>
            </a>
        </li>
        <li>
            <a href="#" target="_blank">
            <svg class='icon-card-modal'><use href="${icon}#icon-youtube"></use></svg>
            </a>
        </li>
        </ul>
    </div>
    <button class='card-modal-btn js-add' id='js-card-modal-btn'></button>
    <p class='card-modal-buy'>Сongratulations! You have added the card to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    <button class='card-modal-close' id='js-card-modal-btn-close'>
    <svg class='icon-card-modal-close'><use href='${icon}#icon-closeCross'></use></svg>
    </button>
    </div>`,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener('keydown', this.handler);
      },

      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();

  document.addEventListener('click', evt => {
    const btnClose = evt.target.closest('#js-card-modal-btn-close');

    if (btnClose) {
      instance.close();
    }
  });
}

function closeModal(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}

export { createMarkup };
