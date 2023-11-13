function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name, price }) => `<li  class="swiper-slide" >
        <div data-id="${id}" class="accessory-item accessory-des js-card js-accessory-item js-target">
          
            <div>
                <div class="card-img-accessory js-target" style="background-image:url('${img}')" ></div>
                <h2 class="accessory-name js-target">${name}</h2>
            </div>

            <h3 class="accessory-price js-target">${price} ₴</h3>

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

// `<li data-id="${id}" class="js-card">
//           <img src="${img}" alt="${name}" width="300">
//           <h2>${name}</h2>
//           <p><a class="js-info" href="#">More information</a></p>
//         </li>`
