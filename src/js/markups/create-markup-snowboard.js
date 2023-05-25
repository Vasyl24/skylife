function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name, price }) => `<li  class="swiper-slide" >
        <div data-id="${id}" class="snowboard-item js-card">
                    <div class="card-img-snowboard" style="background-image:url('${img}')"></div>

          <div class="snowboard-des">
            <h2 class="snowboard-name">${name}</h2>
            <h3 class="snowboard-price">${price} грн.</h3>
          </div>

          </div>
      </li>`
      )
      .join('');
  }
  list.innerHTML = markup;
}
export { createMarkup };
