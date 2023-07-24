function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({
          id,
          img,
          name,
          price,
        }) => `<li data-id="${id}" class="snowboard-item snowboard-des js-target js-card js-bike-item-winter">
        <div>
            <div class="card-img-snowboard js-target" style="background-image:url('${img}')"></div>
            <h2 class="snowboard-name js-target">${name}</h2>
        </div>

        <h3 class="snowboard-price js-target">${price} ₴</h3>
      </li>`
      )
      .join('');
  }
  list.innerHTML = markup;
}
export { createMarkup };
