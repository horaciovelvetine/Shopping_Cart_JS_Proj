class CartItem {

//has id, name, rating, number_of_reviews price, quantity
// CartItem = One of the item/style pairs the user has in thier cart
  static all = []
  static cartItemsList = document.getElementById('cartItemsList')

  constructor({id, name, rating, number_of_reviews, price, quantity, color, manufacturer}){
    // Sets the cartItems attributes 
    this.id = id
    this.name = `${name}`
    this.rating = `${rating}`
    this.number_of_reviews = `${number_of_reviews}`
    this.price = `${price}`
    this.quantity = `${quantity}`
    this.color = `${color}`
    this.manufacturer = `${manufacturer}`

    this.showItemPath = `${showItemPath}/${this.id}`

    //Set template HTML for ELEMENT
    this.element = document.createElement('li')
    this.element.dataset.id = id
    this.element.id = 'cartItem-${this.id}'

    // Set up cart Item to be clicked on & save to class!
    this.element.addEventListener('click', this.handleCartItemClick)
    CartItem.all.push(this)
  }
    // Calls the render to change the inner text of whatever cartItem it was called on, then adds that to the end of the parent container(list) element on the DOM. 
  attachToCart(){
    CartItem.cartItemsList.appendChild(this.renderCartItem())
  }

    // Sets the actual innerHTML of THIS cartItem
  renderCartItem(){
    

    this.element.innerHTML =
      `
        <div class="d-flex flex-row p-2 border my-3">
          <div class="p-2">
            <img class="lazy-loaded img-fluid" src="https://via.placeholder.com/200x200" data-lazy-type="image" data-src="https://via.placeholder.com/350x150" alt="placeholder">
          </div>

          <div class="flex-column flex-fill ps-1">
            <div class="row mt-2">
              <span class="fs-5">${this.name}</span>
            </div>
            <div class="row">
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
                </svg><small>(${this.number_of_reviews})</small ></span >    
            </div >
            <div class="row">
              <span class="fw-bolder">$${this.price}</span>
            </div>
            <div class="row">
              <span class="text-success fs-6"><small>In Stock</small></span>
            </div>
            <div class="row">
              <small><span class="text-muted">Eligible for FREE Shipping </span>&<span> <a href="#">FREE Returns</a></span></small>
            </div>
            <div class="row">
              <span class="lh-1 fs-6"><small><input class="form-check-input" type="checkbox" value=""> This is a gift</small></span>
            </div>
            <div class="row">
              <small><span class="fw-bolder">Color:</span> ${this.color}</small>
            </div>
            <div class="row">
              <small><span class="fw-bolder">Manufacturer:</span> ${this.manufacturer}</small>
            </div>
            
            <div class="row pt-1 ps-2">
            
              <ul class="list-group list-group-horizontal">
              
                <li class="d-inline-flex mx-1">
                  <div class="dropdown">
                    <button class="btn btn-light border dropdown-toggle shadow" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Qty
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item">Action</a></li>
                      <li><a class="dropdown-item">Another action</a></li>
                      <li><a class="dropdown-item">Something else here</a></li>
                    </ul>
                  </div>
                </li>
                
                <li> <span class="fs-5 text-muted mx-1"> | </span></li>
              
                <li class="d-inline-flex mx-1">
                  <small><a href="#" class="text-decoration-none">Delete</a></small>
                </li>
                
                <li> <span class="fs-5 text-muted mx-1"> | </span></li>
                
                <li class="d-inline-flex mx-1">
                  <small><a href="#" class="text-decoration-none">Save for Later</a></small>
                </li>
              </ul>
            </div>
          </div >
        </div >
      `
      
      return this.element
  }


  // Pseudo structure of the cartItemHandler
  // handleCartItemClick(e) => {
  // if (e.target.innerText === this.name){
  //     // Should go to item show
  //   } else if (e.target.button === quantity){
  //     this.dropdownCreator(e.target)
  //     this.saveUpdatedCartQuantity
  //   } else if (e.target.link === delete){
  //     this.deleteItemFromCart(e)
  //   } else if (e.target.link === save_for_later){
  //     this.addToUserList(e)
  //     this.deleteItemFromCart(e)
  //   } else if (e.target.link === compare) {
  //     this.loadRelatedItemsPopup(e)
  //   }
    
  // }
}



  