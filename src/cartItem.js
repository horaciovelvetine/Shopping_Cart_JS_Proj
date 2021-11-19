class cartItem {

//has id, name, rating, number_of_reviews price, quantity
// CartItem = One of the item/style pairs the user has in thier cart
  static all = []
  static cartItemsList = document.getElementById('cartItemsList')

  constructor({id, name, rating, number_of_reviews, price, quantity}){
    // Sets the cartItems attributes 
    this.id = id
    this.name = name
    this.rating = rating
    this.number_of_reviews = number_of_reviews
    this.price = price
    this.quantity = quantity

    //Set template HTML for ELEMENT
    this.element = docuement.createElement('li')
    this.element.dataset.id = id
    this.element.id = 'cartItem-${this.id}'

    // Set up cart Item to be clicked on & save to class!
    // this.element.addEventListener('click', this.handleCartItemClick)
    cartItem.all.push(this)
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




//HTML Template for cartItem
  /*
  `
  < div class="col-xl-3 border px-2" >
    <div class="row my-2">
      <img class="lazy-loaded img-fluid" src="https://via.placeholder.com/200x200" data-lazy-type="image" data-src="https://via.placeholder.com/350x150" alt="placeholder">
    </div>
    <div class="row">
      <ul class="list-unstyled lh-sm">

        <li>
          styles's name
        <li>
        <li>
          styles's price
        <li>
        <li>
          stock notice
        <li>
        <li>
          Free shipping or not
        <li>
        <li>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Qty [q]
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">0</a></li>
              <li><a class="dropdown-item" href="#">1</a></li>
              <li><a class="dropdown-item" href="#">2</a></li>
            </ul>
          </div>
        <li>
        <li>
          Delete link
        </li>
        <li>
          Save for later link
        <li>
      </ul>
    </div>

  </div>
  `
  */

  