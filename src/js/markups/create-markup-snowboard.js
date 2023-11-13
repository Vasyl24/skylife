function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name, price }) => `<li  class="swiper-slide" >
        <div data-id="${id}" class="snowboard-item snowboard-des js-card js-target">
        <div>
          <div class="card-img-snowboard js-target" style="background-image:url('${img}')"></div>
            <h2 class="snowboard-name js-target">${name}</h2>
            </div>
            <h3 class="snowboard-price js-target">${price} ₴</h3>
          </div>
      </li>`
      )
      .join('');
  } else {
    markup = `<li>
      <img src="https://kurtrees.files.wordpress.com/2013/04/black-and-white-empty-empty-heart-heart-favim-com-501667.jpg" alt="404" width="600">
    </li>`;
  }
  list.innerHTML = markup;
}
export { createMarkup };
