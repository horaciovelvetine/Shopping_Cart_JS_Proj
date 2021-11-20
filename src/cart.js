class Cart {
  // Go between class that knows how to decode the data recieved from the API, and give each object its attributes
  static current = [];
  static belowCartInfoDisplay = document.getElementById('belowCartInfoDisplay')
  static sidebarCartInfoDisplay = document.getElementById('sidebarCartInfoDisplay')
  
  constructor({id, number_of_items, sub_total, items, styles, cart_items, related_items, sponsored_items}){
    
    // Begin setting values for a Cart OBj's attributes using the recieved data from the API
    //data.attributes
    this.id = id
    this.numberOfItems = `${number_of_items}`
    this.subTotal = `${sub_total}`

    // Include nested attributes for objects which are passed thru to create the order...
    this.items = items
    this.styles = styles
    this.cartItems = cart_items
    this.relItems = related_items
    this.sponItems = sponsored_items


    // Adds element attributes to cart
    this.element = document.createElement('li')
    this.element.dataset.id = id
    this.element.id = `cart-${id}-info`

    //Updates the static variable for the current cart
    Cart.current.push(this)
    this.attatchCartToDom()
  }

  attatchCartToDom() {
    
    
    Cart.belowCartInfoDisplay.appendChild(this.renderCartInfo())
    Cart.sidebarCartInfoDisplay.appendChild(this.renderCartInfo())
  }

  renderCartInfo() {
    this.element.innerHTML = 
    `
    Subtotal (${this.numberOfItems} items): <span class="fw-bolder"> $${this.subTotal}</span>
    `
    return this.element
  }
  
}