class SponsorItem {

  // id, style, rating, number_of_reviews, price
  static all = []
  static sponsoredItemsList = document.getElementById('sponsoredItemsList')

  constructor({id, style, rating, number_of_reviews, price}) {

    this.id = `${id}`
    this.style = `${style}`
    this.rating = `${rating}`
    this.number_of_reviews = `${number_of_reviews}`

    //checks for min/max price range and sets attrb accordingly
    if (price.length == 2) {
      this.price = `$${price[0]}-${price[1]}`
    } else {
      this.price = `${price}`
    }


    // create html elements for the item
    this.element = document.createElement('li')
    this.element.dataset.id = id
    this.element.id = `sponsoredItemNum-${id}`


    //Adds this spon item to the list of all the spon items
    SponsorItem.all.push(this);
  }
  // Is going to need to check value of inner text, if is a added render, case to that renderer and don't add listener
  attatchToDom(){
    SponsorItem.sponsoredItemsList.appendChild(this.renderSponsored())
  }

  renderSponsored() {

    this.element.innerHTML = 
    `
      <li>
        <div class="d-flex flex-row">
          <div class="flex-column m-1">
            <img class="shadow m-2 img-fluid" src="https://via.placeholder.com/115x115" data-lazy-type="image" data-src="https://via.placeholder.com/100x100">
          </div>

          <div class="flex-column lh-1 m-1">
            <span>${this.style}</span>
            <span><div class="row">
              <span class=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg><small> (${this.number_of_reviews})</small></span>
            </div></span>
            <span>${this.price}</span>
            
            <form><button type="button" class="btn btn-light btn-sm border shadow-sm w-100 py-1 my-2" id="addSponItemToCartBut" item-id="${this.id}">Add to cart</button></form>

          </div>
        </div>
      </li>
    `
    return this.element
  }

  // renderAdded() {
  //   this.element.innerHTML = 
  //     `
  //     <li>
  //       <div class="d-flex bg-light rounded align-items-center">
  //         <div class="d-flex flex-fill justify-content-center w-100 ">
  //           <p class="fs5 py-3 mt-3">Item added to cart Successfully!</p>
  //         </div>
  //       </div>
  //     </li>
  //   `
  //   return this.element
  // }


}