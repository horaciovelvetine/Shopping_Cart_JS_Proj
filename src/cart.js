class Cart {
  // Go between class that knows how to decode the data recieved from the API, and give each object its attributes
  static current = [];
  static belowCartInfoDisplay = document.getElementById('belowCartInfoDisplay')
  static sidebarCartInfoDisplay = document.getElementById('sidebarCartInfoDisplay')
  
  constructor(data){
    
    // Begin setting values for a Cart OBj's attributes using the recieved data from the API
    this.id = data.id
    this.numberOfItems = data.attributes.number_of_items
    this.subTotal = data.attributes.sub_total

    // Include nested attributes for objects which are passed thru to create the order...
    this.items = data.attributes.items
    this.styles = data.attributes.styles
    this.cartItems = data.attributes.cart_items
    this.relItems = data.attributes.related_items
    this.sponItems = data.attributes.sponsored_items


    // Adds element attributes to cart
    this.element = document.createElement('span')
    this.element.dataset.id = this.id
    this.element.id = `cart-${this.id}-info`

    //Updates the static variable for the current cart
    Cart.current.push(this)
    this.attatchCartToDom()
  }

  attatchCartToDom() {
    debugger
    
    // Cart.belowCartInfoDisplay.appendChild(this.renderCartInfo())
    // Cart.sidebarCartInfoDisplay.appendChild(this.renderCartInfo())
  }

  renderCartInfo() {
    this.element.innerHTML = 
    `
    Subtotal (${this.numberOfItems} items): <span class="fw-bolder"> $${this.subTotal}</span>
    `
  }
  
}