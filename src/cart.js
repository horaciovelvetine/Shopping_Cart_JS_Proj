class Cart {
  // Go between class that knows how to decode the data recieved from the API, and give each object its attributes
  static cartBarn = [];
  static belowCartInfoDisplay = document.getElementById("belowCartInfoDisplay");
  static sidebarCartInfoDisplay = document.getElementById("sidebarCartInfoDisplay");

  //* Easily retrieve the js instance of Cart OBj
  static currentCart = () => {
    return Cart.cartBarn["0"];
  };

  constructor({ id, number_of_items, sub_total }) {
    // Begin setting values for a Cart OBj's attributes using the recieved data from the API
    //data.attributes
    this.id = id;
    this.numberOfItems = `${number_of_items}`;
    this.subTotal = `${sub_total}`;
    // Include nested attributes for objects which are passed thru to create the order...
    // Annonymous functionise these attributes to return the class' to effectively maintain updated objects for each
    this.cartItems = () => {
      return CartItem.all;
    };
    this.relatedItems = () => {
      return RelatedItem.all;
    };
    this.sponsoredItems = () => {
      return SponsorItem.all;
    };

    // Adds element attributes to cart
    this.element = document.createElement("li");
    this.element.dataset.id = id;
    this.element.id = `cart-${id}-info`;

    //Updates the static variable for the current cart
    Cart.cartBarn.push(this);

    // Attatches to the Cart Attributes to the DOM in 2 locations
    this.attatchCartInfoToDom();
  }

  //* This sets the cart attributes to 0 and then calculates the new totals.
  updateCartInfo() {
    this.subTotal = 0;
    this.numberOfItems = 0;

    this.cartItems(this).forEach(item => {
      let cart = this
      let price = parseFloat(item.price)
      let quantity = parseInt(item.quantity)
      cart.subTotal += (price * quantity)
      cart.numberOfItems += quantity

    })
    this.subTotal = this.subTotal.toFixed(2)
    this.attatchCartInfoToDom();

    cartApi.sendPatch(this)
  }

  //* Calls both of the below functions to attatch info in multiple locations
  attatchCartInfoToDom() {
    this.attatchCartInfoToDomEndCart();
    this.attatchCartInfoToDomSidebar();
  }
  attatchCartInfoToDomSidebar() {
    // Uses the variable value to set the innerHTML to avoid attempting to place this.element more than once on the DOM. OO JS...
    Cart.sidebarCartInfoDisplay.innerHTML = this.element.innerHTML;
  }
  attatchCartInfoToDomEndCart() {
    Cart.belowCartInfoDisplay.appendChild(this.renderCartInfo());
  }
  renderCartInfo() {
    this.element.innerHTML = `Subtotal (${this.numberOfItems} items): <span class="fw-bolder"> $${this.subTotal}</span>`;
    return this.element;
  }


}
