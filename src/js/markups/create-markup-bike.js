function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name, price }) => `<li  class="swiper-slide" >
        <div data-id="${id}" class="bicycle-item js-card js-bike-item">
        
        <img src="${img}" alt="${name}" width="290" class="img-bike-section" />
          <div class="bike-section-text">
            <h2 class="bicycle-name">${name}</h2>
            <h3 class="bicycle-price">${price} грн.</h3>        
          </div>
          </div>
          </li>          
      `
      )
      .join('');
  }

  // function createMarkup(arr, list) {
  // let markup;
  // if (arr.length) {
  //   markup = arr
  //     .map(
  //       ({ id, img, name, price }) => `<li  class="swiper-slide " >
  //       <div data-id="${id}" class="bicycle-item js-card js-bike-item">
  //         <img src="${img}" alt="${name}" width="290" />
  //         <div class="bicycle-des">
  //           <h2 class="bicycle-name">${name}</h2>
  //           <h3 class="bicycle-price">${price} грн.</h3>
  //         </div>

  //         </div>
  //     </li>`
  //     )
  //     .join('');
  // }
  //   else {
  //     markup = `<li>
  //     <img src="https://kurtrees.files.wordpress.com/2013/04/black-and-white-empty-empty-heart-heart-favim-com-501667.jpg" alt="404" width="600">
  //   </li>`;
  //   }
  list.innerHTML = markup;
}
export { createMarkup };

// `<li data-id="${id}" class="js-card">
//           <img src="${img}" alt="${name}" width="300">
//           <h2>${name}</h2>
//           <p><a class="js-info" href="#">More information</a></p>
//         </li>`
