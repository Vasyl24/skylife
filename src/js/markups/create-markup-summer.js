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
        }) => `<li data-id="${id}" class="bike-item js-card js-bike-item-summer bike-des js-target">
            <div>
                <img src="${img}" alt="${name}" width="296" height="175" class="js-target"/>
                <h2 class="bike-name js-target">${name}</h2>
            </div>
            <h3 class="bike-price js-target">${price} ₴</h3>
      </li>`
      )
      .join('');
  }
  list.innerHTML = markup;
}
export { createMarkup };
