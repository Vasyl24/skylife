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
        }) => `<li data-id="${id}" class="bike-item js-card">
          <img src="${img}" alt="${name}" width="296" />
          <div class="bike-des">
            <h2 class="bike-name">${name}</h2>
            <h3 class="bike-price">${price} грн.</h3>
          </div>
      </li>`
      )
      .join('');
  }
  list.innerHTML = markup;
}
export { createMarkup };
