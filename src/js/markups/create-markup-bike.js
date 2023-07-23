function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name, price }) => `<li  class="swiper-slide">
        <div data-id="${id}" class="bicycle-item js-card js-bike-item js-target bike-section-text">
            <div>
                <img src="${img}" alt="${name}" width="290" height="160" class="img-bike-section js-target" loading="lazy"/>
                <h2 class="bicycle-name js-target">${name}</h2>
            </div> 
            <h3 class="bicycle-price js-target">${price} ₴</h3> 
                 
          </div>
          </li>          
      `
      )
      .join('');
  }

  // else {
  //   markup = `<li>
  //     <img src="https://kurtrees.files.wordpress.com/2013/04/black-and-white-empty-empty-heart-heart-favim-com-501667.jpg" alt="404" width="600">
  //   </li>`;
  // }
  list.innerHTML = markup;
}
export { createMarkup };
