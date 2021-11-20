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
    this.element.id = `cartItem-${id}`

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
        `<div class="d-flex flex-row px-2 border-bottom">
          <div class="p-3">
            <span class="itemImage"><img class="lazy-loaded img-fluid" src="https://via.placeholder.com/225x225" data-lazy-type="image" data-src="https://via.placeholder.com/225x225" alt="placeholder"></span>
          </div>

          <div class="flex-column flex-fill ps-1">
            <div class="row mt-3 fs-5 lh-1">
              <span class="cartItemTitle" id="cartItem-${this.id}Title">${this.name}</span>
            </div>
            <div class="row">
              <span  class="cartItemStars" id="cartItem-${this.id}-Stars"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg><small><span id="cartItem-${this.id}-Reviews" class="align-text-top"> (${this.number_of_reviews})</span></small ></span>
            </div >
            <div class="row fw-bolder fs-6">
              <span class="cartItemPrice" id="cartItem-${this.id}-Price">$${this.price}</span>
            </div>
            <div class="row">
              <span class="text-success fs-6"><small>In Stock</small></span>
            </div>
            <div class="row">
              <small><span class="text-muted cartItemEligible">Eligible for FREE Shipping </span>&<span> <a href="#" id="cartItem-${this.id}-ReturnEligibleLink" target="_blank">FREE Returns</a></span></small>
            </div>
            <div class="row">
              <span class="cartItemGiftCheck"><small><input class="form-check-input lh-1 fs-6" type="checkbox" value="" id="cartItem-${this.id}-GiftCheck"> This is a gift</small></span>
            </div>
            <div class="row">
              <span class="cartItemColor"><small><span class="fw-bolder " id="cartItem-${this.id}-Color">Color:</span> ${this.color}</small></span>
            </div>
            <div class="row" id="cartItem-${this.id}-Manufacturer">
              <span class="cartItemManufacturer"><small><span class="fw-bolder" id="cartItem-${this.id}">Manufacturer:</span> ${this.manufacturer}</small></span>
            </div>
            
            <div class="row pt-1 ps-2 pe-2">
            
              <ul class="list-group list-group-horizontal">
              
                <li class="d-inline-flex mx-1">
                  <div class="dropdown">
                    <button class="btn btn-light border dropdown-toggle shadow" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Qty: ${this.quantity}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><span class="changeQuantityToZero"><a class="dropdown-item">0</a></span></li>
                      <li><span class="changeQuantityToOne"><a class="dropdown-item">1</a></span></li>
                      <li><span class="changeQuantityToTwo"><a class="dropdown-item">2</a></span></li>
                      <li><span class="changeQuantityToThree"><a class="dropdown-item">3</a></span></li>
                      <li><span class="changeQuantityToFour"><a class="dropdown-item">4</a></span></li>
                      <li><span class="changeQuantityToFive"><a class="dropdown-item">5</a></span></li>
                      <li><span class="changeQuantityToSix"><a class="dropdown-item">6</a></span></li>
                      <li><span class="changeQuantityToSeven"><a class="dropdown-item">7</a></span></li>
                      <li><span class="changeQuantityToEight"><a class="dropdown-item">8</a></span></li>
                      <li><span class="changeQuantityNine"><a class="dropdown-item">9</a></span></li>
                    </ul>
                  </div>
                </li>
                
                <li> <span class="fs-5 text-muted mx-1"> | </span></li>
              
                <li class="d-inline-flex mx-1">
                  <span class="deleteItemFromCartLink"><small><a href="#" class="text-decoration-none">Delete</a></small></span>
                </li>
                
                <li> <span class="fs-5 text-muted mx-1"> | </span></li>
                
                <li class="d-inline-flex mx-1">
                  <span class="deleteItemFromCartLinkAndAddToList"><small><a href="#" class="text-decoration-none">Save for Later</a></small></span>
                </li>
              </ul>
            </div>
          </div >
        </div >`
      
      return this.element
  }


  handleCartItemClick = (e) => {
    e.preventDefault()
    debugger
    // if (e.target.class == '')
  
  
  // Pseudo structure of the cartItemHandler
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
    
  }
}



  