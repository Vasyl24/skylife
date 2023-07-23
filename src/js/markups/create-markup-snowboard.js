function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name, price }) => `<li  class="swiper-slide" >
        <div data-id="${id}" class="snowboard-item snowboard-des js-card js-snowboard-item">
        <div>
          <div class="card-img-snowboard" style="background-image:url('${img}')"></div>
            <h2 class="snowboard-name">${name}</h2>
            </div>
            <h3 class="snowboard-price">${price} ₴</h3>
          </div>
      </li>`
      )
      .join('');
  }
  list.innerHTML = markup;
}
export { createMarkup };
