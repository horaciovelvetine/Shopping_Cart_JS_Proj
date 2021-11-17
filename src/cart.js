class Cart {
  // Go between class that knows how to decode the data recieved from the API, and give each object its attributes
  static current = [];
  
  
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
    
    // Instantiate new copies of ea. cartItem & relItem for display
    data.cart_items.forEach(i => {
      const cartItem = new cartItem(i)
      debugger
    })
    
    // data.related_items.forEach(i => {
    //   const relItem = new relatedItem(i)
    //   debugger
    // })

    //Updates the static variable for the current cart
    Cart.current.push(this)

  }
  
}