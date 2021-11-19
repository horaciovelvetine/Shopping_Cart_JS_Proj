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
    this.element = docuement.createElement('div')

  }
}
